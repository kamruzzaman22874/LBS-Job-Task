"use client"
import { useEffect, useState } from "react";
import Expert from "./Expert";

const Experts = () => {
    const [experties, setExperties] = useState([])
    useEffect(() => {
        fetch("experts.json")
            .then(res => res.json())
            .then(data => {
                setExperties(data)
            })
    }, [])

    return (
        <div className="sm:w-11/12 w-9/12 mx-auto">
            <div className="text-center pt-20 py-20">
                <p className="text-[#D51B28]">TEAM</p>
                <h1 className="text-3xl text-[#012863] font-bold">OUR EXPERTS</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-5 bg-[#FFFFFF]">
                {
                    experties?.map(expert => <Expert key={ expert.id } expert={ expert }></Expert>)
                }
            </div>
        </div >
    );
};

export default Experts;
