import React, { useEffect , useState } from 'react';
import { connect } from 'react-redux';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';
import envelope_regular from '../../img/envelope_regular.svg'
import lock_solid from '../../img/lock_solid.svg'
import './style.scss'
import { SignInFirebase } from '../../firebase/actions';
import history from '../../lib/history';
import { Link } from 'react-router-dom'
import user from '../../reducers/user';

function Login(props) {
  const {SignInFirebase, LoginError} = props
  const [email, setEmail] =useState('')
  const [password, setPassword] =useState('')
  const [error, setError] =useState(false)
  const changeEmail = (e) => {
    setEmail(e.target.value)
    setError(false)
  }
  const changePassword = (e) => {
    setPassword(e.target.value)
    setError(false)
  }

  const Login = () => {
    if(email!=='' && password!==''){
      SignInFirebase(email, password)
    }else{
      setError(true)
    }
  }
  useEffect(()=>{
    history.push('/login')
  },[])
  return(
    <div className='login'>
      <div className='login_box_white'>
        <div className='login_logo'>
          <p>Photo<span>G</span></p>
        </div>
        <div className='login_form'>
          <p className='login_text'>Member login</p>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
            <InputGroupText><img src={envelope_regular} alt='email'/></InputGroupText>
            </InputGroupAddon>
            <Input invalid={error} invalid={LoginError} placeholder="email" onChange={changeEmail} />
          </InputGroup>
          <br/>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
            <InputGroupText><img src={lock_solid} alt='password'/></InputGroupText>
            </InputGroupAddon>
            <Input invalid={error} invalid={LoginError} type='password' placeholder="password" onChange={changePassword} />
          </InputGroup>
          <br/>
          <Button color="primary" className='login_btn' onClick={Login}>LOGIN</Button>
          <Link to='/signup'> <p className='create'>Create your Account</p></Link>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProp) => ({
 LoginError: state.user.error
})
     
const mapDispatchToProps = {
  SignInFirebase
}
     
export default connect(mapStateToProps, mapDispatchToProps)(Login)