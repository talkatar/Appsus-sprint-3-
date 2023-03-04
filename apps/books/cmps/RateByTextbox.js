export default {
    props: ['val'],
    template: `
        <section>
            <label>
                Rate:
                <label htmlFor="text-rate">
                    <input v-model="selectedVal" type="text" id="text-rate" pattern="[1-5]{1}" @input="reportVal"/>
                </label>
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
        },
        watch: {
            val() {
              this.selectedVal = this.val
              console.log('val', this.val)
            },
          },
} 