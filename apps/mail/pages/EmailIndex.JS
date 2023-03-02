
import { emailService } from '../services/email.service.js'
import EmailList from '../cmps/EmailList.js'
import EmailFilter from '../cmps/EmailFilter.js'
import EmailFolderList from '../cmps/EmailFolderList.js'
import EmailCompose from '../cmps/EmailCompose.js'



export default{
    template: `
    <!-- <div class="container"> -->

        <EmailFilter @filter="setFilterBy"/>
        
        <RouterLink to="/email/compose" class="btn-compose"><i class="fa-sharp fa-solid fa-pen"></i><span>Compose</span></RouterLink>  

        <div class="flex">

        <EmailFolderList @filterList="setFilterBy"  v-if="emails" :emails="filteredEmails" />

        <EmailList :emails="filteredEmails" v-if="emails" @removeEmail="removeEmail"/>
        </div>
        <RouterView/>


        <!-- </div> -->



    `

,data() {
    return {
        emails: null,
        filterBy: {
            status: 'inbox',
            txt: '',
            isRead: null,
            isStared: true,
            lables: ['important', 'romantic']

        },

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

    removeEmail(emailId) {
        console.log(emailId);
        emailService.remove(emailId)
        .then(() => {
            
                const idx = this.emails.findIndex(email => email.id === emailId)
                    this.emails.splice(idx, 1)
                })
           
        },


  
    setFilterBy(filterBy) {
        console.log(filterBy);

        if(filterBy.isRead){
            console.log(filterBy.isRead);
            if (filterBy.isRead=== 'read') {
                this.filterBy.isRead =true
            }
            else if(filterBy.isRead=== 'unread')
            this.filterBy.isRead =false

        } else {
            this.filterBy.isRead = null
        }

        if(filterBy.txt) this.filterBy.txt = filterBy.txt
        if(filterBy.status) {
            console.log('hi');
            this.filterBy.status = filterBy.status
            console.log(this.filterBy);
        }
        if(filterBy.sortOption) {
            console.log(filterBy.sortOption);
            this.filterBy.sortOption = filterBy.sortOption
            console.log(this.filterBy);
        }
    }
    
},

computed: {

    filteredEmails() {
        console.log('12345');
        let filteredEmails = this.emails

        const {txt, isRead, status,sortOption} = this.filterBy

        if(txt){
            const regex = new RegExp(txt, 'i')
            console.log(regex);
            filteredEmails = this.emails.filter(email => regex.test(email.subject) || regex.test(email.body))
        }
        console.log(isRead);
      
        if(isRead !== null){
            filteredEmails = this.emails.filter(email => email.isRead === isRead)
        }

        if(status){
           
            // filteredEmails = this.emails.filter(email => email.status === status)
            // console.log(filteredEmails);
            if(status ==='inbox'){
                console.log(filteredEmails);
                filteredEmails = filteredEmails.filter(email => email.to === emailService.loggedinUser.email)

            }
            if(status==='sent'){
                filteredEmails = filteredEmails.filter(email => email.from === emailService.loggedinUser.email)

            }

            if(status === 'starred'){
                filteredEmails = filteredEmails.filter(email => email.isStared)


            }

            if(status==='trash'){
                filteredEmails = filteredEmails.filter(email => email.isTrash)

            }
        }

        if(sortOption)
        {
            if(sortOption ==='date'){

                filteredEmails =filteredEmails.sort((a, b) => b.sentAt - a.sentAt);

         
            }

            
            if(sortOption ==='title'){
                filteredEmails= filteredEmails.sort((a, b) => a.subject.localeCompare(b.subject));
            }

        }
        return filteredEmails

    },


},

components: {
    EmailList,
    EmailFilter,
    EmailFolderList,
    EmailCompose,

}
}



