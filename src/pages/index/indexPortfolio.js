import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import image from '../../assets/images/portfolio/10.jpg';
import image1 from '../../assets/images/portfolio/2.jpg';
import image2 from '../../assets/images/portfolio/11.jpg';
import image3 from '../../assets/images/portfolio/13.jpg';
import image4 from '../../assets/images/portfolio/6.jpg';
import image5 from '../../assets/images/portfolio/7.jpg';
import image6 from '../../assets/images/portfolio/14.jpg';
import image7 from '../../assets/images/portfolio/12.jpg';
import image8 from '../../assets/images/portfolio/8.jpg';
import image9 from '../../assets/images/portfolio/9.jpg';
import image10 from '../../assets/images/portfolio/1.jpg';
import image11 from '../../assets/images/portfolio/15.jpg';
import image12 from '../../assets/images/portfolio/16.jpg';

import Navbar from '../../component/Navbar/navbar'
import CookieModal from '../../component/cookieModal';
import SmallFooter from '../../component/Footer/smallFooter';

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"
import Masonry , {ResponsiveMasonry} from "react-responsive-masonry"
import {FaRegEnvelope, FiPhone} from '../../assets/icons/icons'

const images = [image, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12];

export default function IndexPortfolio() {
    const [isOpen, setisOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState(null);

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
    const data = [
        {
            id:0,
            category: 'branding',  
            image: image,

        },
        {
            id:1,
            category: 'designing',
            image: image1,

        },
        {
            id:2,
            category: 'photography',
            image: image2,

        },
        {
            id:3,
            category: 'branding',  
            image: image3,

        },
        {
            id:4,
            category: 'branding',  
            image: image4,

        },
        {
            id:5,
            category: 'designing',
            image: image5,

        },
        {
            id:6,
            category: 'development',
            image: image6,

        },
        {
            id:7,
            category: 'development',
            image: image7,

        },
        {
            id:8,
            category: 'development',
            image: image8,

        },
        {
            id:9,
            category: 'development',
            image: image9,

        },
        {
            id:10,
            category: 'branding',  
            image: image10,

        },
        {
            id:11,
            category: 'designing',
            image: image11,

        },
        {
            id:12,
            category: 'development',
            image: image12,

        }
    ];
  
    const currentImage = images[currentImageIndex];
    const matchCategory = (category) => {
        setSelectedCategory(category);
    };

    const filteredData = selectedCategory
        ? data.filter((item) => item.category === selectedCategory)
        : data;

  
    return (
        <>
            <Navbar />

            <section className="relative table w-full pt-28 lg:pt-36">
                <div className="container relative">
                    <div className="grid grid-cols-1 mt-10 text-center">
                        <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl bg-gradient-to-r from-red-600 to-indigo-600 text-transparent bg-clip-text mb-5">Building <br /> digital products, brands, <br /> and experience.</h4>
                        <p className="text-slate-400 text-lg max-w-xl mx-auto">A <span className="text-black dark:text-white font-semibold">Product Designer</span> and <span className="text-black dark:text-white font-semibold">Visual Developer</span> in NY. We specialize in UI/UX Design, Responsive Web Design, and Visual Development.</p>

                        <div className="mt-6">
                            <Link to="/contact-one" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full"><FaRegEnvelope className="me-2 text-sm"/> Contact Us</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid grid-cols-1 items-center gap-[30px]">
                        <div className="filters-group-wrap text-center">
                            <div className="filters-group">
                                <ul className="mb-0 list-none container-filter-border-bottom filter-options">
                                    <li className={`${selectedCategory === null ? 'active' : ''} inline-block text-lg font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-slate-400 transition duration-500`} data-group="all" onClick={() => matchCategory(null)}>All</li>
                                    <li className={`${selectedCategory === 'branding' ? 'active' : ''} inline-block text-lg font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-slate-400 transition duration-500`} data-group="branding" onClick={() => matchCategory('branding')} >Branding</li>
                                    <li className={`${selectedCategory === 'designing' ? 'active' : ''} inline-block text-lg font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-slate-400 transition duration-500`} data-group="designing" onClick={() => matchCategory('designing')}>Designing</li>
                                    <li className={`${selectedCategory === 'photography' ? 'active' : ''} inline-block text-lg font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-slate-400 transition duration-500`} data-group="photography" onClick={() => matchCategory('photography')}>Photography</li>
                                    <li className={`${selectedCategory === 'development' ? 'active' : ''} inline-block text-lg font-semibold mx-2 mb-3 cursor-pointer relative border-b border-transparent text-slate-400 transition duration-500`} data-group="development" onClick={() => matchCategory('development')}>Development</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid relative mt-8">
                    <div>
                    <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900:3, 1200:5}} >
                        <Masonry columnsCount={5}>
                            {
                                filteredData.map((data, index) => {
                                    return (
                                        <div className="p-1 picture-item" data-groups='["branding"]' key={index}>
                                            <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                                                <Link onClick={() => handleImageClick(data.id)} className="lightbox transition-all duration-500 group-hover:scale-105" title="">
                                                    <img src={data.image} className="" alt="" />
                                                </Link>
                                                <div className="absolute -bottom-52 group-hover:bottom-2 start-2 end-2 transition-all duration-500 bg-white dark:bg-slate-900 p-4 rounded shadow dark:shadow-gray-800">
                                                    <Link to="/portfolio-detail-two" className="hover:text-indigo-600 text-lg transition duration-500 font-medium">Iphone mockup</Link>
                                                    <h6 className="text-slate-400">Branding</h6>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Masonry>
                    </ResponsiveMasonry>    
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

                    <div className="flex justify-center mt-8">
                        <Link className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full">See More</Link>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 text-center">
                        <span className="text-slate-400 mb-4">Available for freelance projects</span>
                        <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Do you have designing project? <br /> Let's talk.</h3>

                        <div className="mt-6">
                            <Link to="/contact-one" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full"><FiPhone className="me-1 text-lg"/>  Contact us</Link>
                        </div>
                    </div>
                </div>
            </section>

            <SmallFooter/>

            <CookieModal />
        </>
    )
}
