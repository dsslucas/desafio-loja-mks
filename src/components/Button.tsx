import { ButtonComponent } from "./Styles";

const Button = (props: any) => {
    return (
        <ButtonComponent {...props}>
            {props.children}
        </ButtonComponent>
    )
}

export default Button