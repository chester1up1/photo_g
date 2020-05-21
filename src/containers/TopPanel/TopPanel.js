import React, { useEffect , useState } from 'react';
import { connect } from 'react-redux';
import './style.scss'
import { Button, Input } from 'reactstrap';
import { SignOutFirebase } from '../../firebase/actions';
import sign_out_alt_solid from '../../img/sign_out_alt_solid.svg';
import { Link } from 'react-router-dom';

function TopPanel(props) {
  const {email, SignOutFirebase} = props
  useEffect(()=>{
    
  },[])
  return(
    <div className='top_panel'>
      <p>{email}</p>
      <Link to='/login'> <img src={sign_out_alt_solid} alt='exit' onClick={()=>SignOutFirebase()}/></Link>
    </div>
  )
}

const mapStateToProps = (state, ownProp) => ({
 
})
     
const mapDispatchToProps = {
  SignOutFirebase
}
     
export default connect(mapStateToProps, mapDispatchToProps)(TopPanel)