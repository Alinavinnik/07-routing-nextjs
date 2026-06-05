"use client";

import Modal from "@/components/Modal/Modal";
import NotePreview from "@/components/NotePreview/NotePreview";
import { Note } from "@/types/note";
import { useRouter } from "next/navigation";

interface NotePreviewProps {
  data: Note;
}

export default function NotePreviewClient({ data }: NotePreviewProps) {
  const router = useRouter();
  const close = router.back;
  return (
    <Modal onClose={close}>
      <NotePreview closeModal={close} data={data} />
    </Modal>
  );
}
