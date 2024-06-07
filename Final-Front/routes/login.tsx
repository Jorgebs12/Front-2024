import {FreshContext, Handlers, PageProps, RouteConfig } from "$fresh/server.ts"
import jwt from "jsonwebtoken";
import {setCookie } from "$std/http/cookie.ts";
import type { User } from "../types.ts";
import Login from "../components/Login.tsx";

export const config: RouteConfig = {
    skipInheritedLayouts: true,
}
export type Data = {
    message: string
}

export const handler: Handlers = {
    POST: async(req: Request, ctx: FreshContext<unknown, Data>) => {
        const url = new URL(req.url);
        const form = await req.formData();
        const email = form.get("email")?.toString() || "";
        const password = form.get("password")?.toString() || "";
        const JWT_SECRET = Deno.env.get("JWT_SECRET");
        if(!JWT_SECRET){
            throw new Error ("JWT_SECRET no esta configurado");
        }

        const response = await fetch(`${Deno.env.get("API_URL")}/chekuser`,
        {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ email, password }),
        },);
        
        if(response.status == 404 ){
            return ctx.render({message: "Credenciales incorrectas o no existe el usuario"});
        }
        if(response.status == 200 ){
            const data: Omit<User, "password" | "favs"> = await response.json();
            const token = jwt.sing(
                {email, id:data.id, name: data.name,},
                Deno.env.get("JWT_SECRET"), {expiresIn: "24h",},
            )
            const headers = new Headers();
            setCookie(headers, {
                name: "auth", value: token, sameSite: "Lax",
                domain:url.hostname, path: "/", secure: true,
            });
            headers.set("location", "/videos");
            return new Response(null, {status: 303, headers,});
        }else{
            return ctx.render();
        }    
}
}

const Page = (props: PageProps<Data>) => (
    <Login message={props.data?.message}/>
);

export default Page;