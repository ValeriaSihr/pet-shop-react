import svg from "../../../img/cart.svg"


export default function Cart() {
    return (
        <div>
            <p>Cart</p>
            <span>0</span>
            <img src={svg} alt="shoping cart" />
        </div>
    )
}