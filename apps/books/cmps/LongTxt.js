export default {
    props: ['txt','length'],
    template: `
    <p>{{readtxt}}</p>
    <button  @click="toggleTxt" v-if="this.length < this.txt.length">{{toggleButton}}</button>
    `,

    data(){
        return {
            isFullTxt:false


    }
} ,
  
    
    methods: {

        toggleTxt() {
            this.isFullTxt = !this.isFullTxt
       }
    }
   
      ,computed:{
        readtxt(){
            if ((this.txt.length > this.length) && !this.isFullTxt)
            return (this.txt.substring(0, this.length)+'...')
       return this.txt 
    }
      ,

      toggleButton() {
        return !this.isFullTxt ? ' Read more' : ' Read less'
   }
 }

}

