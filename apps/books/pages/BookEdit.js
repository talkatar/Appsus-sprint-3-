import { bookService } from "../services/book.service.js"
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'

export default {
    template: `
        <section class="book-edit">
            <h2>Add a book</h2>
            <form @submit.prevent="save">
                <input type="text" v-model="book.title" placeholder="Title">
                <input type="number" v-model.number="book.listPrice.amount">
                <button><i class="fa-solid fa-floppy-disk"></i></button>
            </form>
        </section>
    `,
    data() {
        return {
            book: bookService.getEmptyBook()
        }
    },

    created() {
        const {bookId} = this.$route.params
        if(bookId){
            bookService.get(bookId)
            .then(book => this.book = book)
        }
       
    },


    methods: {
        save() {
            console.log(this.book);
            bookService.save(this.book)
                .then(savedBook => {
                    showSuccessMsg('Book saved')
                    this.$router.push('/book')
                    
                })
                .catch(err=>{
                    showErrorMsg('Book save failed')
                })
        }
    }
}