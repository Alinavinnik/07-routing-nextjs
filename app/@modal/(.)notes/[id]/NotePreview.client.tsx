"use client";

import Modal from "@/components/Modal/Modal";
import NotePreview from "@/components/NotePreview/NotePreview";
import { useRouter } from "next/navigation";

export default function NotePreviewClient() {
  const router = useRouter();
  const close = router.back;
  return (
    <Modal onClose={close}>
      <NotePreview />
    </Modal>
  );
}
