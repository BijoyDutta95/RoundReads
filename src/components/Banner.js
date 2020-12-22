import React, {useState} from 'react'
import BookIcon from '@material-ui/icons/Book'
import ArrowRight from '@material-ui/icons/ArrowForwardIos';
import ArrowLeft from '@material-ui/icons/ArrowBackIos';
import './Banner.css'
// function Banner() {
//     return (
//         <div className="bannerBlock">
//             <ArrowBackIcon id="forwardIcon"/>
//             <img src="/images/banner1.jpg" alt="banner1" id="banner1"/>
//             <ArrowForwardIcon id="backwardIcon"/>
//         </div>
//     )
// }

// export default Banner
import { BannerData } from './BannerData';

const Banner = ({slides}) => {

    const [current,setCurrent]=useState(0);
    const length=slides.length

    const nextBanner =()=>{
        setCurrent(current === length-1? 0: current+1)
    };
    const prevBanner =()=>{
        setCurrent(current === 0?length-1: current-1)
    };

    if(!Array.isArray(slides) || slides.length<=0){
        return null;
    }


    return (
        <section className="sliderBanner">
            <ArrowLeft className="arrowLeft" onClick={prevBanner}/>
            <ArrowRight className="arrowRight" onClick={nextBanner}/>
            {BannerData.map((slide,index)=>{
                return(
                    <div className={index === current?'slide active': 'slide'} key={index}>
                        {index === current && (
                            <img src={slide.image} alt="sliderImage" className="actualBanner"/>
                        )}
                        
                    </div>
                ) 
            })}
        </section>
    );
};

export default Banner
