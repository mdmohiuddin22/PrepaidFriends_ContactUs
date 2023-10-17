import React, { useEffect} from 'react'
import { Link } from 'react-router-dom';

import about1 from '../../assets/images/photography/about.jpg';
import amazon_prime_video_logo from '../../assets/images/client/amazon-prime-video-logo.svg';
import angular_3 from '../../assets/images/client/angular-3.svg';
import huawei_2 from '../../assets/images/client/huawei-2.svg';
import bosch from '../../assets/images/client/bosch.svg';
import coinbase from '../../assets/images/client/coinbase.svg';
import husd_3 from '../../assets/images/client/husd-3.svg';
import intercom_1 from '../../assets/images/client/intercom-1.svg';
import linkedin_logo_2013_1 from '../../assets/images/client/linkedin-logo-2013-1.svg';
import yamaha_2_1 from '../../assets/images/client/yamaha-2-1.svg';
import logo_donington_park from '../../assets/images/client/logo-donington-park.svg';
import microsoft_office_2013 from '../../assets/images/client/microsoft-office-2013.svg';
import netflix_3 from '../../assets/images/client/netflix-3.svg';
import python_3 from '../../assets/images/client/python-3.svg';
import redbull_1 from '../../assets/images/client/redbull-1.svg';
import zoom_communications_logo from '../../assets/images/client/zoom-communications-logo.svg';
import suntech_power_logo from '../../assets/images/client/suntech-power-logo.svg';
import v_power_1 from '../../assets/images/client/v-power-1.svg';

import CountUp from 'react-countup';

import PhotographyNavbar from '../../component/Navbar/photographyNavbar';
import PhotographyFooter from '../../component/Footer/photographyFooter';

import { FaArrowRight, FiPhone } from '../../assets/icons/icons'

export default function PhotographyAbout() {
    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('dark')
        htmlTag.classList.remove('light')
    });
    useEffect(() => {
        return () => {
            const htmlTag = document.getElementsByTagName("html")[0]
            htmlTag.classList.remove('dark')
        };
    }, []);

    const about = [
        {
            iamge: amazon_prime_video_logo
        },
        {
            iamge: angular_3
        },
        {
            iamge: huawei_2
        },
        {
            iamge: bosch
        },
        {
            iamge: coinbase
        },
        {
            iamge: husd_3
        },
        {
            iamge: intercom_1
        },
        {
            iamge: linkedin_logo_2013_1
        },
        {
            iamge: yamaha_2_1
        },
        {
            iamge: logo_donington_park
        },
        {
            iamge: microsoft_office_2013
        },
        {
            iamge: netflix_3
        },
        {
            iamge: python_3
        },
        {
            iamge: redbull_1
        },
        {
            iamge: zoom_communications_logo
        },
        {
            iamge: suntech_power_logo
        },
        {
            iamge: v_power_1
        }
    ]
    return (
        <>
           <PhotographyNavbar/>
            <section className="relative md:py-56 py-44 bg-[url('../../assets/images/photography/photographer.jpg')] bg-cover jarallax bg-fixed" id="aboutme">
                <div className="absolute inset-0 h-full w-full bg-gradient-to-t to-transparent via-white/80 dark:via-slate-900/80 from-white dark:from-slate-900"></div>

                <div className="absolute text-center p-6 bottom-0 start-0 end-0">
                    <h5 className="text-slate-900 dark:text-white/70 font-semibold text-lg">I'm Jack Jeffrey</h5>
                    <h3 className="md:text-3xl md:leading-normal text-2xl leading-normal font-bold">About Me</h3>
                </div>
            </section>
            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid grid-cols-1">
                        <div className="rounded-md shadow dark:shadow-gray-800 overflow-hidden">
                            <div className="md:flex items-center">
                                <div className="relative md:shrink-0">
                                    <img src={about1} className="h-full w-full object-cover lg:w-[500px] md:w-80 lg:h-full md:h-96" alt="" />
                                </div>

                                <div className="p-8">
                                    <div className="flex">
                                        <div className="w-1/2">
                                            <h2 className="text-3xl mb-2 font-bold"><CountUp className="counter-value" end={9} start={1} />+</h2>
                                            <h6 className="text-slate-400 mb-0">Years of Experience</h6>
                                        </div>
                                        <div className="w-1/2">
                                            <h2 className="text-3xl mb-2 font-bold"><CountUp className="counter-value" end={1542} start={40} />+</h2>
                                            <h6 className="text-slate-400 mb-0">Total Photo Click</h6>
                                        </div>
                                    </div>

                                    <p className="text-slate-400 dark:text-white mt-6">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script.</p>

                                    <Link to="/contact-two" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-slate-400 dark:text-white/70 dark:hover:text-white hover:text-indigo-600 after:bg-indigo-600 dark:after:bg-white duration-500 ease-in-out mt-6">Get in touch <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Brands</h3>

                        <p className="text-slate-400 max-w-2xl mx-auto">As a Freelance Designer & Developer, I am here to make you stand out in the digital world and my passion for design and your vision will ensure a great end result.</p>
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-center gap-[30px]">

                        {about.map((data,index) => {
                            return (
                                <div className="mx-auto" key={index}>
                                    <img src={data.iamge} className="h-[110px] w-[110px] grayscale hover:grayscale-0 duration-500 ease-in-out" alt="" />
                                </div>
                            )
                        })}

                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Have Question ? Get in touch!</h3>

                        <p className="text-slate-400 max-w-2xl mx-auto">As a Freelance Designer & Developer, I am here to make you stand out in the digital world and my passion for design and your vision will ensure a great end result.</p>

                        <div className="mt-8">
                            <Link to="/contact-two" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2"><FiPhone className="me-1 text-lg"/>  Contact Me</Link>
                        </div>
                    </div>
                </div>
            </section>
            <PhotographyFooter/>
        </>
    )
}
