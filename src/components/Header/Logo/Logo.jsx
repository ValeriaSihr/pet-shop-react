import * as SC from "./Logo.styled";
import LogoSvg from "../../../img/The Wild Kingdom.svg?react";

export default function Logo() {
    return (
        <SC.Logo>
            <h1>The wild kingdom</h1>
            <div><LogoSvg/></div>
        </SC.Logo>
    );
}