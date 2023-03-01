export default {
    template: `
       

                <div class="btn-list ">

                    <div><button class="btn-inbox" @input="filter"><span>inbox</span></button></div>

                    <div><button class="btn-starred" @input="filter"><span>Starred</span></button></div>
                    <div><button class="btn-sent" @input="filter"><span>Sent</span></button></div>
                    <div><button class="btn-draft" @input="filter"><span>Draft</span></button></div>
                    <div><button class="btn-trash" @input="filter"><span>Trash</span></button></div>
                </div>

               
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