export default {
    props: ['email'],
    template: `
        <article class="email-preview flex align-center"> 
                <button class=btn-star-prev @click="handleStarred"><i class="fa-solid fa-star"></i></button>
                
                    <p class="email-from" @click="openMail">{{ email.nameSender }}</p>
                    <p class="content flex align-center" @click="openMail">
                        <p class="email-subject">{{ email.subject}}&nbsp;-</p>
                        <p class="email-body">{{ email.body }}</p>     
                    </p>
                
                <span><button    class="btn-delete"  @click.stop="removeEmail(email.id)"><i class="fa-solid fa-trash"></i></button></span> 
                <span><button  class="btn-toggle-read"  @click.stop="toggleRead(email.id)"><i class="fa-solid fa-envelope"></i></button></span> 

                <p class="date">{{ formatDate }}</p>
        </article>
    `,


methods: {

    removeEmail(emailId) {
        // ev.stopPropagation()
        this.$emit('removeEmail', emailId)
    },

    toggleRead(emailId){

    },
    openMail(){
        this.$router.push(`/email/${this.email.id}`)
    },
    handleStarred(){
        if(!this.email.isStared){
            this.email.isStared=true
            return 'btn-star-clicked'

        }
        else{
            this.email.isStared=false
            return 'btn-star-prev'

        }

    }

}

,computed:{
     formatDate() {


        const now = new Date().getTime();
        console.log(now); 

        const diff = now - this.email.sentAt;
      
        if (diff > 24 * 60 * 60 * 1000) {
          // More than 24 hours ago, return the date
          const date = new Date(this.email.sentAt);
          return date.toLocaleDateString();
        } else {
          // Less than 24 hours ago, return the time with AM/PM
          const date = new Date(this.email.sentAt);
          let hours = date.getHours();
          const minutes = date.getMinutes();
          const ampm = hours >= 12 ? 'PM' : 'AM';
          hours %= 12;
          hours = hours ? hours : 12; // Handle midnight (0 hours)
          return hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' ' + ampm;
        }
      }


    }

}
