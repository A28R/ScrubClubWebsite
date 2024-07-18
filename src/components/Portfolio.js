import React from 'react';
import result1 from '../images/result1.jpg';
import result2 from '../images/result2.jpg';
import result3 from '../images/result3.jpg';
import result4 from '../images/result4.jpg';

const Portfolio = () => {
    return (
        <>
            <div className="my-4 py-4" id='portfolio'>
                <h2 className="my-2 text-center text-3xl text-[#004AAD] uppercase font-bold">Results</h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-[#004AAD] mb-8'></div>
                </div>

                <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">                            
                        <div className="bg-[#0CC0DF] transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-3xl shadow-2xl min-h-max">
                            <div className=" text-justify text-sm">
                            <img alt="card img" className="rounded-3xl object-contain float-right" src={result1}  /> 
                            </div>
                        </div>

                        <div className="bg-[#0CC0DF] transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-3xl shadow-2xl ">
                        <div className=" text-justify text-sm">
                            <img alt="card img" className="rounded-3xl object-contain float-right" src={result2}  /> 
                            </div>
                        </div>

                        <div className="bg-[#0CC0DF] transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-3xl shadow-2xl ">
                        <div className=" text-justify text-sm">
                            <img alt="card img" className="rounded-3xl object-contain float-right" src={result3}  /> 
                            </div>
                        </div>

                        <div className="bg-[#0CC0DF] transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-3xl shadow-2xl ">
                        <div className=" text-justify text-sm">
                            <img alt="card img" className="rounded-3xl object-contain scale-[1.2] float-right" src={result4}  /> 
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;