import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import "../css/about-us.css";





export default function About() {
    return (
        <div>
            <Nav activePage="active" />
            <Hero
                title="This is the About us page"
                subtitle="Yaaaaaaay you made it"
            />

            <Stats
                happyClients="540"
                projectsCompleted="1240"
                ftSpecialties="30"
                awardsWon="15"
            />
            <Testimonials/>
           <Footer/>
        </div>
    );
}