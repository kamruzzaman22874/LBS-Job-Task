import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { TbBeta } from "react-icons/tb";

const Footer = () => {
    return (
        <section className="py-10 bg-[#012863] sm:pt-16 lg:pt-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-12">
                    <div className="space-y-5">
                        <p className="text-white font-bold text-2xl uppercase">About us</p>

                        <p className="text-white font-light">A farm is a plot of land that is used to grow crops and raise livestock, as in our farm, we raise sheep and sell their wool the word farm is also.</p>
                        <div className="flex justify-around py-16">
                            <FaFacebook className=" text-white text-2xl" />
                            <FaTwitter className=" text-white text-2xl" />
                            <TbBeta className=" text-white text-2xl" />
                            <FaYoutube className=" text-white text-2xl" />
                        </div>
                    </div>

                    <div>
                        <p className="text-white font-bold text-2xl">OTHER PAGES</p>

                        <ul className="mt-8 flex gap-8">
                            <div>
                                <li>
                                    <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> About Us </a>
                                </li>
                                <li>
                                    <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Services </a>
                                </li>
                                <li>
                                    <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Our Team </a>
                                </li>
                                <li>
                                    <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Pricing </a>
                                </li>
                                <li>
                                    <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> FAQ & Ans </a>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Careers </a>
                                </li>
                                <li>
                                    <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> News & Insights </a>
                                </li>
                                <li>
                                    <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">Refund Policy </a>
                                </li>
                                <li>
                                    <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Terms & Conditions </a>
                                </li>
                            </div>
                        </ul>
                    </div>

                    <div>
                        <p className="text-white font-bold text-2xl">OUR SERVICES</p>

                        <ul className="mt-8 space-y-4">
                            <li>
                                <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Car Transport </a>
                            </li>
                            <li>
                                <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Refund Product </a>
                            </li>
                            <li>
                                <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Car Transport </a>
                            </li>
                            <li>
                                <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Air Frieght </a>
                            </li>
                            <li>
                                <a href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Ship Frieght </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-5">
                        <p className="text-white font-bold text-2xl">SUBSCRIBE US</p>
                        <p className="text-white">Subscribe us & receive our office & update in your inbox directly</p>
                        <input className="md:px-6 py-3 border-0 w-36 outline-none main-angel" type="email" placeholder="Enter Your Email" />
                        <input className="bg-[#DB1C29] main-angel  hover:bg-white hover:text-[#012863]  text-white transition-all duration-300 px-6 py-3 uppercase" type="submit" value="Subscribe now" />
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Footer;