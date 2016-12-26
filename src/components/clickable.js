import {Interface} from 'mixwith'
export default Interface('Clickable', (superclass) => class Clickable extends superclass {
  onClick(){
    console.log('clickable:onClick');
  }
})
