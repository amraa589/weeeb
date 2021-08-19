import React from "react"


const Footer = () => {
    return (
        <div className="footer mt-3" style={{background: "url(/img/MemberSlideBackground.jpg)",
        backgroundSize:"cover",backgroundPosition:"center"}}>
            <div className="footer_one">
    
                <img src="" alt=""></img>
                <a href="main.html">2020 © Голомт Банк</a>
            </div>
            <div className="footer_two">
                <img src="http://digitalexpert.golomtbank.com/src-intern2k20/image/logo.png" alt=""></img>
            </div>
            <div className="footer_three">
                <a href="https://www.facebook.com/digitalexpert.golomtbank/"><i className="fab fa-facebook"></i></a>
                <a href="https://www.youtube.com/channel/UCfmK-zmWSFHT1cRk8dqHbgw"><i className="fab fa-youtube"></i></a>
            </div>
        </div>
      
    )
}

export default Footer
