import * as SC from "./Container.styled"

export default function Container({ children }) {
    return (
        <SC.Container>
            {children}
        </SC.Container>
    )
}