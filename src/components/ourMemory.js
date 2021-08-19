
import { Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'
import Memory from "./memory";

const OurMemory = () => {
    return (
        <>
        <div className="text-center mt-3">
            <h2 className="text-primary"><ins>Бидний дурсамж</ins></h2>
        </div>
        <Container>
            <Memory/>
        </Container>
        </>
    )
}

export default OurMemory
