"use client"
import { FaCar } from "react-icons/fa";
import { GiCommercialAirplane } from "react-icons/gi";
import Service from "./Service";
import { useEffect, useState } from "react";
const Services = () => {
    const [services, setServices] = useState([])
    const servicesImg = {
        backgroundImage: "url('https://i.ibb.co/X8MmnyL/services-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        // height: "100vh", // Set the height as needed
    };
    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])
    return (
        <div style={servicesImg} className="md:px-20 px-10  py-10">
            <div className="text-center pt-20">
                <p className="text-[#D51B28]">SERVICES</p>
                <h1 className="text-3xl text-[#012863] font-bold">WHAT WE DO</h1>
            </div>
            <div className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3 justify-center gap-6 md:ml-8 mt-10 ">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;