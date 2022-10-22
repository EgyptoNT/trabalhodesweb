import Cards from './Cards'
import { useState, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Happy from '../asstes/Happy.mp3'
import Party from '../asstes/Party.mp3'
import Dance from '../asstes/Dance.mp3'
import axios from "axios";
const Main = (props) => {

    const [playlists, setPlaylists] = useState([])

    useEffect(() => {
        const loadData = async () => {
            setPlaylists([
                { id: '01', nome: 'Sertanejo Universitário', imagem: 'sertanejo', musicas: [[Happy, 'Happy'], [Party, 'Party'], [Dance, 'Dance']] },
                { id: '02', nome: 'Rock', imagem: 'rock', musicas: [[Party, 'Party']] },
                { id: '03', nome: 'Samba', imagem: 'samba', musicas: [[Happy, 'Happy'], [Party, 'Party']] },
                { id: '04', nome: 'Axe', imagem: 'axe', musicas: [[Party, 'Party'], [Dance, 'Dance'], [Happy, 'Happy'], [Happy, 'Happy']] },
                { id: '05', nome: 'Pagode', imagem: 'pagode', musicas: [[Happy, 'Happy'], [Dance, 'Dance']] },
                { id: '06', nome: 'Forró', imagem: 'forro', musicas: [[Party, 'Party'], [Dance, 'Dance']] },])
            // await axios.get(`http://localhost:3001/users?Email=Public-playlist`).then(
            // (res) => {
            //     const usuario = res.data[0]
            //     setPlaylists(usuario.PlayLists)
                
            // })
        };
        loadData();
        //{playlists.map((lista)=>(<Cards lista={lista}/>))}
    }, [])
    return (
        <div className="content">
            <div className='preview-play-list'>
                <h4>Spotify Playlists</h4>
                <div className='main-play-list'>
                    {playlists.map((lista) => (<Cards lista={lista} />))}
                </div>
            </div>
            <div className='preview-play-list'>
                <h4>100% Você</h4>
                <div className='main-play-list'>
                    {playlists.map((lista) => (<Cards lista={lista} />))}
                </div>
            </div>
            <div className='preview-play-list'>
                <h4>Para dormir</h4>
                <div className='main-play-list'>
                    {playlists.map((lista) => (<Cards lista={lista} />))}
                </div>
            </div>
            <div className='preview-play-list'>
                <h4>Foco</h4>
                <div className='main-play-list'>
                    {playlists.map((lista) => (<Cards lista={lista} />))}
                </div>
            </div>
            <div className='preview-play-list'>
                <h4>Seu astral</h4>
                <div className='main-play-list'>
                    {playlists.map((lista) => (<Cards lista={lista} />))}
                </div>
            </div>

        </div>
    )
}

export default Main