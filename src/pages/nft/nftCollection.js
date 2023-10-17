import React from 'react'
import { Link } from 'react-router-dom';

import image from '../../assets/images/nft/items/16.jpg';
import image1 from '../../assets/images/nft/items/1.jpg';
import image2 from '../../assets/images/nft/items/2.jpg';
import image3 from '../../assets/images/nft/items/3.jpg';
import image4 from '../../assets/images/client/01.jpg';
import image5 from '../../assets/images/nft/items/17.jpg';
import image6 from '../../assets/images/nft/items/4.jpg';
import image7 from '../../assets/images/nft/items/5.jpg';
import image8 from '../../assets/images/nft/items/6.jpg';
import image9 from '../../assets/images/client/02.jpg';
import image10 from '../../assets/images/nft/items/18.jpg';
import image11 from '../../assets/images/nft/items/7.jpg';
import image12 from '../../assets/images/nft/items/8.jpg';
import image13 from '../../assets/images/nft/items/9.jpg';
import image14 from '../../assets/images/client/03.jpg';
import image15 from '../../assets/images/nft/items/19.jpg';
import image16 from '../../assets/images/nft/items/10.jpg';
import image17 from '../../assets/images/nft/items/11.jpg';
import image18 from '../../assets/images/nft/items/12.jpg';
import image19 from '../../assets/images/client/04.jpg';
import image20 from '../../assets/images/nft/items/20.jpg';
import image21 from '../../assets/images/nft/items/13.jpg';
import image22 from '../../assets/images/nft/items/14.jpg';
import image23 from '../../assets/images/nft/items/15.jpg';
import image24 from '../../assets/images/client/05.jpg';
import image25 from '../../assets/images/nft/items/21.jpg';
import image26 from '../../assets/images/nft/items/5.jpg';
import image27 from '../../assets/images/nft/items/8.jpg';
import image28 from '../../assets/images/nft/items/11.jpg';
import image29 from '../../assets/images/client/06.jpg';
import image30 from '../../assets/images/nft/items/22.jpg';
import image31 from '../../assets/images/nft/items/2.jpg';
import image32 from '../../assets/images/nft/items/3.jpg';
import image33 from '../../assets/images/nft/items/4.jpg';
import image34 from '../../assets/images/client/07.jpg';
import image35 from '../../assets/images/nft/items/23.jpg';
import image36 from '../../assets/images/nft/items/6.jpg';
import image37 from '../../assets/images/nft/items/7.jpg';
import image38 from '../../assets/images/nft/items/9.jpg';
import image39 from '../../assets/images/client/08.jpg';
import image40 from '../../assets/images/nft/items/24.jpg';
import image41 from '../../assets/images/nft/items/11.jpg';
import image42 from '../../assets/images/nft/items/12.jpg';
import image43 from '../../assets/images/nft/items/13.jpg';
import image44 from '../../assets/images/client/01.jpg';

import Footer from '../../component/Footer/footer';


import NftNavbar from '../../component/Navbar/nftNavbar';
import {MdKeyboardArrowRight} from '../../assets/icons/icons'

export default function NftCollection() {
    const nftCollection = [
        {
            image1: image,
            image5: image4,
            subImage:[image1,image2,image3],
            name: 'Digital Arts'
        },
        {
            image1: image5,
            subImage:[image6,image7,image8],
            image5: image9,
            name: 'Sports'
        },
        {
            image1: image10,
            subImage:[image11,image12,image13],
            image5: image14,
            name: 'Photography'
        },
        {
            image1: image15,
            subImage:[image16,image17,image18],
            image5: image19,
            name: 'Illustrations'
        },
        {
            image1: image20,
            subImage:[image21,image22,image23],
            image5: image24,
            name: 'Animations'
        },
        {
            image1: image25,
            subImage:[image26,image27,image28],
            image5: image29,
            name: 'Virtual Reality'
        },
        {
            image1: image30,
            subImage:[image31,image32,image33],
            image5: image34,
            name: 'Sports'
        },
        {
            image1: image35,
            subImage:[image36,image37,image38],
            image5: image39,
            name: 'Digital Arts'
        },
        {
            image1: image40,
            subImage:[image41,image42,image43],
            image5: image44,
            name: 'Photography'
        },
    ]
    return (
        <>
            <NftNavbar />
            <section className="relative table w-full py-32 lg:py-40 bg-gradient-to-br to-orange-600/20 via-fuchsia-600/20 from-indigo-600/20">
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="text-3xl leading-normal font-medium">Collection</h3>
                    </div>
                </div>

                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="tracking-[0.5px] mb-0 inline-flex items-center space-x-1">
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600"><Link to="/index">Techwind</Link></li>
                        <li className="inline-block text-base mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600"><Link to="/index-nft">NFT</Link></li>
                        <li className="inline-block text-base mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-indigo-600" aria-current="page">Collection</li>
                    </ul>
                </div>
            </section>
            <div className="relative">
                <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
                    <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                        {
                            nftCollection.map((data,index) => {
                                return (

                                    <div key={index} className="group relative overflow-hidden bg-gray-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-800">
                                        <div className="p-2 rounded-md shadow dark:shadow-gray-800 bg-gradient-to-br to-orange-600/20 via-fuchsia-600/20 from-indigo-600/20">
                                            <div className="flex items-center">
                                                <div className="w-full p-1">
                                                    <img src={data.image1} className="rounded-md" alt="" />
                                                </div>
                                            </div>

                                            <div className="flex items-center">
                                                {data.subImage.map((item,index)=>{   
                                                   return(
                                                        <div className="w-1/3 p-1" key={index}>
                                                            <img src={item} className="rounded-md" alt="" />
                                                        </div>
                                                   )
                                                })}
                                            </div>
                                        </div>

                                        <div className="p-6 pt-0 -mt-10 text-center">
                                            <img src={data.image5} className="h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 mx-auto" alt="" />

                                            <div className="mt-4">
                                                <Link to="/index" className="text-xl leading-none font-semibold hover:text-indigo-600 duration-500 ease-in-out block">{data.name}</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
