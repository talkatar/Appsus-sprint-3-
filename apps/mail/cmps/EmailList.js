import EmailPreview from './EmailPreview.js'
import EmailDetails from '../pages/EmailDetails.js'
import {emailService} from '../services/email.service.js'

export default {
    props:['emails'],
    template: `
        <section class="email-list">
            <ul>
                <li :class="[email.isRead ? 'read' : 'unread']" v-for="email in emails" :key="email.id">
               

                    <RouterLink :to="'/email/'+email.id"  ><EmailPreview :email="email" @removeEmail="removeEmail"/></RouterLink>  
                    <!-- <RouterLink :to="'/email/edit/'+email.id">Edit</RouterLink> |  -->
                    

                </li>
            </ul>
        </section>
    `,
    methods: {

        removeEmail(emailId) {
            this.$emit('removeEmail', emailId)
        },

       
        },
     

    computed:{
       
    }

    ,created(){

    }


,
    components: {
        EmailPreview,
        EmailDetails,
    }
}



    