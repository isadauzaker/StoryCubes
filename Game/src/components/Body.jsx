import { useState } from 'react';
import './Body.css';

function Body() {
    const emojis = ['🥑','🧊','🍟','🦫','🤡','🥸','💀','🤖','🦄','🐺','😶‍🌫️','🏗️',
        '🤬','🤮','😇','🤠','🦊','🦒','🐸','🦄','🦋','🐧','🪳','🦷','🫂','🧌',
        '🤺','🪱','🦬','🦌','🎈','🎉','🎍','🧧','👛','👜','🪮','🩰','😔','😡',
        '👑','🚙','🌍','⛰️','🏔️','🏞️','🛤️','🏝️','🏟️','🏛️','🏗️','🏘️','🍳','🕧',
        '🎃','🥚','🍢','🧃','🍽️','🍑','🥒','🥕','🌺','🍄‍🟫','🫛','🚔','🚜','🛹',
        '🚋','🛫','🚢','🚩','🏞️','🌅','🧽','🌑','🌈','🖤'];

        const [emoji, setEmoji] = useState(null);

        function sortearEmoji(){
            const randomIndex = Math.floor(Math.random() * emojis.length)
            setEmoji(emojis[randomIndex])
        }

    return (
        <div className='container-body'>
            <h1>StoryCode: </h1>
            <h1>Histórias em Imagens</h1>
            <img className="estrela" src="./img/estrela.png" alt="" />

            {/* <img className="gatinho" src="./img/gatinho.png" alt="" />
            <img className="cazinha" src="./img/cazinha.png" alt="" /> */}

            <div className='sorteio'>
            <p className="emoji-text">Emoji Sorteado:</p>
                {emoji && <p className="emoji">{emoji}</p>}
                <button onClick={sortearEmoji}>Let’s start!</button>
                
            </div>
        </div>
    );
}

export default Body;
