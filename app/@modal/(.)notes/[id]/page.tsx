import { fetchNoteById } from "@/lib/api";
import NotePreviewClient from "./NotePreview.client";

interface ModalProps {
  params: Promise<{ id: string }>;
}

export default async function ModalPreview({ params }: ModalProps) {
  const response = (await params).id;
  const data = await fetchNoteById(response);
  return <NotePreviewClient data={data} />;
}
