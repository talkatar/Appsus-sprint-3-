import EmailPreview from './EmailPreview.js'
import EmailDetails from '../pages/EmailDetails.js'
import { emailService } from '../services/email.service.js'

export default {
    props: ['emails'],
    template: `
        <section class="email-list scroll-container">
            <ul>
                <li :class="[email.isRead ? 'read' : 'unread']" v-for="email in emails" :key="email.id">
                <!-- :class="[email.isRead ? 'read' : 'unread']" -->
                <!-- class="{{emailClass}}" -->
                <!-- :class="[email.isRead ? 'read' : (email.isStared ? btn-star-clicked  : unread)]" -->
                <EmailPreview :email="email" @removeEmail="removeEmail"/>  
                    

                </li>
            </ul>
        </section>
    `,
    methods: {

        removeEmail(emailId) {
            this.$emit('removeEmail', emailId)
        },


    }



    , computed: {
        emailClass() {
            if (email.isRead) return 'read'
            if (!email.isRead) return 'unread'
            //  if (email.isStared) return  'btn-star-clicked.read'
        }

    }

    , created() {

    }


    ,
    components: {
        EmailPreview,
        EmailDetails,
    }
}



