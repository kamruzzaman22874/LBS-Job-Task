import Image from "next/image";

const OurBlogs = () => {
    return (
        <section>
            <div className="text-center">
                <h4 className="text-[#D51B28]">NEWS INSIGHTS</h4>
                <h1 className="text-4xl text-[#012863] font-bold">OUR BLOG & INSIGHTS</h1>
            </div>
            <div className="grid md:grid-cols-12 px-20 my-10 gap-8">
                <div className="md:flex gap-8  col-span-7">
                    <div className="relative main-angel">
                        <div className="space-y-3">
                            <Image width={400} height={400} src="https://i.ibb.co/VWWg3DM/blog-page-img-1.webp" alt="blog"></Image>
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
                            <Image width={400} height={400} src="https://i.ibb.co/gPRD4Kj/blog-page-img-3.webp" alt="blog"></Image>
                            <h2 className="text-[#012863] text-2xl font-bold">THIS SCHEMATIC APPROACH WAS LATER ADOPTED</h2>
                            <p>From finance, retail, and travel, to social media, cyber security, adtech, and more, market leaders.</p>
                        </div>
                        <div className="bg-[#D51B28] flex flex-col p-3 w-20 main-angel absolute right-5 -top-6 text-center text-white">
                            <span className="text-4xl font-bold uppercase">12</span>
                            <span className="text-2xl font-bold uppercase">Mar</span>
                        </div>
                    </div>
                </div>
                <div className="col-span-5">
                    <div className="px-6 py-3 flex justify-center">
                        <div className="bg-[#D51B28] flex flex-col p-3 text-white main-angel uppercase text-center">
                            <span className="text-3xl font-bold uppercase">05</span>
                            <span>Nov</span>
                        </div>
                        <div className="ml-5">
                            <h2 className="text-[#012863] text-xl font-semibold">GLOBAL PROVIDER PRODUCTS FOR EVERYONE</h2>
                        </div>
                    </div>
                    <hr className="ml-5" />
                    <div className=" px-6 py-3 flex justify-center">
                        <div className="bg-[#D51B28] flex flex-col p-3 text-white main-angel uppercase text-center">
                            <span className="text-4xl font-bold uppercase">10</span>
                            <span>feb</span>
                        </div>
                        <div className="ml-8">
                            <h2 className="text-[#012863] text-xl font-semibold">IN PROMOTION ADVERTISING TESTIMONIAL</h2>
                        </div>
                    </div>
                    <hr className="ml-5" />
                    <div className=" px-6 py-3 flex justify-center">
                        <div className="bg-[#D51B28] flex flex-col p-3 text-white main-angel uppercase text-center">
                            <span className="text-4xl font-bold uppercase">13</span>
                            <span>apr</span>
                        </div>
                        <div className="ml-8">
                            <h2 className="text-[#012863] text-xl font-semibold">LOGISTICS SEEKS TO BE A PREMIER, PROFITABLE</h2>
                        </div>
                    </div>
                    <hr className="ml-5" />
                </div>
            </div>
        </section>
    );
};

export default OurBlogs;