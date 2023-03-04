import EmailPreview from './EmailPreview.js'
import EmailDetails from '../pages/EmailDetails.js'

export default {
    props: ['emails'],
    template: `
        <section class="email-list scroll-container">
            <ul>
                <li :class="[email.isRead ? 'read' : 'unread']" v-for="email in emails" :key="email.id">
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



