import React, { useEffect , useState } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import chevron_right_solid from '../../../img/chevron_right_solid.svg';
import chevron_left_solid from '../../../img/chevron_left_solid.svg';
import times_solid from '../../../img/times_solid.svg';
import { DeletePhoto } from '../actions';
import trash_solid from '../../../img/trash_solid.svg';

function Photo(props) {
  const {url, photos, name, DeletePhoto, email} = props
  const [photo_url, setUrl] = useState(url)
  const [photo_name, setPhotoName] = useState(name)
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  useEffect(()=>{
    
  },[])
 const OnePhoto = () => {
   if(!modal){
     return(
      <div className='photo col-md-4 col-4' onClick={toggle}>
        <img src={url} alt='photo'  className='photoModal'/>
      </div>
     )
   }
   else{
    return(
      <div  className='PhotoFull'>
        <img src={photo_url} alt='photo'  className='photoModal'/>
        <div className='control_btn'>
          <div>
            <img src={chevron_left_solid} alt='prev' onClick={PrevPhoto}/>
          </div>
          <div>
            <img src={chevron_right_solid} alt='next' onClick={NextPhoto}/>
          </div>
        </div>
        <div className='close_btn'>
          <img src={times_solid} alt='close' onClick={toggle}/>
        </div>
        <div className='delete_btn'>
          <img src={trash_solid} alt='delete' onClick={DelPhoto}/>
        </div>
      </div>
    )
   }
 }
 const DelPhoto = () => {
  DeletePhoto(email, photo_name);
  photos.forEach((element, index) => {
    if(element.url === photo_url){
      if(photos[index+1]){
        setUrl(photos[index+1].url)
        setPhotoName(photos[index+1].name)
      }
      else if(photos[index-1]){
        setUrl(photos[index-1].url)
        setPhotoName(photos[index-1].name)
      }else{
        setUrl('')
        setPhotoName('')
      }
    }
  });
 }
 const NextPhoto = () => {
  photos.forEach((element, index) => {
      if(element.url === photo_url){
        if(photos[index+1]){
          setUrl(photos[index+1].url)
          setPhotoName(photos[index+1].name)
        }
      }
    });
 }
 const PrevPhoto = () => {
  photos.forEach((element, index) => {
      if(element.url === photo_url){
        if(photos[index-1]){
          setUrl(photos[index-1].url)
          setPhotoName(photos[index-1].name)
        }
      }
    });
 }
  return(
    <OnePhoto/>
  )
}

const mapStateToProps = (state, ownProp) => ({
  photos: state.photos.items
})
     
const mapDispatchToProps = {
  DeletePhoto
}
     
export default connect(mapStateToProps, mapDispatchToProps)(Photo)