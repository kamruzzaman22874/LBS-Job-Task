import Image from "next/image";

const About = () => {
    return (
        <div className="md:flex justify-center w-full px-10 gap-28">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div className="flex justify-center md:col-span-7">
                    <div className="space-y-6 mb-10 ">
                        <h5 className="text-[#bc101c] text-lg">ABOUT US</h5>
                        <h1 className="text-[#113771] text-4xl font-bold">A COMPANY INVOLVED IN <br /> SERVICING, MAINTENANCE.</h1>
                        <div className="flex gap-5">
                            <button className="main-angel cta:hover hover:bg-[#113771] hover:text-white bg-[#bc101c] text-white px-4 py-3 uppercase">our approch</button>
                            <button className="main-angel cta:hover hover:bg-[#113771] hover:text-white bg-[#bc101c] text-white px-4 py-3 uppercase">our goal</button>
                            <button className="main-angel cta:hover hover:bg-[#113771] hover:text-white bg-[#bc101c] text-white px-4 py-3 uppercase">our mission</button>

                        </div>
                        <p>From finance, retail, and travel, to social media, cybersecurity, <br /> adtech, and more, market leaders are leveraging web data to <br /> maintain their transt advantage. Discover how it can work for <br /> you.</p>

                        <button className="main-angel cta:hover hover:bg-[#113771] mb-10 hover:text-white bg-[#bc101c] text-white px-6 py-3 uppercase">Learn More</button>
                    </div>
                </div>
            </div>
            <div className="md:col-span-5 flex items-center justify-center">
                <Image width={500} height={500} src="https://i.ibb.co/3pYJK26/about-us.webp" alt="" />
            </div>
        </div >
    );
};

export default About;