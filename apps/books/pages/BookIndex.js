import { bookService } from '../services/book.service.js'

import BookFilter from '../cmps/BookFilter.js'
import BookList from '../cmps/BookList.js'
import AppHeader from '../cmps/AppHeader.js'
import { eventBusService } from '../services/event-bus.service.js'

// import BookDetails from './BookDetails.js'
// import BookEdit from './BookEdit.js'


export default {
    template: `
        <section class="book-index">
            <AppHeader />
            <RouterLink to="/book/edit">Add a book</RouterLink>
            <BookFilter @filter="setFilterBy"/>
            <BookList 
                :books="filteredBooks" 
                v-if="books"
                @remove="removeBook" 
                 />
               
        </section>
    `,
    data() {
        return {
            books: null,
            filterBy: {},
        }
    },
    methods: {
        removeBook(bookId) {
            bookService.remove(bookId)
                .then(() => {
                    const idx = this.books.findIndex(book => book.id === bookId)
                    this.books.splice(idx, 1)
                    eventBusService.emit('show-msg', { txt: 'Book removed', type: 'success' })

                })
                .catch(err=>{
                    eventBusService.emit('show-msg', { txt: 'Book remove failed', type: 'error' })
                })
        },
      
        setFilterBy(filterBy) {
            console.log(filterBy);
            this.filterBy = filterBy
        }
    },
    computed: {
        filteredBooks() {
            if (!this.filterBy.price) {
                this.filterBy.title = ''
                this.filterBy.price = 200
            }
            const regex = new RegExp(this.filterBy.title, 'i')
            console.log(  regex);
            return this.books.filter(book => 
                regex.test(book.title)&&book.listPrice.amount<=this.filterBy.price
            
                   )
                   
        },

      
    },
    created() {
        bookService.query()
            .then(books => {
                console.log(books);
                this.books = books
            })

    },
    components: {
        BookFilter,
        BookList,
        AppHeader
        // BookDetails,
        // BookEdit,
    }
}

