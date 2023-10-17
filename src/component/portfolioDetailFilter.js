import React, { useState } from 'react'

import image from '../assets/images/portfolio/10.jpg';
import image1 from '../assets/images/portfolio/2.jpg';
import image2 from '../assets/images/portfolio/11.jpg';
import image3 from '../assets/images/portfolio/13.jpg';
import image4 from '../assets/images/portfolio/6.jpg';
import image5 from '../assets/images/portfolio/7.jpg';
import image6 from '../assets/images/portfolio/14.jpg';
import image7 from '../assets/images/portfolio/12.jpg';
import image8 from '../assets/images/portfolio/8.jpg';
import image9 from '../assets/images/portfolio/9.jpg';
import image10 from '../assets/images/portfolio/1.jpg';
import image11 from '../assets/images/portfolio/15.jpg';
import image12 from '../assets/images/portfolio/16.jpg';
import { Link } from 'react-router-dom/dist';

import Lightbox from 'react-18-image-lightbox';

import "react-18-image-lightbox/style.css"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const images = [image, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12];
export default function PortfolioDetailFilter(props) {

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
    const masonry = [
        {
            image: image,
            dataGroup: '["branding"]'
        },
        {
            image: image1,
            dataGroup: '["designing"]'
        },
        {
            image: image2,
            dataGroup: '["photography"]'
        },
        {
            image: image3,
            dataGroup: '["branding"]'
        },
        {
            image: image4,
            dataGroup: '["branding"]'
        },
        {
            image: image5,
            dataGroup: '["designing"]'
        },
        {
            image: image6,
            dataGroup: '["development"]'
        },
        {
            image: image7,
            dataGroup: '["development"]'
        },
        {
            image: image8,
            dataGroup: '["development"]'
        },
        {
            image: image9,
            dataGroup: '["development"]'
        },
        {
            image: image10,
            dataGroup: '["branding"]'
        },
        {
            image: image11,
            dataGroup: '["designing"]'
        },
        {
            image: image12,
            dataGroup: '["development"]'
        },
    ];
    return (
        <div>
            <ResponsiveMasonry
                    columnsCountBreakPoints={props.columnsCountBreakPoints}
            >
              <Masonry columnsCount={props.shuffle}>

                {
                    masonry.map((data, index) => {
                        return (
                            <div className="p-1 picture-item" data-groups={data.dataGroup} key={index}>
                                <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                                    <Link to={data.image} className="lightbox transition-all duration-500 group-hover:scale-105" title="">
                                        <img src={data.image} className="" alt="" onClick={() => handleImageClick(index)} />
                                    </Link>
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
               </Masonry>
            </ResponsiveMasonry>
        </div>
    )
}
