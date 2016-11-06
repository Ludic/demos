import {Interface} from 'ludic'
export default Interface('Clickable', (superclass) => class Clickable extends superclass {
  onClick(){
    console.log('clickable:onClick');
  }
})
