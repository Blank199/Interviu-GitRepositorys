export interface IGitItem{
    id: string;
    description: string;
    comments: number;
    onItemClick?:(id: string) => void;
}