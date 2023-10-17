import React, { useState } from 'react'

import image11 from '../../assets/images/client/04.jpg';
import image12 from '../../assets/images/client/05.jpg';
import image13 from '../../assets/images/client/06.jpg';
import image14 from '../../assets/images/client/07.jpg';
import image from '../../assets/images/blog/01.jpg';
import image1 from '../../assets/images/blog/02.jpg';
import image2 from '../../assets/images/blog/03.jpg';
import { Link } from 'react-router-dom';

import avatar from '../../assets/images/avatar.jpg';
import ab2 from '../../assets/images/law/ab2.jpg';
import about2 from '../../assets/images/company/about2.png';
import cta_bg from '../../assets/images/cta-bg.jpg';

import Footer from '../../component/Footer/footer';
import CookieModal from '../../component/cookieModal';
import UserFeedBack from '../../component/userFeedBack';
import CompanyLogo from '../../component/companyLogo';
import SmallNavbar from '../../component/Navbar/smallNavbar';

import ModalVideo from 'react-modal-video'
import "../../../node_modules/react-modal-video/css/modal-video.css";

import * as Icon from 'react-feather';
import {FaArrowRight, MdKeyboardArrowRight, BsCheckCircle, RiMastercardLine} from '../../assets/icons/icons'

export default function IndexLandingFive() {
    const [isOpen, setOpen] = useState(false)

    const featureData = [
        {
            Icon:Icon.PieChart,
            title:"Profitable Marketing",
            desc:"We develop digital strategies, products and services appreciated by clients."
        },
        {
            Icon:Icon.Briefcase,
            title:"SEO Specialists",
            desc:"We develop digital strategies, products and services appreciated by clients."
        },
        {
            Icon:Icon.Target,
            title:"Audience Analysis",
            desc:"We develop digital strategies, products and services appreciated by clients."
        },
    ]
    const KeyFeature = [
        {
            Icon:Icon.Monitor,
            title:"Fully Responsive",
        },
        {
            Icon:Icon.Heart,
            title:"Browser Compatibility",
        },
        {
            Icon:Icon.Eye,
            title:"Retina Ready",
        },
        {
            Icon:Icon.Layout,
            title:"Based On Tailwindcss 3",
        }, 
        {
            Icon:Icon.Feather,
            title:"Feather Icons",
        },
        {
            Icon:Icon.Code,
            title:"Built With SASS",
        },
        {
            Icon:Icon.UserCheck,
            title:"W3c Valid Code",
        },
        {
            Icon:Icon.Globe,
            title:"Browsers Compatible",
        },
        {
            Icon:Icon.Settings,
            title:"Easy to customize",
        },
        
    ]
    const teamData = [
        {
            image:image11,
            name:"Jack John",
            title:"Designer"
        },
        {
            image:image12,
            name:"Krista John",
            title:"Designer"
        },
        {
            image:image13,
            name:"Roger Jackson",
            title:"Designer"
        },
        {
            image:image14,
            name:"Johnny English",
            title:"Designer"
        },
    ]
    const blogData = [
        {
            image:image,
            title:"Design your apps in your own way",
            desc:"The phrasal sequence of the is now so that many campaign and benefit"
        },
        {
            image:image1,
            title:"How apps is changing the IT world",
            desc:"The phrasal sequence of the is now so that many campaign and benefit"
        },
        {
            image:image2,
            title:"Smartest Applications for Business",
            desc:"The phrasal sequence of the is now so that many campaign and benefit"
        },
    ]
    return (
        <>
            <SmallNavbar/>

            <section className="relative py-40 lg:h-screen flex justify-center items-center bg-indigo-600/10 overflow-hidden" id="home">
                <div className="container relative">
                    <div className="grid lg:grid-cols-12 md:grid-cols-2 gap-[30px] mt-10 items-center">
                        <div className="lg:col-span-7">
                            <div className="md:text-start text-center">
                                <h1 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">Resources for <span className="text-indigo-600">makers &</span> <br /> <span className="text-indigo-600">Creative</span> to learn & grow</h1>
                                <p className="text-slate-400 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                                <div className="subcribe-form mt-6 mb-3">
                                    <form className="relative max-w-lg">
                                        <input type="email" id="subcribe" name="email" className="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800" placeholder="Your Email Address :" />
                                        <button type="submit" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide align-middle transition duration-500 ease-in-out text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-full">Try it for free <FaArrowRight className="ms-2 text-[10px]"/></button>
                                    </form>
                                </div>

                                <span className="text-slate-400 font-medium">Looking for help? <Link className="text-indigo-600">Get in touch with us</Link></span>
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="relative">
                                <div className="relative">
                                    <img src={avatar} className="lg:w-[400px] w-[280px] rounded-lg shadow dark:shadow-gray-800" alt="" />
                                    <div className="absolute top-0 translate-y-2/4 end-0 text-center">
                                        <Link onClick={() => setOpen(true)} data-type="youtube" data-id="S_CGed6E610" className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 dark:text-white">
                                            <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="absolute -end-5 -bottom-16">
                                    <img src={ab2} className="lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900 rounded-lg shadow dark:shadow-gray-800" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)} />
            <section className="py-6 border-t border-b border-gray-100 dark:border-gray-700">
                <div className="container relative">
                   <CompanyLogo/>
                </div>
            </section>

            <section className="relative md:py-24 py-16" id="features">
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Features</h6>
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Business strategies and top <br /> permormance ideas</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="grid md:grid-cols-3 grid-cols-1 mt-8 gap-[30px]">
                        {featureData.map((item,index)=>{
                            const Icon = item.Icon
                            return(
                                <div className="group text-center" key={index}>
                                <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-lg ltr:rotate-[15deg] rtl:-rotate-[15deg] flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                                    <Icon className="w-7 h-7 ltr:-rotate-[15deg] rtl:rotate-[15deg]"></Icon>
                                </div>
    
                                <div className="mt-8">
                                    <Link to="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">{item.title}</Link>
    
                                    <p className="text-slate-400 mt-4">{item.desc}</p>
    
                                    <div className="mt-4">
                                        <Link className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="md:col-span-5">
                            <div className="relative">
                                <img src={about2} className="mx-auto" alt="" />
                                <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                    <Link  onClick={() => setOpen(true)}  data-type="youtube" data-id="S_CGed6E610"
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

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Key Features</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px] mt-8">
                        {KeyFeature.map((item,index)=>{
                            const Icon = item.Icon
                            return(
                                <div className="lg:col-span-4 md:col-span-6" key={index}>
                                <div className="flex transition-all duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
                                    <div className="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full me-3">
                                        <Icon className="h-5 w-5 rotate-45"></Icon>
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
                            <Link className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">See More <MdKeyboardArrowRight className="text-xl ms-1"/></Link>
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
                                            <Link onClick={()=>setOpen(true)} data-type="youtube" data-id="S_CGed6E610"
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
                                                    <Link className="text-white flex items-center">Read More <MdKeyboardArrowRight className="text-xl ms-1"/></Link>
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

            <section className="relative md:py-24 py-16" id="pricing">
                <div className="container relative">
                    <div className="grid lg:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="lg:col-span-5">
                            <div className="lg:text-start text-center">
                                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Our Comfortable Rates</h3>

                                <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>

                                <div className="mt-6">
                                    <Link to="/page-pricing" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2"><RiMastercardLine className="me-1 text-lg"/> Subscribe Now</Link>
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

                                            <ul className="list-none text-slate-400">
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
            </section>

            <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="team">
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Our Professional Team</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
                        {teamData.map((item, index)=>{
                            return(
                                <div className="lg:col-span-3 md:col-span-6" key={index}>
                                    <div className="group text-center">
                                        <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                                            <img src={item.image} className="" alt="" />
                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

                                            <ul className="list-none space-x-1 absolute start-0 end-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out flex justify-center">
                                                <li><Link to="" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook h-4 w-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></Link ></li>
                                                <li><Link to="" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram h-4 w-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></Link ></li>
                                                <li><Link to="" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin h-4 w-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></Link ></li>
                                            </ul>
                                        </div>

                                        <div className="content mt-3">
                                            <Link to="" className="text-lg font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">{item.name}</Link >
                                            <p className="text-slate-400">{item.title}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <div className=" md:mt-24 mt-16" >
                  <UserFeedBack />
               </div>
            <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="blog">
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center">
                        <div className="md:col-span-6">
                            <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Blogs</h6>
                            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Reads Our Latest <br /> News & Blog</h3>
                        </div>

                        <div className="md:col-span-6">
                            <p className="text-slate-400 max-w-xl">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
                        {blogData.map((item,index)=>{
                            return(
                                <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden" key={index}>
                                    <img src={item.image} alt="" />

                                    <div className="content p-6">
                                        <Link to="/blog-detail" className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">{item.title}</Link>
                                        <p className="text-slate-400 mt-3">{item.desc}</p>

                                        <div className="mt-4">
                                            <Link to="/blog-detail" className="relative inline-flex items-center tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <Footer />
            <CookieModal />
        </>
    )
}
