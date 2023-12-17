import React from 'react';
import { Card } from 'react-bootstrap';
import './SellerBanner.css';

const SellerBanner = () => {
  return (
    <Card className="bg-dark text-white mt-3" 
    style={{ 
      height: '400px',
      backgroundImage: `url(${SellerBannerPhoto})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      }}
    >
      <Card.ImgOverlay
        style={{
            backgroundColor: 'rgba(0,0,0,0.5)',
        }}
      >
        <h1 className="text-center mt-5">Become a seller</h1>
        <Card.Text className="text-center">
          Earn extra cash by selling your products on our marketplace
        </Card.Text>
        <Card.Text className="text-center">
          <button className="btn btn-light" style={
            {
              borderRadius: '50px',
                padding: '10px 30px',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                
            }
          
          }>Learn more</button>
        </Card.Text>
        
      </Card.ImgOverlay>
    </Card>
  );
};

export default SellerBanner;