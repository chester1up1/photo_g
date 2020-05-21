import React, { useEffect , useState } from 'react';
import { connect } from 'react-redux';
import { Button, Input } from 'reactstrap';
import AddPhoto from './components/AddPhoto';
import './style.scss'
import { GetPhotos } from './actions';
import AllPhotos from './components/AllPhotos';
import TopPanel from '../TopPanel/TopPanel';

function Gallery(props) {
  const {GetPhotos, user, new_photo} = props
  useEffect(()=>{
    GetPhotos(user.email)
  },[])
  return(
    <div className='gallery'>
      <TopPanel email={user.email}/>
      <AllPhotos/>
      <AddPhoto/>
    </div>
  )
}

const mapStateToProps = (state, ownProp) => ({
 user: state.user,
 new_photo: state.photos.new_photo
})
     
const mapDispatchToProps = {
  GetPhotos
}
     
export default connect(mapStateToProps, mapDispatchToProps)(Gallery)