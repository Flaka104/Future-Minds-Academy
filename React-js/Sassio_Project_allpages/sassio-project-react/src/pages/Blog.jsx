import Header from "../components/Header";
import Premium from "../components/Premium";
import Trusted from "../components/Trusted";
import Safety from "../components/Safety";
import Success from "../components/Success";
import Features from "../components/Features";
import Customer from "../components/Customer";
import Arrows from "../components/Arrows";
import Metrics from "../components/Metrics";
import Screenshot from "../components/Screenshot"
import Pricing from "../components/Pricing";
import Help from "../components/Help";
import Footer from "../components/Footer";
import Scroll from "../components/Scroll";

export default function Blog(){
    return(
<div>
    <Header title="blog"/>
    <Premium/>
    <Trusted/>
    <Safety/>
    <Success/>
    <Features/>
    <Customer/>
    <Arrows/>
    <Metrics/>
    <Screenshot/>
    <Pricing/>
    <Help/>
    <Footer/>
    <Scroll/>
</div>
    );
}