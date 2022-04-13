import TopBar from "./TopBar";
import Header from "./Header"
import Hero from "./Hero"

const Layout = ({children}) => {
    return ( 
        <div className="content">
            <TopBar />
            <Header />
            <Hero />
                {children}
        </div>
     );
}
 
export default Layout;