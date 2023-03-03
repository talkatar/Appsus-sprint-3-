
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
      <textarea  v-model="email.body"></textarea>
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
  }

  , methods: {
    send() {
      eventBus.emit('sent', {...this.email})
      this.$router.push('/email')
      // emailService.save(this.email)
      //   .then(savedEmail => {
      //     // showSuccessMsg('Book saved')
      //   })
    }

  }



}




