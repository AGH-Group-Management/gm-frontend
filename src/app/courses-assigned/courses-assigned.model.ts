export interface Student {
    id: number;
    name: string;
    surname: string;
    index: number;
}

export interface Course {
    id: number;
    name: string;
    students: Student[];
}