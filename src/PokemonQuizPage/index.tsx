import { useEffect, useState } from 'react'
import axios from 'axios'
import type { Pokemon } from './types';
import pokeball from '../assets/pokeball.png'
import styles from './PokemonQuizPage.module.css'

function App() {
    const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
    const [correctGuesses, setCorrectGuesses] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(true);
    const [seconds, setSeconds] = useState(0);
    const [isGameActive, setIsGameActive] = useState(false);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        async function load() {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
                setAllPokemons(response.data.results);
            } finally {
                setLoading(false);
            }
        }
        load();
    }, []);

    //cronometro
    useEffect(() => {
        let interval: number;

        if (isGameActive && !isFinished) {
            interval = setInterval(() => {
                setSeconds((s) => s + 1);
            }, 1000);
        }

        //condicao de parada
        if (correctGuesses.length === 151 && isGameActive) {
            setIsFinished(true);
            setIsGameActive(false);
        }

        return () => clearInterval(interval);
    }, [isGameActive, isFinished, correctGuesses.length]);

    const formatTime = (totalSeconds: number) => {
        const mins = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toLowerCase().trim();
        setInputValue(value);

        const found = allPokemons.find(p => p.name === value);

        if (found && !correctGuesses.includes(found.name)) {
            setCorrectGuesses([...correctGuesses, found.name]);
            setInputValue('');
        }
    };

    if (loading) return <h1>Carregando...</h1>

    return (
        <div style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
            <div className={styles.HeaderText}>
                <img src={pokeball} alt="My pokeball" className={styles.PokeballImg} />
                <h1>PokeQuiz: 1ª Geração</h1>
                <p>by: João Candido</p>
            </div>

            <div style={{ fontSize: '2rem', margin: '20px', fontWeight: 'bold' }}>
                {formatTime(seconds)}
            </div>

            {isFinished ? (
                <div style={{ color: 'green' }}>
                    <h2>🎉 Parabéns! Você completou em {formatTime(seconds)}!</h2>
                    <button onClick={() => window.location.reload()}>Jogar de novo</button>
                </div>
            ) : (
                <>
                    {!isGameActive ? (
                        <button
                            onClick={() => setIsGameActive(true)}
                            style={{ padding: '15px 30px', fontSize: '1.5rem', cursor: 'pointer' }}
                        >
                            Começar Desafio!
                        </button>
                    ) : (
                        <>
                            <h2>Acertos: {correctGuesses.length} / 151</h2>
                            <input
                                type="text"
                                value={inputValue}
                                onChange={handleInputChange}
                                placeholder="Quem é esse Pokémon?"
                                style={{ padding: '10px', fontSize: '1.2rem', width: '300px' }}
                                autoFocus
                            />
                        </>
                    )}
                </>
            )}

            <div 
            className= {styles.CorrectGuesses}>
                {correctGuesses.map(name => (
                    <span key={name} style={{ background: '#e0e0e0', padding: '5px 10px', borderRadius: '5px', textTransform: 'capitalize' }}>
                        {name}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default App;