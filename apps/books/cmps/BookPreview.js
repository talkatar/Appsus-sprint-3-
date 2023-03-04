export default {
    props: ['book'],
    template: `
        <article class="car-preview">
            <h2 class=book-title>{{ book.title }}</h2>
            <img :src="book.thumbnail"/>
        </article>
    `,
}