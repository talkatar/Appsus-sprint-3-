export default {
    props: ['emails'],
    emits: ['filterList'],

    template: `
       

                <div class="sidebar  ">

                    <div><button   class="btn-inbox" @click="filter('inbox')">
                    <span><i class="fa-solid fa-inbox"></i></span>&nbsp;&nbsp;&nbsp;{{countUnreadMails}}</button></div>
                    <div><button  class="btn-starred" @click="filter('starred')"><span><i class="fa-solid fa-star"></i></span></button></div>
                    <div><button  class="btn-sent" @click="filter('sent')"><i class="fa-solid fa-paper-plane"></i></span></button></div>
                    <div><button  class="btn-draft" @click="filter('draft')"><span><i class="fa-solid fa-sheet-plastic"></i></span></button></div>
                    <div><button  class="btn-trash" @click="filter('trash')"><span><i class="fa-solid fa-trash"></i></span></button></div>
                </div>

               
    `,
    data() {
        return {
            filterBy: { status: '', },
            counter: 0,



        }
    },
    methods: {
        filter(newStatus) {
            console.log(newStatus);
            this.filterBy.status = newStatus
            this.$emit('filterList', this.filterBy)
        },



    }
    , computed: {

        countUnreadMails() {
            this.counter = 0
            this.emails.forEach(email => {
                // console.log(counter);
                if (!email.isRead) this.counter++
            })
            return this.counter
        }




    }
}