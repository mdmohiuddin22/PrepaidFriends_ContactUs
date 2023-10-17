import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import about from '../../assets/images/food/about.jpg';
import sign from '../../assets/images/sign.png';
import image from '../../assets/images/food/1.jpg';
import image1 from '../../assets/images/food/2.jpg';
import image2 from '../../assets/images/food/3.jpg';
import image3 from '../../assets/images/food/4.jpg';
import image4 from '../../assets/images/food/5.jpg';
import image5 from '../../assets/images/food/6.jpg';
import image6 from '../../assets/images/food/7.jpg';
import image7 from '../../assets/images/food/8.jpg';
import image8 from '../../assets/images/food/9.jpg';
import image9 from '../../assets/images/food/10.jpg';
import image10 from '../../assets/images/food/11.jpg';
import image11 from '../../assets/images/food/12.jpg';
import image12 from '../../assets/images/food/13.jpg';
import image13 from '../../assets/images/food/14.jpg';
import image14 from '../../assets/images/food/15.jpg';
import image21 from '../../assets/images/food/2.jpg';
import image22 from '../../assets/images/food/3.jpg';
import image23 from '../../assets/images/food/4.jpg';
import image24 from '../../assets/images/food/5.jpg';
import image25 from '../../assets/images/food/6.jpg';
import image26 from '../../assets/images/food/7.jpg';
import image27 from '../../assets/images/food/8.jpg';
import image28 from '../../assets/images/food/9.jpg';
import image29 from '../../assets/images/food/10.jpg';
import image30 from '../../assets/images/food/11.jpg';
import image31 from '../../assets/images/food/12.jpg';
import image32 from '../../assets/images/food/13.jpg';
import image33 from '../../assets/images/food/14.jpg';
import image34 from '../../assets/images/food/15.jpg';

import Navbar from '../../component/Navbar/navbar'
import UserFeedBack2 from '../../component/userFeedBack2';
import CookieModal from '../../component/cookieModal';
import CafeFooter from '../../component/Footer/cafeFooter';

import TinySlider from 'tiny-slider-react';
import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import { FaArrowRight, LuPizza,SiSwiggy} from '../../assets/icons/icons'
import {IoRestaurantOutline} from 'react-icons/io5'


