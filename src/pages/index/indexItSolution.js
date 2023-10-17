import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import hero1 from '../../assets/images/hero1.png';
import ab03 from '../../assets/images/about/ab03.jpg';
import ab02 from '../../assets/images/about/ab02.jpg';
import ab01 from '../../assets/images/about/ab01.jpg';
import shape_image from '../../assets/images/shape-image.png';

import Navbar from '../../component/Navbar/navbar'
import Footer from '../../component/Footer/footer';
import UserFeedBack from '../../component/userFeedBack';
import CookieModal from '../../component/cookieModal';
import Blog from '../../component/blog';
import CompanyLogo from '../../component/companyLogo';

import ModalVideo from 'react-modal-video'
import "../../../node_modules/react-modal-video/css/modal-video.css";
import CountUp from 'react-countup';

import * as Icon from 'react-feather'
import {BiLineChart, LiaCrosshairsSolid, FiAirplay, GoRocket, GoClock, LuUsers, FiFileText, LuSearch, MdOutlineEventNote, FaRegEnvelope} from '../../assets/icons/icons'

export default function IndexItSolution() {
    const [isOpen, setOpen] = useState(false)

    const itSolutionData = [
        {
            icon: BiLineChart,
            title: 'Hign Performance'
        },
        {
            icon: LiaCrosshairsSolid,
            title: 'Best Securities'
        },
        {
            icon: FiAirplay,
            title: 'Trusted Service'
        },
        {
            icon: GoRocket,
            title: 'Info Technology'
        },
        {
            icon: GoClock,
            title: '24/7 Support'
        },
        {
            icon: LuUsers,
            title: 'IT Management'
        },
        {
            icon: FiFileText,
            title: 'Certified Company'
        },
        {
            icon: LuSearch,
            title: 'Data Analytics'
        },
    ]
    return (
        <>
            <Navbar navClass="nav-light" />

            <section className="relative table w-full py-36 pb-0 lg:py-44 lg:pb-0 bg-indigo-600 bg-[url('../../assets/images/bg2.png')] bg-center bg-no-repeat bg-cover">
                <div className="container relative">
                    <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                        <div className="lg:col-span-7">
                            <div className="md:me-6 md:mb-20">
                                <h5 className="text-lg text-white/60">We are creative</h5>
                                <h4 className="font-semibold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-white">Best IT Solution <br /> Company</h4>
                                <p className="text-white/60 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                                <div className="mt-6">
                                    <Link to="/contact-one" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700 rounded-md me-2 mt-2"><FaRegEnvelope className="me-2 text-sm"/> Get Started</Link>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <img src={hero1} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <div className="relative">
                <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-gray-50 dark:text-slate-800">
                    <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

            <section className="py-6 bg-gray-50 dark:bg-slate-800">
                <div className="container relative">
                   <CompanyLogo/>
                </div>
            </section>

            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">What we do ?</h3>
                        <p className="text-slate-400 max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                        {
                            itSolutionData.map((data,index) => {
                                const Icons = data.icon
                                return (
                                    <div key={index} className="group relative p-6 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center">
                                        <div className="relative overflow-hidden text-transparent -m-3">
                                            <Icon.Hexagon className="h-24 w-24 fill-indigo-600/5 group-hover:fill-white/10 mx-auto"></Icon.Hexagon>
                                            <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded-xl group-hover:text-white transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                                                <Icons className="w-7 h-7"/>
                                            </div>
                                        </div>

                                        <div className="mt-6">
                                            <Link to="#" className="text-lg font-medium group-hover:text-white transition-all duration-500 ease-in-out">{data.title}</Link>
                                            <p className="text-slate-400 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-3">It is a long established fact that a reader.</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="lg:col-span-5 md:col-span-6">
                            <div className="grid grid-cols-12 gap-6 items-center">
                                <div className="col-span-6">
                                    <div className="grid grid-cols-1 gap-6">
                                        <img src={ab03} className="shadow rounded-md" alt="" />
                                        <img src={ab02} className="shadow rounded-md" alt="" />
                                    </div>
                                </div>

                                <div className="col-span-6">
                                    <div className="grid grid-cols-1 gap-6">
                                        <img src={ab01} className="shadow rounded-md" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7 md:col-span-6">
                            <div className="lg:ms-5">
                                <div className="flex mb-4">
                                    <span className="text-indigo-600 text-2xl font-bold mb-0"><CountUp className="counter-value text-6xl font-bold" end={15} start={1} />+</span>
                                    <span className="self-end font-medium ms-2">Years <br /> Experience</span>
                                </div>

                                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Who we are ?</h3>

                                <p className="text-slate-400 max-w-xl">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content.</p>

                                <div className="mt-6">
                                    <Link to="/contact-one" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2"><FaRegEnvelope className="me-2 text-sm"/> Contact us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="md:col-span-6 order-1 md:order-2">
                            <div className="lg:ms-8">
                                <img src={shape_image} alt="" />
                            </div>
                        </div>

                        <div className="md:col-span-6 order-2 md:order-1">
                            <div className="lg:me-5">
                                <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Fast & Effective</h6>
                                <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Powerful Digitalization <br /> With Techwind</h3>

                                <p className="text-slate-400 max-w-xl mb-6">Get instant helpful resources about anything on the go, easily implement secure money transfer solutions, boost your daily efficiency, connect to other app users and create your own Techwind network, and much more with just a few taps. commodo consequat. Duis aute irure.</p>

                                <Link to="/page-services" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"><MdOutlineEventNote className="me-2 text-lg"/> Get Started</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-20 w-full table relative bg-[url('../../assets/images/team.jpg')] bg-center bg-no-repeat bg-cover">
                <div className="absolute inset-0 bg-black/70"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center">
                        <h3 className="mb-4 md:text-3xl text-2xl text-white font-medium">Stop leaving money on the table.</h3>

                        <p className="text-white/70 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>

                        <Link to="#" onClick={() => setOpen(true)} data-type="youtube" data-id="S_CGed6E610" className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 mx-auto mt-10">
                            <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                        </Link>
                    </div>
                </div>
            </section>
            
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)} />
             <section className="relative md:mt-24 mt-16">         
                <UserFeedBack />
             </section>
            <Blog className="container relative md:mt-24 mt-16 mb-16" />
            <Footer />
            <CookieModal />
        </>
    )
}
