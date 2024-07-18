import React from 'react';
import img from '../images/intro.jpg';
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <>
                <div className="m-auto max-w-100% p-2 md:p-12 h-5/6 bg-[#5CE1E6]" id='about' >

                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <img alt="card img" className="rounded-3xl float-right" src={img}  />
                        </div>
                        <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">
                            
                            <h3 className="text-3xl  text-[#004AAD] font-extrabold">Introducing Scrub Club</h3>
                            <div>
                                <p className='mt-2 mb-4 text-2xl text-[#004AAD] font-semibold'>Get the cleaning you deserve from the comfort of your house! </p>
                            </div>
                            
                            <div>
                                <p className='my-3 text-xl text-[#004AAD] font-normal'>Hey! We're Scrub Club, a come-to-you cleaning and detailing business that serves the greater Collegeville Area. <br></br><br></br> Ever since we first created Scrub Club, we have had one goal: to give customers the cleaning they deserve for an affordable price, and even after many months, this mission remains our first priority. <br></br><br></br> With our state-of-the-art equipment and cleaning experience, we make cleaning efficient, easy and effortless. <br></br><br></br> What are you waiting for? <Link to="/cleaning#cleaning" className='font-bold'>Join the club!</Link></p>
                            </div>
                            <Link to="/contact" className="text-white bg-[#004AAD] hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group">
                                Contact us
                                <svg className="w-4 h-4 ml-1 group-hover: translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </Link>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Intro;