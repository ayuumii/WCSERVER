const app = Vue.createApp({
    //"<h2> This is my template...</h2>"
    data(){
        return {
          title: 'The Ledger',
          author: 'Raskin Charles',
          age: '19'
          }
        }
});

app.mount('#app')

