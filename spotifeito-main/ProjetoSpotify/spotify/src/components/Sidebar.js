import { Link } from 'react-router-dom';
import Logo from '../asstes/Logo.png'
import {MdHomeFilled} from 'react-icons/md'
import {BiSearch, BiLibrary, BiHeartSquare} from 'react-icons/bi'
import {RiAddBoxFill, RiHeart3Fill} from 'react-icons/ri'
import { FaQuestion } from "react-icons/fa";
import {BsQuestionLg, BsQuestion} from 'react-icons/bs'

const Sidebar = () =>{

    return(
        <div className="sidebar-box">
            <img src={Logo}></img>
            <div className='sidebar-buttons'>
                
                <span title='Inicio'>
                <MdHomeFilled/><Link className='link-faq' to="/" >Início    </Link> 
                </span>

                <span title='Buscar' className='link-faq'>
                <BiSearch/>Buscar    
                </span>

                <span title='Biblioteca' className='link-faq'>
                <BiLibrary/>Sua Biblioteca    
                </span>

                <span title='FAQ'>
                <BsQuestion/><Link className='link-faq' to="/faq" >Duvidas Frequentes</Link> 
                </span>

            </div>

            <div className='sidebar-buttons-two'>
                
                <span title='AddPlaylist'>
                <RiAddBoxFill className='add'/>Criar playlist    
                </span>

                <span title='Curtidas'>
                <div className='heart-box'><RiHeart3Fill className='heart'/></div>Músicas Curtidas    
                </span>

            </div>
        </div>
    )
}

export default Sidebar