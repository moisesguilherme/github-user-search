export type UserResponse = {
    user: User;
}

export type User = {

    id: number;
    avatar_url: string;
    html_url: string;
    name: string;  
    company:string;
    location: string;
    public_repos: number;
    created_at: string;
    followers: number;
    following: number;
}