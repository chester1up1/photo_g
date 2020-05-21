import {storage, database} from '../../firebase/index';
import * as firebase from 'firebase';

export const GetUser = () =>{
    return async(dispatch)=>{
        try {
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    dispatch({type: 'GET_USER', data: user});
                }
            })
        } catch (error) {
            console.log('error-->',error)
        }
    }
}

