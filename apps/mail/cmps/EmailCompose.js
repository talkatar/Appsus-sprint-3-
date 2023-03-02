
import { emailService } from '../services/email.service.js'


export default {

  template: `
    <div class="new-mail">
    <div class="header">
      <div class="msg">New Message</div>
      <input  style="border-bottom: 1px solid #b6cff5"  type="text" placeholder="To" v-model="email.to" />
      <input  style="border-bottom: 1px solid #b6cff5"   type="text" placeholder="Subject" v-model="email.subject" />
    </div>
    <div class="body">
      <textarea  v-model="email.body"></textarea>
    </div>
    <div class="footer">
      <button @click="send">Send</button>
    </div>
  </div>
`,

  data() {
    return {
      // to: '',
      // subject: '',
      // body: '',
      email: emailService.getEmptyEmail()

    }
  }

  , methods: {
    send() {

      emailService.save(this.email)
        .then(savedEmail => {
          // showSuccessMsg('Book saved')
          this.$router.push('/email')
        })
    }

  }




}


