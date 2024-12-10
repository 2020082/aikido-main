/** @format */

import React from "react";
import Banner from "@/components/banner";
import HomePage from "./homepage";
import Bubbles from "@/components/bubbles";
import Marquee from "@/components/marquee/marquee";
import FeaturedPrograms from "@/components/featuredPrograms";
//import programs from "../constants/programs.ts"
import { Bachelorprograms, Masterprograms } from "../constants/programs";
import MoreBanners from "@/components/moreBanners";
import FeaturedNews from "@/components/featuredNews";
import { getArticleProps } from "@/utils/articleApi";
import { ArticleProps } from "../types/types";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import Image from "next/image";

import { useState } from "react";
import type { AppProps } from "next/app";

interface Blog {
  id: number;
  title: string;
  author: string;
  summary: string;
  imageUrl: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "Aikido skills",
    author: "John Doe",
    summary: "brief info.",
    imageUrl: "",
  },
  {
    id: 2,
    title: "Daily news",
    author: "",
    summary:
      "An insightful discussion on the future trends in aikido and how they will impact lifestyle.",
    imageUrl: "/path/to/ai-future.jpg",
  },
  {
    id: 3,
    title: "aikido training",
    author: "Alice Johnson",
    summary:
      "This blog will guide you through the basics of aikido, perfect for those who are new to aikido.",
    imageUrl: "/path/to/js-guide.jpg",
  },
  {
    id: 4,
    title: "well idk",
    author: "Chris Lee",
    summary: "...",
    imageUrl: "/path/to/web-tools.jpg",
  },
  {
    id: 5,
    title: "idk 2",
    author: "Emily Davis",
    summary: "hoho lol.",
    imageUrl: "/path/to/typescript-react.jpg",
  },
];

interface Partner {
  id: number;
  name: string;
  imageUrl: string;
}

const partners: Partner[] = [
  {
    id: 1,
    name: "Impulse",
    imageUrl: "/path/to/impulse-logo.png",
  },
  {
    id: 2,
    name: "MetGroup",
    imageUrl: "/path/to/metgroup-logo.png",
  },
  {
    id: 3,
    name: "TaiShan",
    imageUrl: "/path/to/taishan-logo.png",
  },
  {
    id: 4,
    name: "SOCAR",
    imageUrl: "/path/to/socar-logo.png",
  },
  {
    id: 5,
    name: "OTP Bank",
    imageUrl: "/path/to/otpbank-logo.png",
  },
  {
    id: 6,
    name: "Harvest Group",
    imageUrl: "/path/to/harvest-logo.png",
  },
  {
    id: 7,
    name: "Icona Capital",
    imageUrl: "/path/to/icona-logo.png",
  },
  {
    id: 8,
    name: "Essimo",
    imageUrl: "/path/to/essimo-logo.png",
  },
  {
    id: 9,
    name: "Ippon Gear",
    imageUrl: "/path/to/ippongear-logo.png",
  },
  {
    id: 10,
    name: "Adidas",
    imageUrl: "/path/to/adidas-logo.png",
  },
  {
    id: 11,
    name: "Zebra",
    imageUrl: "/path/to/zebra-logo.png",
  },
  {
    id: 12,
    name: "Fuji Mats",
    imageUrl: "/path/to/fujimats-logo.png",
  },
  {
    id: 13,
    name: "Code41",
    imageUrl: "/path/to/code41-logo.png",
  },
];

const App = ({ articles }: ArticleProps) => {
  const { t } = useTranslation();
  return (
    <>
      <div
        className="relative bg-cover bg-center h-screen"
        style={{
          backgroundImage:
            "url('https://imagedelivery.net/EuPZIXN3CvcLBcBD09xitQ/27ed1ae3-ce6b-4bc7-d591-200909e1cb00/w=2560,f=webp')",
        }} // Use your actual image path or URL here
      >
        {/* Overlay if needed */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Text container */}
        <div className="relative z-10 flex flex-col justify-center items-start h-full p-10">
          {/* Top Text */}
          <div className="text-white text-sm mb-2">
            Oct 19 - 31, 2024 — Mongolia, Ulaanbaatar
          </div>

          {/* Main Heading */}
          <h1 className="text-white text-6xl font-bold mb-4">Aikido in 2024</h1>

          {/* Subtext */}
          <div className="text-white text-lg">29 nations / 100k students</div>
        </div>
      </div>
      <div className="bg-gray-100 p-8">
        <h2 className="text-xl font-semibold mb-4">Blog Spotlight</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white p-4 rounded-lg shadow-md">
              <Image
                className="rounded-md"
                src={blog.imageUrl}
                alt={blog.title}
                width={150}
                height={150}
                objectFit="cover"
              />
              <div className="mt-4">
                <h3 className="text-lg font-bold">{blog.title}</h3>
                <p className="text-sm text-gray-500">by {blog.author}</p>
                <p className="text-sm mt-2">{blog.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-100 p-8">
        <h2 className="text-center text-xl font-semibold mb-6">Our Partners</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {partners.map((partner) => (
            <div key={partner.id} className="flex justify-center">
              <Image
                src={partner.imageUrl}
                alt={partner.name}
                width={150}
                height={100}
                objectFit="contain"
                className="h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export async function getStaticProps() {
  return await getArticleProps();
}

export default App;
