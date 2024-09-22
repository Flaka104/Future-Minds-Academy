import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Fall(){
    return(
<div>
    <Nav/>
    <Hero
     title="Welcome to Fall"
     photo="fall.png"
     />
    <Footer/>
</div>
    );
}