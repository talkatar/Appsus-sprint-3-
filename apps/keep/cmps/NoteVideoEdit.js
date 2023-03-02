export default {
    name: 'NoteVideoEdit',
    props: ['note'],
    template: `
        <label>
            title:
            <input type="text" v-model="this.note.info.title"/>
        </label>
        <label>
            url:
            <input type="text" v-model="this.note.info.url"/>
        </label>
    `
}