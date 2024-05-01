import Link from 'next/link';
import NavLink from './nav-link';

const links = [
    { href: '/news', label: 'News' },
    { href: '/archive', label: 'Archive' },
];

export default function MainHeader() {
    return (
        <header id="main-header">
            <div id="logo">
                <Link href="/">NextNews</Link>
            </div>
            <nav>
                <ul>
                    {links.map(({ href, label }) => (
                        <NavLink key={href} href={href} label={label} />
                    ))}
                </ul>
            </nav>
        </header>
    );
}


