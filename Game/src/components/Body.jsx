import React, { useState } from 'react';
import './Body.css';

function Body() {
    const emojis = ['🥑','🧊','🍟','🦫','🤡','🥸','💀','🤖','🦄','🐺','😶‍🌫️','🏗️',
        '🤬','🤮','😇','🤠','🦊','🦒','🐸','🦄','🦋','🐧','🪳','🦷','🫂','🧌',
        '🤺','🪱','🦬','🦌','🎈','🎉','🎍','🧧','👛','👜','🪮','🩰','😔','😡',
        '👑','🚙','🌍','⛰️','🏔️','🏞️','🛤️','🏝️','🏟️','🏛️','🏗️','🏘️','🍳','🕧',
        '🎃','🥚','🍢','🧃','🍽️','🍑','🥒','🥕','🌺','🍄‍🟫','🫛','🚔','🚜','🛹',
        '🚋','🛫','🚢','🚩','🏞️','🌅','🧽','🌑','🌈','🖤'];

    const [emojiSorteado, setEmojiSorteado] = useState(null);

    function sortearEmoji() {
        const randomIndex = Math.floor(Math.random() * emojis.length);
        setEmojiSorteado(emojis[randomIndex]);
    }

    return (
        <div className='container-body'>
            <h1>StoryCode: </h1>
            <h1>Histórias em Imagens</h1>
            <img className='logo-body' src="./img/logo-game.png" alt="" />

            <div className='sorteio'>
                <button onClick={sortearEmoji}>Clique aqui para Sortear</button>
                {emojiSorteado && <h2>Emoji Sorteado: {emojiSorteado}</h2>}
            </div>
        </div>
    );
}

export default Body;
