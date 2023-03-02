export default {
    props: ['info'],
    template: `
            <p>{{info.title}}</p>
            <iframe :src="video"></iframe>
    `,
    computed: {
        video() {
            return this.info.url
        }
    }
}