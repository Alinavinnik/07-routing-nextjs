import { fetchCategories } from "@/lib/api";
import css from "./SidebarNotes.module.css";
import Link from "next/link";

async function SidebarNotes() {
  const categories = await fetchCategories();

  return (
    <ul className={css.menuList}>
      {/* список тегів */}
      <li className={css.menuItem}>
        <a href={`/notes/filter/all`} className={css.menuLink}>
          All notes
        </a>
      </li>

      {categories.map((category) => (
        <li key={category.id} className={css.menuItem}>
          <Link href={`/${category.id}`} className={css.menuLink}>
            {category.id}
          </Link>
        </li>
      ))}
    </ul>
  );
}
