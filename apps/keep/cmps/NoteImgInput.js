import { noteService } from "../services/note.service.js"

export default {
    name: 'NoteImgInput',
    props: ['noteType'],
    emits: ['addImgNote'],
    template: `
         <form @submit.prevent="addNote" enctype="multipart/form-data" class="img-form-container">
            <input type="text" placeholder="enter title" v-model="this.newNote.info.title"/>
            <input ref="imgInput" type="text" placeholder="enter image url" v-model="this.newNote.info.url"/>
            <button @click="uploadImage"><input hidden ref="imgUpload" type="file"/><i class="fa-solid fa-upload"></i></button>
            <button><i class="fa-solid fa-floppy-disk"></i></button>
        </form>
    `,
    data() {
        return {
            newNote: noteService.getEmptyNote()
        }
    },
    methods: {
        uploadImage() {
            this.$refs.imgUpload.click()
        },
        addNote() {
            let newNote = this.newNote
            newNote.type = this.noteType
            let imgUpload = this.$refs.imgUpload
            if(imgUpload.files.length > 0) {
                console.log(event)
                const reader = new FileReader()
                reader.onload = () => {
                    let imgInput = this.$refs.imgInput
                    imgInput.value = reader.result
                    this.newNote.info.url = reader.result
                    this.$emit('addImgNote', newNote)
                    return
                }
                reader.readAsDataURL(imgUpload.files[0])
            }
            console.log(newNote)
            this.$emit('addImgNote', newNote)
        },
    }
}