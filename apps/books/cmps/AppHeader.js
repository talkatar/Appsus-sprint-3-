export default {
    template: `
        <header class="app-header-book">
            <RouterLink to="/bookadd">search google books</RouterLink>|
        </header>
    `,
    methods: {
        setRoute(route) {
            this.$emit('set-route', route)
        }
    }
}