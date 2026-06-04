import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

import { fetchNotes } from "@/lib/api";
import Notes from "./Notes.client";

interface NotesPageProps {
  params: Promise<{ slug: string[] }>;
}

async function NotesPage({ params }: NotesPageProps) {
  const queryClient = new QueryClient();
  const res = (await params).slug;
  const currentTag = res?.[0] ?? "all";
  const tag = currentTag === "all" ? undefined : currentTag;

  await queryClient.prefetchQuery({
    queryKey: ["notes", tag],
    queryFn: () => fetchNotes("", 1, tag),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Notes tag={currentTag} />
    </HydrationBoundary>
  );
}

export default NotesPage;
