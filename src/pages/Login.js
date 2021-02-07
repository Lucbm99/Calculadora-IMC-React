import React from 'react';
import { connect } from 'react-redux';

function Login(props) {

    const handleLucas = () => {
        props.setName('Lucas')
    };

    return (
        <div>
            <h4>Página Login</h4>

            O nome é: {props.name}
            <br/><br/>
            <button onClick={handleLucas}>Trocar nome para Lucas</button>
        </div>
    );
}

const mapStateToProps = state => ({
    name: state.usuario.name
});

const mapDispatchToProps = dispatch => ({
    setName: (newName) => dispatch ({
        type: 'SET_NAME',
        payload: { name: newName }
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
