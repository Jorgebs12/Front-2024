import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = { 
  GET:() => {
     const headers = new Headers();
    headers.set("location", "/login");
    return new Response(null, { status: 303, headers,});
    },
}
