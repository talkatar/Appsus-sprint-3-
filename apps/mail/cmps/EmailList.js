import EmailPreview from './EmailPreview.js'
import EmailDetails from '../pages/EmailDetails.js'

export default {
    props:['emails'],
    template: `
        <section class="email-list">
            <ul>
                <li :class="[email.isRead ? 'read' : 'unread']" v-for="email in emails" :key="email.id">
                  
                    <RouterLink :to="'/email/'+email.id"><EmailPreview :email="email"/></RouterLink>  
                    <!-- <RouterLink :to="'/email/edit/'+email.id">Edit</RouterLink> |  -->
                </li>
            </ul>
        </section>
    `,
    methods: {
        remove(emailId) {
            this.$emit('remove', emailId)
        },


      
        // showDetails(emailId){
        //     this.$emit('show-details', emailId)
        // },
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


