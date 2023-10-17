import React from 'react'
import { Link } from 'react-router-dom';

import image from '../../assets/images/client/01.jpg';
import image1 from '../../assets/images/client/05.jpg';
import image2 from '../../assets/images/client/02.jpg';
import image3 from '../../assets/images/client/04.jpg';
import image4 from '../../assets/images/client/03.jpg';
import image5 from '../../assets/images/client/06.jpg';
import image6 from '../../assets/images/client/05.jpg';
import image7 from '../../assets/images/client/02.jpg';
import image8 from '../../assets/images/client/04.jpg';
import image9 from '../../assets/images/client/03.jpg';
import image10 from '../../assets/images/client/06.jpg';
import image11 from '../../assets/images/client/05.jpg';
import image12 from '../../assets/images/client/02.jpg';

import Navbar from '../../component/Navbar/navbar'
import Footer from '../../component/Footer/footer';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import {FiPhone, MdKeyboardArrowRight} from "../../assets/icons/icons"


export default function PageTestimonial() {
    const pageTest = [
        {
            image: image,
            name: 'Thomas Israel',
            role: 'Student',
            desc: "I didn't know a thing about icon design until I read this book. Now I can create any icon I need in no time. Great resource!"
        },
        {
            image: image1,
            name: 'Barbara McIntosh',
            role: 'Student',
            desc: "There are so many things I had to do with my old software that I just don't do at all with Techwind. Suspicious but I can't say I don't love it."
        },
        {
            image: image2,
            name: 'Carl Oliver',
            role: 'Student',
            desc: "The best part about Techwind is every time I pay my employees, my bank balance doesn't go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined."
        },
        {
            image: image3,
            name: 'Jill Webb',
            role: 'Student',
            desc: "I'm trying to get a hold of someone in support, I'm in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away."
        },
        {
            image: image4,
            name: 'Barbara McIntosh',
            role: 'Student',
            desc: "I used to have to remit tax to the EU and with Techwind I somehow don't have to do that anymore. Nervous to travel there now though."
        },
        {
            image: image5,
            name: 'Janisha Doll',
            role: 'Student',
            desc: "This is the fourth email I've sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important."
        },
        {
            image: image,
            name: 'Thomas Israel',
            role: 'Student',
            desc: "I didn't know a thing about icon design until I read this book. Now I can create any icon I need in no time. Great resource!"
        },
        {
            image: image6,
            name: 'Barbara McIntosh',
            role: 'Student',
            desc: "There are so many things I had to do with my old software that I just don't do at all with Techwind. Suspicious but I can't say I don't love it."
        },
        {
            image: image7,
            name: 'Carl Oliver',
            role: 'Student',
            desc: "The best part about Techwind is every time I pay my employees, my bank balance doesn't go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined."
        },
        {
            image: image8,
            name: 'Jill Webb',
            role: 'Student',
            desc: "I'm trying to get a hold of someone in support, I'm in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away."
        },
        {
            image: image9,
            name: 'Barbara McIntosh',
            role: 'Student',
            desc: "I used to have to remit tax to the EU and with Techwind I somehow don't have to do that anymore. Nervous to travel there now though."
        },
        {
            image: image10,
            name: 'Janisha Doll',
            role: 'Student',
            desc: "This is the fourth email I've sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important."
        },
        {
            image: image,
            name: 'Thomas Israel',
            role: 'Student',
            desc: "I didn't know a thing about icon design until I read this book. Now I can create any icon I need in no time. Great resource!"
        },
        {
            image: image11,
            name: 'Barbara McIntosh',
            role: 'Student',
            desc: "There are so many things I had to do with my old software that I just don't do at all with Techwind. Suspicious but I can't say I don't love it."
        },
        {
            image: image12,
            name: 'Carl Oliver',
            role: 'Student',
            desc: "The best part about Techwind is every time I pay my employees, my bank balance doesn't go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined."
        }
    ]
    return (
        <>
            <Navbar navClass="nav-light" />
            <section className="relative table w-full py-36 lg:py-44 bg-[url('../../assets/images/services.jpg')] bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-black opacity-75"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-10">
                        <h5 className="text-white/50 text-lg font-medium">Testimonial</h5>
                        <h3 className="mt-2 md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Client's Review</h3>
                    </div>
                </div>
                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="tracking-[0.5px]  mb-0 inline-flex items-center space-x-1">
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/index">Techwind</Link></li>
                        <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link to="#">Company</Link></li>
                        <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Testimonial</li>
                    </ul>
                </div>
            </section>

            <div className="relative">
                <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
                    <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div id="grid" className=" mt-4 ">
                 <ResponsiveMasonry  columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                    <Masonry columnsCount={3}> 
                        {pageTest.map((data,index) => {
                            return (
                                <div className=" p-4 picture-item" key={index}>
                                    <div className="rounded-lg shadow dark:shadow-gray-800 p-6">
                                        <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                                            <img src={data.image} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt="" />

                                            <div className="ps-4">
                                                <Link to = "#"className="text-lg hover:text-indigo-600 duration-500 ease-in-out">{data.name}</Link>
                                                <p className="text-slate-400">{data.role}</p>
                                            </div>
                                        </div>

                                        <div className="mt-6">
                                            <p className="text-slate-400">{data.desc}</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2 space-x-1">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Masonry>
                </ResponsiveMasonry>      
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 text-center">
                        <h6 className="text-indigo-600 text-sm font-bold mb-2">Available for freelance projects</h6>
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Do you have digital project? <br /> Let's talk.</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>

                        <div className="mt-6">
                            <Link to="/contact-one" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-4"><FiPhone className="me-1 text-lg"/> Contact us</Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
