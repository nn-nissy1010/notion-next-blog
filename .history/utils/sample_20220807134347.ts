export const sampleCards = [
    {
        slug: "red",
        name: "Red",
        author: "dog",
        cover: "/",
        published: "202x-xx-01",
        tags: ["notion", "nextjs"],
        content: "Red page content",
    },
    {
        slug: "green",
        name: "Green",
        author: "cat",
        cover: "/",
        published: "202x-xx-02",
        tags: ["notion"],
        content: "Green page content",
    },
    {
        slug: "blue",
        name: "Blue",
        author: "bird",
        cover: "/",
        published: "202x-xx-03",
        tags: ["react"],
        content: "Blue page content",
    },
];




pages / index.tsx

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import { siteConfig } from "../site.config";
import { sampleCards } from "../utils/sample";

const Home: NextPage = () => {
    return (
        <Layout>
        <div className= "pt-12" >
        <h1 className="text-5xl mb-8" > { siteConfig.title } < /h1>
            < div className = "grid md:gap-6 mt-10 md:grid-cols-2 w-full my-12" >
                {/* Card */ }
    {
        sampleCards.map((page, index) => (
            <p key= { index } > { page.name } < /p>
        ))
    }
    </>
        < /div>
        < /Layout>
  );
};

export default Home;