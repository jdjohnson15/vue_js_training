

const app = Vue.createApp({
    data(){
        return {
            courseGoalA: 'do all the things',
            courseGoalB: 'Master Vue and build cool things',
            enteredValue: '',
            vueLink : 'https://openai.com/blog/chatgpt/'
        };
    },

    methods: {
        // addGoal(){
        //     this.goals.push(this.enteredValue);
        //     this.enteredValue = '';
        // }
        outputGoal(){
            const randomNumber = Math.random();
            if (randomNumber < 0.5){
                return this.courseGoalA
            }else{
                return this.courseGoalB

            } 
        }
    }

})

app.mount('#user-goal')