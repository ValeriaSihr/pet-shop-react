import styled from "styled-components";

export const Container = styled.div`
  min-width: 320px;
  max-width: 375px;
  margin: 0 auto;
  padding: 0 16px;

  /* Styles for Tablet devices */
@media only screen and (min-width: 768px) {
  
    max-width: 768px;
  
}
/* Styles for Desktop devices */
@media only screen and (min-width: 1440px) {
  
    max-width: 1440px;
  }

`