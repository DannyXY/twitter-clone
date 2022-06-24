import React from "react";

export default function Explore(){
    return(
        <div className="hidden lg:block lg:col-span-2 dark:bg-slate-900">
            <div className="flex text-black-300 text-lg items-center gap-4 font-semibold dark:bg-slate-900 bg-gray-50  w-96 h-12 rounded-full mt-2 p-4">
                <span><svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current">
                        <g>
                            <path
                                d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
                            </path>
                        </g>
                    </svg></span><input type="text" placeholder="Search twitter"
                    className="text-black-500 font-semibold bg-transparent border-transparent focus:outline-none" />
            </div>
            <div className="w-96 dark:bg-slate-800 rounded-2xl h-fit bg-gray-50 mt-2 dark:text-white">
                <h3 className="text-xl font-bold p-4">You might like</h3>
                <ul>
                    <li>
                        <div className="flex cursor-pointer items-start w-full p-4 hover:bg-gray-100 dark:hover:bg-gray-800 ">
                            <div className="flex items-center">
                            <img className="rounded-full ml-2 w-12-h-12"
                                src="https://pbs.twimg.com/profile_images/1509458055368671234/IDTU8qTt_normal.png" />
                            <div className="mx-auto ml-4">
                                <div className="flex items-center">
                                    <p className="font-semibold">Crypto.com</p>
                                    <span className="ml-1"><svg className="w-4 h-4 mr-2" fill="#1da1f2" viewBox="0 0 24 24"
                                            aria-label="Verified account">
                                            <g>
                                                <path
                                                    d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z">
                                                </path>
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                                <p className="text-gray-500">@cryptocom</p>
                                <div className="flex items-center">
                                    <span className="text-gray-500">
                                        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 fill-current">
                                            <g>
                                                <path
                                                    d="M20.75 2H3.25C2.007 2 1 3.007 1 4.25v15.5C1 20.993 2.007 22 3.25 22h17.5c1.243 0 2.25-1.007 2.25-2.25V4.25C23 3.007 21.993 2 20.75 2zM17.5 13.504c0 .483-.392.875-.875.875s-.875-.393-.875-.876V9.967l-7.547 7.546c-.17.17-.395.256-.62.256s-.447-.086-.618-.257c-.342-.342-.342-.896 0-1.237l7.547-7.547h-3.54c-.482 0-.874-.393-.874-.876s.392-.875.875-.875h5.65c.483 0 .875.39.875.874v5.65z">
                                                </path>
                                            </g>
                                        </svg>
            
                                    </span>
                                    <p className="ml-1 text-gray-500">
                                        Promoted</p>
                                </div>
                            </div>
                            </div>
                            <div
                                className=" mx-auto my-auto mr-3 w-24 h-8 bg-black rounded-full text-white font-bold justify-center items-center flex">
                                <p>Follow</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex cursor-pointer items-start w-full p-4 hover:bg-gray-100 dark:hover:bg-gray-800">
                            <div className="flex items-center">
                            <img className="rounded-full ml-2 w-12 h-12"
                                src="https://pbs.twimg.com/profile_images/378800000857919980/lHqPIZza_normal.png" />
                            <div className="mx-auto  ml-4">
                                <div className="flex items-center">
                                    <p className="font-semibold">Dogecoin</p>
                                    <span className="ml-1"><svg className="w-4 h-4 mr-2" fill="#1da1f2" viewBox="0 0 24 24"
                                            aria-label="Verified account">
                                            <g>
                                                <path
                                                    d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z">
                                                </path>
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                                <p className="text-gray-500">@dogecoin</p>
            
                            </div>
                            </div>
                            <div
                                className=" mx-auto my-auto mr-3 w-24 h-8 bg-black rounded-full text-white font-bold justify-center items-center flex">
                                <p>Follow</p>
                            </div>
                            
                        </div>
                    </li>
                    <li>
                        <div className="flex cursor-pointer items-start w-full p-4 hover:bg-gray-100 dark:hover:bg-gray-800">
                            <div className="flex items-center">
                            <img className="rounded-full ml-2 w-12 h-12"
                                src="https://pbs.twimg.com/profile_images/1490589455786573824/M5_HK15F_normal.jpg" />
                            <div className="mx-auto  ml-4">
                                <div className="flex items-center">
                                    <p className="font-semibold">Binance</p>
                                    <span className="ml-1"><svg className="w-4 h-4 mr-2" fill="#1da1f2" viewBox="0 0 24 24"
                                            aria-label="Verified account">
                                            <g>
                                                <path
                                                    d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z">
                                                </path>
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                                <p className="text-gray-500">@binance</p>
            
                            </div>
                            </div>
                            <div
                                className=" mx-auto my-auto mr-3 w-24 h-8 bg-black rounded-full text-white font-bold justify-center items-center flex">
                                <p>Follow</p>
                            </div>
                            
                        </div>
                    </li>
                    <li>
                        <div className="flex cursor-pointer items-start w-full p-3 hover:bg-gray-100 hover:rounded-b-2xl dark:hover:bg-gray-800">
                            <p className="font-semibold text-sky-500 ml-2">Show more</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="w-96 rounded-2xl h-fit bg-gray-50 mt-2 dark:text-white dark:bg-slate-800">
                <h3 className="text-xl font-bold p-4">Trends for you</h3>
            
            <div className="cursor-pointer w-full p-3 hover:bg-gray-100 dark:hover:bg-gray-800">
                <p><span className="text-gray-500 text-sm mr-1">Sports</span><span className="text-gray-500 text-sm mr-1">·</span>
                <span className="text-gray-500 text-sm mr-1">Trending</span>
            <span></span></p>
            <p className="font-semibold">Messi</p>
            <p className="text-gray-500 text-sm">73.7k Tweets</p>

            </div>
            <div className="cursor-pointer w-full p-3 hover:bg-gray-100 dark:hover:bg-gray-800">
                <p><span className="text-gray-500 text-sm mr-1">Music</span><span className="text-gray-500 text-sm mr-1">·</span>
                <span className="text-gray-500 text-sm mr-1">Trending</span>
            <span></span></p>
            <p className="font-semibold">Davido</p>
            <p className="text-gray-500 text-sm">62.1k Tweets</p>

            </div>
            <div className="cursor-pointer w-full p-3 hover:bg-gray-100 dark:hover:bg-gray-800">
                <p><span className="text-gray-500 text-sm mr-1">Erling Haaland</span><span className="text-gray-500 text-sm mr-1">·</span>
                <span className="text-gray-500 text-sm mr-1">Trending</span>
            <span></span></p>
            <p className="font-semibold">Erling Haaland</p>
            <p className="text-gray-500 text-sm">3,813 Tweets</p>

            </div>
            <div className="cursor-pointer w-full p-3 hover:bg-gray-100 dark:hover:bg-gray-800">
                <p><span className="text-gray-500 text-sm mr-1">Sports</span><span className="text-gray-500 text-sm mr-1">·</span>
                <span className="text-gray-500 text-sm mr-1">Trending</span>
            <span></span></p>
            <p className="font-semibold">Puig</p>
            <p className="text-gray-500 text-sm">5,116 Tweets</p>

            </div>
            <div className="cursor-pointer w-full p-3 hover:bg-gray-100 dark:hover:bg-gray-800">
                <p><span className="text-gray-500 text-sm mr-1">Trending in Nigeria</span>
            <span></span></p>
            <p className="font-semibold">Linda Ikeji</p>
            <p className="text-gray-500 text-sm">1,108 Tweets</p>

            </div>
            <div className="cursor-pointer w-full p-3 hover:bg-gray-100 dark:hover:bg-gray-800">
                <p><span className="text-gray-500 text-sm mr-1">Trending in Nigeria</span>
            <span></span></p>
            <p className="font-semibold">Slim</p>
            <p className="text-gray-500 text-sm">29.4k Tweets</p>

            </div>
            <div className="cursor-pointer w-full p-3 hover:bg-gray-100 dark:hover:bg-gray-800">
                <p><span className="text-gray-500 text-sm mr-1">Entertainment</span><span className="text-gray-500 text-sm mr-1">·</span>
                <span className="text-gray-500 text-sm mr-1">Trending</span>
            <span></span></p>
            <p className="font-semibold">Chioma</p>
            <p className="text-gray-500 text-sm">5,504 Tweets</p>

            </div>
            <div className="cursor-pointer w-full p-3 hover:bg-gray-100 dark:hover:bg-gray-800">
                <p><span className="text-gray-500 text-sm mr-1">Sports</span><span className="text-gray-500 text-sm mr-1">·</span>
                <span className="text-gray-500 text-sm mr-1">Trending</span>
            <span></span></p>
            <p className="font-semibold">#ARSMUN</p>
            <p className="text-gray-500 text-sm">8,362 Tweets</p>

            </div>
            <div className="flex cursor-pointer items-start w-full p-3 hover:bg-gray-100 dark:hover:bg-gray-800 hover:rounded-b-2xl">
                <p className="font-semibold text-sky-500 ml-2">Show more</p>
            </div>
            </div>
        </div>
    )
}