<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>{{result}}</div>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  components: {
    
  },
  data(){
    return {
      result: ''
    }
  },
  created(){
    axios({
      method:'get',
      url: 'http://rap2api.taobao.org/app/mock/275251/user/findAll',
      data: {

      }
    }).then((result) => {
      console.log('app', result);
       this.data.result = result;
    }).catch((err) => {
      
    });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
