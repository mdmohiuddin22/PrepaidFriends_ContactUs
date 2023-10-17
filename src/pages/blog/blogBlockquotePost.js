import React from 'react'
import imageP from '../../assets/images/client/01.jpg';
import image1 from '../../assets/images/client/02.jpg';
import image2 from '../../assets/images/client/03.jpg';
import image3 from '../../assets/images/client/04.jpg';
import image4 from '../../assets/images/client/05.jpg';
import image5 from '../../assets/images/blog/06.jpg';
import image6 from '../../assets/images/blog/07.jpg';
import image7 from '../../assets/images/blog/08.jpg';
import Navbar from '../../component/Navbar/navbar'
import Footer from '../../component/Footer/footer';
import { User, Mail, MessageCircle, Facebook, Github, Gitlab, Instagram, Linkedin, Twitter, Youtube } from 'feather-icons-react';
import { Link } from 'react-router-dom';

export default function BlogBlockquotePost() {
    return (
        <>
            <Navbar />

            <section className="relative md:pb-24 md:pt-40 pb-16 pt-36">
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                        <div className="lg:col-span-8 md:col-span-6">
                            <div className="relative">
                                <div className="relative py-10 px-12 border-2 border-indigo-600 rounded-[30px] before:content-[''] before:absolute before:w-28 before:border-[6px] before:border-white dark:before:border-slate-900 before:-bottom-1 before:start-16 before:z-2 after:content-[''] after:absolute after:border-2 after:border-indigo-600 after:rounded-none after:rounded-e-[50px] after:w-20 after:h-20 after:-bottom-[80px] after:start-[60px] after:z-3 after:border-s-0 after:border-b-0">
                                    <span className="font-semibold text-2xl leading-normal">
                                        Launch your campaign and benefit from our expertise on designing and managing conversion centered latest Tailwind CSS html page.
                                    </span>

                                    <div className="absolute text-8xl -top-0 start-4 text-indigo-600/10 dark:text-indigo-600/20 -z-1">
                                        <i className="mdi mdi-format-quote-open"></i>
                                    </div>
                                </div>

                                <div className="text-lg font-semibold mt-6 ms-44">
                                    - Shreethemes
                                </div>
                            </div>

                            <div className="p-6 rounded-md shadow dark:shadow-gray-800 mt-16">
                                <h5 className="text-lg font-semibold">Comments:</h5>

                                <div className="mt-8">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <img src={imageP} className="h-11 w-11 rounded-full shadow" alt="" />

                                            <div className="ms-3 flex-1">
                                                <Link to="#"  className="text-lg font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">Calvin Carlo</Link>
                                                <p className="text-sm text-slate-400">6th May 2022 at 01:25 pm</p>
                                            </div>
                                        </div>

                                        <Link to="#"  className="text-slate-400 hover:text-indigo-600 transition-all duration-500 ease-in-out ms-5"><i className="mdi mdi-reply"></i> Reply</Link>
                                    </div>
                                    <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-800 mt-6">
                                        <p className="text-slate-400 italic">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <img src={image1} className="h-11 w-11 rounded-full shadow" alt="" />

                                            <div className="ms-3 flex-1">
                                                <Link to="#"  className="text-lg font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">Calvin Carlo</Link>
                                                <p className="text-sm text-slate-400">6th May 2022 at 01:25 pm</p>
                                            </div>
                                        </div>

                                        <Link to="#"  className="text-slate-400 hover:text-indigo-600 transition-all duration-500 ease-in-out ms-5"><i className="mdi mdi-reply"></i> Reply</Link>
                                    </div>
                                    <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-800 mt-6">
                                        <p className="text-slate-400 italic">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <img src={image2} className="h-11 w-11 rounded-full shadow" alt="" />

                                            <div className="ms-3 flex-1">
                                                <Link to="#"  className="text-lg font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">Calvin Carlo</Link>
                                                <p className="text-sm text-slate-400">6th May 2022 at 01:25 pm</p>
                                            </div>
                                        </div>

                                        <Link to="#"  className="text-slate-400 hover:text-indigo-600 transition-all duration-500 ease-in-out ms-5"><i className="mdi mdi-reply"></i> Reply</Link>
                                    </div>
                                    <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-800 mt-6">
                                        <p className="text-slate-400 italic">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <img src={image3} className="h-11 w-11 rounded-full shadow" alt="" />

                                            <div className="ms-3 flex-1">
                                                <Link to="#"  className="text-lg font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">Calvin Carlo</Link>
                                                <p className="text-sm text-slate-400">6th May 2022 at 01:25 pm</p>
                                            </div>
                                        </div>

                                        <Link to="#"  className="text-slate-400 hover:text-indigo-600 transition-all duration-500 ease-in-out ms-5"><i className="mdi mdi-reply"></i> Reply</Link>
                                    </div>
                                    <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-800 mt-6">
                                        <p className="text-slate-400 italic">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 rounded-md shadow dark:shadow-gray-800 mt-8">
                                <h5 className="text-lg font-semibold">Leave A Comment:</h5>

                                <form className="mt-8">
                                    <div className="grid lg:grid-cols-12 lg:gap-6">
                                        <div className="lg:col-span-6 mb-5">
                                            <div className="text-start">
                                                <label htmlFor="name" className="font-semibold">Your Name:</label>
                                                <div className="form-icon relative mt-2">
                                                    <User className="w-4 h-4 absolute top-3 start-4"></User>
                                                    <input name="name" id="name" type="text" className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Name :" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="lg:col-span-6 mb-5">
                                            <div className="text-start">
                                                <label htmlFor="email" className="font-semibold">Your Email:</label>
                                                <div className="form-icon relative mt-2">
                                                    <Mail className="w-4 h-4 absolute top-3 start-4"></Mail>
                                                    <input name="email" id="email" type="email" className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Email :" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1">
                                        <div className="mb-5">
                                            <div className="text-start">
                                                <label htmlFor="comments" className="font-semibold">Your Comment:</label>
                                                <div className="form-icon relative mt-2">
                                                    <MessageCircle className="w-4 h-4 absolute top-3 start-4"></MessageCircle>
                                                    <textarea name="comments" id="comments" className="form-input ps-11 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Message :"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" id="submit" name="send" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full">Send Message</button>
                                </form>
                            </div>
                        </div>

                        <div className="lg:col-span-4 md:col-span-6">
                            <div className="sticky top-20">
                                <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center">Author</h5>
                                <div className="text-center mt-8">
                                    <img src={image4} className="h-24 w-24 mx-auto rounded-full shadow mb-4" alt="" />

                                    <Link to="#"  className="text-lg font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">Cristina Romsey</Link>
                                    <p className="text-slate-400">Content Writer</p>
                                </div>

                                <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8">Recent post</h5>
                                <div className="flex items-center mt-8">
                                    <img src={image5} className="h-16 rounded-md shadow dark:shadow-gray-800" alt="" />

                                    <div className="ms-3">
                                        <Link to="#"  className="font-semibold hover:text-indigo-600">Consultant Business</Link>
                                        <p className="text-sm text-slate-400">1st May 2022</p>
                                    </div>
                                </div>

                                <div className="flex items-center mt-4">
                                    <img src={image6} className="h-16 rounded-md shadow dark:shadow-gray-800" alt="" />

                                    <div className="ms-3">
                                        <Link to="#"  className="font-semibold hover:text-indigo-600">Grow Your Business</Link>
                                        <p className="text-sm text-slate-400">1st May 2022</p>
                                    </div>
                                </div>

                                <div className="flex items-center mt-4">
                                    <img src={image7} className="h-16 rounded-md shadow dark:shadow-gray-800" alt="" />

                                    <div className="ms-3">
                                        <Link to="#"  className="font-semibold hover:text-indigo-600">Look On The Glorious Balance</Link>
                                        <p className="text-sm text-slate-400">1st May 2022</p>
                                    </div>
                                </div>

                                <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8">Social sites</h5>
                                <ul className="list-none text-center mt-8 space-x-1">
                                    <li className="inline"><Link to="#"  className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Facebook className="h-4 w-4"></Facebook></Link></li>
                                    <li className="inline"><Link to="#"  className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Instagram className="h-4 w-4"></Instagram></Link></li>
                                    <li className="inline"><Link to="#"  className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Twitter className="h-4 w-4"></Twitter></Link></li>
                                    <li className="inline"><Link to="#"  className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Linkedin to="#"edin className="h-4 w-4"></Linkedin></Link></li>
                                    <li className="inline"><Link to="#"  className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Github className="h-4 w-4"></Github></Link></li>
                                    <li className="inline"><Link to="#"  className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Youtube className="h-4 w-4"></Youtube></Link></li>
                                    <li className="inline"><Link to="#"  className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><Gitlab className="h-4 w-4"></Gitlab></Link></li>
                                </ul>

                                <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8">Tagscloud</h5>
                                <ul className="list-none space-x-1 text-center mt-8">
                                    <li className="inline-block m-2"><Link to="#"  className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Business</Link></li>
                                    <li className="inline-block m-2"><Link to="#"  className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Finance</Link></li>
                                    <li className="inline-block m-2"><Link to="#"  className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Marketing</Link></li>
                                    <li className="inline-block m-2"><Link to="#"  className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Fashion</Link></li>
                                    <li className="inline-block m-2"><Link to="#"  className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Bride</Link></li>
                                    <li className="inline-block m-2"><Link to="#"  className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Lifestyle</Link></li>
                                    <li className="inline-block m-2"><Link to="#"  className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Travel</Link></li>
                                    <li className="inline-block m-2"><Link to="#"  className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Beauty</Link></li>
                                    <li className="inline-block m-2"><Link to="#"  className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Video</Link></li>
                                    <li className="inline-block m-2"><Link to="#"  className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">Audio</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
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


            <Footer />

       


         



           


        </>
    )
}
