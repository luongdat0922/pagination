import { IList } from "../core/core.model";

export interface User {
    userName: string;
    fullName: string;
    phone: string;
    email: string;
    department: string;
    lastLogin: string;
    departmentId: number;
    scan: number;
    filter: number;
    roleId: number;
    passExpired: string;
    status: number;
}

export interface IUserList extends IList<User> { }