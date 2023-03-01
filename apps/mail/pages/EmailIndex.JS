
import { emailService } from '../services/email.service.js'
import EmailList from '../cmps/EmailList.js'
import EmailFilter from '../cmps/EmailFilter.js'



export default{
    template: `
        <div>emails</div>

        <EmailFilter @filter="setFilterBy"/>
        <EmailList 
                :emails=this.emails
                v-if="emails"
                 />

                 <!-- @remove="removeEmail"  -->



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
        })

},

methods: {

  
    setFilterBy(filterBy) {
        console.log(filterBy);
        this.filterBy = filterBy
    }
},

   

components: {
    EmailList,
    EmailFilter,

}
}