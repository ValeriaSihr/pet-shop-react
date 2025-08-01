import styled from "styled-components";
import backgroundHeroImg from '../../img/Hero_background.png';

export const HeroWrapper = styled.div`
  background-image: url(${backgroundHeroImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 600px;
  position: relative;

  /* Mobile styles */
  @media only screen and (max-width: 767px) {
    min-height: 450px;
    background-size: cover;
    background-position: center;
  }

  /* Tablet styles */
  @media only screen and (min-width: 768px) and (max-width: 1439px) {
    min-height: 550px;
    background-size: cover;
    background-position: center;
  }

  /* Desktop styles */
  @media only screen and (min-width: 1440px) {
    min-height: 600px;
    background-size: cover;
    background-position: center;
  }
`;