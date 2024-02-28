import { FaShip } from "react-icons/fa";

const Service = ({ service }) => {
    const { title, description } = service
    return (
        <div className="main-angel hover:bg-[#012863] w-full mr-10">
            <div className=" bg-[#FFFFFF] md:w-[25rem] w-full md:p-16  p-6 hover:bg-[#012863] group time-duration hover:text-white">
                <FaShip className="md:text-8xl text-6xl text-[#D51B28] mx-auto  get-btn" />
                <div className="text-center">
                    <h2 className="uppercase text-2xl text-[#012863] font-semibold group-hover:text-[#D51B28]">{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;