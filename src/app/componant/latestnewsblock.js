import React from 'react';
import Image from "next/image";

const Latestnewsblock = () => {
    return (
        <div className="">
            <div className="lg:flex p-2 shadow">
                <Image className="lg:h-[280px] lg:w-[450px] "
                       src="https://source.unsplash.com/random/1200x700?technology" alt="" height={1000}
                       width={1000}/>
                <div className="m-4">
                    <div className="flex lg:gap-5 gap-3">
                        <span className="px-3 py-1 bg-sky-200 rounded-full p text-sky-700 text-[12px]">Author</span>
                        <span className="px-3 py-1 bg-sky-200 rounded-full p text-sky-700 text-[12px]">ML</span>
                        <span className="px-3 py-1 bg-sky-200 rounded-full p text-sky-700 text-[12px]">16 March</span>
                        <span className="px-3 py-1 bg-sky-200 hidden lg:block rounded-full p text-sky-700 text-[12px]">India</span>
                    </div>
                    <h1 className="lg:text-2xl text-xl font-semibold mt-2">Artificial Intelligence (AI) and Machine Learning (ML)</h1>
                    <p className="line-clamp-4 lg:line-clamp-3 mt-2 text-gray-600">Artificial Intelligence (AI) and its subset, Machine Learning (ML), represent a transformative leap in computing capabilities. AI involves the development of systems that can simulate human intelligence, performing tasks such as reasoning, problem-solving, understanding natural language, and learning from experience.</p>
                    <div className="justify-center flex lg:block">
                        <button className="bg-sky-700 px-4 py-2 text-white font-semibold rounded lg:mt-5 mt-9">Read More
                        </button>
                    </div>
                </div>
            </div>


            <div className="mt-2 lg:flex gap-2">
                <div className="flex p-1 shadow mt-2">
                    <Image className="lg:h-[90px] lg:w-[100px] h-[90px] w-[90px]"
                           src="https://source.unsplash.com/random/1200x700?technology" alt="image" height={1000}
                           width={1000}/>
                    <div className="ml-2">
                        <div className=" text-sky-700 gap-2 flex">
                            <span className="text-[11px] bg-sky-200 px-2 py-1 rounded-full">Author</span>
                            <span className="text-[11px] bg-sky-200 px-2 py-1 rounded-full">ML</span>
                            <span className="text-[11px] bg-sky-200 px-2 py-1 rounded-full">25 Feb</span>
                        </div>
                        <h1 className="lg:text-[13px] text-[12px] font-semibold mt-2">Artificial Intelligence (AI) and Machine Learning (ML)</h1>
                    </div>

                </div>
                <div className="flex p-1 shadow mt-2">
                    <Image className="lg:h-[90px] lg:w-[100px] h-[90px] w-[90px]"
                           src="https://source.unsplash.com/random/1200x700?technology" alt="image" height={1000}
                           width={1000}/>
                    <div className="ml-2">
                        <div className=" text-sky-700 gap-2 flex">
                            <span className="text-[11px] bg-sky-200 px-2 py-1 rounded-full">Author</span>
                            <span className="text-[11px] bg-sky-200 px-2 py-1 rounded-full">ML</span>
                            <span className="text-[11px] bg-sky-200 px-2 py-1 rounded-full">25 Feb</span>
                        </div>
                        <h1 className="lg:text-[13px] text-[12px] font-semibold mt-2">Artificial Intelligence (AI) and Machine Learning (ML)</h1>
                    </div>

                </div>
                <div className="flex p-1 shadow mt-2">
                    <Image className="lg:h-[90px] lg:w-[100px] h-[90px] w-[90px]"
                           src="https://source.unsplash.com/random/1200x700?technology" alt="image" height={800}
                           width={800}/>
                    <div className="ml-2">
                        <div className=" text-sky-700 gap-2 flex">
                            <span className="text-[11px] bg-sky-200 px-2 py-1 rounded-full">Author</span>
                            <span className="text-[11px] bg-sky-200 px-2 py-1 rounded-full">ML</span>
                            <span className="text-[11px] bg-sky-200 px-2 py-1 rounded-full">25 Feb</span>
                        </div>
                        <h1 className="lg:text-[13px] text-[12px] font-semibold mt-2">Artificial Intelligence (AI) and Machine Learning (ML)</h1>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Latestnewsblock;