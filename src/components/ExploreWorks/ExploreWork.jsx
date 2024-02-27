import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
const ExploreWork = ({ work }) => {
    const { image, details, title } = work;
    return (
        <div class="group main-angel w-[48] relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:bg-red-600 hover:shadow-black/30">
            <div class="w-[100%]">
                <Image width={300} height={300} className="w-full object-cover transition-transform duration-500 group-hover:scale-110" src={image} alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black "></div>
            <div class="absolute inset-0 flex translate-y-[85%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 space-y-3 ">
                <div className="bg-[#FFFFFF] flex justify-between items-center px-6 py-3 w-full relative bottom-0">
                    <div className="uppercase">
                        <h2>{details}</h2>
                        <h2>{title}</h2>
                    </div>
                    <div className="p-3">
                        <IoIosArrowRoundForward className="border rounded-full text-xl" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ExploreWork;