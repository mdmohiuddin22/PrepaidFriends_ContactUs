import React, { useEffect,useState } from 'react'

import coffee_time from '../../assets/images/cafe/icons/coffee-time.svg';
import pot from '../../assets/images/cafe/icons/pot.svg';
import coffee_beans from '../../assets/images/cafe/icons/coffee-beans.svg';
import cafe_services from '../../assets/images/cafe/cafe-services.png';
import coffee from '../../assets/images/cafe/icons/coffee.svg';
import drip_glass from '../../assets/images/cafe/icons/drip-glass.svg';
import coffee_cup from '../../assets/images/cafe/icons/coffee-cup.svg';
import imageP from '../../assets/images/cafe/coffee-cup/01.jpg';
import image1 from '../../assets/images/cafe/coffee-cup/02.jpg';
import image2 from '../../assets/images/cafe/coffee-cup/03.jpg';
import image3 from '../../assets/images/cafe/coffee-cup/04.jpg';
import image4 from '../../assets/images/cafe/coffee-cup/05.jpg';
import image5 from '../../assets/images/cafe/coffee-cup/06.jpg';
import image6 from '../../assets/images/cafe/coffee-cup/02.jpg';
import image7 from '../../assets/images/cafe/coffee-cup/03.jpg';
import image8 from '../../assets/images/cafe/coffee-cup/04.jpg';
import image9 from '../../assets/images/client/01.jpg';
import image10 from '../../assets/images/client/02.jpg';
import image11 from '../../assets/images/client/03.jpg';
import image12 from '../../assets/images/client/04.jpg';
import image13 from '../../assets/images/client/05.jpg';
import image14 from '../../assets/images/client/06.jpg';
import ab from '../../assets/images/cafe/ab.jpg';
import b1 from '../../assets/images/cafe/b1.jpg';
import b2 from '../../assets/images/cafe/b2.jpg';
import b3 from '../../assets/images/cafe/b3.jpg';
import image15 from '../../assets/images/cafe/coffee-cup/02.jpg';
import image16 from '../../assets/images/cafe/coffee-cup/03.jpg';
import image17 from '../../assets/images/cafe/coffee-cup/04.jpg';
import image18 from '../../assets/images/cafe/coffee-cup/05.jpg';
import image19 from '../../assets/images/cafe/coffee-cup/06.jpg';
import image22 from '../../assets/images/cafe/coffee-cup/04.jpg';
import image23 from '../../assets/images/cafe/coffee-cup/05.jpg';
import image24 from '../../assets/images/cafe/coffee-cup/06.jpg';
import image25 from '../../assets/images/cafe/coffee-cup/05.jpg';
import image26 from '../../assets/images/cafe/coffee-cup/06.jpg';
import Navbar from '../../component/Navbar/navbar'


import TinySlider from 'tiny-slider-react';
import { Link } from 'react-router-dom';
import background from '../../assets/images/cafe/bg1.jpg';
import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"
import CafeFooter from '../../component/Footer/cafeFooter';
import {FaArrowRight} from '../../assets/icons/icons'

