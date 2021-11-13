import { IFile } from "./IFile";

export interface IGitItem{
    id: string;
    description: string;
    comments: number;
    file:string
}