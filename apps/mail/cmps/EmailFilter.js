export default {
    template: `
        <section class="email-filter">

            <input class="serach-input"
                v-model="filterBy.txt"
                @input="filter" 
                placeholder="Search mail  "
                type="text" /><button class="btn-hamburger" @click="openModal"><i class="fa-solid fa-bars"></i> </button>
     

                <section class="Search-options justify-between" v-if="isModalOpen">
                <div class="flex align-center justify-between">
                <label class="sort-label" for="my-sort">Sort</label>
                <select id="my-sort" class="sort-box " v-model="filterBy.sortOption" @change="filter" >
                <option value="date">Date</option>
                <option value="title">Title</option>
                </select>
                </div>

                <div class="flex align-center justify-between">
                <label class="select-label" for="my-select">Search</label>
                <select  id="my-select" class="select-box " v-model="filterBy.isRead" @change="filter" >
                <option value="">All Mail</option>
                <option value="read">Read Mails</option>
                  <option value="unread">Unread Mails</option>
                </select>
                </div>
            </section>
                
        
        </section>

       

    `

    ,
    data() {
        return {
            filterBy: { txt: '', isRead: null, sortOption:'' },
            isModalOpen: false
        }
    },
    methods: {
        filter() {
            this.$emit('filter', this.filterBy)
        }

        , openModal() {
            if (this.isModalOpen) this.isModalOpen = false
            else this.isModalOpen = true
        }

    }
}