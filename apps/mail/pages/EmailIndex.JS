
import { emailService } from '../services/email.service.js'
import EmailList from '../cmps/EmailList.js'
import EmailFilter from '../cmps/EmailFilter.js'
import EmailFolderList from '../cmps/EmailFolderList.js'
import EmailCompose from '../cmps/EmailCompose.js'



export default{
    template: `
        <div>emails</div>

        <EmailFilter @filter="setFilterBy"/>
        <RouterLink to="/email/compose">Compose</RouterLink>  

        <EmailFolderList @filter="setFilterBy"/>

        <EmailList :emails="filteredEmails" v-if="emails"/>
        <RouterView/>
                 <!-- :emails=this.emails -->





    `

,data() {
    return {
        emails: null,
        filterBy: {},
    }
}

,created() {
    emailService.query()
        .then(emails => {
            console.log(emails);
            this.emails = emails
            console.log(emails);
        })

},

methods: {

  
    setFilterBy(filterBy) {
        console.log(filterBy);
        this.filterBy = filterBy
    }
},

computed: {
    filteredEmails() {
        // if (!this.filterBy.price) {
        //     this.filterBy.title = ''
        //     this.filterBy.price = 200
        // }
        const regex = new RegExp(this.filterBy.title, 'i')
        console.log(  regex);
        return this.emails.filter(email => 
            regex.test(email.subject)||regex.test(email.body)
        
               )
               
    },

  
},

   

components: {
    EmailList,
    EmailFilter,
    EmailFolderList,
    EmailCompose,

}
}