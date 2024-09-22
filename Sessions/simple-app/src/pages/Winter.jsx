import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Winter(){
    return(
<div>
    <Nav/>
    <Hero
     title="Welcome to Winter"
     photo="winter.png"
     />
    <Footer/>
</div>
    );
}