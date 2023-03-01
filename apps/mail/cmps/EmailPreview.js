export default {
    props: ['email'],
    template: `
        <article class="email-preview">
            <h2 class=email-subject>{{ email.subject }}</h2>
            <h3 class=email-body>{{ email.body }}</h3>
        </article>
    `,
}