

const Banner = () => {
    const backgroundImageStyle = {
        backgroundImage: "url('https://i.ibb.co/zFLDqTX/slider.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh", // Set the height as needed
    };

    return (
        <div style={backgroundImageStyle}>
            <h2 className="flex justify-center items-center md:pt-28 pt-28 font-semibold text-center text-[#012863]  md:text-[80px] text-[40px]">TRANSPORT ANYTHING <br /> FROM ANYWHERE.</h2>
        </div >
    );
};

export default Banner;