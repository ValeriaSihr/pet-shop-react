import styled from "styled-components";

export const HeroSection = styled.section`
  color: var(--color-primary-brand);
  position: relative;
  min-height: 500px;
  display: flex;
  align-items: center;
  

  /* Mobile styles */
  @media screen and (min-width: 320px) and (max-width: 480px) {
    margin-bottom: 40px;
    min-height: 400px;
  }

  /* Tablet styles */
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    margin-bottom: 60px;
    min-height: 450px;
  }

  /* Laptop styles */
  @media screen and (min-width: 1025px) and (max-width: 1280px) {
    margin-bottom: 70px;
    min-height: 480px;
  }

  /* Desktop styles */
  @media screen and (min-width: 1281px) {
    margin-bottom: 80px;
    min-height: 500px;
  }
`;

export const HeroParagraph = styled.p`
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  z-index: 1;
  font-size: 4.375rem;
  text-transform: capitalize;
  width: 440px;
  font-weight: bold;
  line-height: 1.2;
  

  /* Mobile styles */
  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 1.5rem;
    width: 325px;
    left: 10%;
    top: 85%;
  }

  /* Tablet styles */
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 3rem;
    width: 350px;
    left: 8%;
  }

  /* Laptop styles */
  @media screen and (min-width: 1025px) and (max-width: 1280px) {
    font-size: 3.5rem;
    width: 380px;
    left: 15%;
    bottom: 10%;
  }

  /* Desktop styles */
  @media screen and (min-width: 1281px) {
    font-size: 4.375rem;
    width: 440px;
    left: 10%;
  }
`;

// Keen Slider styles
export const KeenSliderContainer = styled.div`
  .keen-slider__slide {
    margin-bottom: 156px;
    top: 20px;
    left: 33%;
  }

  .keen-slider__slide:last-child {
    margin-right: 100px;
  }

  .keen-slider__slide {
    width: 500px;
    object-fit: cover;
    border-radius: 12px;
    transform: translateX(-50%);
    transition: transform 0.1s ease-in-out;
  }

  .round-img {
    border-radius: 50%;
    width: 500px;
    height: 500px;
    object-fit: cover;
    border: 1px solid var(--color-primary-brand);
    padding: 8px;
    box-shadow: 0 2px 5px 5px rgba(0, 0, 0, 0.027);
  }

  /* Responsive styles for slider */
  @media screen and (min-width: 320px) and (max-width: 480px) {
    .keen-slider__slide {
      margin-bottom: 80px;
      top: 10px;
      left: 10%;
    }
    
    .round-img {
      width: 250px;
      height: 250px;
      padding: 4px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .keen-slider__slide {
      margin-bottom: 120px;
      top: 15px;
      left: 30%;
    }
    
    .round-img {
      width: 350px;
      height: 350px;
      padding: 6px;
    }
  }

  @media screen and (min-width: 1025px) and (max-width: 1280px) {
    .keen-slider__slide {
      margin-bottom: 140px;
      top: 18px;
      left: 32%;
    }
    
    .round-img {
      width: 400px;
      height: 400px;
      padding: 7px;
    }
  }

  @media screen and (min-width: 1281px) {
    .keen-slider__slide {
      margin-bottom: 156px;
      top: 20px;
      left: 33%;
    }
    
    .round-img {
      width: 500px;
      height: 500px;
      padding: 8px;
    }
  }
`;

