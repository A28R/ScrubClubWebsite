import React from 'react';
import img from '../images/sedanservice.svg'; 
import img2 from '../images/suvservice.svg';
import img3 from '../images/truckservice.svg';
import img4 from '../images/trashservice.svg';
import checkmark from '../images/graycheckmark.png';



const Services = () => {

    return (
        <div id="services" className="bg-gray-100 py-12" >
            <section data-aos="zoom-in-down">
                    <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-[#004AAD] uppercase font-bold">services</h2>
                        
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-[#004AAD]'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-[#004AAD]">We offer a variety of specialized services</h2>
                    </div>

                    <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            
                            <div className="bg-[#0CC0DF] transition-all ease-in-out duration-400  overflow-hidden text-[#004AAD]  hover:bg-[#004AAD]  hover:text-[#0CC0DF]  rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                                    <h2 className="font-extrabold mt-4 mb-2 text-2xl uppercase text-center">Sedan</h2>

                                    <span className="flex flex-row w-full justify-center items-center">
                                        <div className='font-semibold  text-2xl px-1 text-center'>Interior </div>
                                        <div className='font-medium  text-2xl px-1 text-center'>|</div>
                                        <div className="font-normal  text-2xl px-1 text-center" > <span className='text-[18px]'>$</span>35</div>
                                    </span>
                                    <span className="flex flex-row w-full justify-center items-center">
                                        <div className='font-semibold  text-2xl px-1 text-center'>Exterior </div>
                                        <div className='font-medium  text-2xl px-1 text-center'>|</div>
                                        <div className="font-normal  text-2xl px-1 text-center" > <span className='text-[18px]'>$</span>25</div>
                                    </span>
                                    <span className="flex flex-row w-full justify-center items-center mb-6">
                                        <div className='font-semibold  text-2xl px-1 text-center'>Interior & Exterior </div>
                                        <div className='font-medium  text-2xl px-1 text-center'>|</div>
                                        <div className="font-normal  text-2xl px-1 text-center" > <span className='text-[18px]'>$</span>45</div>
                                    </span>
                                </div>
                            </div>

                            <div className="bg-[#0CC0DF] transition-all ease-in-out duration-400  overflow-hidden text-[#004AAD]  hover:bg-[#004AAD] hover:text-[#0CC0DF] rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
                                    <h2 className="font-extrabold mt-4 mb-2 text-2xl uppercase text-center">SUV</h2>
                                    <span className="flex flex-row w-full justify-center items-center">
                                        <div className='font-semibold  text-2xl px-1 text-center'>Interior </div>
                                        <div className='font-medium  text-2xl px-1 text-center'>|</div>
                                        <div className="font-normal  text-2xl px-1 text-center" > <span className='text-[18px]'>$</span>40</div>
                                    </span>
                                    <span className="flex flex-row w-full justify-center items-center">
                                        <div className='font-semibold  text-2xl px-1 text-center'>Exterior </div>
                                        <div className='font-medium  text-2xl px-1 text-center'>|</div>
                                        <div className="font-normal  text-2xl px-1 text-center" > <span className='text-[18px]'>$</span>30</div>
                                    </span>
                                    <span className="flex flex-row w-full justify-center items-center mb-6">
                                        <div className='font-semibold  text-2xl px-1 text-center'>Interior & Exterior </div>
                                        <div className='font-medium  text-2xl px-1 text-center'>|</div>
                                        <div className="font-normal  text-2xl px-1 text-center" > <span className='text-[18px]'>$</span>55</div>
                                    </span>
                                </div>
                            </div>

                            <div className="bg-[#0CC0DF] transition-all ease-in-out duration-400  overflow-hidden text-[#004AAD]  hover:bg-[#004AAD]  hover:text-[#0CC0DF] rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                                    <h2 className="font-extrabold mt-4 mb-2 text-2xl uppercase text-center ">Truck / Van / Large SUV</h2>
                                    <span className="flex flex-row w-full justify-center items-center">
                                        <div className='font-semibold  text-2xl px-1 text-center'>Interior </div>
                                        <div className='font-medium  text-2xl px-1 text-center'>|</div>
                                        <div className="font-normal  text-2xl px-1 text-center" > <span className='text-[18px]'>$</span>45</div>
                                    </span>
                                    <span className="flex flex-row w-full justify-center items-center">
                                        <div className='font-semibold  text-2xl px-1 text-center'>Exterior </div>
                                        <div className='font-medium  text-2xl px-1 text-center'>|</div>
                                        <div className="font-normal  text-2xl px-1 text-center" > <span className='text-[18px]'>$</span>35</div>
                                    </span>
                                    <span className="flex flex-row w-full justify-center items-center mb-6">
                                        <div className='font-semibold  text-2xl px-1 text-center'>Interior & Exterior </div>
                                        <div className='font-medium  text-2xl px-1 text-center'>|</div>
                                        <div className="font-normal  text-2xl px-1 text-center" > <span className='text-[18px]'>$</span>65</div>
                                    </span>
                                </div>
                            </div>

                            <div className="bg-[#0CC0DF] transition-all ease-in-out duration-400  overflow-hidden text-[#004AAD]  hover:bg-[#004AAD]  hover:text-[#0CC0DF] rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img4} />
                                    <h2 className="font-extrabold mt-4 mb-2 text-2xl uppercase text-center ">Pressure Washing</h2>
                                    <span className="flex flex-row w-full justify-center items-center">
                                        <div className='font-semibold  text-2xl px-1 text-center'>Trash Cans </div>
                                        <div className='font-medium  text-2xl px-1 text-center'>|</div>
                                        <div className="font-normal  text-2xl px-1 text-center" > <span className='text-[18px]'>$</span>10</div>
                                    </span>

                                        <div className='mt-3 font-normal px-7  text-lg  text-center'>Need something pressure washed? Contact us today and we can give you a quote! </div>



                                </div>
                            </div>                    
                        </div>
                    </div>
            </section>

            <section>
                <div className="m-auto max-w-100% p-2 md:p-12 h-5/6">
                    <div className="flex flex-col lg:flex-row py-8 justify-center lg:text-left" data-aos="zoom-out">
                        <div className="lg:w-3/8 px-8 flex flex-col mx-12 lg:mx-4 justify-start">

                                <span className='text-4xl lg:text-5xl mt-8 text-[#004AAD] font-bold'>Interior</span>
                                <div className='flex justify-start my-2'>
                            <div className='w-24 border-b-4 border-[#004AAD]'></div>
                        </div>
                            <div className='flex flex-col items-start justify-center mt-3'>
                                <div className='flex flex-row my-1 items-center justify-center'>
                                    <img src={checkmark} alt="checkmark" className='w-8'/>
                                    <span className='text-gray-500 lg:text-2xl text-xl'>Stain and Dirt Removal</span>
                                </div>
                                <div className='flex flex-row my-1 items-center justify-center'>
                                    <img src={checkmark} alt="checkmark" className='w-8'/>
                                    <span className='text-gray-500 lg:text-2xl text-xl'>Trash and Pet Hair Removal</span>
                                </div>
                                <div className='flex flex-row my-1 items-center justify-center'>
                                    <img src={checkmark} alt="checkmark" className='w-8'/>
                                    <span className='text-gray-500 lg:text-2xl text-xl'>Window and Sunroof Cleaning</span>
                                </div>
                                <div className='flex flex-row my-1 items-center justify-center'>
                                    <img src={checkmark} alt="checkmark" className='w-8'/>
                                    <span className='text-gray-500 lg:text-2xl text-xl'>Comprehensive Vacuuming</span>
                                </div>
                                <div className='flex flex-row  items-center h-20 justify-center'>
                                    <img src={checkmark} alt="checkmark" className='w-8'/>
                                    <span className='text-gray-500 lg:text-2xl text-xl'>Scented Seat and Dashboard Cleaning</span>
                                </div>
                            </div>  
                        </div>
                        <div className="lg:w-3/8 px-8 flex flex-col mx-12 lg:mx-4 justify-start">

                                <span className='text-4xl lg:text-5xl mt-8 text-[#004AAD] font-bold'>Exterior</span>
                                <div className='flex justify-start my-2'>
                            <div className='w-24 border-b-4 border-[#004AAD]'></div>
                        </div>
                                
                                <div className='flex flex-col  items-start justify-center mt-3'>
                                <div className='flex flex-row my-1 items-center justify-center'>
                                    <img src={checkmark} alt="checkmark" className='w-8'/>
                                    <span className='text-gray-500 lg:text-2xl text-xl'>Full Body Rinse</span>
                                </div>
                                <div className='flex flex-row my-1 items-center justify-center'>
                                    <img src={checkmark} alt="checkmark" className='w-8'/>
                                    <span className='text-gray-500 lg:text-2xl text-xl'>Complete exterior Foam Wash / Pressure Wash</span>
                                </div>
                                <div className='flex flex-row my-1 items-center justify-center'>
                                    <img src={checkmark} alt="checkmark" className='w-8'/>
                                    <span className='text-gray-500 lg:text-2xl text-xl'> Full Car Scrub / Microfiber Towel Dry</span>
                                </div>
                                <div className='flex flex-row my-1 items-center justify-center'>
                                    <img src={checkmark} alt="checkmark" className='w-8'/>
                                    <span className='text-gray-500 lg:text-2xl text-xl'>Wheel and Tire Shine</span>
                                </div>
                                <div className='flex flex-row my-1 items-center justify-center'>
                                    <img src={checkmark} alt="checkmark" className='w-8'/>
                                    <span className='text-gray-500 lg:text-2xl text-xl'>Window and Sunroof Clean</span>
                                </div>
                            </div> 
                        </div>
                        <div className="lg:w-2/8 px-8  flex flex-col mx-12 lg:mx-4 justify-start">

                                <span className='text-4xl lg:text-5xl mt-8 text-[#004AAD] font-bold'>Trash Cans</span>
                                <div className='flex justify-start my-2'>
                            <div className='w-24 border-b-4 border-[#004AAD]'></div>
                        </div>
                            <div className='flex flex-col items-start justify-center mt-3'>
                                <div className='flex flex-row my-1 items-center justify-center'>
                                    <img src={checkmark} alt="checkmark" className='w-8'/>
                                    <span className='text-gray-500 lg:text-2xl text-xl'>Full Pressure Wash</span>
                                </div>
                                <div className='flex flex-row my-1 items-center justify-center'>
                                    <img src={checkmark} alt="checkmark" className='w-8'/>
                                    <span className='text-gray-500 lg:text-2xl text-xl'>Heavy Duty Soap Cleaning</span>
                                </div>
                                <div className='flex flex-row my-1 items-center justify-center'>
                                    <img src={checkmark} alt="checkmark" className='w-8'/>
                                    <span className='text-gray-500 lg:text-2xl text-xl'>Fresh Scented Finish</span>
                                </div>

                            </div>  
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services;