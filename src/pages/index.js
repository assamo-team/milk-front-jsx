import { Inter } from 'next/font/google'
import Hero from '@/components/home/hero'
import Layout from '@/components/layout'
import Head from 'next/head'
import NewsSlide from "@/components/slide";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>
          우유
        </title>
        <meta name="description" content='우유'></meta>
        <link rel="icon" href='/favicon.ico'></link>
      </Head>

      <section className="flex min-h-screen flex-col items-center justify-center body-font">
        {/* 뉴스 슬라이드 */}
        <div className="container px-5 py-5 mx-auto flex flex-wrap">
          <div className="lg:w-3/4 mx-auto">
            <div className="flex flex-wrap w-full bg-gray-100 py-7 px-10 relative mb-4">
              <div className="text-center relative z-10 w-full">
                <NewsSlide />
              </div>
            </div>
          </div>
        </div>

        {/* 인사말 + 애니메이션 */}
        <div className="container mx-auto flex px-5 py-6 md:flex-row flex-col items-center">
          <Hero/>
        </div>
      </section>

    </Layout>
  )
}