export default {
	template: `
        <header class="app-header">
            <div>


            
      
                <!-- <img class="app-logo" src='../../../assets/img/horse.png' alt=""> -->
                <h1>AppSus</h1>

                <nav>
                    <router-link to="/">Home</router-link> 
                    <router-link to="/about">About</router-link>
                    <router-link to="/keep"><img class="keep-logo-header" src='../../../assets/img/keep.png' alt=""></router-link>
                    <router-link to="/email"><img class="gmail-logo-header" src='../../../assets/img/Gmail-home-page.png' alt=""></router-link>
                    <router-link to="/Book"><img class="book-logo-header" src='../../../assets/img/book.png' alt=""></router-link>

                </nav>
            </div>
        </header>
    `,
}

// class="flex space-between align-center"