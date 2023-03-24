import { HiSearch } from "react-icons/hi"

export const SearchInput = () => {
    return (
        <div className="py-4 lg:py-20 mx-4 lg:mx-0">
            <div className="container mx-auto">
                <div className="flex flex-col px-4 lg:px-0 w-full lg:w-[470px]">
                    <div className="border-2 bg-white border-gray-200 outline-none rounded-md p-2 focus:border-gray-400">
                        <div className="flex items-center px-2 py-1">
                            <HiSearch size={25} className="text-gray-400" />
                            <input className="w-full border-none ml-4 outline-none" placeholder="Search..." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}