import Image from "next/image";

const About = () => {
    return (
        <div className="grid px-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-2 justify-between items-center">
            <div className="space-y-6 mb-10 w-full mx-auto">
                <div className="w-full space-y-3">
                    <h5 className="text-[#bc101c] text-lg">ABOUT US</h5>
                    <h1 className="text-[#113771] md:text-4xl text-2xl text-justify font-bold">A COMPANY INVOLVED IN <br /> SERVICING, MAINTENANCE.</h1>
                    <div className="flex gap-5 w-full">
                        <button className="main-angel cta:hover hover:bg-[#113771] hover:text-white bg-[#bc101c] text-white md:px-4 px-1 py-3 uppercase">our approch</button>
                        <button className="main-angel cta:hover hover:bg-[#113771] hover:text-white bg-[#bc101c] text-white md:px-4 px-1 py-3 uppercase">our goal</button>
                        <button className="main-angel cta:hover hover:bg-[#113771] hover:text-white bg-[#bc101c] text-white md:px-4 px-1 py-3 uppercase">our mission</button>

                    </div>
                    <p className="text-justify">From finance, retail, and travel, to social media, cybersecurity, <br /> adtech, and more, market leaders are leveraging web data to <br /> maintain their transt advantage. Discover how it can work for <br /> you.</p>

                    <button className="main-angel cta:hover hover:bg-[#113771] mb-10 hover:text-white bg-[#bc101c] text-white px-6 py-3 uppercase">Learn More</button>
                </div>
            </div>
            <div className="">
                <Image width={500} height={500} src="https://i.ibb.co/3pYJK26/about-us.webp" alt="" />
            </div>
        </div>
    );
};

export default About;