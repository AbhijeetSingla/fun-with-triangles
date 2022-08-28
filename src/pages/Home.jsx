import { NavLink } from "react-router-dom";
import Header from "../components/Header";

function Home() {
    return ( 
        <>
            <Header />
            <div className="container-center section-base flex intro">
                <h1>Questions regarding triangles</h1>
                <div>
                    <NavLink to="quiz" className="primary-link" >Get Started</NavLink>
                </div>
            </div>
        </>
     );
}

export default Home;