import TopBar from "./TopBar";
import Header from "./Header"
import Hero from "./Hero"
import About from "./About"

const Layout = ({children}) => {
    return ( 
        <div className="content">
            <TopBar />
            <Header />
            <Hero />
            <About />
                {children}
        </div>
     );
}
 
export default Layout;