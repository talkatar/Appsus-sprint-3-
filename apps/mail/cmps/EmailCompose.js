
export default {

    template: `
    <div class="new-mail">
    <div class="header">
      <input type="text" placeholder="To" v-model="to" />
      <input type="text" placeholder="Subject" v-model="subject" />
    </div>
    <div class="body">
      <textarea placeholder="Compose email" v-model="body"></textarea>
    </div>
    <div class="footer">
      <button @click="send">Send</button>
    </div>\index.html
  </div>
`,

data() {
    return {
      to: '',
      subject: '',
      body: ''
    }
}

,  methods: {
    send() {

        
    }
}
}

