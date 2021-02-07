import React from 'react';
import {useHistory} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Home() {
    let history = useHistory();
    const dispatch = useDispatch();

    const name = useSelector(state => state.usuario.name);
    const contador = useSelector(state => state.usuario.contador);

    function handleButton() {
        setTimeout(() => {
            history.replace("/sobre");
        }, 2000);
    }

    const handleBonieky = () => {
        dispatch({
            type: 'SET_NAME',
            payload: {name: 'Lucas'}
        })
    }
    
    const handleIncrement = () => {
        dispatch({
            type: 'INCREMENT_CONTADOR',
        })
    }

    return (
        <div>
            <h4>Página HOME</h4>

            Nome: {name}            
            <br/><br/>
            Contagem: {contador}
            <br/><br/>

            <button onClick={handleBonieky}>Setar nome para Lucas</button>
            <button onClick={handleIncrement}>+1</button>

            <button onClick={handleButton}>Ir para a pagina Sobre</button>
        </div>
    );
}

export default Home;