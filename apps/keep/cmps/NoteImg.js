export default {
    props: ['info'],
    template: `
        <p>{{ info.title }}</p>
        <img src="image" alt="image not found"/>
    `,
    computed: {
        image() {
            return this.info.url
        }
    }
}