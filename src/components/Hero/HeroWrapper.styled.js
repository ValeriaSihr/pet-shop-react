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
  @media screen and (min-width: 320px) and (max-width: 480px) {
    min-height: 450px;
    background-size: cover;
    background-position: center;
  }

  /* Tablet styles */
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    min-height: 550px;
    background-size: cover;
    background-position: center;
  }

  /* Desktop styles */
  @media screen and (min-width: 1281px) {
    min-height: 600px;
    background-size: cover;
    background-position: center;
  }
`;