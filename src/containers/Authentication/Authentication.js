// import React, {useState, useEffect} from 'react';
// import * as firebase from 'firebase';
// import { SingUpFirebase, GetStateData, SignOutFirebase, SignInFirebase, UploadFile } from '../../firebase/actions';
// import { Button, Input } from 'reactstrap';

// function Login() {
// const [login, setLogin] = useState(false);
// const [file, setFile] = useState('');
// useEffect(()=>{
//   firebase.auth().onAuthStateChanged((user)=>{
//     user?setLogin(true):setLogin(false)
//   })
// },[])
// const changeFile = (e) =>{
//   setFile(e.target.files[0])
// }

//   return (
//     <div>
//       {login?
//         <div style={{display:'flex',flexDirection:'column', paddingTop:5}}>
//           <div style={{display:'flex',flexDirection:'row', justifyContent:'space-around', paddingTop:5}}>
//             <Button outline color="success"  onClick={()=>GetStateData()}>GetStateData</Button>{' '}
//             <Button outline color="success"  onClick={()=>SignOutFirebase()}>SigenOutFirebase</Button>{' '}
//           </div>
//           <div style={{display:'flex',flexDirection:'row', justifyContent:'space-around', paddingTop:25}}>
//             <div><Input type="file" name="file" id="exampleFile" onChange={changeFile}/></div>
//             <Button outline color="success"  onClick={()=>console.log('File---->',file)}>File</Button>{' '}
//             <Button outline color="success"  onClick={()=>UploadFile(file)}>Upload</Button>{' '}
//           </div>
//         </div>
//       :
//         <div>
//           <Button outline color="success" onClick={()=>SingUpFirebase('test@gmail.com', 'test123')}>SingUpFirebase</Button>{' '}
//           <Button outline color="success"  onClick={()=>SignInFirebase('test@gmail.com', 'test123')}>SingUpFirebase</Button>{' '}
//         </div>
//       }
     
//     </div>
//   );
// }

// export default Login;
import React, { useEffect , useState } from 'react';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import { SingUpFirebase, GetStateData, SignOutFirebase, SignInFirebase, UploadFile } from '../../firebase/actions';
import { Button, Input } from 'reactstrap';
import { GetUser } from './actions';
import Gallery from '../Gallery/Gallery'
import history from '../../lib/history';
import LoginRouter from '../Login/LoginRouter';

function Authentication(props) {
  const {GetUser, user} = props;
  useEffect(()=>{
    GetUser();
  },[])
  if(user){
    history.push('/gallery')
  }
  return(
    <div style={{width:'100%', height:'100%'}}>
      {user? 
       <Gallery/>
      :
      <LoginRouter/>
      }
    </div>
  )
}

const mapStateToProps = (state, ownProp) => ({
 user: state.user.user
})
     
const mapDispatchToProps = {
  GetUser
}
     
export default connect(mapStateToProps, mapDispatchToProps)(Authentication)