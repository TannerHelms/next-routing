import Link from "next/link";

export default function NewsList({ news }) {
    return (
        <ul className="news-list">
            {news.map((newsItem) => (
                <li key={newsItem.slug}>
                    <Link href={`/news/${newsItem.slug}`}>
                        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
                        <p>{newsItem.title}</p>
                    </Link>
                </li>
            ))}
        </ul>
    )
}