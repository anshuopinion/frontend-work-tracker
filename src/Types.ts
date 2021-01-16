export enum roleType {
  student = "student",
  teacher = "teacher",
  admin = "admin",
}

export interface IWork {
  _id?: string;
  total_days?: number;
  work_name: string;
  work_color: string;
  work_complete_date: Date;
}
