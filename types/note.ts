export interface Note {
  id: string;
  title: string;
  content: string;
  tag: TypeTag;
  createdAt: string;
  updatedAt: string;
}
export type TypeTag = "Todo" | "Work" | "Personal" | "Meeting" | "Shopping";

export interface NewNote {
  title: string;
  content?: string;
  tag: TypeTag;
}

export interface Category {
  id?: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}
