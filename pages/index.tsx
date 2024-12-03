import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import { siteConfig } from "@/site.config";
import { sampleCards } from "@/utils/sample";
import Card from "@/components/Card";
import { fetchPages } from "@/utils/notion";
import { pages } from "next/dist/build/templates/app-page";


export const getStaticProps: GetStaticProps = async () => {
  const { results } = await fetchPages()
  return {
    props: {
      pages: results ? results : [],
    },
    revalidate: 10, // isr：更新処理
  };
};

// メインページ
export const Home: NextPage = ({ pages }) => {
  console.log(pages);
  return (
    <Layout>
      <div className="pt-12">
        <h1 className="text-5xl mb-8">{siteConfig.title}</h1>
        <div className="grid md:gap-6 mt-10 md:grid-cols-2 w-full my-12">
            {/* Card */}
            {sampleCards.map((page, index) => (
              <Card key={index} page={page} />
            ))}
        </div>
      </div>
    </Layout>
  );
};
 
export default Home;