export default {
    template: `
        <section class="book-filter">
            <input class="book-filter-input"
                v-model="filterBy.title"
                @input="filter" 
                placeholder="Search by title "
                type="text" />

                <input class="book-filter-range"
                v-model="filterBy.price"
                @input="filter"
                type="range"
                min="1"
                max="200">
                <span class="range-number">{{filterBy.price}}</span>
        </section>
    `,
    data() {
        return {
            filterBy: { title: '', price: 200 },
        }
    },
    methods: {
        filter(){
            this.$emit('filter', this.filterBy)
        }

    }
}