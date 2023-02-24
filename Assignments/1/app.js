Vue.createApp({
    data(){
        return {
            f_names: ["James", "Carl", "Matt", "George"],
            s_names: ["Johnson", "Smith", "Taylor", "McFly"],
            myName: "",
            age: -1,
            img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXKqgv2_47vUc870sjRCQQrQ5he8wlTicmcQ&usqp=CAU"
        }
    },

    methods:{
        name(){
            var firstName = this.f_names[Math.floor(Math.random()*this.f_names.length-1)];
            var sirName = this.s_names[Math.floor(Math.random()*this.s_names.length-1)];
            this.myName = firstName+" "+sirName;
            return this.myName
        },

        getAge(){
            this.age = Math.random()*25 + 10;
            return this.age;
        },
        ageOffset(offset){
            return this.age+offset;
        },

        randomNumber(){
            return Math.random();
        }
    }
}).mount('#assignment')