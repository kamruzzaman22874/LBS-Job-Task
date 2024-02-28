"use client"
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import ExploreWork from "./ExploreWork";

const ExploreWorks = () => {
    const [works, setWorks] = useState([])
    useEffect(() => {
        fetch("explores.json")
            .then(res => res.json())
            .then(data => {
                setWorks(data)
            })
    }, [])
    return (
        <div className="my-6">
            <div className="md:ml-36 ml-16">
                <h5 className="text-[#bc101c] text-lg">EXPLORE RECENT WORKS</h5>
                <h1 className="text-[#113771] md:text-4xl text-2xl font-bold">MANAGING LOGISTICS FOR WORLD’S <br /> BEST COMPANIES.</h1>
            </div>
            <Marquee speed={100}>
                <div className="grid grid-cols-5  gap-10 my-5 w-full bg-[#FFFFFF] px-20 py-10">
                    {works?.map(work => <ExploreWork key={work.id} work={work}></ExploreWork>)}

                </div>
            </Marquee>

        </div>
    );
};

export default ExploreWorks;