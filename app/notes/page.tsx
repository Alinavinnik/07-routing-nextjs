import { redirect } from "next/navigation";

export default function FilterRoot() {
  redirect("/notes/filter/all");
}
