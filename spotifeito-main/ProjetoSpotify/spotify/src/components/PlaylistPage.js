import { Button, Card } from 'react-bootstrap';
import PlaylistIcon from '../asstes/playlisticon.png'
import { useState, useEffect } from 'react'
import ReactAudioPlayer from 'react-audio-player';
import { useParams } from 'react-router-dom';
import Happy from '../asstes/Happy.mp3'
import Party from '../asstes/Party.mp3'
import Dance from '../asstes/Dance.mp3'
import axe from '../asstes/axe.jpg'
import pagode from '../asstes/pagode.jpg'
import rock from '../asstes/rock.jpg'
import forro from '../asstes/forro.jpg'
import samba from '../asstes/samba.jpg'
import sertanejo from '../asstes/sertanejo.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
//import {ReactAudioPlayer} from 'react-audio-player';

function Playlist() {
  const [playlists, setPlaylists] = useState([
  { id: '01', nome: 'Sertanejo Universitário', imagem: 'sertanejo', musicas: [[Happy, 'Happy'], [Party, 'Party'], [Dance, 'Dance']] },
  { id: '02', nome: 'Rock', imagem: 'rock', musicas: [[Party, 'Party']] },
  { id: '03', nome: 'Samba', imagem: 'samba', musicas: [[Happy, 'Happy'], [Party, 'Party']] },
  { id: '04', nome: 'Axe', imagem: 'axe', musicas: [[Party, 'Party'], [Dance, 'Dance'], [Happy, 'Happy'], [Happy, 'Happy']] },
  { id: '05', nome: 'Pagode', imagem: 'pagode', musicas: [[Happy, 'Happy'], [Dance, 'Dance']] },
  { id: '06', nome: 'Forró', imagem: 'forro', musicas: [[Party, 'Party'], [Dance, 'Dance']] },
]);
  const [playlist, setPlaylist] = useState({ id: '02', nome: 'Rock', imagem: 'rock', musicas: [[Party, 'Party']] } );
  const { id } = useParams();
  useEffect(() => {
    //const loadData = async() =>{
    //setPlaylists([


    setPlaylist(playlists.find(e => { return e.id == id.toString() }));
    console.log(playlists.find(e => { return e.id == id.toString() }))

    //};
    //loadData();
  }, [])

  const handleImg = () => {
    if (playlist.imagem === "samba") {
      return samba
    }
    if (playlist.imagem === "axe") {
      return axe
    }
    if (playlist.imagem === "pagode") {
      return pagode
    }
    if (playlist.imagem === "sertanejo") {
      return sertanejo
    }
    if (playlist.imagem === "forro") {
      return forro
    }
    if (playlist.imagem === "rock") {
      return rock
    }

  }

  return (
    <div className='playlist-id'>
      <div className='back-buttons'>
        <Link to={`/`}><div className='back-button' ><FaChevronLeft /></div></Link>
        <div className='forward-button' ><FaChevronRight /></div>
      </div>
      <div className='info-playlist'>
        <img src={handleImg()} className='playlist-img' />
        <div className='descricao-playlist'>
          <h3>Playlist:</h3>
          <h1>{playlist.nome}</h1>
        </div>
      </div>
      <div className='playlist-songs'>
        {playlist.musicas.map((musica) => (<div className='playlist-main'>
          <p>{musica[1]}</p>
          <ReactAudioPlayer
            src={musica[0]}
            controls
          />
        </div>))}
      </div>

    </div>
  );
}

export default Playlist;