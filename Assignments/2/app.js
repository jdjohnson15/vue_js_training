Vue.createApp({
    data(){
        return{
            output:"",
            confirmOutput:""
        }
    },

    methods:{
        alert(message){
            alert(message);
        },

        registerOutput(event){
            this.output = event.target.value;
        },

        registerConfirmOutput(event){
            this.confirmOutput = event.target.value;
        }
    }
}).mount('#assignment');