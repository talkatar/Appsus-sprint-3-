export default {
    props: ['info'],
    template: `
        <p>{{ info.title }}</p>
        <ul>
            <li v-for="todo in todos">{{ todo.txt }}</li>
        </ul>
    `,
   computed:{
    todos() {
        return this.info.todos
    }
   }
}