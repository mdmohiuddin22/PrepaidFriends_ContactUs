import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import team1 from '../../assets/images/client/04.jpg';
import team2 from '../../assets/images/client/05.jpg';
import team3 from '../../assets/images/client/06.jpg';
import team4 from '../../assets/images/client/07.jpg';
import imageP from '../../assets/images/event/1.jpg';
import image1 from '../../assets/images/event/2.jpg';
import event1 from '../../assets/images/event/eve-sch/1.jpg';
import event2 from '../../assets/images/event/eve-sch/2.jpg';
import event3 from '../../assets/images/event/eve-sch/3.jpg';
import event4 from '../../assets/images/event/eve-sch/4.jpg';
import event5 from '../../assets/images/event/eve-sch/5.jpg';
import event6 from '../../assets/images/event/eve-sch/6.jpg';
import event7 from '../../assets/images/event/eve-sch/7.jpg';
import event8 from '../../assets/images/event/eve-sch/8.jpg';
import event9 from '../../assets/images/event/eve-sch/9.jpg';
import event10 from '../../assets/images/event/eve-sch/10.jpg';
import event11 from '../../assets/images/event/eve-sch/11.jpg';
import event12 from '../../assets/images/event/eve-sch/12.jpg';

import Navbar from '../../component/Navbar/navbar'
import Footer from '../../component/Footer/footer';
import Blog2 from '../../component/blog2';
import CookieModal from '../../component/cookieModal';

import ModalVideo from 'react-modal-video'
import "../../../node_modules/react-modal-video/css/modal-video.css";
import * as Icon from 'react-feather'
import {FaRegEnvelope, FaArrowRight, BsCheckCircle, GoClock, PiMapPinLight} from '../../assets/icons/icons'

