import React,{useState} from 'react'
import { Link } from 'react-router-dom';

import imageP from '../../assets/images/food/1.jpg';
import image111 from '../../assets/images/food/2.jpg';
import image222 from '../../assets/images/food/3.jpg';
import image333 from '../../assets/images/food/4.jpg';
import image444 from '../../assets/images/food/5.jpg';
import image555 from '../../assets/images/food/6.jpg';
import image666 from '../../assets/images/food/7.jpg';
import image777 from '../../assets/images/food/8.jpg';
import image888 from '../../assets/images/food/9.jpg';
import image999 from '../../assets/images/food/10.jpg';
import image110 from '../../assets/images/food/11.jpg';
import image101 from '../../assets/images/food/12.jpg';
import image122 from '../../assets/images/food/13.jpg';
import image133 from '../../assets/images/food/14.jpg';
import image144 from '../../assets/images/food/15.jpg';
import m1 from '../../assets/images/food/blog/m1.jpg';
import imageClient from '../../assets/images/client/01.jpg';
import m6 from '../../assets/images/food/blog/m6.jpg';
import m3 from '../../assets/images/food/blog/m3.jpg';
import m4 from '../../assets/images/food/blog/m4.jpg';
import m5 from '../../assets/images/food/blog/m5.jpg';
import m2 from '../../assets/images/food/blog/m2.jpg';
import f1 from '../../assets/images/food/blog/f1.jpg';
import f2 from '../../assets/images/food/blog/f2.jpg';
import f3 from '../../assets/images/food/blog/f3.jpg';
import f4 from '../../assets/images/food/blog/f4.jpg';
import f5 from '../../assets/images/food/blog/f5.jpg';
import image7 from '../../assets/images/food/blog/8.jpg';
import image8 from '../../assets/images/food/blog/1.jpg';
import image9 from '../../assets/images/food/blog/5.jpg';
import image10 from '../../assets/images/food/blog/4.jpg';
import image11 from '../../assets/images/food/1.jpg';
import image12 from '../../assets/images/food/2.jpg';
import image13 from '../../assets/images/food/3.jpg';
import image14 from '../../assets/images/food/4.jpg';
import image15 from '../../assets/images/food/5.jpg';
import image16 from '../../assets/images/food/6.jpg';
import image17 from '../../assets/images/food/7.jpg';
import image18 from '../../assets/images/food/8.jpg';
import image19 from '../../assets/images/food/9.jpg';
import image20 from '../../assets/images/food/10.jpg';
import image21 from '../../assets/images/food/11.jpg';
import image22 from '../../assets/images/food/12.jpg';
import image23 from '../../assets/images/food/13.jpg';
import image24 from '../../assets/images/food/14.jpg';
import image25 from '../../assets/images/food/15.jpg';

import Navbar from '../../component/Navbar/navbar'
import CookieModal from '../../component/cookieModal';
import SmallFooter from '../../component/Footer/smallFooter';

import {MdKeyboardArrowRight,MdOutlineKeyboardArrowLeft,MdOutlineCalendarMonth} from "../../assets/icons/icons"

import { foodBlogData } from '../../data/data';

import TinySlider from 'tiny-slider-react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

