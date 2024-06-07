import { FunctionComponent } from "preact";



//            <Logout/>


type Props ={
    userName: string
}

const Header: FunctionComponent<Props> = ({userName}) => {
    return(
        <header class="header-container">
            <div class="header-content">
            <span class="user-name">{userName}</span>
            </div>
        </header>
    )
}
export default Header;