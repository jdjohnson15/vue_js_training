const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: ''
    };
  },

  methods: {
    add(v){
      this.counter += v;
    },

    rename(e){
      this.name = e.target.value;
    },

    submitForm(){
      alert('Submitted!');
    },
     confirmInput(){
      this.confirmedName = this.name;
     },

     resetInput(){
      this.name = "";
     }
  }
});

app.mount('#events');
