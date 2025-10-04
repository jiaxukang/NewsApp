import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";

export default async function NewsPage() {
    const latest = await getLatestNews();
    return (
        <>
            <h2>News Page</h2>
            <NewsList news={latest} />
        </>
    );
}