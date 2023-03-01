
import { emailService } from '../services/email.service.js'
import EmailList from '../cmps/EmailList.js'



export default{
    template: `
        <div>emails</div>

        <EmailList 
                :emails=this.emails
              
                 />




    `

,data() {
    return {
        emails: null,
    }
}

,created() {
    emailService.query()
        .then(emails => {
            console.log(emails);
            this.emails = emails
        })

},
   

components: {
    EmailList,

}
}