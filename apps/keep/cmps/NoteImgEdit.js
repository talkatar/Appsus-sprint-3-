export default {
    name: 'NoteImgEdit',
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