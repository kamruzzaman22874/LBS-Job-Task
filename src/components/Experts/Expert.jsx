import Image from "next/image";

const Expert = ({ expert }) => {
    const { title, name, details, image } = expert;
    return (
        <div class="group main-angel w-[48] relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:bg-red-600 hover:shadow-black/30">
            <div class="w-[100%]">
                <Image width={500} height={500} className="w-full object-cover transition-transform duration-500 group-hover:scale-110" src={image} alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-[#012863]/70 group-hover:via-[#012863]/70 group-hover:to-[#012863]/70"></div>
            <div class="absolute inset-0 flex translate-y-[70%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 space-y-3">
                <h1 class="font-dmserif text-3xl font-bold text-white uppercase">{title}</h1>
                <h2 className="text-white uppercase"> {name}</h2>
                <h3 className="text-white">{details}</h3>

            </div>
        </div>
    );
};

export default Expert;