import { useState } from 'react';
import './Body.css';

function Body() {
    const emojis = ['🥑','🧊','🍟','🦫','🤡','🥸','💀','🤖','🦄','🐺','😶‍🌫️','🏗️',
        '🤬','🤮','😇','🤠','🦊','🦒','🐸','🦄','🦋','🐧','🪳','🦷','🫂','🧌',
        '🤺','🪱','🦬','🦌','🎈','🎉','🎍','🧧','👛','👜','🪮','🩰','😔','😡',
        '👑','🚙','🌍','⛰️','🏔️','🏞️','🛤️','🏝️','🏟️','🏛️','🏗️','🏘️','🍳','🕧',
        '🎃','🥚','🍢','🧃','🍽️','🍑','🥒','🥕','🌺','🍄‍🟫','🫛','🚔','🚜','🛹',
        '🚋','🛫','🚢','🚩','🏞️','🌅','🧽','🌑','🌈','🖤'];

        const [sorteados, setSorteados] = useState([]);

        function sortearEmoji(){
            if(sorteados.length < 9){
                const randomIndex = Math.floor(Math.random() * emojis.length)
                setSorteados([...sorteados, emojis[randomIndex]])
            }
        }
        function reiniciar() {
            setSorteados([]); 
        }

    return (
        <div className='container-body'>
            <h1>StoryCode: </h1>
            <h1>Histórias em Imagens</h1>
            <img className="estrela" src="./img/estrela.png" alt="" />

            <div className='sorteio'>
            <p className="emoji-text">Emojis Sorteados:</p>
            
            <div className='emoji-container'>
            {sorteados.length > 0 && <p className="emoji">{sorteados.join(' ')}</p>}
            </div>

            <div className='botao'>
            <button onClick={sortearEmoji} disabled={sorteados.length >= 9}>Sortear Emoji</button>
            <button onClick={reiniciar}>Reiniciar</button>
            </div>
                
            </div>
        </div>
    );
}

export default Body;
