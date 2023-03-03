
import { emailService } from '../services/email.service.js'
import EmailList from '../cmps/EmailList.js'
import EmailFilter from '../cmps/EmailFilter.js'
import EmailFolderList from '../cmps/EmailFolderList.js'
import EmailCompose from '../cmps/EmailCompose.js'
import { showErrorMsg, showSuccessMsg } from '../../../services/event-bus.service.js'



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
        .then(savedEmail => {
                    showSuccessMsg('Conversation moved to Trash.'
                        )
                })
            .catch(err => {
                showErrorMsg('Conversation moved to Trash failed')
            })
           
           
        },


  
    setFilterBy(filterBy) {

        if(filterBy.isRead){
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
            this.filterBy.status = filterBy.status
        }
        if(filterBy.sortOption) {
            this.filterBy.sortOption = filterBy.sortOption
        }
    }
    
},

computed: {

    filteredEmails() {

        let filteredEmails = this.emails

        const {txt, isRead, status,sortOption} = this.filterBy

        if(txt){
            const regex = new RegExp(txt, 'i')
            console.log(regex);
            filteredEmails = this.emails.filter(email => regex.test(email.subject) || regex.test(email.body))
        }
      
        if(isRead !== null){
            filteredEmails = this.emails.filter(email => email.isRead === isRead)
        }

        if(status){
           

            if(status ==='inbox'){

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

            if(status==='draft'){
                filteredEmails = filteredEmails.filter(email => email.isDraft)
            }
        }

        if(sortOption)
        {
            if(sortOption ==='date'){
                filteredEmails =filteredEmails.sort((a, b) => b.sentAt - a.sentAt);

         
            }

            
            if(sortOption ==='title'){
            filteredEmails= filteredEmails.sort((a, b) => b.subject.localeCompare(a.subject));
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


 ,watch: {
    $route: {

         oldValue:'http://127.0.0.1:5501/index.html#/email',
         newValue:'http://127.0.0.1:5501/index.html#/email?reload',

        handler(newValue, oldValue) {
           console.log(newValue)
           console.log(oldValue)
        },
        deep: true
    }
}

}