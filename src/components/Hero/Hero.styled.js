import styled from "styled-components";

export const HeroSection = styled.section`
  color: var(--color-primary-brand);
  margin-bottom: 167px;
  position: relative;
  min-height: 500px;
  display: flex;
  align-items: center;

  /* Mobile styles */
  @media only screen and (max-width: 371px) {
    margin-bottom: 80px;
    min-height: 400px;
  }

  /* Tablet styles */
  @media only screen and (min-width: 372px) and (max-width: 1439px) {
    margin-bottom: 120px;
    min-height: 450px;
  }

  /* Desktop styles */
  @media only screen and (min-width: 1440px) {
    margin-bottom: 167px;
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
  @media only screen and (max-width: 371px) {
    font-size: 2rem;
    width: 280px;
    left: 5%;
    top: 40%;
  }

  /* Tablet styles */
  @media only screen and (min-width: 372px) and (max-width: 1439px) {
    font-size: 3rem;
    width: 350px;
    left: 8%;
  }

  /* Desktop styles */
  @media only screen and (min-width: 1440px) {
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
    margin-right: 0;
  }

  .keen-slider__slide {
    width: 100%;
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
  @media only screen and (max-width: 371px) {
    .keen-slider__slide {
      margin-bottom: 80px;
      top: 10px;
      left: 25%;
    }
    
    .round-img {
      width: 250px;
      height: 250px;
      padding: 4px;
    }
  }

  @media only screen and (min-width: 372px) and (max-width: 1439px) {
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

  @media only screen and (min-width: 1440px) {
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

