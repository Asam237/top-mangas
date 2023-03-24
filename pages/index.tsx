import Head from 'next/head'
import { Header } from '../components/header'
import { Banner } from '../components/banner'
import { Manga } from '../components/manga'
import { Footer } from '../components/footer'
import { PaginationPresentation } from '../components/pagination'
import { SearchInput } from '../components/search'

export default function Home() {
  return (
    <>
      <Head>
        <title>Top Mangas</title>
        <meta name="description" content="Top mangas apps" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Banner />
        <SearchInput />
        <Manga />
        <PaginationPresentation />
      </main>
      <Footer />
    </>
  )
}
