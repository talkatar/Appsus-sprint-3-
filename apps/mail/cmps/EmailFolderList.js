
import { emailService } from '../services/email.service.js'
export default {
    props: ['emails'],
    emits: ['filterList'],

    template: `
                    <div class="sidebar  ">
                    <div><button   class="btn-inbox" @click="filter('inbox')">
                    <span><i class="fa-solid fa-inbox"></i>
                    </span>&nbsp;&nbsp;&nbsp;<span :class="[filterBy.status==='inbox'? 'counting' : 'notcounting']">{{countUnreadMails}}</span></button></div>
                    <div><button  class="btn-starred" @click="filter('starred')"><span><i class="fa-solid fa-star"></i></span></button></div>
                    <div><button  class="btn-sent" @click="filter('sent')"><i class="fa-solid fa-paper-plane"></i></span></button></div>
                    <div><button  class="btn-draft" @click="filter('draft')"><span><i class="fa-solid fa-sheet-plastic"></i></span></button></div>
                    <div><button  class="btn-trash" @click="filter('trash')"><span><i class="fa-solid fa-trash"></i></span></button></div>
                </div>      
    `
    ,data() {
        return {
            filterBy: { status: 'inbox', },
            counter: 0,
            isInbox: 'true'
        }
    }
    ,methods: {
        filter(newStatus) {
            console.log(newStatus);
            this.filterBy.status = newStatus
            console.log(this.filterBy.status);
            this.$emit('filterList', this.filterBy)
        },
    }
    
    ,computed: {
        countUnreadMails() {
            this.counter = 0
            this.emails.forEach(email => {
                if (!email.isRead && email.to === emailService.loggedinUser.email && !email.isTrash) {
                    this.counter++
                }
            })
            return this.counter
        }
    }
}