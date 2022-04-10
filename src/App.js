import {React} from "react";
import Header from "./Header";
import Newsletter from "./Newsletter";
import Footer from "./Footer"
import Aim from "./Aim"
import "./styles/app.css"
import Intro from "./Intro";
import Services from "./Services";
import Register from "./Register";

function App() {
    return ( 
        <div className = "app"> 
        <Header />
        <Intro/>
        <Register/> 
        <Aim/>
       <Newsletter/>
        <Services/>
        <Footer />
        </div>
    );
}

export default App;