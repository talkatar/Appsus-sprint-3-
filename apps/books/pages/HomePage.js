import { utilService } from "../services/util.service.js"


export default {
    template: `
        <section class="home-page">

            <h2 ref="myTitle">Home</h2>
            <button @click="animateTitle">Push</button>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis enim rem porro delectus. Quos expedita ipsam repellendus voluptas quas, nam ea eligendi veniam ullam, modi impedit eveniet quia quaerat molestias?</p>
        </section>
    `,



methods: {
    animateTitle() {
        utilService.animateCSS(this.$refs.myTitle, 'tada')
    }
}
}