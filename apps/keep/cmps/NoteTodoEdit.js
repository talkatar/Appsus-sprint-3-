export default {
    name: 'NoteTodoEdit',
    props: ['todo'],
    template: `
        <input type="text" v-model="todo.txt" />
    `,
}