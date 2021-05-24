import Header from '../UI/Header/Header';
import SideNav from '../UI/SideNav/SideNav';


const MainLayout = (props) => {
    return(
        <div style={{ 
        background: '-webkit-linear-gradient(to right, #c33764, #1d2671)v',
        background: 'linear-gradient(to right, #c33764, #1d2671)',
        minHeight: '100vh', 
        backgroundAttachment: 'fixed' 
        }} >
        <Header />
        <SideNav />
        <section className="content-container">
            {props.children}
        </section>
        </div>
    )
}

export default MainLayout;