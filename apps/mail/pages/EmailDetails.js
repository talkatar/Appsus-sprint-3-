
import {emailService} from '../services/email.service.js'


export default {
    name:'EmailDetails',

    template: `
        <section class="email-details" v-if="email">
          <div>{{email.subject}}</div>
          <div>{{email.body}}</div>
          <div>{{email.from}}</div>
          <div>{{email.to}}</div>




        <button v-if=this.displayBtn @click="removeEmail(email.id)"><i class="fa-solid fa-trash"></i></button>





            <nav>
            <!-- <RouterLink :to="'/email/' + email.prevEmailId">Previous Email</RouterLink> |
            <RouterLink :to="'/email/' + email.nextEmailId">Next Email</RouterLink> -->
                <hr />
            <RouterLink to="/email">Back </RouterLink>
            </nav>
                        <!-- <AddReview @reviewSaved="addEmailReview" /> -->

       
        </section>
    `,

    data(){
        return{
            email:null,
            length:100,
            displayBtn:true

        }
    }

    ,created() {
        
        console.log('Params:',  this.$route.params)
        const {emailId} = this.$route.params
        console.log(emailId);
        emailService.get(emailId)
            .then(
                email => {
                this.email = email
                email.isRead=true
                emailService.save(email)
                }
                )
    }

    ,methods: {
        removeEmail(emailId) {
            console.log(emailId);
            emailService.remove(emailId)
                .then(() => {
                    this.email='null'
                    this.displayBtn=false

                    // const idx = this.emails.findIndex(email => email.id === emailId)
                    // this.emails.splice(idx, 1)

                })
                    // eventBusService.emit('show-msg', { txt: 'Email removed', type: 'success' })
    
                // })
                // .catch(err=>{
                //     eventBusService.emit('show-msg', { txt: 'Email remove failed', type: 'error' })
               
                //  })
        },

       


        loadEmail() {
            emailService.get(this.emailId)
                .then(email => this.email = email)
        }
       
    }
    
    ,
    computed:{


        emailId() {
            return this.$route.params.emailId
        }

    }
    ,
    watch: {
        emailId() {
            console.log('emailId Changed!')
            this.loadEmail()
        }
    }

        ,components:{
        
        }
    }
    
    
        
     
