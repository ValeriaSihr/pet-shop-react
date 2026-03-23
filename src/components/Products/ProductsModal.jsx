import * as SC from "./ProductsModal.styled.js";

export function ProductsModal({ product, onClose }) {
    if (!product) return null;

    return (
        <SC.Backdrop onClick={onClose}>
            <SC.ModalContent onClick={(e) => e.stopPropagation()}>
                <SC.CloseButton onClick={onClose}>X</SC.CloseButton>
                <img src={product.img} alt={product.alt} />
                <h3>{product.title}</h3>
                <p>{product.price} $</p>
                <button>Add to Cart</button>
            </SC.ModalContent>
        </SC.Backdrop>
    )
}