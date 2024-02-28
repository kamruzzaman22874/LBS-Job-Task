import Image from "next/image";

const About = () => {
    return (
        <div className="lg:w-9/12 w-11/12 mx-auto grid lg:grid-cols-2">
            <div className="space-y-6 mb-10 w-full mx-auto">
                <div className="w-full space-y-3">
                    <h5 className="text-[#bc101c] text-lg">ABOUT US</h5>
                    <h1 className="text-[#113771] md:text-4xl text-2xl lg:w-2/3 w-full font-bold">A COMPANY INVOLVED IN SERVICING, MAINTENANCE.</h1>
                    <div className="flex gap-5 w-full py-10">
                        <button className="main-angel cta:hover hover:bg-[#113771] hover:text-white bg-[#bc101c] text-white md:px-4 px-1 py-3 uppercase">our approch</button>
                        <button className="main-angel cta:hover hover:bg-[#113771] hover:text-white bg-[#bc101c] text-white md:px-4 px-1 py-3 uppercase">our goal</button>
                        <button className="main-angel cta:hover hover:bg-[#113771] hover:text-white bg-[#bc101c] text-white md:px-4 px-1 py-3 uppercase">our mission</button>

                    </div>
                    <p className="text-justify text-lg sm:mb-10 lg:w-2/3">From finance, retail, and travel, to social media, cybersecurity,  adtech, and more, market leaders are leveraging web data to  maintain their transt advantage. Discover how it can work for you.</p>

                    <button className="main-angel cta:hover hover:bg-[#113771] mb-10 hover:text-white bg-[#bc101c] text-white px-6 py-3 uppercase">Learn More</button>
                </div>
            </div>
            <div className="parentDiv">
                <Image className="w-full h-full" width={500} height={0} src="https://i.ibb.co/3pYJK26/about-us.webp" alt="" />
            </div>
        </div>
    );
};

export default About;
