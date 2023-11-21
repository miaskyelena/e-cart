import React from 'react'
import SellerBannerPhoto from '../../assets/images/seller.jpg'
import StylePhoto from '../../assets/images/style2.jpg'
import { Container, Row, Col, Card, Image, Button} from 'react-bootstrap'
import './SellerBanner.css'
const SellerBanner = () => {
  return (
     <Container className='seller-banner-container mt-5 bg-light pt-5' fluid>
       <Row className='seller-banner-row w-100'>
            <Col className='seller-banner-col'>
                <Image src={SellerBannerPhoto} className='seller-banner-photo' rounded />
            </Col>
           <Col>
            <h2 className='seller-banner-title'>Become a Seller</h2>
            <hr />
            <p className='seller-banner-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <h5 className='seller-banner-subtitle'
            style={{
                fontFamily: 'Arial',
                fontSize: '1rem',
            }}
            >What our sellers are saying: </h5>
                <Card className='seller-banner-card'>
                    <Card.Body>
                        <Card.Title className='seller-banner-title'>Seller Name</Card.Title>
                        <div className='card-subtitle mb-2 text-muted'>
                            <span className='seller-banner-subtitle'>23, New York City</span>
                        </div>
                        <Card.Text className='seller-banner-text'>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Button variant='clear' className='seller-banner-button' href='/s'>Get Started</Button>
            </Col> 
        </Row>
        <br />
      </Container>
  )
}

export default SellerBanner