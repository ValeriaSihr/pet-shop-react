import * as SC from "./Cart.styled.js";
import Svg from "../../../img/cart.svg";

export default function Cart() {
    return (
        <SC.Cart>
            <SC.CartImage src={Svg} alt="cart icon" />
            <SC.CartText>Cart</SC.CartText>
            <SC.CartCount>0</SC.CartCount>            
        </SC.Cart>
    );
}