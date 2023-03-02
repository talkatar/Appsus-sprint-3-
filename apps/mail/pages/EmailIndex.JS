
import { emailService } from '../services/email.service.js'
import EmailList from '../cmps/EmailList.js'
import EmailFilter from '../cmps/EmailFilter.js'
import EmailFolderList from '../cmps/EmailFolderList.js'
import EmailCompose from '../cmps/EmailCompose.js'



export default{
    template: `

        <EmailFilter @filter="setFilterBy"/>
        <RouterLink to="/email/compose" class="btn-compose"><i class="fa-sharp fa-solid fa-pen"></i><span>Compose</span></RouterLink>  

        <EmailFolderList @filterList="setfilterList" :emails="filteredEmails"/>

        <EmailList :emails="filteredEmails" :emails="filteredEmails" v-if="emails" @removeEmail="removeEmail"/>
        <RouterView/>
                 <!-- :emails=this.emails -->





    `

,data() {
    return {
        emails: null,
        filterBy: {},
        keySort:''
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
        this.filterBy = filterBy
    },
    setfilterList(keySort) {
        console.log(keySort);
        this.keySort = keySort
    }
},

computed: {
    filteredEmails() {
        return this.emails.filter((email) => {
            console.log(this.filterBy);
          const searchRegex = new RegExp(this.filterBy.title, 'i');
          const readRegex = new RegExp(this.filterBy.selectedOption === 'all' ? '' : this.filterBy.selectedOption, 'i');
          console.log(readRegex);
          console.log(searchRegex);
          console.log(searchRegex.test(email.subject||email.body) && readRegex.test(email.isRead ? 'true' : 'false'));

          return searchRegex.test(email.subject||email.body) && readRegex.test(email.isRead ? 'read' : 'unread');
        });

    },

    filterList(){
        return this.emails.filter((email) => email[this.keySort]===true)
    }





},

components: {
    EmailList,
    EmailFilter,
    EmailFolderList,
    EmailCompose,

}
}




// filteredEmails() {
       
//     const regex = new RegExp(this.filterBy.title, 'i')
//     const readRegex = new RegExp(this.filterBy.selectedOption === 'all' ? '' : this.selectedOption, 'i');

//     console.log(  regex);

//     return this.emails.filter(email => 

//         if(this.filterBy.selectedOption===unread)
        
//         {
//             if((email.isRead===false)&&(regex.test(email.subject)||regex.test(email.body))
//         }

//         else if(this.filterBy.selectedOption===read)
//         {
//         if(email.isRead===true)&&(regex.test(email.subject)||regex.test(email.body))

//          }
       
//          else (regex.test(email.subject)||regex.test(email.body))
        
    
           
           
// },


// },

// filteredEmails() {
//     const filtered = this.emails.filter((email) => {
//       const searchRegex = new RegExp(this.searchTerm, 'i');
//       const readRegex = new RegExp(this.readStatus === 'all' ? '' : this.readStatus, 'i');
//       return searchRegex.test(email.subject) && readRegex.test(email.read ? 'read' : 'unread');
//     });
//     return filtered;



// filteredEmails() {
//     // if (!this.filterBy.price) {
//     //     this.filterBy.title = ''
//     //     this.filterBy.price = 200
//     // }
//     const regex = new RegExp(this.filterBy.title, 'i')
//     console.log(  regex);
//     return this.emails.filter(email => 
//         regex.test(email.subject)||regex.test(email.body)
    
//            )
           
// },


// },