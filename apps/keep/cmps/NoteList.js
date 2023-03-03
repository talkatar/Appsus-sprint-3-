import NotePreview from "../cmps/NotePreview.js"
import AddNote from "../cmps/AddNote.js"
import NoteFilter from "../cmps/NoteFilter.js"


export default {
    name: 'NoteList',
    emits: ['remove', 'noteAdd', 'duplicate', 'setColor', 'changePinStatus'],
    props: ['notes'],
    template: `
        <div class="notes">
            <section class="notes-filter">
                <NoteFilter @setFilter="filterNotes"/>
            </section>
            <section class="note-page">
                <AddNote @noteAdd="AddNote"/>
                <section class="note-container">
                    <p v-if="pinnedNotes.length > 0">pinned</p>
                    <NotePreview v-for="note in pinnedNotes" 
                    :key="note.id" :note="note" @remove="deleteNote" 
                    @duplicate="duplicateNote" @setColor="setColor" 
                    @pinStatus="changePinStatus"/>
                </section>
                <section class="note-container">
                    <p v-if="pinnedNotes.length > 0">others</p>
                    <NotePreview v-for="note in unPinnedNotes" 
                    :key="note.id" :note="note" @remove="deleteNote" 
                    @duplicate="duplicateNote" @setColor="setColor"
                    @pinStatus="changePinStatus"/>
                </section>
            </section>
        </div>    
    `,
    data() {
        return {
            filterBy: null
        }
    },
    methods: {
        deleteNote(noteId) {
            this.$emit('remove', noteId)
        },
        AddNote(newNote) {
            // console.log(newNote)
            this.$emit('noteAdd', newNote)
        },
        duplicateNote(newDuplicate) {
            this.$emit('duplicate', newDuplicate)
        },
        setColor(updatedColorNote) {
            this.$emit('setColor', updatedColorNote)
        },
        filterNotes(filterBy) {
            this.filterBy = filterBy
        },
        changePinStatus(updatedPinNote) {
            this.$emit('pinStatus', updatedPinNote)
        }
    },
    computed: {
        filteredNotes() {
            if(!this.filterBy) return this.notes
            const regex = new RegExp(this.filterBy.txt, 'i')
            let type = this.filterBy.type
            if(this.filterBy.type === 'all') {
                return this.notes.filter(note => regex.test(note.info.title) || regex.test(note.info.txt))
            } else {
                return this.notes.filter(note => 
                    note.type === type && (regex.test(note.info.title) || regex.test(note.info.txt)))
            }
        },
        pinnedNotes() {

            return this.filteredNotes.filter(note => note.isPinned)
        },
        unPinnedNotes() {
            return this.filteredNotes.filter(note => !note.isPinned)
        }
    },
    components: {
        NotePreview,
        AddNote,
        NoteFilter
    }
}