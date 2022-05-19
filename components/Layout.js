import TopBar from "./TopBar";
import Header from "./Header"
import Hero from "./Hero"
import Projects from "./Projects"
import Info from "./Info"

const Layout = ({children}) => {
    return ( 
        <div className="content">
            <TopBar />
            <Header />
            <Hero />
            <Projects />
            <Info />
                {children}
        </div>
     );
}
 
export default Layout;