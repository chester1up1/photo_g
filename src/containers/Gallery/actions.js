import {storage, database} from '../../firebase/index';
import * as firebase from 'firebase';
import { GetPhotoFirebase } from '../../firebase/actions';

export const UploadFile = (file, user) => {
	// const  uploadTask=storage.ref(`${user}/${file.name}`).put(file);
  return async(dispatch)=>{
		const  uploadTask=storage.ref(`${user}/${file.name}`).put(file);
		uploadTask.on('state_changed',
        ()=>{
             storage.ref(`${user}`).child(file.name).getDownloadURL().then(url=>{
							 let result ={url: url, name: file.name}
							dispatch({type: 'NEW_PHOTO', data: result});
            })
        }) 
	}
}

export const GetPhotos = (email) =>{
	return async(dispatch)=>{
		var storageRef = storage.ref();
		storageRef.child(`${email}/`).listAll().then((element)=>{
				element.items.forEach(item=>{
						item.getDownloadURL().then(url=>{
							let result ={url: url, name: item.name}
							dispatch({type: 'GET_PHOTOS', data: result});
						})
				})
		}) 
	}
}

export const DeletePhoto = (email, name) => {
	console.log('email',email,'name',name)
	return async(dispatch)=>{
		try {
			var storageRef = storage.ref();
			var desertRef = storageRef.child(`${email}/${name}`);
			desertRef.delete().then(function() {
				dispatch({type: 'DEL_PHOTO', data: name});
			}).catch(function(error) {

			});
		} catch (error) {
			
		}
	}
}