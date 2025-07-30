import TW from "../../img/TW.svg?react"
import IG from "../../img/IG.svg?react"
import TT from "../../img/TT.svg?react"
import MD from "../../img/MD.svg?react"
import LogoSvg from "../../img/The Wild Kingdom.svg?react"


export default function Footer() {
    return <footer>
        <div>
            <div>
                <h4>Sitemap</h4>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Products</li>
                    <li>Services</li>
                </ul>
                <ul>
                    <li><TW/></li>
                    <li><IG/></li>
                    <li><TT/></li>
                    <li><MD/></li>
                </ul>
            </div>
            <div>
               <LogoSvg/> 
            </div>
            <div>
                <p>Treating all the pets present here like royalty.</p>
                <form>
                    <input type="email" placeholder="Enter email address" />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
            <p>
                &copy; 2025 The Wild Kingdom. All rights reserved.
            </p>
        </div>
    </footer>
}