const settings = {
    container: '.tiny-six-item',
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
            items: 6
        },

        992: {
            items: 4
        },

        767: {
            items: 3
        },

        320: {
            items: 1
        },
    },
}
const settings2 = {
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
export default function IndexFoodBlog() {
    const [lightBox, setLightbox] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [image11, image12,image13,image14,image15,image16,image17,image18,image19,image20,image21,image22,image23,image24,image25]
    const handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + images.length - 1) % images.length);
    };

    const handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const handleImageClick = (index) => {
        console.log(index);
        setCurrentImageIndex(index);
        setLightbox(true);
    };
    const currentImage = images[currentImageIndex];
    const services = [
        { image: image11, imaleList: imageP },
        { image: image12, imaleList: image111 },
        { image: image13, imaleList: image222 },
        { image: image14, imaleList: image333 },
        { image: image15, imaleList: image444 },
        { image: image16, imaleList: image555 },
        { image: image17, imaleList: image666 },
        { image: image18, imaleList: image777 },
        { image: image19, imaleList: image888 },
        { image: image20, imaleList: image999 },
        { image: image21, imaleList: image110 },
        { image: image22, imaleList: image101 },
        { image: image23, imaleList: image122 },
        { image: image24, imaleList: image133 },
        { image: image25, imaleList: image144 },
    ]
    const services2 = [
        {
            iamge: m1,
            title: 'Eggs',
            description: 'Spicy Cauliflower Burgers and Salad Recipe',
            imageList: imageP,
            name: 'Calvin Carlo'
        },
        {
            iamge: m6,
            title: 'Rice and Tomatos',
            description: 'Awesome Cake with Cream Cheese Frosting',
            imageList: imageP,
            name: 'Calvin Carlo'
        },
        {
            iamge: m3,
            title: 'Chiken',
            description: 'Make Asian-Style Recipe ( Video and Gallery )',
            imageList: imageP,
            name: 'Calvin Carlo'
        },
        {
            iamge: m4,
            title: 'Noodles',
            description: 'Chocolate Mint Dessert Brownies Recipe',
            imageList: imageClient,
            name: 'Calvin Carlo'
        },
        {
            iamge: m5,
            title: 'Pizzas',
            imageList: imageP,
            description: 'Healthy Homemade Pizza with a glass of wine',
            name: 'Calvin Carlo'
        },
        {
            iamge: m2,
            title: 'Breads',
            description: 'Strawberry, Kiwi and Spinach Salad Recipe',
            imageList: imageP,
            name: 'Calvin Carlo'
        },

    ]
    const FoodImage = [
        {
            image:f1,
            title:"Food"
        },
        {
            image:f2,
            title:"Healthy"
        },
        {
            image:f3,
            title:"Dinner"
        },
        {
            image:f4,
            title:"Holiday"
        },
        {
            image:f5,
            title:"Coffee"
        },
    ]
    
    return (
        <>
            <Navbar />

            <section className="relative mt-[74px]">
                <div className="container-fluid relative">
                    <div className="grid grid-cols-1">
                        <div className="tiny-six-item">
                            <TinySlider settings={settings}>
                                {services2.map((item, index) => {
                                    return(
                                        <div className="tiny-slide" key={index}>
                                            <div className="group relative overflow-hidden">
                                                <img src={item.iamge} className="group-hover:scale-105 duration-500 ease-in-out" alt="" />
                                                <div className="absolute inset-0 bg-gradient-to-b to-slate-900 via-slate-900/50 from-transparent opacity-0 group-hover:opacity-100 duration-500 ease-in-out"></div>
    
                                                <div className="absolute bottom-0 start-0 end-0 p-6 -mb-96 group-hover:mb-0 duration-500 ease-in-out">
                                                    <div className="text-center">
                                                        <Link className="bg-indigo-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded w-fit mx-auto h-5">{item.title}</Link>
                                                        <Link to="/food-recipe" className="text-white font-semibold hover:text-indigo-600 block text-lg mt-4 duration-500 ease-in-out">{item.description}</Link>
    
                                                        <div className="flex items-center justify-center mt-4">
                                                            <img src={item.imageList} className="h-10 w-10 rounded-full shadow-md dark:shadow-gray-800" alt="" />
                                                            <Link className="font-medium text-white block ms-2">{item.name}</Link>
                                                        </div>
                                                    </div>
                                                </div>
    
                                                <div className="absolute end-0 top-0 p-4 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                                                    <Link to="/#!" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-center text-lg bg-white dark:bg-slate-900 border-0 shadow dark:shadow-gray-800 rounded-full text-red-600/20 hover:text-red-600 focus:text-red-600"><i className="mdi mdi-heart"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </TinySlider>
                            </div>
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4 justify-center">
                        {FoodImage.map((item,index)=>{
                            return(
                                <div key={index} className="group relative rounded-md shadow-md dark:shadow-gray-800 overflow-hidden">
                                    <img src={item.image} className="group-hover:scale-105 duration-500 ease-in-out" alt="" />
                                    <div className="absolute inset-0 bg-slate-900/60"></div>

                                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center">
                                        <Link to="/#!" className="text-white font-semibold text-xl mb-0">{item.title}</Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Latest Blogs</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Write your own food blog with techwind that can provide everything you need to blog, news, article, etc.</p>
                    </div>
                <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3, 1200:4}} >
                    <Masonry columnsCount={4}>
                        {foodBlogData.map((item, index) => {
                            return(
                            <div className="picture-item p-2 pb-5" key={index}>
                                <div className="group relative">
                                    <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                                        <img src={item.image} className="group-hover:scale-105 duration-500 ease-in-out" alt="" />
                                        <div className="absolute top-0 start-0 pt-3 ps-3">
                                            <Link className="bg-indigo-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded w-fit mx-auto h-5">{item.tag}</Link>
                                        </div>
                                    </div>

                                    <div className="p-3">
                                        <Link to={`/food-recipe/${item.id}`} className="block hover:text-indigo-600 text-lg font-semibold">{item.title}</Link>

                                        <ul className="list-none space-x-1 flex items-center justify-between mt-2">
                                            <li>
                                                <span className="text-slate-400 flex items-center"><MdOutlineCalendarMonth className='me-2'/> {item.date}</span>
                                            </li>

                                            <li className="">
                                                <Link to="/#!" className="text-red-600/20 hover:text-red-600 focus:text-red-600"><i className="mdi mdi-heart"></i></Link> <span className="text-slate-400">22</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                        

                    </Masonry>
                </ResponsiveMasonry>
                    <div className="grid md:grid-cols-12 grid-cols-1 mt-6">
                        <div className="md:col-span-12 text-center">
                            <nav aria-label="Page navigation example">
                                <ul className="inline-flex items-center -space-x-px">
                                    <li>
                                        <Link to="/#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-s-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
                                            <MdOutlineKeyboardArrowLeft className="text-[20px] rtl:rotate-180 rtl:-mt-1"/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">1</Link>
                                    </li>
                                    <li>
                                        <Link to="/#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">2</Link>
                                    </li>
                                    <li>
                                        <Link to="/#" aria-current="page" className="z-10 w-[40px] h-[40px] inline-flex justify-center items-center text-white bg-indigo-600 border border-indigo-600">3</Link>
                                    </li>
                                    <li>
                                        <Link to="/#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">4</Link>
                                    </li>
                                    <li>
                                        <Link to="/#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">5</Link>
                                    </li>
                                    <li>
                                        <Link to="/#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-e-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
                                            <MdKeyboardArrowRight className="text-xl rtl:rotate-180 rtl:-mt-1"/>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Trending Posts</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Write your own food blog with techwind that can provide everything you need to blog, news, article, etc.</p>
                    </div>

                    <div className="grid lg:grid-cols-2 grid-cols-1 items-center mt-8 gap-4">
                        <div className="group relative overflow-hidden rounded-md">
                            <img src={image7} className="group-hover:scale-105 duration-500 ease-in-out" alt="" />
                            <div className="absolute inset-0 bg-gradient-to-b to-slate-900 via-slate-900/50 from-transparent opacity-0 group-hover:opacity-100 duration-500 ease-in-out"></div>

                            <div className="absolute bottom-0 start-0 end-0 p-6 -mb-96 group-hover:mb-0 duration-500 ease-in-out">
                                <div className="text-center">
                                    <Link className="bg-indigo-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded w-fit mx-auto h-5">Eggs</Link>
                                    <Link to="/food-recipe" className="text-white font-semibold hover:text-indigo-600 block text-lg mt-4 duration-500 ease-in-out">Spicy Cauliflower Burgers and Salad Recipe</Link>

                                    <div className="flex items-center justify-center mt-4">
                                        <img src={imageP} className="h-10 w-10 rounded-full shadow-md dark:shadow-gray-800" alt="" />
                                        <Link className="font-medium text-white block ms-2">Calvin Carlo</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute end-0 top-0 p-4 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                                <Link to="/#!" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-center text-lg bg-white dark:bg-slate-900 border-0 shadow dark:shadow-gray-800 rounded-full text-red-600/20 hover:text-red-600 focus:text-red-600"><i className="mdi mdi-heart"></i></Link>
                            </div>
                        </div>

                        <div>
                            <div className="grid grid-cols-1 gap-4">
                                <div className="group md:flex items-center relative overflow-hidden">
                                    <div className="md:w-[40%] relative overflow-hidden rounded-md">
                                        <img src={image8} className="group-hover:scale-105 duration-500 ease-in-out" alt="" />
                                        <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 duration-500 ease-in-out"></div>
                                        <div className="absolute end-0 top-0 p-4 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                                            <Link to="/#!" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-center text-lg bg-white dark:bg-slate-900 border-0 shadow dark:shadow-gray-800 rounded-full text-red-600/20 hover:text-red-600 focus:text-red-600"><i className="mdi mdi-heart"></i></Link>
                                        </div>
                                    </div>

                                    <div className="md:w-[60%] md:ps-4 pt-4 md:pt-0">
                                        <Link className="bg-indigo-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded w-fit mx-auto h-5">Food</Link>
                                        <Link to="/food-recipe" className="block hover:text-indigo-600 text-lg font-semibold mt-3">Change Your Strategy: Find a Business Consultant</Link>

                                        <span className="text-slate-400 items-center flex mt-3"><MdOutlineCalendarMonth /> 14th July 2022</span>
                                    </div>
                                </div>

                                <div className="group md:flex items-center relative overflow-hidden">
                                    <div className="md:w-[40%] relative overflow-hidden rounded-md">
                                        <img src={image9} className="group-hover:scale-105 duration-500 ease-in-out" alt="" />
                                        <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 duration-500 ease-in-out"></div>
                                        <div className="absolute end-0 top-0 p-4 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                                            <Link to="/#!" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-center text-lg bg-white dark:bg-slate-900 border-0 shadow dark:shadow-gray-800 rounded-full text-red-600/20 hover:text-red-600 focus:text-red-600"><i className="mdi mdi-heart"></i></Link>
                                        </div>
                                    </div>

                                    <div className="md:w-[60%] md:ps-4 pt-4 md:pt-0">
                                        <Link className="bg-indigo-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded w-fit mx-auto h-5">Food</Link>
                                        <Link to="/food-recipe" className="block hover:text-indigo-600 text-lg font-semibold mt-3">Creamy Garlic Parmesan Chicken Salad</Link>

                                        <span className="text-slate-400 flex items-center mt-3"><MdOutlineCalendarMonth /> 14th July 2022</span>
                                    </div>
                                </div>

                                <div className="group md:flex items-center relative overflow-hidden">
                                    <div className="md:w-[40%] relative overflow-hidden rounded-md">
                                        <img src={image10} className="group-hover:scale-105 duration-500 ease-in-out" alt="" />
                                        <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 duration-500 ease-in-out"></div>
                                        <div className="absolute end-0 top-0 p-4 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                                            <Link to="/#!" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-center text-lg bg-white dark:bg-slate-900 border-0 shadow dark:shadow-gray-800 rounded-full text-red-600/20 hover:text-red-600 focus:text-red-600"><i className="mdi mdi-heart"></i></Link>
                                        </div>
                                    </div>

                                    <div className="md:w-[60%] md:ps-4 pt-4 md:pt-0">
                                        <Link className="bg-indigo-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded w-fit mx-auto h-5">Food</Link>
                                        <Link to="/food-recipe" className="block hover:text-indigo-600 text-lg font-semibold mt-3">Bourbon Street Rib-Eye Steak With Cheese</Link>

                                        <span className="text-slate-400 flex items-center mt-3"><MdOutlineCalendarMonth/> 14th July 2022</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
                <div className="container relative">
                    <div className="md:flex justify-center">
                        <div className="lg:w-2/3 text-center">
                            <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold mb-6">Subscribe our weekly subscription</h3>

                            <p className="text-slate-400 max-w-xl mx-auto">Add some text to explain benefits of subscripton on your services. We'll send you the best of our blog just once a weekly.</p>

                            <div className="mt-8">
                                <div className="text-center subcribe-form">
                                    <form className="relative mx-auto max-w-xl">
                                        <input type="email" id="subemail" name="name" className="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white/70 dark:bg-slate-900/70 border border-gray-100 dark:border-gray-700" placeholder="Enter your email id.." />
                                        <button type="submit" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle transition duration-500 ease-in-out text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-full">Subcribe Now</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container-fluid relative">
                <div className="grid grid-cols-1 relative">
                    <div className="tiny-twelve-item">

                        <TinySlider settings={settings2}>
                            {services.map((item, index) => {
                                return(
                                    <div className="tiny-slide" key={index}>
                                        <div className="card border-0 rounded-0">
                                            <div className="card-body p-0">
                                                <Link  onClick={() => handleImageClick(index)} className="lightbox d-inline-block" title="">
                                                    <img src={item.imaleList} className="" alt="Insta Post" />
                                                    <div className="overlay bg-dark"></div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </TinySlider>
                    </div>
                    {lightBox && (
                                <Lightbox
                                    mainSrc={currentImage}
                                    prevSrc={images[(currentImageIndex + images.length - 1) % images.length]}
                                    nextSrc={images[(currentImageIndex + 1) % images.length]}

                                    onCloseRequest={() => setLightbox(false)}
                                    onMovePrevRequest={handleMovePrev}
                                    onMoveNextRequest={handleMoveNext}
                                />
                            )}
                    <div className="absolute top-2/4 -translate-y-2/4 start-2/4 ltr:-translate-x-2/4 rtl:translate-x-2/4 text-center hidden md:block">
                        <Link to="https://www.instagram.com/shreethemes/" target="_blank"className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Follow Now</Link>
                    </div>
                </div>
            </div>

            <SmallFooter/>

            <CookieModal />
        </>
    )
}
