import { getStrapiURL } from "@/utils/api";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import { Article } from "../../types/types";
import SeeArticle from "./seeArticle";
import ImageCarousel from "@/components/imageCarousel";

export default function ArticlePage({ article }: { article: Article }) {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500">
      <ImageCarousel
        textContent="News & Events"
        textdesc="Latest news"
        image={"/collage_photos/main.jpg"}
      />

      <div className="mt-[50vh] w-full">
        <SeeArticle article={article} />;
      </div>
    </div>
  );
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const slug = params?.slug;

    const API_URL = getStrapiURL(`/api/articles?slug=${slug}&populate=*`);
    const API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

    const config = {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    };

    const res = await axios.get(API_URL, config);
    const articles = res.data.data;

    const primaryArticle = articles[0];

    return {
      props: {
        article: primaryArticle,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      notFound: true,
    };
  }
};
export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const API_URL = getStrapiURL("/api/articles?populate=*");
    const API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

    const config = {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    };

    const res = await axios.get(API_URL, config);
    const articles = res.data.data;

    const paths = articles.map((article: Article) => ({
      params: { slug: article.attributes.slug },
    }));

    return {
      paths,
      fallback: false, // or 'blocking' if you prefer
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      paths: [],
      fallback: false, // or 'blocking' if you prefer
    };
  }
};
