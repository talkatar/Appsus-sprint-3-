import NotePreview from "../cmps/NotePreview.js"

export default {
    props: ['notes'],
    template: `
        <NotePreview v-for="note in notes" key="note.id" :note="note"/>
    `,
    components: {
        NotePreview
    }
}