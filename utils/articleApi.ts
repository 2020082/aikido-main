// utils/articleApi.ts

import axios from "axios";
import { getStrapiURL } from "./api";

export async function getArticleProps() {
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
    return { props: { articles } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { articles: [] } };
  }
}
