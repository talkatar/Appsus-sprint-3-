
import { googleBookService } from '../services/google-book.service.js'
import { bookService } from '../services/book.service.js'
import { utilService } from '../services/util.service.js';


export default {
    template: `
  <div class="book-add">
    <input type="text" placeholder="search google books" v-model="txtSearch" @input="performSearch">
  </div>

  <ul class="g-book-list" v-if="books">
                <li   v-for="book in books" :key="book.id" >
                   <article >
                    <h4> {{book.title}}</h4>
                    <button @click="addBook(book)">+</button>
                   </article>
                </li>
            </ul>

            
`
 , name: 'SearchBox',

  data() {
    return {
      txtSearch: '',
      books:'',
    }
  },

  methods: {

    search() {
      googleBookService.query(this.txtSearch)
      .then(books => this.books = books)
  },

  addBook(book){
    bookService.addGoogleBook(book)
    this.$router.push('/book')
  }
},
created(){
  this.performSearch=utilService.debounce(this.search,3000)
}
}


