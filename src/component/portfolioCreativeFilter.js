import React, { useState } from 'react';
import image from '../assets/images/portfolio/1.jpg';
import image1 from '../assets/images/portfolio/2.jpg';
import image2 from '../assets/images/portfolio/3.jpg';
import image3 from '../assets/images/portfolio/4.jpg';
import image4 from '../assets/images/portfolio/5.jpg';
import image5 from '../assets/images/portfolio/6.jpg';
import image6 from '../assets/images/portfolio/7.jpg';
import image7 from '../assets/images/portfolio/8.jpg';
import image8 from '../assets/images/portfolio/20.jpg';
import image9 from '../assets/images/portfolio/21.jpg';
import image10 from '../assets/images/portfolio/22.jpg';
import image11 from '../assets/images/portfolio/23.jpg';
import { Link } from 'react-router-dom/dist';
import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import {MdKeyboardArrowRight,MdOutlineKeyboardArrowLeft, FiPhone} from "../assets/icons/icons"

const images = [image, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11]

export default function PortfolioCreativeFilter(props) {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isOpen, setisOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    const handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + images.length - 1) % images.length);
    };

    const handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setisOpen(true);
    };
    const currentImage = images[currentImageIndex];

    const data = [
        {
            id:0,
            image: image,
            imageLink: '/assets/images/portfolio/1.jpg',
            name: 'Mockup Collection',
            dataGroup: '["branding"]',
            category: 'branding',
        },
        {
            id:1,
            image: image1,
            imageLink: '/assets/images/portfolio/2.jpg',
            name: 'Mockup Collection',
            dataGroup: '["designing"]',
            category: 'designing',
        },
        {
            id:2,
            image: image2,
            imageLink: '/assets/images/portfolio/3.jpg',
            name: 'Mockup Collection',
            dataGroup: '["photography"]',
            category: 'photography',
            

        },
        {
            id:3,
            image: image3,
            imageLink: '/assets/images/portfolio/4.jpg',
            name: 'Mockup Collection',
            dataGroup: '["development"]',
            category: 'development',

        },
        {
            id:4,
            image: image4,
            imageLink: '/assets/images/portfolio/5.jpg',
            name: 'Mockup Collection',
            dataGroup: '["branding"]',
            category: 'branding',

        },
        {
            id:5,
            image: image5,
            imageLink: '/assets/images/portfolio/6.jpg',
            name: 'Mockup Collection',
            dataGroup: '["branding"]',
            category: 'branding',

        },
        {
            id:6,
            image: image6,
            imageLink: '/assets/images/portfolio/7.jpg',
            name: 'Mockup Collection',
            dataGroup: '["designing"]',
            category: 'designing',

        },
        {
            id:7,
            image: image7,
            imageLink: '/assets/images/portfolio/8.jpg',
            name: 'Mockup Collection',
            dataGroup: '["development"]',
            category: 'development',

        },
        {
            id:8,
            image: image8,
            imageLink: '/assets/images/portfolio/9.jpg',
            name: 'Mockup Collection',
            dataGroup: '["photography"]',
            category: 'photography',

        },
        {
            id:9,
            image: image9,
            imageLink: '/assets/images/portfolio/10.jpg',
            name: 'Mockup Collection',
            dataGroup: '["photography"]',
            category: 'photography',

        },
        {
            id:10,
            image: image10,
            imageLink: '/assets/images/portfolio/11.jpg',
            name: 'Mockup Collection',
            dataGroup: '["branding"]',
            category: 'branding',
        },
        {
            id:11,
            image: image11,
            imageLink: '/assets/images/portfolio/12.jpg',
            name: 'Mockup Collection',
            dataGroup: '["branding"]',
            category: 'branding',
        }
    ];
    const matchCategory = (category) => {
        setSelectedCategory(category);
    };

    const filteredData = selectedCategory
        ? data.filter((item) => item.category === selectedCategory)
        : data;
    return (
        <section className="relative md:py-24 py-16">
            {props.containerClass === true ? <div className="container-fluid relative">
                        <div className="grid grid-cols-1 items-center gap-[30px]">
                            <div className="filters-group-wrap text-center">
                                <div className="filters-group">
                                    <ul className="mb-0 list-none container-creative filter-options">
                                        <li className={`${selectedCategory === null ? 'active' : ''} inline-block font-medium text-lg mx-2 mb-3 cursor-pointer relative text-slate-400 transition duration-500`} data-group="all" onClick={() => matchCategory(null)}>All</li>
                                        <li className={`${selectedCategory === 'branding' ? 'active' : ''} inline-block font-medium text-lg mx-2 mb-3 cursor-pointer relative text-slate-400 transition duration-500`} data-group="branding" onClick={() => matchCategory('branding')} >Brandin</li>
                                        <li className={`${selectedCategory === 'designing' ? 'active' : ''} inline-block font-medium text-lg mx-2 mb-3 cursor-pointer relative text-slate-400 transition duration-500`} data-group="designing" onClick={() => matchCategory('designing')}>Designing</li>
                                        <li className={`${selectedCategory === 'photography' ? 'active' : ''} inline-block font-medium text-lg mx-2 mb-3 cursor-pointer relative text-slate-400 transition duration-500`} data-group="photography" onClick={() => matchCategory('photography')}>Photography</li>
                                        <li className={`${selectedCategory === 'development' ? 'active' : ''} inline-block font-medium text-lg mx-2 mb-3 cursor-pointer relative text-slate-400 transition duration-500`} data-group="development" onClick={() => matchCategory('development')}>Development</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={props.className}>
                        {
                                    filteredData.map((data, index) => {
                                        return (
                                             <div className=" picture-item" data-groups='["branding"]' key={index}>
                                             <div className="group relative block overflow-hidden rounded-md transition-all duration-700 ease-in-out">
                                                 <div className="relative bg-indigo-600 overflow-hidden rounded-md">
                                                     <Link onClick={() => handleImageClick(data.id)} className="lightbox transition-all duration-700 ease-in-out group-hover:p-[10px] tobii-zoom" title="">
                                                         <img src={data.image} className="rounded-md" alt=""/>
                                                     </Link>
                                                 </div>
                                                 <div className="content transition-all duration-700 ease-in-out">
                                                     <div className="bg-white dark:bg-slate-900 p-3 rounded-md absolute z-10 bottom-5 start-5 transition-all duration-700 ease-in-out scale-0 group-hover:scale-100">
                                                         <Link to="/portfolio-detail-one" className="h6 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">Mockup Collection</Link>
                                                         <p className="text-slate-400 mb-0">Abstract</p>
                                                     </div>
                                                 </div>
                                             </div>
                                         </div>
                                        )
                                    })
                                }

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
                        </div>
                        <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
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
                    </div> : <div className="container relative">
                        <div className="grid grid-cols-1 items-center gap-[30px]">
                            <div className="filters-group-wrap text-center">
                                <div className="filters-group">
                                    <ul className="mb-0 list-none container-creative filter-options">
                                        <li className={`${selectedCategory === null ? 'active' : ''} inline-block font-medium text-lg mx-2 mb-3 cursor-pointer relative text-slate-400 transition duration-500`} data-group="all" onClick={() => matchCategory(null)}>All</li>
                                        <li className={`${selectedCategory === 'branding' ? 'active' : ''} inline-block font-medium text-lg mx-2 mb-3 cursor-pointer relative text-slate-400 transition duration-500`} data-group="branding" onClick={() => matchCategory('branding')} >Branding</li>
                                        <li className={`${selectedCategory === 'designing' ? 'active' : ''} inline-block font-medium text-lg mx-2 mb-3 cursor-pointer relative text-slate-400 transition duration-500`} data-group="designing" onClick={() => matchCategory('designing')}>Designing</li>
                                        <li className={`${selectedCategory === 'photography' ? 'active' : ''} inline-block font-medium text-lg mx-2 mb-3 cursor-pointer relative text-slate-400 transition duration-500`} data-group="photography" onClick={() => matchCategory('photography')}>Photography</li>
                                        <li className={`${selectedCategory === 'development' ? 'active' : ''} inline-block font-medium text-lg mx-2 mb-3 cursor-pointer relative text-slate-400 transition duration-500`} data-group="development" onClick={() => matchCategory('development')}>Development</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={props.className}>
                                {
                                    filteredData.map((data, index) => {
                                        return (
                                             <div key={index} className=" picture-item" data-groups='["branding"]'>
                                             <div className="group relative block overflow-hidden rounded-md transition-all duration-700 ease-in-out">
                                                 <div className="relative bg-indigo-600 overflow-hidden rounded-md">
                                                     <Link onClick={() => handleImageClick(data.id)} className="lightbox transition-all duration-700 ease-in-out group-hover:p-[10px] tobii-zoom" title="">
                                                         <img src={data.image} className="rounded-md" alt=""/>
                                                     </Link>
                                                 </div>
                                                 <div className="content transition-all duration-700 ease-in-out">
                                                     <div className="bg-white dark:bg-slate-900 p-3 rounded-md absolute z-10 bottom-5 start-5 transition-all duration-700 ease-in-out scale-0 group-hover:scale-100">
                                                         <Link onClick={() => handleImageClick(data.id)}  className="h6 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">Mockup Collection</Link>
                                                         <p className="text-slate-400 mb-0">Abstract</p>
                                                     </div>
                                                 </div>
                                             </div>
                                         </div>
                                        )
                                    })
                                }

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
                        </div>
                        <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
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
                    </div> }
             
            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 text-center">
                    <span className="text-slate-400 mb-4">Available for freelance projects</span>
                    <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Do you have designing project? <br /> Let's talk.</h3>

                    <div className="mt-6">
                        <Link to="/contact-one" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full"><FiPhone className="me-1 text-lg"/> Contact us</Link>
                    </div>
                </div>
            </div>
        </section>


    )
}
