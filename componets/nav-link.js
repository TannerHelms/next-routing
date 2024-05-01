'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, label }) {
    const path = usePathname();
    return (
        <li>
            <Link href={href} className={path.startsWith(href) ? 'active' : undefined}>{label}</Link>
        </li>
    )
};