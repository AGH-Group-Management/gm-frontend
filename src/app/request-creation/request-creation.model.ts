export interface Request {
    id: number;
    users_id: number;
    description: string;
    created_on: Date;
    modified_on: Date;
    progress: string;
}

export interface VacationRequest {
    id: number;
    request_id: number;
    start_date: Date;
    end_date: Date;
}

export interface ChangeRequest {
    id: number;
    request_id: number;
    subject_from: string;
    subject_to: string;
}

export interface OtherRequest {
    id: number;
    request_id: number;
}