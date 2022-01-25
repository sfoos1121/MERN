import Impassioned from "../Components/Impassioned";
import Nav from "../Components/Nav";


const Main = (props) => {

    const { loggedIn, setLoggedIn } = props;    
 
    return (
        <div>
            <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            <Impassioned loggedIn={loggedIn} setLoggedIn={setLoggedIn} />             
        </div>
    )
}
export default Main;