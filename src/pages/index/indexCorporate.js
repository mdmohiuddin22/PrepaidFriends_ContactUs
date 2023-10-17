import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import about2 from '../../assets/images/company/about2.png';
import cta_bg from '../../assets/images/cta-bg.jpg';
import background from '../../assets/images/corporate/1.jpg';
import background1 from '../../assets/images/corporate/2.jpg';

import Navbar from '../../component/Navbar/navbar'
import Footer from '../../component/Footer/footer';
import UserFeedBack from '../../component/userFeedBack';
import Blog from '../../component/blog';
import CookieModal from '../../component/cookieModal';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import ModalVideo from 'react-modal-video'
import "../../../node_modules/react-modal-video/css/modal-video.css";

import * as Icon from 'react-feather'

import {MdKeyboardArrowRight, FaArrowRight, RiPresentationFill, LiaFileInvoiceDollarSolid,LiaMoneyCheckAltSolid, RiMastercardLine, BsCheckCircle} from '../../assets/icons/icons'

export default function IndexCorporate() {
    const [isOpen, setOpen] = useState(false)
    
 const keyfeatureData = [
    {
        icon :Icon.Monitor,
        title:'Fully Responsive'
    },
    {
        icon :Icon.Heart,
        title:'Browser Compatibility'
    },
    {
        icon :Icon.Eye,
        title:'Retina Ready'
    },
    {
        icon :Icon.Layout,
        title:'Based On Tailwindcss 3'
    },
    {
        icon :Icon.Feather,
        title:'Feather Icons'
    },
    {
        icon :Icon.Code,
        title:'Built With SASS'
    },
    {
        icon :Icon.UserCheck,
        title:'W3c Valid Code'
    },
    {
        icon :Icon.Globe,
        title:'Browsers Compatible'
    },
    {
        icon :Icon.Settings,
        title:'Easy to customize'
    }
 ]
 const aboutData = [
    {
        icon:RiPresentationFill,
        title:"Best Financial Advice",
        desc:"The most well-known which is said to have originated", 
    },
    {
        icon:LiaFileInvoiceDollarSolid,
        title:"Authorised Finance Brand",
        desc:"The most well-known which is said to have originated", 
    },
    {
        icon:LiaMoneyCheckAltSolid,
        title:"Compehensive Advices",
        desc:"The most well-known which is said to have originated", 
    },
    {
        icon:RiPresentationFill,
        title:"Best Tax Advantages",
        desc:"The most well-known which is said to have originated", 
    },
]
    return (
        <>
            <Navbar navClass="nav-light" />

            <section className="swiper-slider-hero relative block h-screen" id="home">

                <div className="swiper-container swiper-container-initialized swiper-container-horizontal h-full">
                    <Swiper
                        className='swiper-wrapper'
                        spaceBetween={50}
                        slidesPerView={1}
                        onSwiper={(swiper) => console.log(swiper)}
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        navigation={true}
                    >
                        <SwiperSlide>
                            <div className="swiper-slide flex items-center overflow-hidden" style={{ backgroundImage: `url(${background})` }}>
                                <div className="slide-inner slide-bg-image flex items-center bg-center w-full" >
                                    <div className="absolute inset-0 bg-black/70"></div>
                                    <div className="container relative">
                                        <div className="grid grid-cols-1">
                                            <div className="text-center">
                                                <h1 className="font-semibold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">Discover the world of <br /> business</h1>
                                                <p className="text-white/70 text-lg max-w-xl mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                                                <div className="mt-6">
                                                    <Link className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Contact us</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide flex items-center overflow-hidden" style={{ backgroundImage: `url(${background1})` }}>
                                <div className="slide-inner slide-bg-image flex items-center bg-center w-full" >
                                    <div className="absolute inset-0 bg-black/70"></div>
                                    <div className="container relative">
                                        <div className="grid grid-cols-1">
                                            <div className="text-center">
                                                <h1 className="font-semibold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">Meet our brand <br /> new solution</h1>
                                                <p className="text-white/70 text-lg max-w-xl mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                                                <div className="mt-6">
                                                    <Link className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Get Started</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            
            <section className="relative bg-gray-50 dark:bg-slate-800 md:py-24 py-16">
                <div className="container relative">
                    <div className="grid grid-cols-1 justify-center">
                        <div className="relative z-2 transition-all duration-500 ease-in-out sm:-mt-[200px] -mt-[140px] m-0">
                            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[24px]">
                                {aboutData.map((item, index) => {
                                    let Icons = item.icon
                                    return(
                                        <div className="group p-6 md:px-4 rounded-lg shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 bg-white dark:bg-slate-900 text-center transition-all duration-500 ease-in-out">
                                        <div
                                            className="w-16 h-16 bg-indigo-600/5 text-indigo-600 rounded-lg text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                                            <Icons className="w-7 h-7"/>
                                        </div>
    
                                        <div className="content mt-7">
                                            <Link to="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">{item.title}</Link>
                                            <p className="text-slate-400 mt-3">{item.desc}</p>
    
                                            <div className="mt-5">
                                                <Link
                                                    className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read
                                                    More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="md:col-span-5">
                            <div className="relative">
                                <img src={about2} className="mx-auto" alt="" />
                                <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                    <Link to="#" onClick={() => setOpen(true)} data-id="S_CGed6E610"
                                        className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 dark:text-white">
                                        <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-7">
                            <div className="lg:ms-4">
                                <h4 className="mb-6 md:text-3xl text-2xl lg:leading-normal leading-normal font-medium">We are the largest <br /> Business expert </h4>
                                <p className="text-slate-400 max-w-xl">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available. Dummy texts have been in use by typesetters since the 16th century.</p>
                                <Link className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-3">Buy Now <i className="mdi mdi-chevron-right align-middle"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)} />

            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Key Features</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px] mt-8">
                        {keyfeatureData.map((item, index) => {
                            let Icons = item.icon
                             return(
                            <div className="lg:col-span-4 md:col-span-6" key={index}>
                                <div className="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                                    <div className="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full me-3">
                                        <Icons className="h-5 w-5 rotate-45"/>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="mb-0 text-lg font-medium">{item.title}</h4>
                                    </div>
                                </div>
                            </div>
                             )
                        })}
                    </div>

                    <div className="grid grid-cols-1 justify-center">
                        <div className="mt-6 text-center">
                            <Link to="/page-services" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2">See More<FaArrowRight className="ms-2 text-[10px]"/></Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16 md:pt-0 pt-0">
                <div className="container relative">
                    <div className="grid grid-cols-1 justify-center">
                        <div className="relative z-1">
                            <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                                <div className="lg:col-start-2 lg:col-span-10">
                                    <div className="relative">
                                        <img src={cta_bg} className="rounded-md shadow-lg" alt="" />
                                        <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                            <Link to="#" onClick={() => setOpen(true)} data-id="S_CGed6E610"
                                                className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 dark:text-white">
                                                <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="content md:mt-8">
                                <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                                    <div className="lg:col-start-2 lg:col-span-10">
                                        <div className="grid md:grid-cols-2 grid-cols-1 items-center">
                                            <div className="mt-8">
                                                <div className="section-title text-md-start">
                                                    <h6 className="text-white/50 text-lg font-semibold">Team</h6>
                                                    <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-white mt-2">Meet Experience <br /> Team Member</h3>
                                                </div>
                                            </div>

                                            <div className="mt-8">
                                                <div className="section-title text-md-start">
                                                    <p className="text-white/50 max-w-xl mx-auto mb-2">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                                    <Link className="text-white inline-flex items-center">Read More <MdKeyboardArrowRight className="text-xl ms-1"/></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 start-0 end-0 sm:h-2/3 h-4/5 bg-gradient-to-b from-indigo-500 to-indigo-600"></div>
            </section>

            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid lg:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="lg:col-span-5">
                            <div className="lg:text-start text-center">
                                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Our Comfortable Rates</h3>

                                <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>

                                <div className="mt-6">
                                    <Link to="/page-pricing" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2"><RiMastercardLine className="me-1 text-lg"/>  Subscribe Now</Link>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7 mt-8 lg:mt-0">
                            <div className="lg:ms-8">
                                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-[30px]">
                                    <div className="group border-b-[3px] dark:border-gray-700 relative shadow dark:shadow-gray-800 rounded-md md:scale-110 z-3 bg-white dark:bg-slate-900">
                                        <div className="p-6 py-8">
                                            <h6 className="font-bold uppercase mb-5 text-indigo-600">Starter</h6>

                                            <div className="flex mb-5">
                                                <span className="text-xl font-semibold">$</span>
                                                <span className="price text-4xl font-semibold mb-0">39</span>
                                                <span className="text-xl font-semibold self-end mb-1">/mo</span>
                                            </div>

                                            <ul className="list-none text-slate-400">
                                                <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Full Access</li>
                                                <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Source Files</li>
                                                <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Free Appointments</li>
                                                <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Enhanced Security</li>
                                            </ul>
                                            <Link className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Get Started</Link>
                                        </div>
                                    </div>

                                    <div className="group border-b-[3px] dark:border-gray-700 relative shadow dark:shadow-gray-800 rounded-md z-2 bg-gray-50 dark:bg-slate-800">
                                        <div className="p-6 py-8 md:ps-10">
                                            <h6 className="font-bold uppercase mb-5 text-indigo-600">Professional</h6>

                                            <div className="flex mb-5">
                                                <span className="text-xl font-semibold">$</span>
                                                <span className="price text-4xl font-semibold mb-0">59</span>
                                                <span className="text-xl font-semibold self-end mb-1">/mo</span>
                                            </div>

                                            <ul className="list-none text-slate-400 ">
                                                <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Full Access</li>
                                                <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Source Files</li>
                                                <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Free Appointments</li>
                                                <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Enhanced Security</li>
                                            </ul>
                                            <Link className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Try it Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" md:mt-24 mt-16" >
                  <UserFeedBack />
               </div>
                <Blog className="container relative md:mt-24 mt-16" />
            </section>
            <Footer />
            <CookieModal />
        </>
    )
}
