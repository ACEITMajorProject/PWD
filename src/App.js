import {React} from "react";
import Header from "./Header";
import Newsletter from "./Newsletter";
import Footer from "./Footer"
import Aim from "./Aim"
import "./styles/app.css"

function App() {
    return ( 
        <div className = "app"> 
        <Header />
        {/* Introduction  */}
        {/* Register-steps  */}
        <Aim/>
       <Newsletter/>
        {/* Services  */}
        <Footer />
        </div>
    );
}

export default App;