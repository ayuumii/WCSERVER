   const books = Vue.createApp({
    data(){
      return {
        showBooks: false,
        btitle: 'The Ledger',
        bauthor: 'Raskin Charles',
        year: 2008
        }
      },
      method: {
        toggleShowBooks(){
          this.showBooks = !this.showBooks
        }
      }
});

books.mount('#books')