export default function IndexEvent() {
    const [isOpen, setOpen] = useState(false);
    const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
     const [isOpenTab, setisOpen] = useState(0);

    const handleTabClick = (index) => {
        setisOpen(index);
    };

    useEffect(() => {
        document.documentElement.setAttribute("dir", "ltr");
        document.documentElement.classList.add('light')


        const interval = setInterval(() => {
            let startDate = new Date('June 25, 2024 16:37:52');
            let currentDate = new Date();
            const diff = startDate.getTime() - currentDate.getTime();

            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            setTime({ hours, minutes, seconds, days });
        }, 1000);

        return () => {
            clearInterval(interval);
        };

    }, []);
    const teamData = [
        {
            image:team1,
            name:'Jack John',
            title:'Speaker',
        },
        {
            image:team2,
            name:'Krista John',
            title:'Speaker',
        },
        {
            image:team3,
            name:'Roger Jackson',
            title:'Speaker',
        },
        {
            image:team4,
            name:'Johnny English',
            title:'Speaker',
        },
    ]
    const eventOne = [
        {
            image:event1,
            time:"09:00AM - 10:00AM",
            title:"Digital Conference Event Intro",
            desc:"The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century",
            speaker:"Raymond Turner"
        },
        {
            image:event2,
            time:"10:30AM - 11:30AM",
            title:"Conference On User Interface",
            desc:"The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century",
            speaker:"Cindy Morrison"
        },
        {
            image:event3,
            time:"12:00PM - 01:00PM",
            title:"Business World Event Intro",
            desc:"The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century",
            speaker:"Vincent Adams"
        },
        {
            image:event4,
            time:"02:00PM - 03:00PM",
            title:"Business Conference for professional",
            desc:"The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century",
            speaker:"Ana Heweit"
        },
    ]
    const eventTwo = [
        {
            image:event5,
            time:"09:00AM - 10:00AM",
            title:"Digital Conference Event Intro",
            desc:"The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century",
            speaker:"Raymond Turner"
        },
        {
            image:event6,
            time:"10:30AM - 11:30AM",
            title:"Conference On User Interface",
            desc:"The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century",
            speaker:"Cindy Morrison"
        },
        {
            image:event7,
            time:"12:00PM - 01:00PM",
            title:"Business World Event Intro",
            desc:"The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century",
            speaker:"Vincent Adams"
        },
        {
            image:event8,
            time:"02:00PM - 03:00PM",
            title:"Business Conference for professional",
            desc:"The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century",
            speaker:"Ana Heweit"
        },
    ]
    const eventThree = [
        {
            image:event9,
            time:"09:00AM - 10:00AM",
            title:"Digital Conference Event Intro",
            desc:"The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century",
            speaker:"Raymond Turner"
        },
        {
            image:event10,
            time:"10:30AM - 11:30AM",
            title:"Conference On User Interface",
            desc:"The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century",
            speaker:"Cindy Morrison"
        },
        {
            image:event11,
            time:"12:00PM - 01:00PM",
            title:"Business World Event Intro",
            desc:"The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century",
            speaker:"Vincent Adams"
        },
        {
            image:event12,
            time:"02:00PM - 03:00PM",
            title:"Business Conference for professional",
            desc:"The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century",
            speaker:"Ana Heweit"
        },
    ]
    return (
        <>
            <Navbar navClass="nav-light" />

            <section className="relative table w-full py-36 lg:py-64 bg-[url('../../assets/images/event/bg.jpg')] bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/90 to-fuchsia-600/90"></div>
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                        <div className="lg:col-span-8 md:col-span-7 md:order-1 order-2">
                            <h5 className="text-xl text-white/60 mb-3">October 11, 2022</h5>
                            <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-white">Join Our <br /> Web Design Seminar</h4>
                            <p className="text-white/60 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>

                            <div className="mt-8">
                                <Link to="/#ticket" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"><FaRegEnvelope  className="me-2 text-sm"/> Buy Ticket</Link>
                            </div>
                        </div>

                        <div className="lg:col-span-4 md:col-span-5 md:text-center md:order-2 order-1">
                            <Link to="#" onClick={() => setOpen(true)} data-id="S_CGed6E610" className="lightbox lg:h-24 h-20 lg:w-24 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white hover:bg-indigo-600 text-indigo-600 hover:text-white duration-500 ease-in-out mx-auto">
                                <i className="mdi mdi-play inline-flex items-center justify-center text-3xl"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)} />

            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="md:col-span-6">
                            <div className="grid grid-cols-12 gap-4 items-center">
                                <div className="col-span-7">
                                    <div className="grid grid-cols-1 gap-4">
                                        <img src={imageP} className="shadow rounded-lg" alt="" />
                                    </div>
                                </div>

                                <div className="col-span-5">
                                    <div className="grid grid-cols-1 gap-4">
                                        <img src={image1} className="shadow rounded-lg" alt="" />

                                        <div className="w-28 h-28 bg-indigo-600/10 rounded-lg"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-6">
                            <div className="lg:ms-5">
                                <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Outpace Your Competition</h6>
                                <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Get access to the full <br /> conference experience.</h3>

                                <p className="text-slate-400 max-w-xl mb-6">Get instant helpful resources about anything on the go, easily implement secure money transfer solutions, boost your daily efficiency, connect to other app users and create your own Techwind network, and much more with just a few taps. commodo consequat. Duis aute irure.</p>

                                <div className="flex mt-6">
                                    <PiMapPinLight className="text-indigo-600 text-4xl me-4 mt-2"/>
                                    <div className="">
                                        <h5 className="text-xl font-semibold mb-0">Location</h5>
                                        <p className="text-slate-400 mt-2">C/54 Northwest Freeway, <br /> Suite 558, Houston, <br /> USA 485</p>
                                    </div>
                                </div>

                                <div className="flex mt-6">
                                    <GoClock className="text-indigo-600 text-3xl me-4 mt-2"/>
                                    <div className="">
                                        <h5 className="text-xl font-semibold mb-0">Time</h5>
                                        <p className="text-slate-400 mt-2">October 11, 2022 <br /> 9:00A.M. - 12:00P.M.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Event Speakers</h6>
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Meet Our Speakers</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
                        {
                            teamData.map((item, index)=>{
                                return(
                                    <div className="lg:col-span-3 md:col-span-6" key={index}>
                                    <div className="group text-center">
                                        <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                                            <img src={item.image} className="" alt="" />
                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>
        
                                            <ul className="list-none space-x-1 absolute start-0 end-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out">
                                            <li className="inline"><Link to="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><Icon.Facebook className="h-4 w-4"></Icon.Facebook></Link></li>
                                                    <li className="inline"><Link to="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><Icon.Instagram className="h-4 w-4"></Icon.Instagram></Link></li>
                                                    <li className="inline"><Link to="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><Icon.Linkedin className="h-4 w-4"></Icon.Linkedin></Link></li>
                                            </ul>
                                        </div>
        
                                        <div className="content mt-3">
                                            <Link to="/index" className="text-lg font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">{item.name}</Link>
                                            <p className="text-slate-400">{item.title}</p>
                                        </div>
                                    </div>
                                </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

            <section className="relative table w-full py-36 bg-[url('../../assets/images/event/bg3.jpg')] bg-no-repeat bg-bottom bg-cover">
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/90 to-fuchsia-600/90"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center">
                        <div className="pb-8">
                            <h6 className="text-white/50 text-sm font-bold uppercase mb-2">Hurry up & Register</h6>
                            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold text-white">Not yet registered? <br /> Hurry up!</h3>
                            <p className="text-white/50 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                        <div id="countdown">
                            <ul className="count-down list-none inline-block text-white text-center mt-8">
                                <li id="days" className="text-[40px] leading-[110px] h-[130px] w-[130px] rounded-full shadow-md bg-white/10 backdrop-opacity-30 inline-block m-2">{time.days} <p className="count-head">Days</p></li>
                                <li id="hours" className="text-[40px] leading-[110px] h-[130px] w-[130px] rounded-full shadow-md bg-white/10 backdrop-opacity-30 inline-block m-2">{time.hours}<p className="count-head">Hours</p></li>
                                <li id="mins" className="text-[40px] leading-[110px] h-[130px] w-[130px] rounded-full shadow-md bg-white/10 backdrop-opacity-30 inline-block m-2">{time.minutes}<p className="count-head">Mins</p></li>
                                <li id="secs" className="text-[40px] leading-[110px] h-[130px] w-[130px] rounded-full shadow-md bg-white/10 backdrop-opacity-30 inline-block m-2">{time.seconds}<p className="count-head">Secs</p></li>
                                <li id="end" className="h1"></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Event Schedules</h3>
                        <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>

                    <div className="grid grid-cols-1 mt-8">
                        <ul className="md:w-fit w-full mx-auto flex-wrap justify-center text-center p-3 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md" id="myTab" data-tabs-toggle="#StarterContent" role="tablist">
                            <li role="presentation" className="md:inline-block block md:w-fit w-full">
                                <button onClick={() => handleTabClick(0)} className={`${isOpenTab === 0 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-center font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Tuesday</button>
                            </li>
                            <li role="presentation" className="md:inline-block block md:w-fit w-full">
                                <button onClick={() => handleTabClick(1)} className={`${isOpenTab === 1 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-center font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Wednesday</button>
                            </li>
                            <li role="presentation" className="md:inline-block block md:w-fit w-full">
                                <button onClick={() => handleTabClick(2)} className={`${isOpenTab === 2 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-center font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Thursday</button>
                            </li>
                            <li role="presentation" className="md:inline-block block md:w-fit w-full">
                                <button onClick={() => handleTabClick(3)} className={`${isOpenTab === 3 ?'text-white bg-indigo-600 hover:text-white' : ''} px-4 py-2 text-center font-semibold rounded-md w-full mt-3 hover:text-indigo-600 transition-all duration-500 ease-in-out`} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Friday</button>
                            </li>
                        </ul>

                        <div id="StarterContent" className="mt-1">
                            {isOpenTab === 0 ?
                                <div>
                                    <div className="grid grid-cols-1">
                                        <div className="relative overflow-x-auto block w-full bg-white dark:bg-slate-900">
                                            <table className="w-full text-start">
                                                <tbody>
                                                    {eventOne.map((item,index)=>{
                                                        return(
                                                        <tr key={index}>
                                                            <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[200px] text-slate-400">{item.time}</td>
                                                            <td className="p-3 border-b border-gray-100 dark:border-gray-700 min-w-[540px] py-12 px-5">
                                                                <div className="flex items-center">
                                                                    <img src={item.image} width={96} height={96} className="rounded-full h-24 w-24 shadow-md dark:shadow-gray-700" alt="" />
                                                                    <div className="ms-4">
                                                                        <Link to="#" className="hover:text-indigo-600 text-lg font-semibold">{item.title}</Link>
                                                                        <p className="text-slate-400 mt-2">{item.desc}</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px] text-slate-400">
                                                                <span className="block">Speaker</span>
                                                                <span className="block text-black dark:text-white text-md mt-1">{item.speaker}</span>
                                                            </td>
                                                            <td className="text-end border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px]">
                                                                <Link to="#" className="relative inline-flex items-center tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 font-medium hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Buy Ticket <FaArrowRight className='ms-2 text-xs'/></Link>
                                                            </td>
                                                        </tr>
                                                        )
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>:""
                            }
                            {isOpenTab === 1 ?
                                <div>
                                    <div className="grid grid-cols-1">
                                        <div className="relative overflow-x-auto block w-full bg-white dark:bg-slate-900">
                                            <table className="w-full text-start">
                                                <tbody>
                                                    {eventTwo.map((item,index)=>{
                                                            return(
                                                            <tr key={index}>
                                                                <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[200px] text-slate-400">{item.time}</td>
                                                                <td className="p-3 border-b border-gray-100 dark:border-gray-700 min-w-[540px] py-12 px-5">
                                                                    <div className="flex items-center">
                                                                        <img src={item.image} width={96} height={96} className="rounded-full h-24 w-24 shadow-md dark:shadow-gray-700" alt="" />
                                                                        <div className="ms-4">
                                                                            <Link to="#" className="hover:text-indigo-600 text-lg font-semibold">{item.title}</Link>
                                                                            <p className="text-slate-400 mt-2">{item.desc}</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px] text-slate-400">
                                                                    <span className="block">Speaker</span>
                                                                    <span className="block text-black dark:text-white text-md mt-1">{item.speaker}</span>
                                                                </td>
                                                                <td className="text-end border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px]">
                                                                    <Link to="#" className="relative inline-flex items-center tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 font-medium hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Buy Ticket <FaArrowRight className='ms-2 text-xs'/></Link>
                                                                </td>
                                                            </tr>
                                                            )
                                                        })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>:""
                            }
                            {isOpenTab === 2 ?
                                <div>
                                    <div className="grid grid-cols-1">
                                        <div className="relative overflow-x-auto block w-full bg-white dark:bg-slate-900">
                                            <table className="w-full text-start">
                                                <tbody>
                                                    {eventThree.map((item,index)=>{
                                                            return(
                                                            <tr key={index}>
                                                                <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[200px] text-slate-400">{item.time}</td>
                                                                <td className="p-3 border-b border-gray-100 dark:border-gray-700 min-w-[540px] py-12 px-5">
                                                                    <div className="flex items-center">
                                                                        <img src={item.image} width={96} height={96} className="rounded-full h-24 w-24 shadow-md dark:shadow-gray-700" alt="" />
                                                                        <div className="ms-4">
                                                                            <Link to="#" className="hover:text-indigo-600 text-lg font-semibold">{item.title}</Link>
                                                                            <p className="text-slate-400 mt-2">{item.desc}</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px] text-slate-400">
                                                                    <span className="block">Speaker</span>
                                                                    <span className="block text-black dark:text-white text-md mt-1">{item.speaker}</span>
                                                                </td>
                                                                <td className="text-end border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px]">
                                                                    <Link to="#" className="relative inline-flex items-center tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 font-medium hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Buy Ticket <FaArrowRight/></Link>
                                                                </td>
                                                            </tr>
                                                            )
                                                        })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>:""
                            }
                            {isOpenTab === 3 ?
                                <div>
                                    <div className="grid grid-cols-1">
                                        <div className="relative overflow-x-auto block w-full bg-white dark:bg-slate-900">
                                            <table className="w-full text-start">
                                                <tbody>
                                                {eventTwo.map((item,index)=>{
                                                    return(
                                                    <tr key={index}>
                                                        <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[200px] text-slate-400">{item.time}</td>
                                                        <td className="p-3 border-b border-gray-100 dark:border-gray-700 min-w-[540px] py-12 px-5">
                                                            <div className="flex items-center">
                                                                <img src={item.image} width={96} height={96} className="rounded-full h-24 w-24 shadow-md dark:shadow-gray-700" alt="" />
                                                                <div className="ms-4">
                                                                    <Link to="#" className="hover:text-indigo-600 text-lg font-semibold">{item.title}</Link>
                                                                    <p className="text-slate-400 mt-2">{item.desc}</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px] text-slate-400">
                                                            <span className="block">Speaker</span>
                                                            <span className="block text-black dark:text-white text-md mt-1">{item.speaker}</span>
                                                        </td>
                                                        <td className="text-end border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px]">
                                                            <Link to="#" className="relative inline-flex items-center tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 font-medium hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Buy Ticket <FaArrowRight/></Link>
                                                        </td>
                                                    </tr>
                                                    )
                                                })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>:""
                            }
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative table w-full py-36 bg-[url('../../assets/images/event/bg2.jpg')] bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/90 to-fuchsia-600/90"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center">
                        <Link to="#" onClick={() => setOpen(true)} data-id="S_CGed6E610" className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 mx-auto mb-12">
                            <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                        </Link>
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold text-white">Let's Make Something Together</h3>
                        <p className="text-white/80 max-w-xl mx-auto">The Biggest Event Ever</p>
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16" id="ticket">
                <div className="container relative">
                    <div className="grid lg:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="lg:col-span-5">
                            <div className="lg:text-start text-center">
                                <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">Secure Your Place Now</h6>

                                <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">This event is for you. <br /> Buy tickets now!</h3>

                                <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            </div>
                        </div>

                        <div className="lg:col-span-7 mt-8 lg:mt-0">
                            <div className="lg:ms-8">
                                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-[30px]">
                                    <div className="group border-b-[3px] dark:border-gray-700 relative shadow dark:shadow-gray-800 rounded-md md:scale-110 z-3 bg-white dark:bg-slate-900">
                                        <div className="p-6 py-8">
                                            <h6 className="font-bold uppercase mb-5 text-indigo-600">Personal</h6>

                                            <div className="flex mb-5">
                                                <span className="text-xl font-semibold">$</span>
                                                <span className="price text-4xl font-semibold mb-0">09</span>
                                                <span className="text-xl font-semibold self-end mb-1">/event</span>
                                            </div>

                                            <ul className="list-none text-slate-400">
                                                <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Full Access</li>
                                                <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Source Files</li>
                                                <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Free Appointments</li>
                                                <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Enhanced Security</li>
                                            </ul>
                                            <Link to="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Get Started</Link>
                                        </div>
                                    </div>

                                    <div className="group border-b-[3px] dark:border-gray-700 relative shadow dark:shadow-gray-800 rounded-md z-2 bg-gray-50 dark:bg-slate-800">
                                        <div className="p-6 py-8 md:ps-10">
                                            <h6 className="font-bold uppercase mb-5 text-indigo-600">Business</h6>

                                            <div className="flex mb-5">
                                                <span className="text-xl font-semibold">$</span>
                                                <span className="price text-4xl font-semibold mb-0">149</span>
                                                <span className="text-xl font-semibold self-end mb-1">/event</span>
                                            </div>

                                            <ul className="list-nonetext-slate-400">
                                                <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Full Access</li>
                                                <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Source Files</li>
                                                <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Free Appointments</li>
                                                <li className="mb-1 flex items-center"><BsCheckCircle className="text-indigo-600 text-base me-2"/> Enhanced Security</li>
                                            </ul>
                                            <Link to="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Try it Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Blog2 className={"container relative md:mt-24 mt-16"} id={""} />
            </section>
            <Footer />
            <CookieModal />
        </>
    )
}
