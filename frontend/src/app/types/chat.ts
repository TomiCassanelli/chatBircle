export type Role = "user" | "ai";

export interface message {
  id: number;
  text: string;
  sender: Role;
}
