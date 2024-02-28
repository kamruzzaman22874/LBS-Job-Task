const Help = () => {
    const helpImg = {
        backgroundImage: "url('https://i.ibb.co/xgmbrHv/help-cta-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        // height: "100vh", // Set the height as needed
    };
    return (
        <div style={ helpImg } className="h-[150px]">
            <div className="w-full  bg-gradient-radial from-[#db1c29]  to-[#d51b28] h-full">
                <div className="flex sm:flex-row flex-col sm:justify-between gap-5 justify-center items-center h-full md:px-20 px-10">
                    <h2 className="text-white md:text-3xl text-lg">NEW TO CARGO SERVICE? NEED HELP?</h2>
                    <button className="bg-red-600 px-4 py-2 border-2 hover:border-[#012863] text-white main-angel hover:bg-[#012863] hover:text-white">Get A Quote</button>
                </div>
            </div>
        </div>
    );
};

export default Help;
