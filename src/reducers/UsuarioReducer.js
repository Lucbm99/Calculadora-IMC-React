const initialState = {
    name:'Visitante', 
    contador: 0
};
//dados iniciais que iniciam o reducer


const UsuarioReducer = (state = initialState, action) => {
//essa função recebe dois parametros 
//state -- na primeira vez que você usar o reducer,
// ele vira no estado inicial...
//uma vez que já está setado, você troca as informações que tem la 

//ele pega as informações que já estão lá 
//faz o processo todo, as trocas necessárias e depois 
//eu retorno o meu state alterado ou sem modificação 

    switch(action.type) {
        case 'SET_NAME':
            return {...state, name: action.payload.name}
            break;
        case 'INCREMENT_CONTADOR': 
            //aumentando 1 pelo newCount
            let newCount = state.contador + 1;
            return {...state, contador: newCount};//
            break;
    }
    return state;


};


export default UsuarioReducer;