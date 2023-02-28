import { Container } from "reactstrap";

const Footer = () => {
    return (
        <Container
            fluid
            tag="footer"
            className="text-center bg-info text-white fixed-bottom p-3"
        >
            Developed by <i>Steevel Sharon Salis</i>
        </Container>
    );
};

export default Footer;
