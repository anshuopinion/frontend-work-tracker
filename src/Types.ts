export enum roleType {
  student = "student",
  teacher = "teacher",
  admin = "admin",
}

export interface IWork {
  work_name: string;
  work_color: string;
  work_complete_date: Date;
}
