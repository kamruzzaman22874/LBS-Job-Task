
import Image from "next/image";
// import { useEffect, useState } from "react";
// import Blog from "./Blog";
const OurBlogs = () => {
    // const [blogs, setBlogs] = useState([])
    // useEffect(() => {
    //     fetch("blogs.json")
    //         .then(res => res.json())
    //         .then(data => {
    //             setBlogs(data)
    //         })
    // }, [])
    return (
        <section>
            <div className="text-center">
                <h4 className="text-[#D51B28]">NEWS INSIGHTS</h4>
                <h1 className="text-4xl text-[#012863] font-bold">OUR BLOG & INSIGHTS</h1>
            </div>
            <div className="w-11/12 mx-auto grid lg:grid-cols-3 gap-10 my-20">
                <div className="lg:col-span-2 grid sm:grid-cols-2 grid-cols-1 gap-5 sm:px-0 px-5">
                    <div className="relative main-angel">
                        <div className="space-y-3">
                            <Image width={550} height={400} src="https://i.ibb.co/gPRD4Kj/blog-page-img-3.webp" alt="blog img"></Image>
                            <h2 className="text-[#012863] text-2xl font-bold">TRANSPORTATION IS THE REAL TIME  BUSINESS</h2>
                            <p className="text-md">From finance, retail, and travel, to social br media, cyber security, adtech, and more, market leaders.</p>
                        </div>
                        <div className="bg-[#D51B28] flex flex-col p-3 w-20 main-angel absolute right-5 -top-6 text-center text-white">
                            <span className="text-4xl font-bold uppercase">20</span>
                            <span className="text-2xl font-bold uppercase">Jun</span>
                        </div>

                    </div>
                    <div className="relative main-angel">
                        <div className="space-y-3">
                            <Image width={550} height={400} src="https://i.ibb.co/VWWg3DM/blog-page-img-1.webp" alt="blog"></Image>
                            <h2 className="text-[#012863] text-2xl font-bold">THIS SCHEMATIC APPROACH WAS LATER ADOPTED</h2>
                            <p>From finance, retail, and travel, to social media, cyber security, adtech, and more, market leaders.</p>
                        </div>
                        <div className="bg-[#D51B28] flex flex-col p-3 w-20 main-angel absolute right-5 -top-6 text-center text-white">
                            <span className="text-4xl font-bold uppercase">12</span>
                            <span className="text-2xl font-bold uppercase">Mar</span>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 flex flex-col gap-10">
                    <div className="flex gap-5 pb-4 border-b">
                        <div className="bg-[#D51B28] flex flex-col p-3 text-white main-angel uppercase text-center">
                            <span className="text-3xl font-bold uppercase">05</span>
                            <span>Nov</span>
                        </div>
                        <div>
                            <h2 className="text-[#012863] text-3xl font-semibold">GLOBAL PROVIDER PRODUCTS FOR EVERYONE</h2>
                        </div>
                    </div>
                    <div className="flex gap-5 pb-4 border-b">
                        <div className="bg-[#D51B28] flex flex-col p-3 text-white main-angel uppercase text-center">
                            <span className="text-3xl font-bold uppercase">05</span>
                            <span>Nov</span>
                        </div>
                        <div>
                            <h2 className="text-[#012863] text-3xl font-semibold">GLOBAL PROVIDER PRODUCTS FOR EVERYONE</h2>
                        </div>
                    </div>
                    <div className="flex gap-5 pb-4 border-b">
                        <div className="bg-[#D51B28] flex flex-col p-3 text-white main-angel uppercase text-center">
                            <span className="text-3xl font-bold uppercase">05</span>
                            <span>Nov</span>
                        </div>
                        <div>
                            <h2 className="text-[#012863] text-3xl font-semibold">GLOBAL PROVIDER PRODUCTS FOR EVERYONE</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurBlogs;
