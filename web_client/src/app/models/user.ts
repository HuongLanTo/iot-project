import { Role } from "./role";

export class User {
    id: number;
    createAt: Date;
    name: string;
    avatar: string;
    createBy: string;
    role: string[];
    password: string;
    username: string;
    status: boolean
}