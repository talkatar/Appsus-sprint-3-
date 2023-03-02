export default {
    template: `
        <section class="email-filter">
            <input class="serach-input"
                v-model="filterBy.title"
                @input="filter" 
                placeholder="Search mail  "
                type="text" />
     

                <select v-model="filterBy.selectedOption" @change="filter" >
        <option value="all">ALL</option>
         <option value="read">Read</option>
         <option value="unread">Unread</option>
      
        </select>

        </section>

       

    `
    
    ,
    data() {
        return {
            filterBy: { title: '', selectedOption: 'all' },
        }
    },
    methods: {
        filter() {
            this.$emit('filter', this.filterBy)
        }

    }
}