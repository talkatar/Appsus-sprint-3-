export default {
    props: ['val'],
    template: `
        <section>
            <label>
                Rate:
                <select v-model="selectedVal" @change="reportVal">  
                    <option v-for="opt in 5">{{opt}}</option>
                </select>
            </label>  
        </section>
        `,
        data() {
            return {
                selectedVal: this.val,
            }
        },
        methods: {
            reportVal() {
                this.$emit('setVal', this.selectedVal)
            }
        }
} 