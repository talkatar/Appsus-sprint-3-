export default {
    name: 'NoteFilter',
    emits: ['setFilter'],
    template: `
        <input @input="getFilter" type="text" v-model="this.filterBy.txt"/>
        <select @change="getFilter" v-model="this.filterBy.type">
            <option value="all">all</option>
            <option value="NoteText">text</option>
            <option value="NoteImg">image</option>
            <option value="NoteTodos">task list</option>
        </select>
    `,
    data() {
        return {
            filterBy: {txt: '', type: 'all'}
        }
    },
    methods: {
        getFilter() {
            // console.log(this.filterBy)
            let filterBy = this.filterBy
            this.$emit('setFilter', filterBy)
        }
    }
}