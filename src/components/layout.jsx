import Footer from "./footer";
import Header from "./header";
import Nav from "./nav";

export default function Layout({ children }) {

    return (
        <div className="bg-primary">
            <Nav/>
            <div>{children}</div>
            <Footer/>
        </div>
    )
}