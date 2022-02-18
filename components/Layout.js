import TopBar from "./TopBar";

const Layout = ({children}) => {
    return ( 
        <div className="content">
            <TopBar />
                {children}
        </div>
     );
}
 
export default Layout;