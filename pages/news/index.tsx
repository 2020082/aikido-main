import ImageCarousel from "@/components/imageCarousel";
import { getArticleProps } from "@/utils/articleApi";
import { Article } from "../../types/types";
import NewsHomepage from "@/pages/news/newsHomepage";

interface NewsProps {
  articles: Article[];
}

export default function News({ articles }: NewsProps) {
  return (
    <div>
      <ImageCarousel
        textContent="News & Events"
        textdesc="Latest news"
        image={"/collage_photos/main.jpg"}
      />

      <div className="mt-[50vh] w-full">
        <NewsHomepage articles={articles} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return await getArticleProps();
}
