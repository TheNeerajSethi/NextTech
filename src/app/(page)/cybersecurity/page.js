import React from 'react';
import Image from "next/image";
import {MdReadMore} from "react-icons/md";
import Link from "next/link";

const Blogcard = async () => {
    const data = await getData();
    return (
        <div>
            <div className="lg:flex lg:justify-between border-b-2 border-gray-950 lg:pb-4 pb-2">
                <p className="lg:text-3xl font-semibold">Cybersecurity</p>

            </div>
            <div className="lg:grid-cols-3 gap-2 lg:grid">
                {
                    data.map((post,i)=>(
                        <div key={i}>
                            <div className="mt-5 lg:p-2 p-2 lg:w-[360px] shadow">
                                <Image className="lg:h-[200px] lg:w-[350px]"
                                       src="https://source.unsplash.com/random/1200x700?Cybersecurity" alt="" height={1000} width={1000}/>
                                <p className="m-1 lg:text-[19px] text-[15px] font-semibold">{post.title}</p>
                                <div className="gap-2 flex mt-2">
                                    <span className="px-3 py-1 bg-sky-200 rounded-full p text-sky-700 text-[12px]">{post.author}</span>
                                    <span className="px-3 py-1 bg-sky-200 rounded-full p text-sky-700 text-[12px]">Health</span>
                                    <span className="px-3 py-1 bg-sky-200 rounded-full p text-sky-700 text-[12px]">13 March</span>
                                    <span className="px-3 py-1 bg-sky-200 rounded-full p text-sky-700 text-[12px]">New Delhi</span>
                                </div>
                                <p className="line-clamp-3 font-light mt-2 text-gray-600">{post.desc}</p>
                                <div className="justify-center flex mt-5">
                                    <Link href={post.slug}>
                                        <button className="flex rounded items-center gap-2 bg-sky-700 text-white px-3"> Read More<MdReadMore
                                            style={{fontSize: '35px', color: 'white'}}/></button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>

        </div>
    );
};

export default Blogcard;



async function getData(){
    const res = await fetch('https://middleinforms.com/wp/blogdata');
    return res.json();
}