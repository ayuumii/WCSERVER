<template>
  <div id="app">

        <profile></profile>
        <education></education>
        <skills></skills>
        </div>
</template>

<script>
import Education from './components/Education'
import Profile from './components/Profile'
import Skills from './components/Skills'

export default {
  name: 'app',
  components: {
    Education,
    Profile,
    Skills
  },
  data(){
    return {
      msg: 'RESUME'
    }
  }
}
</script>

<style>
body {
  background-color:#093145;}
img {
  border-radius: 50%;
  width: 18%;
  height: 10%;
  float: left;
    }
#picture {
  width: 100%;
    }
#desc {
  float: left;
  width: 60%;
  text-align: left;
     margin-left: 10%;
      }
h2 {
  color: #3C6478
}

li {
   display: inline-grid;
    margin:  0 0 0 50px;
}
p {
  color: lightskyblue
}
h1 {
  color: #107896
}
h2 {
  color: lightblue
}
h4 {
  color: #43ABA4
}
</style>
