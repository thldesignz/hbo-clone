import Account from "../Account/Account"
import SearchModal from "../SearchModal/SearchModal"
import { useStateContext } from "../../HBOProvider";

const Header = (props) => {
    const globalState = useStateContext();

    return(
        <header className={` top-header ${globalState.accountModalOpen || globalState.setSideNavOpen ? 'top-header--menu-open' : '' } `} >
            <div className="top-header__left-side">
                <div className="top-header__menu-btn" onClick={() => globalState.setSideNavOpenAction(true)}>
                    <i className="fas fa-bars"/>
                </div>
                <div className="top-header__search-btn" onClick={() => globalState.setSearchModalOpenAction(true)}>
                    <i className="fas fa-search"/>
                </div>
            </div>
            <div className="top-header__logo"></div>
            <div className="top-header__account" onClick={() => globalState.setAccountModalOpenAction(!globalState.accountModalOpen)}>
                <img className="top-header__user-img" src="https://images.unsplash.com/photo-1546456073-6712f79251bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" />
                <div className="top-header__user-name">Jimmy</div>
            </div>
            <Account />
            <SearchModal />
        </header>
    )
}

export default Header;