export default {
    template: `
        <section class="email-filter">
            <input class="serach-input"
                v-model="filterBy.title"
                @input="filter" 
                placeholder="Search mail  "
                type="text" />
     
        </section>
    `,
    data() {
        return {
            filterBy: { title: '' },
        }
    },
    methods: {
        filter(){
            this.$emit('filter', this.filterBy)
        }

    }
}