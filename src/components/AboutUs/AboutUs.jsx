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
            <img src={Yorik} alt="Yorcshire" />
             <div>
                <h2>About Us</h2>
                <h3>Treating pet like royalty</h3>
                <p>“They’re not just pets, they’re family”</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam mi id augue ultrices, in tempus elit tristique. Aliquam ultrices sem non.</p>
                <button type="button">Explore</button>
             </div>
           
            <ul>
                <li><Food/></li>
                <li><Care/></li>
                <li><Accessories/></li>
                </ul>
                </Container>
     </SC.AboutUsSection>
 )   
}