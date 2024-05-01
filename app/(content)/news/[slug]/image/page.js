import { DUMMY_NEWS } from "@/dummy-news";
import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

export default async function ImagePage({ params }) {
    const newsSlug = params.slug;
    const newsItem = await getNewsItem(newsSlug);

    if (!newsItem) {
        notFound()
    }
    return (
        <div className="fullscreen-image">
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
    )
}