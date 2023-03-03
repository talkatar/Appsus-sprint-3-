import { eventBus } from '../../../services/event-bus.service.js'
import { emailService } from '../services/email.service.js'


export default {

  template: `
  <form @submit.prevent="send">
    <div class="new-mail">
    <div class="header">
      
      <div class="msg">New Message</div>
      <input  style="border-bottom: 1px solid #b6cff5"  type="text" placeholder="To" v-model="email.nameSender" required />
      <input  style="border-bottom: 1px solid #b6cff5"   type="text" placeholder="Subject" v-model="email.subject"required />
    </div>
    <div class="body">
      <textarea ref="emailBody"  v-model="email.body"></textarea>
    </div>
    <div class="footer">
      <button >Send</button>
    </div>
   
  </div>
</form>
  
`,

  data() {
    return {
      // to: '',
      // subject: '',
      // body: '',
      email: emailService.getEmptyEmail()

    }
  },
  mounted() {
    if (!this.query) {
      this.$refs.emailBody.value = ''
      return
    }
    this.$refs.emailBody.value = this.query
  },

  methods: {
    send() {

      emailService.save(this.email)
        .then(savedEmail => {
          // showSuccessMsg('Book saved')
          this.$router.push('/email?reload')
        })
    }

  },
  computed: {
    query() {
      return this.$route.query.params
    }
  }



}
