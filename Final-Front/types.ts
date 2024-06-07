export type User = {
    id: string,
    name: string,
    email: string,
    password: string,
    favs: string[]
};

export type Video = {
    id: string,
    title: string,
    description: string,
    thumbnail: string,
    fav: boolean,
    youtubeid: string,
    date: string,
};