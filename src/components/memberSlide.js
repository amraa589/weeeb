import ProfileCard from "./profileCard";
import members from "./members.json"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';
import { Container } from "react-bootstrap";

SwiperCore.use([Pagination,Navigation]);

export default function MemberSlide() {
  return (
    <div className="mt-5 pt-5 pb-5" style={{background: "url(/img/SL-103020-37400-15.jpg)",
    backgroundSize:"cover",backgroundPosition:"center"}}>
      <Container>
      <Swiper 
      breakpoints={{
        1200: {
          slidesPerView:5 ,
          slidesPerColumn:2
        },
        992: {
          slidesPerView:4 ,
          slidesPerColumn:2
        },
        785: {
          slidesPerView:3 ,
          slidesPerColumn:2
        },
        // when window width is >= 768px
        410: {
          slidesPerView:2 ,
          slidesPerColumn:1 
        },
      }} 
      spaceBetween={30} 
      slidesPerColumnFill="row"
      navigation={true}
      pagination={{
      "type": "fraction"
    }}
    loop="true"
    direction='horizontal'
    className="mySwiper">
        {members.map((person,key)=>(
          <SwiperSlide key={key}>
            <ProfileCard name={person['name']} sect={person['sect']}/>
          </SwiperSlide>
        ))}
      </Swiper>
      </Container>
    </div>

  )
}