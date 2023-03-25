import Head from 'next/head'
import { Header } from '../components/header'
import { Banner } from '../components/banner'
import { Footer } from '../components/footer'
import { PaginationPresentation } from '../components/pagination'
import { datas } from '../assets/data/data'
import { useEffect, useState } from 'react'
import { Item } from '../components/manga/item'
import { HiSearch } from 'react-icons/hi'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../utils/firebase'

export default function Home() {
  const [query, setQuery] = useState("")
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      let list: any = [];
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          list.push({ ...doc.data() })
          setData(list);
        });
      } catch (error) {
        console.log(error)
      }

    }
    fetchData();
  }, [])

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
        <div className="py-4 lg:py-20 mx-4 lg:mx-0">
          <div className="container mx-auto">
            <div className="flex flex-col px-4 lg:px-0 w-full lg:w-[470px]">
              <div className="border-2 bg-white border-gray-200 outline-none rounded-md p-2 focus:border-gray-400">
                <div className="flex items-center px-2 py-1">
                  <HiSearch size={25} className="text-gray-400" />
                  <input className="w-full border-none ml-4 outline-none" onChange={event => setQuery(event.target.value)} placeholder="Search..." />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-8 lg:mx-0 mt-8 lg:mt-0">
          <div className="container mx-auto">
            <div className="grid gap-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {
                datas["items"].filter(item => {
                  if (query === '') {
                    return item;
                  } else if (item.title.toLowerCase().includes(query.toLowerCase())) {
                    return item;
                  }
                }).map((item, index) => (
                  <Item key={index} title={item.title} description={item.description} tags={item.tags} logo={item.logo} />
                ))
              }
            </div>
          </div>
        </div>
        <PaginationPresentation />
      </main>
      <Footer />
    </>
  )
}
