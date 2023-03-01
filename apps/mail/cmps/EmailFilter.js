export default {
    template: `
        <section class="email-filter">
            <input 
                v-model="filterBy.title"
                @input="filter" 
                placeholder="Search  "
                type="text" />

                <div class=" ">
                    <button class="btn-inbox" @input="filter"><span>inbox</span></button>
                    <button class="btn-starred" @input="filter"><span>Starred</span></button>
                    <button class="btn-sent" @input="filter"><span>Sent</span></button>
                    <button class="btn-draft" @input="filter"><span>Draft</span></button>
                    <button class="btn-trash" @input="filter"><span>Trash</span></button>
                </div>

               
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