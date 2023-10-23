import {combineReducers} from 'redux'
import documentReducer from './Documentreducer'
import contactReducer from './Contactreducer'
import educationReducer from './Educationreducer'
// import authReducer from './authReducer'
// import { firebaseReducer } from 'react-redux-firebase'
// import { firestoreReducer } from 'redux-firestore'

const Rootreducer = combineReducers({
    document : documentReducer,
    contact : contactReducer,
    education : educationReducer,
    // firebase : firebaseReducer, 
    // firestore : firestoreReducer,
    // auth : authReducer
})

export default Rootreducer;