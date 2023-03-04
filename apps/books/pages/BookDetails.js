import LongTxt from '../cmps/LongTxt.js'
import {bookService} from '../services/book.service.js'
import AddReview from '../cmps/AddReview.js'
import { eventBusService } from '../services/event-bus.service.js'



export default {
    name:'BookDetails',

    template: `
        <section class="book-details" v-if="book">
            <h2>Title:{{ book.title }}</h2> 
            <LongTxt :txt="book.description" :length="length"/>
            <p >Price:<span :class="priceClass">{{ formattedPrice}}</span></p>
            <p >pages:{{book.pageCount}}</p>
            <p>Book Level:{{pageCount}}</p>
            <p>The Book is {{publishedDate}}</p>
            <p>The Book is on sale :{{onSale}}</p>
            <img :src="book.thumbnail" alt=""/>
            <nav>
            <RouterLink :to="'/book/' + book.prevBookId">Previous Book</RouterLink> |
            <RouterLink :to="'/book/' + book.nextBookId">Next Book</RouterLink>
                <hr />
            <RouterLink to="/book">Back </RouterLink>
            </nav>
                        <AddReview @reviewSaved="addBookReview" />


             <ul v-if="book.reviews">
                <li class=review-list  v-for="review in book.reviews" :key="review.id" >
                   <article class=book-review>
                    <h4> Name reviewer:{{review.nameReviewer}}</h4>
                    <p> Booke rate:{{review.selectedRating}}</p>
                    <p> Date review:{{review.selectedDate}}</p>
                    <button @click="removeReview(review.id)">X</button>
                   </article>
                </li>
            </ul>


       
        </section>
    `,
    data(){
        return{
            book:null,
            length:100,

        }
    },

    created() {
        console.log('Params:',  this.$route.params)
        const {bookId} = this.$route.params
        bookService.get(bookId)
            .then(book => this.book = book)
    }

    ,methods: {

        addBookReview(review){
            console.log(this.book.id,review);
            bookService.addReview(this.book.id,review)
            .then(book => this.book = book)
            .then(eventBusService.emit('show-msg', { txt: 'New review', type: 'success' }))
            .catch(err=>{
                eventBusService.emit('show-msg', { txt: 'New review failed', type: 'error' })
            })



        }

        ,removeReview(reviewId){

            bookService. removeReview(this.book.id,reviewId)
                .then(book => this.book = book)
                .then(eventBusService.emit('show-msg', { txt: 'Review deleted', type: 'success' }))
                 .catch(err=>{
                eventBusService.emit('show-msg', { txt: ' review deleted failed', type: 'error' })
            })
            // const idx = this.book.reviews.findIndex(review => review.id === reviewId)
            //  this.book.reviews.splice(idx, 1)
    

           
        },

        loadBook() {
            bookService.get(this.bookId)
                .then(book => this.book = book)
        }
    }
    
    ,
    computed:{

        pageCount(){
            if (this.book.pageCount>500) return 'Serious Reading'
            if (this.book.pageCount<500&&this.book.pageCount>200) return 'Descent Reading'
            else return 'Light Reading'
            
        },

        publishedDate(){
            const currYear = new Date().getFullYear();
            if (currYear - 10 > this.book.publishedDate) return ' Vintage';
            if (currYear - 1 <= this.book.publishedDate) return ' New';

            
        },

        priceClass(){
            if (this.book.listPrice.amount >150) return 'high-price'
           else if (this.book.listPrice.amount <20) return 'low-price'

        },

        formattedPrice(){
            const {amount, currencyCode} = this.book.listPrice
            return new Intl.NumberFormat('en', {style:'currency', currency:currencyCode}).format(amount)
          },

        onSale(){
            if (this.book.listPrice.isOnSale) return ' yes 😎'
            return 'no'

        },

        bookId() {
            return this.$route.params.bookId
        }

    

    },

    watch: {
        bookId() {
            console.log('bookId Changed!')
            this.loadBook()
        }
    }
    
   , components:{
    LongTxt,
    AddReview
    }
    }


