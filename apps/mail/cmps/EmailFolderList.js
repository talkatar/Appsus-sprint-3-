export default {
    props:['emails'],

    template: `
       

                <div class="btn-list ">

                    <div><button  title='Inbox' class="btn-inbox" @click="filter">
                    <span><i class="fa-solid fa-inbox"></i></span>&nbsp;&nbsp;&nbsp;{{countUnreadMails}}</button></div>

                    <div><button title='Starred' class="btn-starred" @click="filter"><span><i class="fa-solid fa-star"></i></span></button></div>
                    <div><button title='Sent' class="btn-sent" @click="filter"><i class="fa-solid fa-paper-plane"></i></span></button></div>
                    <div><button title='Draft' class="btn-draft" @click="filter"><span><i class="fa-solid fa-sheet-plastic"></i></span></button></div>
                    <div><button title='Trash' class="btn-trash" @click="filter"><span><i class="fa-solid fa-trash"></i></span></button></div>
                </div>

               
    `,
    data() {
        return {
            filterListBy: '',
                 
        }
    },
    methods: {
        filter(){
            this.filterListBy='isSent'
            this.$emit('filterList', this.filterListBy)
        },

        

    }
    ,computed:{

        countUnreadMails(){
            let counter=0
            this.emails.forEach(email=>{
                console.log(counter);
                if(!email.isRead) counter++
            }  )
            return  counter
        }




    }
}