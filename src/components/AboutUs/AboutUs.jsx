import Food from "../../img/food.svg?react";
import Care from "../../img/care.svg?react";
import Accessories from "../../img/accessories.svg?react"
import Yorik from "../../img/york.jpg";
import * as SC from "./AboutUs.styled"
import Container from "../Container/Container";

export default function AboutUs() {

    
    return (
         
        <SC.AboutUsSection>
            <Container>
            <SC.AboutImage src={Yorik} alt="Yorcshire" />
             <div>
              <SC.AboutUsContainer>
                <SC.AboutMainHeading>About Us</SC.AboutMainHeading>
                <SC.AboutSecondaryHeading>Treating pet like royalty</SC.AboutSecondaryHeading>
                <SC.AbotParagraph1>“They’re not just pets, they’re family”</SC.AbotParagraph1>
                <SC.AbotParagraph2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam mi id augue ultrices, in tempus elit tristique. Aliquam ultrices sem non.</SC.AbotParagraph2>
                <SC.AboutBtn type="button">Explore</SC.AboutBtn>
             </SC.AboutUsContainer>
           
               <SC.AboutList>
                        <SC.AboutItem>
                            <Food />
                            <p>Pet Food</p>
                        </SC.AboutItem>
                        <SC.AboutItem>
                            <Care />
                            <p>Pet Care</p>
                        </SC.AboutItem>
                        <SC.AboutItem>
                            <Accessories />
                            <p>Pet Accessories</p>
                        </SC.AboutItem>
                    </SC.AboutList>
                
            </div>
            </Container>
     </SC.AboutUsSection>
 )   
}