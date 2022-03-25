const ListRendering = {
  data(){
    return {
      todos: [
        {text:'Clean your House'},
        {text:'Prepare Breakfast'},
        {text:'Attend WCSERVER CLASS'}

      ]
    }
  }
}

Vue.createApp(ListRendering).mount('#list-rendering')