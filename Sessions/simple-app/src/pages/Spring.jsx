import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Spring(){
    return(
<div>
    <Nav/>
    <Hero
    title="Welcome to Spring"
    photo="spring.png"
    />
    <Footer/>
</div>
    );
}