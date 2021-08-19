import React from 'react'
import urls from './videoUrl.json'
import { Container,Row,Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import Video from "./video"

//Import video container 
//import Video from "./video";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"


// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);

const Intro = () => {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col lg="10" md="8" sm="12" className="text-center intro-header">
                    <div className="intro-title mt-5 mb-5">
                        <h3>INTERNSHIP2K21</h3>
                    </div>
                    <div className="intro-desc">
                    Дижитал мэргэжилтэн хөтөлбөр нь их дээд сургуулиудын оюутан залууст чиглэсэн дэд хөтөлбөр бөгөөд олон улсын internship хөтөлбөрийг Монгол улсдаа нутагшуулах зорилгоор зохион байгуулж байна. Их дээд сургуулиудын оюутан залуусыг бүтэн зуны турш мэргэжлээрээ сурч боловсрох, цалинтай дадлагажих, банкны бодит систем болон төслүүд дээр ажиллах, багийн зохион байгуулалт болон хувь хүнийг хөгжлийн сургалтуудад хамрагдах, явган аялал, тэмцээн уралдаанд оролцох, бүтэн жилийн сургалтын тэтгэлэгт хамрагдах зэрэг олон боломжийг internship 2k21 хөтөлбөр олгодог.
                    </div>
                </Col>
            </Row>
            <Row className="mt-3 mb-5">
               <Col lg="4" md="4" sm="12" className="intro-intro zoom ">
                <div className="card text-center p-2 justify-content-center">
                    <div className="text-center mt-3">
                        <img src="	http://digitalexpert.golomtbank.com/src-intern2k20/image/coding.svg" className="card-image" alt="..."/>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">БОДИТ ОРЧИН</h5>
                        <p className="card-text">Серверийн тоног төхөөрөмж, хэрэглээнд нэвтэрсэн hardware болон software дээр ментороос чиглэл авч ажиллах боломжтой.</p>
                    </div>
                </div>
               </Col>
               <Col lg="4" md="4" sm="12" className="intro-intro zoom">
                <div className="card mt-5 p-2 text-center">
                    <div className="text-center mt-3">
                        <img src="http://digitalexpert.golomtbank.com/src-intern2k20/image/wage.svg" className="card-image" alt="..."/>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">ЦАЛИНТАЙ ДАДЛАГА</h5>
                        <p className="card-text">Идэвх оролцоо, бүтээлч сэтгэлгээ, санаачилга болон ажлын үр дүнг харгалзан үзэж урамшуулал олгодог.</p>
                    </div>
                    </div>
               </Col>
               <Col lg="4" md="4" sm="12" className="intro-intro zoom">
               <div className="card p-2 text-center">
                    <div className="text-center mt-3">
                        <img src="http://digitalexpert.golomtbank.com/src-intern2k20/image/team_meeting.svg" className="card-image" alt="..."/>
                    </div>
                <div className="card-body">
                    <h5 className="card-title">NETWORKING БОЛОМЖУУД</h5>
                    <p className="card-text">Мэдээллийн Технологийн Хэсгийн алба, хэлтэс, нэгж бүрт ажиллаж буй экспертүүдтэй networking үүсгэх боломжтой.</p>
                </div>
                </div>
               </Col>
            </Row>
            <Row className="justify-content-center">
                <Col lg="4" md="4" sm="12" className="text-center mb-4">
                    <div className="intro-header">
                        <h3>танилцуулга бичлэг</h3>
                    </div>
                </Col>
            </Row>
            <Row className="mb-5">
            <Swiper 
            slidesPerView={3}
                spaceBetween={30} 
                pagination={{
            "clickable": true,
            "bulletActiveClass":'swiper-pagination-bullet-active'
            }} className="mySwiper-video">  
            {urls.map((url,i)=>(
                <SwiperSlide key={i} className="intro-video"> <Video url={url['url']}/>  </SwiperSlide>
            ))}
            </Swiper>
            </Row>
        </Container>
    )
}

export default Intro
