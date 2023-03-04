import HomePage from './views/HomePage.js'
import AboutUs from './views/AboutUs.js'
import EmailIndex from './apps/mail/pages/EmailIndex.js'
import EmailDetails from './apps/mail/pages/EmailDetails.js'
import EmailCompose from './apps/mail/cmps/EmailCompose.js'
import NoteEdit from './apps/keep/pages/NoteEdit.js'
import NoteIndex from './apps/keep/pages/NoteIndex.js'
import BookIndex from './apps/books/pages/BookIndex.js'
import BookAdd from './apps/books/pages/BookAdd.js'
import BookDetails from './apps/books/pages/BookDetails.js'
import BookEdit from './apps/books/pages/BookEdit.js'

const { createRouter, createWebHashHistory } = VueRouter

const routerOptions = {
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			component: HomePage,
		},
		{
			path: '/about',
			component: AboutUs,
		},
		{
			path: '/email',
			component: EmailIndex,
			children: [
				{
					path: 'compose',
					component: EmailCompose,
				},
			]
		},
		{
            path: '/email/:emailId',
            component: EmailDetails
        },
		{
			path: '/keep',
			component: NoteIndex,
		},
		{
			path: '/keep/:noteId',
			component: NoteEdit,
		},
		{
            path: '/book',
            component: BookIndex
        },

        {
            path: '/bookadd',
            component: BookAdd
        },

        {
            path: '/book/:bookId',
            component: BookDetails
        },
        {
            path: '/book/edit/:bookId?',
            component: BookEdit
        },
        // // Last fallback if no route was matched:
        {
            path: '/:catchAll(.*)',
            component: HomePage
        }
	],
}

export const router = createRouter(routerOptions)