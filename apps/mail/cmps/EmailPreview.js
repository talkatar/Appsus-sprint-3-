export default {
    props: ['email'],
    template: `
        <article class="email-preview flex align-center"> 
                <span>😘</span>
                <p class="email-from">{{ email.nameSender }}</p>
                <p class="content flex align-center">
                    <p class="email-subject">{{ email.subject }}</p>
                    <p class="email-body">{{ email.body }}</p>   
                </p>
                <p class="date">9 Nov</p>
        </article>
    `,
}