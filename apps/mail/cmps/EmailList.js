import EmailPreview from './EmailPreview.js'

export default {
    props:['emails'],
    template: `
        <section class="email-list">
            <ul>
                <li v-for="email in emails" :key="email.id">
                    <EmailPreview :email="email"/>
                    <!-- <RouterLink :to="'/email/'+email.id">Details</RouterLink> |
                    <RouterLink :to="'/email/edit/'+email.id">Edit</RouterLink> | -->
                    <button @click="remove(email.id)"><i class="fa-solid fa-trash"></i></button>
                </li>
            </ul>
        </section>
    `,
    methods: {
        // remove(emailId) {
        //     this.$emit('remove', emailId)
        // },
        // showDetails(emailId){
        //     this.$emit('show-details', emailId)
        // },
    },
    components: {
        EmailPreview,
    }
}