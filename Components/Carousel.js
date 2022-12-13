// import React from 'react'
// import jsonData from '../Carosel.json';


// render(
                            
//     let manner = {
//         autoSliding: {interval: "3s"},
//         duration: "2s"
//     };
    
//     let accEleSetting;

//     let mobileRegx = /Mobi|Tablet|iPad|iPhone/;
//     if (mobileRegx.test(navigator.userAgent)) {
//         accEleSetting.button = false;
//     }

//     let buttonSetting = {
//         placeOn: "middle-inside",
//         hoverEvent: true,
//         style: {
//             left: {
//                 height: "50px",
//                 width: "50px",
//                 color: "#929393",
//                 background: "rgba(225, 228, 232, 0.8)",
//                 borderRadius: "50%"
//             },
//             right: {
//                 height: "50px",
//                 width: "50px",
//                 color: "#929393",
//                 background: "rgba(225, 228, 232, 0.8)",
//                 borderRadius: "50%"
//             }
//         }
//     };

//     return <CarouselSlider slideItems = {jsonData.autoSliding.items}  
//         manner = {manner} 
//         buttonSetting = {buttonSetting} />;

// }






import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import Budget from "./Main/Images/Budget.jpg.webp"
import Cyber from "./Main/Images/CYBERshot.jpg"
import Eight from "./Main/Images/eight.jpg.webp"
import Fcmb from "./Main/Images/fcmb.jpg.webp"
import Intel1 from "./Main/Images/Intel.webp.webp"
import Unilever from "./Main/Images/Unilever.jpg.jpg"
import Vivo1 from "./Main/Images/Vivo.jpg.jpg"
import Worldcup from "./Main/Images/WorldCup.jpg.jpg"
import Yakataspecial from "./Main/Images/Yakataspecial.jpg"

function HeroCarousel() {
        return (
            <>
            <Carousel>
                <div>
                    <img src={Cyber} />
                </div>
                <div>
                    <img src={Eight} />
                </div>
                <div>
                    <img src={Fcmb} />
                </div>
                <div>
                    <img src={Intel1} />
                </div>
                <div>
                    <img src={Unilever} />
                </div>
                <div>
                    <img src={Vivo1} />
                </div>
                <div>
                    <img src={Worldcup} />
                </div>
                <div>
                    <img src={Yakataspecial} />
                </div>
            </Carousel>
       </> );
}

export default HeroCarousel;



// renderArrowPrev: (clickHandler: () => void, hasPrev: boolean, label: string) => React.ReactNode;
// renderArrowNext: (clickHandler: () => void, hasNext: boolean, label: string) => React.ReactNode;

// renderIndicator: (
//     clickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void,
//     isSelected: boolean,
//     index: number,
//     label: string
// ) => React.ReactNode;