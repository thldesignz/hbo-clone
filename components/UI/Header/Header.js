import Account from "../Account/Account"
import SearchModal from "../SearchModal/SearchModal"

const Header = (props) => {
    return(
        <header className="top-header" >
            <div className="top-header__left-side">
                <div className="top-header__menu-btn">
                    <i className="fas fa-bars"/>
                </div>
                <div className="top-header__search-btn">
                    <i className="fas fa-search"/>
                </div>
            </div>
            <div className="top-header__logo"></div>
            <div className="top-header__account">
                <img className="top-header__user-img" src="https://images.unsplash.com/photo-1546456073-6712f79251bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" />
                <div className="top-header__user-name">Jimmy</div>
            </div>
            <Account />
            <SearchModal />
        </header>
    )
}

export default Header;