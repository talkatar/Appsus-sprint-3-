import { eventBus } from '../../../services/event-bus.service.js'
import { emailService } from '../services/email.service.js'


export default {

  template: `

  <button @click="closeCompose" class="btn-close-compose"><i class="fa-solid fa-x"></i></button>
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
          eventBus.emit('sent', savedEmail)
          this.$router.push('/email')
        })
    }

    , closeCompose() {
      this.email.isDraft = true
      this.email.nameSender = 'Draft'
      emailService.save(this.email)
        .then(darftEmail => {
          eventBus.emit('drat', darftEmail)
          this.$router.push('/email')
        })
    }
  }
  , computed: {
    query() {
      return this.$route.query.params
    }
  }
}
