import { emailService } from '../services/email.service.js'
import { showErrorMsg, showSuccessMsg } from '../../../services/event-bus.service.js'

export default {
    props: ['email'],
    template: `
        <article class="email-preview flex align-center"> 
                <button :class="[email.isStared ? 'btn-star-clicked' :'btn-star-prev']" @click="handleStarred"><i class="fa-solid fa-star"></i></button>

                    <p class="email-from" @click="openMail"><span
                        :class="[email.isDraft ? 'drat' : 'undraft']"> {{ email.nameSender }}</span></p>
                    <p class="content flex align-center" @click="openMail">
                        <p class="email-subject">{{ email.subject}}&nbsp;-</p>
                        <p class="email-body">{{ email.body }}</p>     
                    </p>
                
                <span><button    class="btn-delete"  @click.stop="removeEmail(email.id)"><i class="fa-solid fa-trash"></i></button></span> 
                <span><button title="Mark as read" class="btn-toggle-read"  @click.stop="handleRead">
                    <i :class="[isReadclicked ? 'fa-solid fa-envelope' :'fa-solid fa-envelope-open']"></i></button></span> 
                    <span><button @click="creatNote"><i class="fa-solid fa-share"></i> </button></span>

                <p class="date">{{ formatDate }}</p>
        </article>
    `



    , data() {
        return {

            
            isReadclicked: false
        }



    },

    methods: {

        removeEmail(emailId) {
            this.$emit('removeEmail', emailId)
        },

        handleRead() {

            this.isReadclicked = !this.isReadclicked
            console.log(this.email);
            this.email.isRead = !this.email.isRead
            emailService.save(this.email)
                .then(savedEmail => {
                    showSuccessMsg(this.isReadclicked ? 'Conversation marked as read' : 'Conversation marked as unread')
                })
             .catch(err => {
                showErrorMsg('Book save failed')
            })
            

    },


    openMail() {
        this.$router.push(`/email/${this.email.id}`)
    },

    handleStarred() {
        this.email.isStared = !this.email.isStared
        emailService.save(this.email)
    }

    ,creatNote(){
        let emailParams = this.email.body
        this.$router.push({path:'/keep', query:{params: emailParams}})
    },


}



, computed: {
    formatDate() {



        const now = new Date().getTime();
        console.log(now);

        const diff = now - this.email.sentAt;

        if (diff > 24 * 60 * 60 * 1000) {
            // More than 24 hours ago, return the date
            const date = new Date(this.email.sentAt);
            return date.toLocaleDateString();
        } else {
            // Less than 24 hours ago, return the time with AM/PM
            const date = new Date(this.email.sentAt);
            let hours = date.getHours();
            const minutes = date.getMinutes();
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours %= 12;
            hours = hours ? hours : 12; // Handle midnight (0 hours)
            return hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' ' + ampm;
        }
    },


}

}