const settings = {
    container: '.tiny-twelve-item',
    controls: true,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
    nav: false,
    speed: 400,
    gutter: 0,
    responsive: {
        1025: {
            items: 12
        },

        992: {
            items: 8
        },

        767: {
            items: 6
        },

        320: {
            items: 2
        },
    },
}
const services = [
    { link: image, imageList: image },
    { link: image21, imageList: image1 },
    { link: image22, imageList: image2 },
    { link: image23, imageList: image3 },
    { link: image24, imageList: image4 },
    { link: image25, imageList: image5 },
    { link: image26, imageList: image6 },
    { link: image27, imageList: image7 },
    { link: image28, imageList: image8 },
    { link: image29, imageList: image9 },
    { link: image30, imageList: image10 },
    { link: image31, imageList: image11 },
    { link: image32, imageList: image12 },
    { link: image33, imageList: image13 },
    { link: image34, imageList: image14 },
];
const images = [image, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14,image];
const data = [
    {
        category:"break",
        image: image,
        dish: 'Black bean dip'
    },
    {
        category: "lunch",
        image: image1,
        dish: 'Onion Pizza'
    },
    {
        category:"break",
        image: image2,
        dish: 'Chicken Breast'
    },
    {
        category: "dinner",
        image: image3,
        dish: 'Veg Pizza'
    },
    {
        category:"break",
        image: image4,
        dish: 'Cordon Bleu'
    },
    {
       category: "lunch",
        image: image5,
        dish: 'Boerewors'
    },
    {
        category:"break",
        image: image6,
        dish: 'Tarte Tatin'
    },
    {
        category: "tea",
        image: image7,
        dish: 'Green Tea'
    },
    {
       category: "lunch",
        image: image8,
        dish: 'Special Coffee'
    },
    {
        category: "dinner",
        image: image9,
        dish: 'Lemon Tea'
    },
    {
        category: "tea",
        image: image10,
        dish: 'Pancakes'
    },
    {
        category: "lunch",
        image: image11,
        dish: 'American Item'
    },
    {
        category: "tea",
        image: image12,
        dish: 'Country side pizza'
    },
    {
        category: "dinner",
        image: image13,
        dish: 'Chilly garlic potato'
    },
    {
        category: "tea",
        image: image14,
        dish: 'Brownie with vanilla'
    },
    {
        category:"break",
        image: image,
        dish: ''
    },
];
const aboutData = [
    {
        icon:LuPizza,
        title:"Food Meets Style",
        desc:"The phrasal sequence of the is now so that many campaign and benefit"
    },
    {
        icon:IoRestaurantOutline,
        title:"Quality Check",
        desc:"The phrasal sequence of the is now so that many campaign and benefit"
    },
    {
        icon:SiSwiggy,
        title:"Home Delivery",
        desc:"The phrasal sequence of the is now so that many campaign and benefit"
    },
]
export default function IndexRestaurent() {
    const [isOpen, setisOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState(null);

     const handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + images.length - 1) % images.length);
    };

    const handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };


    const currentImage = images[currentImageIndex];
  
    const matchCategory = (category) => {
        setSelectedCategory(category);
    };

    const filteredData = selectedCategory
        ? data.filter((item) => item.category === selectedCategory)
        : data;

    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setisOpen(true);
    };

  
    return (
        <>
            <Navbar navClass="nav-light" />

            <section className="flex md:h-screen py-36 items-center bg-[url('../../assets/images/food/bg01.jpg')] bg-no-repeat bg-fixed bg-top bg-cover">
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 justify-center text-center">
                        <div className="">
                            <h1 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-6xl text-white mb-5">Amazing Food, Fresh <br /> Products & Wine</h1>
                            <p className="text-white/70 text-lg max-w-xl mx-auto">Beatae cum eius, animi itaque aliquid ducimus facere dicta, vitae ipsam maiores nam sit blanditiis, quisquam expedita?</p>

                            <div className="mt-8">
                                <Link to="/#table" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"><IoRestaurantOutline className="me-1"/> Book A Table</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="lg:col-span-5 md:col-span-6">
                            <img src={about} className="rounded-md shadow dark:shadow-gray-800" alt="" />
                        </div>

                        <div className="lg:col-span-7 md:col-span-6">
                            <div className="ms-6">
                                <p className="text-slate-400 text-lg mb-0">The phrasal sequence of the Lorem Ipsum text is now so widespread and commonplace that many DTP programmes can generate dummy text using the starting sequence "Lorem ipsum".</p>

                                <h4 className="my-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Food is our common ground, <br /> a universal experience.</h4>

                                <p className="text-slate-400">Fortunately, the phrase 'Lorem Ipsum' is now recognized by electronic pre-press systems and, when found, an alarm can be raised. This avoids a publication going to print with overlooked dummy text.</p>

                                <div className="mt-6">
                                    <img src={sign} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-6 gap-[30px]">
                        {aboutData.map((item,index)=>{
                            const Icons = item.icon
                            return(
                                <div key={index} className="md:px-6 transition duration-500 rounded-2xl text-center">
                                    <div className="w-20 h-20 bg-indigo-600/5 mx-auto text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800">
                                        <Icons className='w-8 h-8'/>
                                    </div>
        
                                    <div className="content mt-7">
                                        <Link to="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">{item.title}</Link>
                                        <p className="text-slate-400 mt-3">{item.desc}</p>
        
                                        <div className="mt-5">
                                            <Link to="/page-services" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className="relative py-36 bg-[url('../../assets/images/food/menu.jpg')] bg-no-repeat bg-fixed bg-top bg-cover">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
                <div className="absolute bottom-0 start-0 end-0 text-center px-3">
                    <h5 className="text-slate-400 text-xl leading-normal font-semibold">Our Menu</h5>
                    <h4 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-white mb-5">Choose your mixture & order now!</h4>
                </div>
            </section>

            <section className="relative md:py-24 py-16 md:pt-12 bg-[url('../../assets/images/food/food-menu.png')] bg-no-repeat bg-top">
                <div className="container relative">
                    <div className="grid grid-cols-1 items-center gap-[30px]">
                        <div className="filters-group-wrap text-center">
                            <div className="filters-group">
                                <ul className="mb-0 list-none container-filter-border-bottom filter-options">
                                    <li className={`${selectedCategory === null ? 'active' : ''} inline-block text-sm uppercase font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-slate-400 transition duration-500`} data-group="all" onClick={() => matchCategory(null)}>All</li>
                                    <li className={`${selectedCategory === 'break' ? 'active' : ''} inline-block text-sm uppercase font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-slate-400 transition duration-500`} data-group="break" onClick={() => matchCategory('break')}>Breakfast</li>
                                    <li className={`${selectedCategory === 'lunch' ? 'active' : ''} inline-block text-sm uppercase font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-slate-400 transition duration-500`} data-group="lunch" onClick={() => matchCategory('lunch')}>Lunch</li>
                                    <li className={`${selectedCategory === 'dinner' ? 'active' : ''} inline-block text-sm uppercase font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-slate-400 transition duration-500`} data-group="dinner" onClick={() => matchCategory('dinner')}>Dinner</li>
                                    <li className={`${selectedCategory === 'tea' ? 'active' : ''} inline-block text-sm uppercase font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-slate-400 transition duration-500`} data-group="tea" onClick={() => matchCategory('tea')}>Tea & Coffee</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative mt-8">
                    <div id="grid" className="grid lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-5 grid-cols-5 mt-4 gap-[30px]">
                        {
                            filteredData.map((data, index) => {
                                return (
                                    <div className="group picture-item p-3 mt-6" data-groups="['break']" key={index}>
                                        <img src={data.image} className="rounded-full h-32 w-32 mx-auto group-hover:animate-[spin_10s_linear_infinite]" alt="" />

                                        <div className="mt-4 text-center">
                                            <Link className="text-lg font-medium block hover:text-indigo-600 transition-all duration-500 ease-in-out">{data.dish}</Link>
                                            <span className="text-slate-400 mt-2 block">A reader will be distracted by the readable</span>

                                            <h5 className="text-indigo-600 font-medium mt-4">$25.00</h5>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16 bg-[url('../../assets/images/food/cta.jpg')] bg-no-repeat bg-fixed bg-top bg-cover" id="table">
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="container relative">
                    <div className="flex justify-end">
                        <div className="lg:w-1/2 md:w-2/3">
                            <div className="bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md lg:p-12 p-6 lg:ms-12">
                                <div className="section-title mb-4">
                                    <span className="bg-indigo-600/5 text-indigo-600 text-xs font-bold px-2.5 py-0.5 rounded h-5">Reservation</span>
                                    <h4 className="text-4xl font-bold uppercase my-4">Book A Table</h4>
                                    <p className="text-slate-400 mx-auto para-desc">We make it a priority to offer flexible services to accomodate your needs</p>
                                </div>

                                <form>
                                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                                        <div>
                                            <label className="font-semibold">Your Name</label>
                                            <input name="name" id="name" type="text" className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="First Name :" />
                                        </div>

                                        <div>
                                            <label className="font-semibold">Your Email</label>
                                            <input name="email" id="email" type="email" className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Your email :" />
                                        </div>

                                        <div>
                                            <label className="font-semibold">Phone no.</label>
                                            <input name="number" type="number" id="phone-number" className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Phone no. :" />
                                        </div>

                                        <div>
                                            <label className="font-semibold">Person</label>
                                            <input type="number" min="0" autoComplete="off" id="adult" className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" required="" placeholder="Person :" />
                                        </div>

                                        <div>
                                            <label className="font-semibold">Date</label>
                                            <input name="date" type="text" className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 start" placeholder="(ex: mm/ dd/ yy)" />
                                        </div>

                                        <div>
                                            <label className="font-semibold">Time</label>
                                            <input name="time" type="text" id="input-time" className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 timepicker" placeholder="(ex: 8:00 p.m)" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 mt-4">
                                        <input type="submit" id="submit" name="send" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full" value="Book a table" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16 bg-indigo-600/5">
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Happy Client's</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Splash your dream color Bring your home to lively Colors. We make it a priority to offer flexible services to accomodate your needs</p>
                    </div>

                    <UserFeedBack2 />
                </div>
            </section>

            <div className="container-fluid relative">
                <div className="grid grid-cols-1 relative">
                    <div className="tiny-twelve-item">
                        <TinySlider settings={settings}>
                            {services.map((item, index) => (
                                <div className="tiny-slide" key={index}>
                                    <div className="card border-0 rounded-0">
                                        <div className="card-body p-0">
                                            <Link to={item.image} className="lightbox d-inline-block" title="">
                                                <img src={item.imageList} className="" onClick={() => handleImageClick(index)} alt="Insta Post" />
                                                <div className="overlay bg-dark"></div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </TinySlider>

                    </div>
                    {isOpen && (
                            <Lightbox
                                mainSrc={currentImage}
                                prevSrc={images[(currentImageIndex + images.length - 1) % images.length]}
                                nextSrc={images[(currentImageIndex + 1) % images.length]}

                                onCloseRequest={() => setisOpen(false)}
                                onMovePrevRequest={handleMovePrev}
                                onMoveNextRequest={handleMoveNext}
                            />
                        )}

                    <div className="absolute top-2/4 -translate-y-2/4 start-2/4 ltr:-translate-x-2/4 rtl:translate-x-2/4 text-center hidden md:block">
                        <Link to="https://www.instagram.com/shreethemes/" target="_blank"

className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Follow Now</Link>
                    </div>
                </div>
            </div>
            <CafeFooter/>
            <CookieModal />

        </>
    )
}
