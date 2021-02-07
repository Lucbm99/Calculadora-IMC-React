//combineReducers -- junta tudo em um só 

import { combineReducers } from 'redux';
import UsuarioReducer from './UsuarioReducer';




export default combineReducers({
    usuario: UsuarioReducer
});