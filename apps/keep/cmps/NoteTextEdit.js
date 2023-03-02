export default {
    name: 'NoteTextEdit',
    props: ['note'],
    template: `
        <input type="text"  v-model="this.note.info.txt"/>
    `
}