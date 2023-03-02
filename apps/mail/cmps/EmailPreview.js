export default {
    props: ['email'],
    template: `
        <article class="email-preview flex align-center"> 
                <span>😘</span>
                <p class="email-from">{{ email.nameSender }}</p>
                <p class="content flex align-center">
                    <p class="email-subject">{{ email.subject}}&nbsp;-</p>
                    <p class="email-body">{{ email.body }}</p>  
                    <span><button title='Delete' class="btn-delete"  @click.stop="removeEmail(email.id)"><i class="fa-solid fa-trash"></i></button></span> 
                    <span><button title='Mark as ' class="btn-toggle-read"  @click.stop="toggleRead(email.id)"><i class="fa-solid fa-envelope"></i></button></span> 

                </p>
                <p class="date">9 Nov</p>
        </article>
    `,


methods: {

    removeEmail(emailId) {
        // ev.stopPropagation()
        this.$emit('removeEmail', emailId)
    },

    toggleRead(emailId){

    }

}
}