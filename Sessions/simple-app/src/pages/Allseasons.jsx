import Nav from "../components/Nav";

export default function Allseasons(){
    return(
       <div>
         <header className="row align-center">
            <div className="col">
                <nav className="navbar gap-2">
                    <h2>Logo</h2>
                    <ul className="navbar-menu remove-tablet">
                        <li><a href="/spring">Spring</a></li>
                        <li><a href="/summer">Summer</a></li>
                        <li><a href="/fall">Fall</a></li>
                        <li><a href="/winter">Winter</a></li>
                        <li><button className="btn">All Seasons</button></li>
                    </ul>
                </nav>
            </div>
        </header>
        <main className="row">
            <div className="col">
                <h1 className="text-center">Welcome to all seasons!</h1>
                <div>
                    <img className="img-xxl" src="assets/images/spring.png" alt="Summer" />
                </div>
                <div>
                    <img className="img-xxl" src="assets/images/summer.png" alt="Summer" />
                </div>
                <div>
                    <img className="img-xxl" src="assets/images/fall.png" alt="Summer" />
                </div>
                <div>
                    <img className="img-xxl" src="assets/images/winter.png" alt="Summer" />
                </div>

            </div>
        </main>
       </div>
    );
}