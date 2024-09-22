import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Footer from "../components/Footer";

export default function Contact(){
    return(
        <div>
          
          <Nav activePage="active" />
            <Hero
                title="contact"
                subtitle="Yaaaaaaay you made it"
            />

            <Stats
                happyClients="540"
                projectsCompleted="1240"
                ftSpecialties="30"
                awardsWon="15"
            />
            <Footer />
            </div>
    );
}