const settings = {
    items: 1,
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
}
const settings2 = {
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
export default function IndexCafe() {
    const [lightBox, setLightbox] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [imageP,image15,image16,image17,image18,imageP,image1,image2,image3,image25,image26,image6,image7]
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

    useEffect(() => {
        const htmlTag = document.getElementsByTagName("html")[0]
        htmlTag.classList.add('dark')
    });


    useEffect(() => {
        return () => {
            const htmlTag = document.getElementsByTagName("html")[0]
            htmlTag.classList.remove('dark')
        };
    }, []);

    const cafeData = [
        {
            image: imageP,
            name: 'Cafe Latte',
            price: '13.79'
        },
        {
            image: image1,
            name: 'Ice Coffee',
            price: '12.49'
        },
        {
            image: image2,
            name: 'Mocha',
            price: '10.99'
        },
        {
            image: image3,
            name: 'Espresso',
            price: '19.99'
        },
        {
            image: image4,
            name: 'Americano',
            price: '17.79'
        },
        {
            image: image5,
            name: 'Boerewors',
            price: '57.79'
        },
        {
            image: imageP,
            name: 'Cafe Latte',
            price: '13.79'
        },
        {
            image: image6,
            name: 'Ice Coffee',
            price: '12.49'
        },
        {
            image: image7,
            name: 'Mocha',
            price: '10.99'
        },
        {
            image: image8,
            name: 'Espresso',
            price: '19.99'
        },
    ];
    const services = [
        {
            description: '" Techwind made the processes so easy. Techwind instantly increased the amount of interest and ultimately saved us over $10,000. "',
            image: image9,
            name: 'Christa Smith',
            role: 'Manager'
        },
        {
            description: '" I highly recommend Techwind as the new way to sell your home "by owner". My home sold in 24 hours for the asking price. Best $400 you could spend to sell your home. "',
            image: image10,
            name: 'Christa Smith',
            role: 'Manager'
        },
        {
            description: ' " My favorite part about selling my home myself was that we got to meet and get to know the people personally. This made it so much more enjoyable! " ',
            image: image11,
            name: 'Christa Smith',
            role: 'Manager'
        },
        {
            description: '" Great experience all around! Easy to use and efficient. "',
            image: image12,
            name: 'Christa Smith',
            role: 'Manager'
        },
        {
            description: '" Techwind made selling my home easy and stress free. They went above and beyond what is expected. "',
            image: image13,
            name: 'Christa Smith',
            role: 'Manager'
        },
        {
            description: '" Techwind is fair priced, quick to respond, and easy to use. I highly recommend their services! "',
            image: image14,
            name: 'Christa Smith',
            role: 'Manager'
        }
    ]
    const service2 = [{ link: imageP, imageList: imageP },
    { link: image15, imageList: image15 },
    { link: image16, imageList: image16 },
    { link: image17, imageList: image22 },
    { link: image18, imageList: image23 },
    { link: image19, imageList: image24 },
    { link: imageP, imageList: imageP },
    { link: image1, imageList: image1 },
    { link: image2, imageList: image2 },
    { link: image3, imageList: image3 },
    { link: image25, imageList: image4 },
    { link: image26, imageList: image5 },
    { link: image6, imageList: image4 },
    { link: image7, imageList: image5 }]
   const blogData = [
    {
        image:b1,
        title:'Best Coffee Shops In The State You Should Know',
        desc:'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        image:b2,
        title:'Best Coffee Shops In The State You Should Know',
        desc:'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        image:b3,
        title:'Best Coffee Shops In The State You Should Know',
        desc:'The phrasal sequence of the is now so that many campaign and benefit'
    },
   ]
    return (
        <>
            <Navbar navClass="nav-light" />
            <section className="relative py-40 md:h-screen flex items-center overflow-hidden" id="home" style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundImage: `url(${background})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-slate-900"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 mt-10 text-center">
                        <div className="md:-rotate-12 -rotate-6">
                            <span className="font-cursive-kaushan text-white/70 block mb-2">Since 1993</span>
                            <span className="font-cursive-kaushan text-white font-semibold lg:text-9xl lg:leading-tight md:text-8xl md:leading-tight text-6xl leading-tight block">Great Coffee <br /> Good Vibes</span>

                            <div className="mt-8">
                                <Link to="#" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Explore More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-4xl md:leading-normal text-3xl leading-normal font-head-ebgaramond font-medium">Welcome to Techwind Cafe</h3>
                        <p className="text-slate-400 max-w-xl mx-auto">Every cup is a performance of thoroughly pressured hot water through the finest delicious and finely ground compacted coffee.</p>
                    </div>

                    <div className="grid lg:grid-cols-12 md:grid-cols-12 grid-cols-1 mt-8 gap-[30px] items-center">
                        <div className="lg:col-span-4 md:col-span-6 lg:order-1 order-2">
                            <div className="grid grid-cols-1 gap-[30px]">
                                <div className="group transition-all duration-500 ease-in-out md:text-end text-start">
                                    <img src={coffee_time} className="h-16 w-16 md:ms-auto p-3 rounded-full shadow-md dark:shadow-gray-800 bg-white" alt="" />
                                    <div className="mt-2 md:order-1 order-2">
                                        <Link to="#" className="text-xl font-semibold font-head-ebgaramond hover:text-indigo-600">High Quality</Link>
                                        <p className="text-slate-400 mt-3">Composed in a pseudo-Latin language which more or less pseudo-Latin.</p>
                                    </div>
                                </div>


                                <div className="group transition-all duration-500 ease-in-out md:text-end text-start">
                                    <img src={pot} className="h-16 w-16 md:ms-auto p-3 rounded-full shadow-md dark:shadow-gray-800 bg-white" alt="" />
                                    <div className="mt-2 md:order-1 order-2">
                                        <Link to="#" className="text-xl font-semibold font-head-ebgaramond hover:text-indigo-600">Pure Grades</Link>
                                        <p className="text-slate-400 mt-3">Composed in a pseudo-Latin language which more or less pseudo-Latin.</p>
                                    </div>
                                </div>


                                <div className="group transition-all duration-500 ease-in-out md:text-end text-start">
                                    <img src={coffee_beans} className="h-16 w-16 md:ms-auto p-3 rounded-full shadow-md dark:shadow-gray-800 bg-white" alt="" />
                                    <div className="mt-2 md:order-1 order-2">
                                        <Link to="#" className="text-xl font-semibold font-head-ebgaramond hover:text-indigo-600">Proper Roasting</Link>
                                        <p className="text-slate-400 mt-3">Composed in a pseudo-Latin language which more or less pseudo-Latin.</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="lg:col-span-4 md:col-span-12 lg:order-2 order-1">
                            <img src={cafe_services} className="lg:w-auto md:w-80 mx-auto" alt="" />
                        </div>

                        <div className="lg:col-span-4 md:col-span-6 order-3">
                            <div className="grid grid-cols-1 gap-[30px]">
                                <div className="group transition-all duration-500 ease-in-out">
                                    <img src={coffee} className="h-16 w-16 p-3 rounded-full shadow-md dark:shadow-gray-800 bg-white" alt="" />
                                    <div className="mt-2">
                                        <Link to="#" className="text-xl font-semibold font-head-ebgaramond hover:text-indigo-600">The Perfect Cup</Link>
                                        <p className="text-slate-400 mt-3">Composed in a pseudo-Latin language which more or less pseudo-Latin.</p>
                                    </div>
                                </div>


                                <div className="group transition-all duration-500 ease-in-out">
                                    <img src={drip_glass} className="h-16 w-16 p-3 rounded-full shadow-md dark:shadow-gray-800 bg-white" alt="" />
                                    <div className="mt-2">
                                        <Link to="#" className="text-xl font-semibold font-head-ebgaramond hover:text-indigo-600">Coffee Machine</Link>
                                        <p className="text-slate-400 mt-3">Composed in a pseudo-Latin language which more or less pseudo-Latin.</p>
                                    </div>
                                </div>


                                <div className="group transition-all duration-500 ease-in-out">
                                    <img src={coffee_cup} className="h-16 w-16 p-3 rounded-full shadow-md dark:shadow-gray-800 bg-white" alt="" />
                                    <div className="mt-2">
                                        <Link to="#" className="text-xl font-semibold font-head-ebgaramond hover:text-indigo-600">Coffee to Go</Link>
                                        <p className="text-slate-400 mt-3">Composed in a pseudo-Latin language which more or less pseudo-Latin.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative md:pt-0 pt-48 bg-[url('../../assets/images/cafe/cta.jpg')] bg-center bg-no-repeat bg-cover jarallax bg-fixed" data-jarallax data-speed="0.5">
                <div className="container relative">
                    <div className="md:flex justify-end">
                        <div className="md:w-1/2 md:py-36 py-10 lg:px-16 md:px-10 px-6 bg-white dark:bg-slate-900 text-center">
                            <img src={coffee} className="h-16 w-16 p-3 rounded-full shadow-md dark:shadow-gray-800 bg-white mx-auto" alt="" />

                            <h4 className="font-head-ebgaramond text-3xl font-medium mt-4">Happy Hours</h4>

                            <p className="text-indigo-600 font-head-ebgaramond text-lg font-medium mt-2">Starts at 3pm</p>

                            <p className="text-slate-400 mt-4">The restaurant will open at 3pm for happy hour and dinner service starting at 5pm. We will continue to offer brunch on weekends from 10am-3pm with bottomless mimosas. We will also continue with our late night lounge on Friday and Saturdays until 2am.</p>

                            <div className="mt-4">
                                <Link to="/tel:+152534-468-854" className="relative inline-block font-semibold tracking-wide align-middle text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 font-head-ebgaramond text-lg">+152 534-468-854</Link>
                            </div>

                            <div className="mt-8">
                                <Link to="#" className="py-2.5 px-6 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-lg text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Book Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-4xl md:leading-normal text-3xl leading-normal font-head-ebgaramond font-medium">Explore Our Menu</h3>
                        <p className="text-slate-400 max-w-xl mx-auto">Every cup is a performance of thoroughly pressured hot water through the finest delicious and finely ground compacted coffee.</p>
                    </div>

                    <div className="grid md:grid-cols-2 mt-8 gap-[30px]">
                        {
                            cafeData.map((data,index) => {
                                return (
                                    <div className="flex " key={index}>
                                        <img src={data.image} className="h-16 w-16 rounded-full shadow-md dark:shadow-gray-800" alt="" />

                                        <div className="ms-3 w-full">
                                            <div className="flex justify-between pb-2 border-b border-gray-100 dark:border-gray-800">
                                                <Link to="#" className="font-head-ebgaramond hover:text-indigo-600 text-xl font-semibold">{data.name}</Link>
                                                <h6 className="text-indigo-600 font-semibold">${data.price}</h6>
                                            </div>

                                            <p className="text-slate-400 mt-2">A reader will be distracted by the readable</p>
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-4xl md:leading-normal text-3xl leading-normal font-head-ebgaramond font-medium">Customer Reviews</h3>
                        <p className="text-slate-400 max-w-xl mx-auto">Every cup is a performance of thoroughly pressured hot water through the finest delicious and finely ground compacted coffee.</p>
                    </div>

                    <div className="flex justify-center relative mt-8">
                        <div className="relative lg:w-1/2 md:w-3/4 w-full">
                            <div className="tiny-one-item">

                                <TinySlider settings={settings}>
                                    {services.map((item, index) => (
                                        <div className="tiny-slide" key={index}>
                                            <div className="text-center">
                                                <p className="text-lg text-slate-400 italic font-head-ebgaramond">{item.description}  </p>

                                                <div className="text-center mt-5">
                                                    <ul className="text-xl font-medium text-orange-500 list-none mb-2">
                                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                                        <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    </ul>

                                                    <img src={item.image} className="h-14 w-14 rounded-full shadow-md dark:shadow-gray-800 mx-auto" alt="" />
                                                    <h6 className="mt-2 font-semibold font-head-ebgaramond text-lg">{item.name}</h6>
                                                    <span className="text-slate-400 text-sm">{item.role}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </TinySlider>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid md:grid-cols-2 gap-[30px] items-center">
                        <div className="">
                            <img src={ab} className="shadow dark:shadow-gray-800 rounded" alt="" />
                        </div>

                        <div className="lg:ms-8">
                            <h4 className="mb-4 md:text-4xl md:leading-normal text-3xl leading-normal font-head-ebgaramond font-medium">The Best Quality Coffee <br /> Tastes At One Place</h4>
                            <p className="text-slate-400 max-w-xl mx-auto">Every cup is a performance of thoroughly pressured hot water through the finest delicious and finely ground compacted coffee.</p>

                            <div className="grid grid-cols-1 gap-[30px] mt-6">
                                <div className="group flex transition-all duration-500 ease-in-out items-center">
                                    <img src={coffee} className="h-16 w-16 p-3 rounded-full shadow-md dark:shadow-gray-800 bg-white" alt="" />
                                    <div className="flex-1 ms-3">
                                        <Link to="#" className="text-xl font-semibold font-head-ebgaramond hover:text-indigo-600">The Perfect Cup</Link>
                                        <p className="text-slate-400 mt-3">Composed in a pseudo-Latin language which more or less pseudo-Latin.</p>
                                    </div>
                                </div>


                                <div className="group flex transition-all duration-500 ease-in-out items-center">
                                    <img src={drip_glass} className="h-16 w-16 p-3 rounded-full shadow-md dark:shadow-gray-800 bg-white" alt="" />
                                    <div className="flex-1 ms-3">
                                        <Link to="#" className="text-xl font-semibold font-head-ebgaramond hover:text-indigo-600">Coffee Machine</Link>
                                        <p className="text-slate-400 mt-3">Composed in a pseudo-Latin language which more or less pseudo-Latin.</p>
                                    </div>
                                </div>

                            </div>

                            <div className="mt-8">
                                <Link to="#" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Explore More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-4xl md:leading-normal text-3xl leading-normal font-head-ebgaramond font-medium">Latest News</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Every cup is a performance of thoroughly pressured hot water through the finest delicious and finely ground compacted coffee.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
                        {blogData.map((item,index)=>{
                            return(
                                <div key={index} className="blog relative rounded shadow dark:shadow-gray-800 overflow-hidden">
                                    <img src={item.image} className="" alt="" />
        
                                    <div className="content p-6">
                                        <Link to="/blog-detail" className="title h5 text-xl font-semibold font-head-ebgaramond hover:text-indigo-600 duration-500 ease-in-out">{item.title}</Link>
                                        <p className="text-slate-400 mt-3">{item.desc}</p>
        
                                        <div className="mt-4">
                                            <Link to="/blog-detail" className="relative inline-flex items-center font-normal tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <div className="container-fluid relative">
                <div className="grid grid-cols-1 relative">
                    <div className="tiny-twelve-item">

                        <TinySlider settings={settings2}>
                            {service2.map((item, index) => (
                                <div className="tiny-slide" key={index}>
                                    <div className="card border-0 rounded-0">
                                        <div className="card-body p-0">
                                            <Link onClick={() => handleImageClick(index)} className="lightbox d-inline-block" title="">
                                                <img src={item.imageList} className="" alt="Insta Post" />
                                                <div className="overlay bg-dark"></div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
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
                        <Link to="https://www.instagram.com/shreethemes/" target="_blank" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Follow Now</Link>
                    </div>
                </div>
            </div>
            <CafeFooter/>
        </>
    )
}
