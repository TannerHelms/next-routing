import NewsList from "@/componets/news-list";
import { getAllNews } from "@/lib/news";
import { Suspense } from "react";
import NewsLoading from "./loading-out";

async function News() {
    const news = await getAllNews();
    return <NewsList news={news} />
}

export default async function NewsPage() {
    return (
        <div>
            <h1>News Page</h1>
            <Suspense fallback={<NewsLoading />}>
                <News />
            </Suspense>
        </div>
    )
}

