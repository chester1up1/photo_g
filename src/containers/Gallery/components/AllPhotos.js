import React, { useEffect , useState } from 'react';
import { connect } from 'react-redux';
import Photo from './Photo';

function AllPhotos(props) {
  const {photos, email} = props
  return(
    <div className='all_photos row'>
      {photos?photos.map(item=>{
        return(
            <Photo url={item.url} email={email} name={item.name}/>
        )
      }):[]}
    </div>
  )
}
const mapStateToProps = (state, ownProp) => ({
    photos: state.photos.items,
    email: state.user.email
})
     
const mapDispatchToProps = {
}
  
export default connect(mapStateToProps, mapDispatchToProps)(AllPhotos)