import TopBar from "./TopBar";
import Header from "./Header"

const Layout = ({children}) => {
    return ( 
        <div className="content">
            <TopBar />
            <Header />
                {children}
        </div>
     );
}
 
export default Layout;