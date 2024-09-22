import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Summer(){
    return(
<div>
    <Nav/>
    <Hero
     title="Welcome to Summer"
     photo="summer.png"
     />
    <Footer/>
</div>
    );
}