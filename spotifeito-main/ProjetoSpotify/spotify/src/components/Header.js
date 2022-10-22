import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const Header = () =>{
    const navigate = useNavigate();
    return(
        <div className="Header">
            <h5>|</h5>
            <Link className="link" to='/signup'>Inscrever-se</Link>
            <Button onClick={()=>{navigate('/login')}}>Entrar</Button>
            
        </div>
    )

}

export default Header;