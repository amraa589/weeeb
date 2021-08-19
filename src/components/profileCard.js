import React from "react";
import { Card,Container,Row,Col } from "react-bootstrap";

function ProfileCard({name,sect}) {
	return (
		<div className="team-area">
            <div className="single-member text-center">
                <div className="team-heading"></div>
                    <div className="member-img">
                        <img src="https://img.icons8.com/pastel-glyph/64/000000/person-male--v2.png"/>
                    </div>
                    <div className="member-data">
                        <div className="member-info">
                            <h2>{name}</h2>
                            <h2 className="mt-3">{sect}</h2>
                        </div>
                    <div className="member-socials"></div>
                </div>
            </div>
        </div>
	);
}

export default ProfileCard;