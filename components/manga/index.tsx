import { Item } from "./item"
import jsonfile from "../../assets/data/manga.json"
import { datas } from "../../assets/data/data"


export const Manga = () => {
    return (
        <div className="mx-8 lg:mx-0 mt-8 lg:mt-0">
            <div className="container mx-auto">
                <div className="grid gap-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {
                        datas["items"].map((item, index) => {
                            return (
                                <Item key={index} title={item.title} description={item.description} tags={item.tags} logo={item.logo}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}