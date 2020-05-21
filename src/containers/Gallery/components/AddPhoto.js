import React, { useEffect , useState } from 'react';
import { connect } from 'react-redux';
import { Button, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { UploadFile, GetPhotos } from '../actions';


function AddPhoto(props) {
  const {user, UploadFile} = props
  const [modal, setModal] = useState(false);
  const [file, setFile] = useState('');

  const toggle = () => setModal(!modal);

  const handleFileSelect =(evt)=>{
    var files = evt.target.files;
    for (var i = 0, f; f = files[i]; i++) {
      if (!f.type.match('image.*')) {
        continue;
      }
      var reader = new FileReader();
      reader.onload = (function(theFile) {
        return function(e) {
          var span = document.createElement('span');
          span.innerHTML = ['<img width="100%" height="100%"  class="thumb" src="', e.target.result,
                            '" title="', theFile.name, '"/>'].join('');
          document.getElementById('list').insertBefore(span, null);
        };
      })(f);
      reader.readAsDataURL(f);
    }
}
const handleChange = (e) =>{
  toggle();
  handleFileSelect(e);
  setFile(e.target.files[0])
}
const PostPhoto = () =>{
  UploadFile(file,user.email);
  toggle();
}
  return(
    <div className='add_photo'>
       <div className='btn'>
        <Input type="file" name="file" id="file" onChange={handleChange}/>
        <label for='file' className='file'><p>+</p></label>
      </div>
      <Modal isOpen={modal} toggle={toggle} className='photo'>
        <ModalBody style={{display:'flex',flexDirection:'column'}}>
        <Button color='' style={{marginBottom: 10, fontWeight:'bold',fontSize:25, backgroundColor:'#4ACAD9', color:'#ffffff'}} onClick={toggle}>cancel</Button>
        <output id="list"></output>
        <Button  color='' style={{marginTop: 10, fontWeight:'bold',fontSize:25, backgroundColor:'#F2637E',color:'#ffffff'}} onClick={PostPhoto}>add photo</Button>
        </ModalBody>
      </Modal>
    </div>
   
  )
}

const mapStateToProps = (state, ownProp) => ({
   user: state.user
})
     
const mapDispatchToProps = {
  UploadFile
}
     
export default connect(mapStateToProps, mapDispatchToProps)(AddPhoto)