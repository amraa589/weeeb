import React from 'react'
import { Card } from 'react-bootstrap'

const Cards = ({title,body}) => {
    return (
        <Card className="h-100"  style={{ width: '100%',borderRadius: 10,marginTop:20}}>
            <Card.Img variant="top" src="img/Vector_2598.jpg" style={{borderTopLeftRadius: 10,borderTopRightRadius: 10}} />
            <Card.Body>
                <Card.Title style={{width:"auto",borderBottom:"solid 1px blue"}}>
                    <h5 >{title}</h5>
                </Card.Title>
                <Card.Text style={{textDecoration:"1px blue"}}>
                    {body}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Cards
