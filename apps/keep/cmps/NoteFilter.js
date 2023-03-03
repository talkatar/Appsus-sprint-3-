export default {
    name: 'NoteFilter',
    emits: ['setFilter'],
    template: `
        <div class="note-filter">
            <label>
                text-filter:
                <input @input="getFilter" type="text" v-model="this.filterBy.txt"/>
            </label>
            <p>filter by type:</p>
            <button @click="this.filterBy.type = 'NoteText', getFilter()"><i class="fa-regular fa-text">text</i></button>
            <button @click="this.filterBy.type = 'NoteImg', getFilter()"><i class="fa-solid fa-image"></i></button>
            <button @click="this.filterBy.type = 'NoteTodos', getFilter()"><i class="fa-solid fa-list"></i></button>
            <button @click="this.filterBy.type = 'NoteVideo', getFilter()"><i class="fa-solid fa-video"></i></button>
            <button @click="this.filterBy.type = 'all', getFilter()"><i class="fa-solid fa-arrow-left"></i></button>
            <!-- <label>
                filter by type:
                <select @change="getFilter" v-model="this.filterBy.type">
                    <option value="all">all</option>
                    <option value="NoteText">text</option>
                    <option value="NoteImg">image</option>
                    <option value="NoteTodos">task list</option>
                    <option value="NoteVideo">video</option>
                </select>
            </label> -->
        </div>
    `,
    data() {
        return {
            filterBy: {txt: '', type: 'all'}
        }
    },
    methods: {
        getFilter() {
            console.log(this.filterBy)
            let filterBy = this.filterBy
            this.$emit('setFilter', filterBy)
        }
    }
}