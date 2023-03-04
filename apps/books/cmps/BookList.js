import BookPreview from './BookPreview.js'

export default {
    props:['books'],
    template: `
        <section class="book-list">
            <ul>
                <li v-for="book in books" :key="book.id">
                    <BookPreview :book="book"/>
                    <RouterLink :to="'/book/'+book.id"><i class="fa-solid fa-circle-info"></i></RouterLink> |
                    <RouterLink :to="'/book/edit/'+book.id"><i class="fa-solid fa-pen-to-square"></i></RouterLink> |
                    <button @click="remove(book.id)"><i class="fa-solid fa-trash"></i></button>
                </li>
            </ul>
        </section>
    `,
    methods: {
        remove(bookId) {
            this.$emit('remove', bookId)
        },
        showDetails(bookId){
            this.$emit('show-details', bookId)
        },
    },
    components: {
        BookPreview,
    }
}