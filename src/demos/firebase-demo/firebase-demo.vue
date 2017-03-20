<template lang="html">
  <div id="firebase-demo">
    <div class="indicator" :ref="uid" v-for="(value, uid) in usersById" :style="value">{{uid}}</div>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'


export default {
  data(){
    return {
      usersById: {},
      listeners: [],
    }
  },
  computed: {
    // users(){
    //   return Object.keys(this.usersById).map((uid)=>{
    //     return {
    //       uid,
    //       style: this.usersById[uid],
    //     }
    //   })
    // }
  },
  created(){
    document.addEventListener('mousemove',this.onMouseMove)
  },
  mounted(){
    firebase.database().ref('users').on('child_added', this.onNewUser)

    firebase.auth().signInAnonymously().then((user)=>{
      console.log('user signed in:',user.uid);
      this.userId = user.uid
      firebase.database().ref(`users/${this.userId}`).set({
        uid: user.uid,
      })
      this.pointRef = firebase.database().ref(`user-mouse-points/${this.userId}`)
    }).catch(function(error) {
      let {code, message} = error
      console.log(code, message);
      console.error(error);
    });
  },
  beforeDestroy(){
    this.listeners.forEach((ref)=>{
      ref.off('value')
    })
  },
  methods: {
    onNewUser(snap){
      console.log('new user: ', snap.key);
      this.$set(this.usersById, snap.key, {top: '0px', left: '0px'})
      let ref = this.createCallback(snap.key)
    },
    createCallback(uid){
      let ref = firebase.database().ref(`user-mouse-points/${uid}`)
      this.listeners.push(ref.on('value', this.onMouseUpdate))
      return ref
    },
    onMouseMove({x,y}){
      if(this.pointRef){
        this.pointRef.set({x,y,timestamp: Date.now()})
      }
    },
    onMouseUpdate(snap){
      let val = snap.val()
      if(snap && val){
        // console.log(`diff: ${snap.key}`, Date.now() - val.timestamp, val.y, val.x);
        this.$set(this.usersById[snap.key], 'top', `${val.y}px`)
        this.$set(this.usersById[snap.key], 'left', `${val.x}px`)

        // this.$set(this.usersById, snap.key, {top: val.y, left: val.x})
        // console.log(this.usersById[snap.key].top, this.usersById[snap.key].left);
      }
    }
  }
}
</script>

<style lang="css">
  .indicator {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
