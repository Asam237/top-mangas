import { Item } from "./item"

export const Manga = () => {
    return (
        <div className="mx-8 lg:mx-0 mt-8 lg:mt-0">
            <div className="container mx-auto">
                <div className="grid gap-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    <Item title="One Peace" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam culpa dolor eaque facilis numquam obcaecati sapiente, sunt totam vitae? Blanditiis eligendi" tags={["Action", "Combat"]} />
                    <Item title="One Peace" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam culpa dolor eaque facilis numquam obcaecati sapiente, sunt totam vitae? Blanditiis eligendi" tags={["Action", "Science fiction"]} />
                    <Item title="One Peace" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam culpa dolor eaque facilis numquam obcaecati sapiente, sunt totam vitae? Blanditiis eligendi" tags={["Football", "Combat"]} />
                    <Item title="One Peace" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam culpa dolor eaque facilis numquam obcaecati sapiente, sunt totam vitae? Blanditiis eligendi" tags={["Aventure", "Combat"]} />
                    <Item title="One Peace" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam culpa dolor eaque facilis numquam obcaecati sapiente, sunt totam vitae? Blanditiis eligendi" tags={["Action", "Science fiction"]} />
                    <Item title="One Peace" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam culpa dolor eaque facilis numquam obcaecati sapiente, sunt totam vitae? Blanditiis eligendi" tags={["Football", "Combat"]} />
                </div>
            </div>
        </div>
    )
}