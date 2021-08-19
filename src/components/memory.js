import { useState,useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Row,Col } from "react-bootstrap";
import data from "./memorysJson.json";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/thumbs/thumbs.min.css"

import SwiperCore, {
    Navigation,Thumbs
  } from 'swiper/core';

  SwiperCore.use([Navigation,Thumbs]);

const Memory = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [title, setTitle] = useState(data['story'][0]['title']);
    const [body, setBody] = useState(data['story'][0]['body']);
    const handleChange=(index)=>{
        setTitle(data['story'][index]['title'])
        setBody(data['story'][index]['body'])
    }
    return (
        <>
        <Row className="memory-slide mt-5">
                <Col sm="6" md="6" lg="6" xl="6" xs="6" className="story-size">
                    <Swiper
                     slidesPerView={1}
                        spaceBetween={10} 
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        onSlideChange={(e) => handleChange(e.activeIndex)}
                        className="mySwiper2">
                            {data['img'].map((url,i)=>(
                                <SwiperSlide key={i}>
                                    <img src={url['url']} />
                                </SwiperSlide>
                            ))}
                            
                        </Swiper>
                </Col>
                <Col sm="6" md="6" lg="6" xl="6" xs="6" className="memory-desc">
                    <div>
                        {/*<h3>{title}</h3>*/}
                        <p>{body}</p>
                    </div>
                </Col>
            </Row>
            <Row className="p-2">
                <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={3}
                        freeMode={true}
                        watchSlidesVisibility={true}
                        watchSlidesProgress={true}
                        className="mySwiper1 mt-3"
                        >
                            {data['img'].map((url,i)=>(
                                <SwiperSlide key={i} style={{height:'200px'}}>
                                    <img src={url['url']} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
            </Row>
        </>
    )
}

export default Memory
