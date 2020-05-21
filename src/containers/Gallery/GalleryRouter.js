import React, { useEffect , useState } from 'react';
import { Switch, Route } from 'react-router';
import Gallery from './Gallery';

function GalleryRouter(props) {
  return (
    <Switch>
        <Route exact path='/gallery' component={Gallery}/>
        <Route  path='/gallery' component={Gallery}/>
    </Switch>
  );
}
    
export default GalleryRouter