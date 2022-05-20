import TopBar from "./TopBar";
import Header from "./Header"
import Hero from "./Hero"
import Projects from "./Projects"
import Info from "./Info"
import Footer from "./Footer"

const Layout = ({children}) => {
    return ( 
        <div className="content">
            <TopBar />
            <Header />
            <Hero />
            <Projects />
            <Info />
            <Footer />
                {children}
        </div>
     );
}
 
export default Layout;