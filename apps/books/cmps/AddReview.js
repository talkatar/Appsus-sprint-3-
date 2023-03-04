
import RateByTextbox from '../cmps/RateByTextbox.js'
import RateBySelect from '../cmps/RateBySelect.js'


export default {
        emits:['reviewSaved'],

    template: `

<!-- <label>
      <input type="radio" v-model="selected" value="option1" ">
      Option 1
    </label>
    <label>
      <input type="radio" v-model="selected" value="option2" ">
      Option 2
    </label> -->

  

    <h1 >Add your review</h1>


<form class="review" @submit.prevent="addReview">

    <label for="name">Name reviewer :</label>
    <input type="text" id="name" v-model="review.nameReviewer" autocomplete="off"  />
<div>

<select v-model="titleType">
                    <option>RateBySelect</option>
                    <option>RateByTextbox</option>
                </select>
</div>
  
    <Component :is="titleType" :val="rate" @setVal="rating">Our Home is Here</Component>

    <div><label for="rating">Rating:</label>
        <select id="rating" v-model="review.selectedRating">
        <option value="1">1</option>
         <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        </select>
    </div>

    <div>
    <label for="datepicker">Date review :</label>
    <input type="date" id="datepicker" v-model="review.selectedDate"/>
  </div>

    <button type="submit">Save</button>
    </form>
    
    `,

data(){

    return {
       review: {
        nameReviewer:'',
        selectedDate: null,
        selectedRating: '3',
        rate: 0,
       },
       
       

       titleType:'RateBySelect',
   
}}

,methods:{

    addReview(){

        this.$emit('reviewSaved',{...this.review})
 
},
rating(selectedRate){
    this.review.rate=selectedRate

  }

},

components:{
    RateBySelect,
    RateByTextbox,
  }
}

