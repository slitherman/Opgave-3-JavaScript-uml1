const app = Vue.createApp({
    data() {
      return {
        inputMessage: "",
        outputMessage: "",
      };
    },
    methods: {
      wordLowercase() {
        return this.inputMessage.toLowerCase();
      },
      wordUppercase() {
        return this.inputMessage.toUpperCase();
      },
      capitalizedFirstLetter() {
        return this.inputMessage.charAt(0).toUpperCase() + this.inputMessage.slice(1);
      },
      capitalizeLastLetter() {
        return this.inputMessage.slice(0, -1) + this.inputMessage.slice(-1).toUpperCase();
      },
      reverseWord() {
        let splitString = this.inputMessage.split("");
        let reverseString = splitString.reverse();
        return reverseString.join("");
      },
      handleSubmit() {
        if (this.inputMessage.length <= 0) {
          alert("Please write something");
        }
        this.outputMessage =  this.wordLowercase();
        this.outputMessage += " " + this.wordUppercase();
        this.outputMessage += " " + this.capitalizedFirstLetter();
        this.outputMessage += " " + this.capitalizeLastLetter();
        this.outputMessage += " " + this.reverseWord();
        this.randomizeString();
      },
      randomizeString() {

        //creates an array that contains all the chars in the input
        let messageArr = this.inputMessage.split("");
        //an empty array meant to store the randomized characters

        let randomArr = [];

        //while loop with validation that continue as long as messagee array is populated
        while (messageArr.length > 0 && randomArr.length < messageArr.length) {
            //generating a random index usiong the random() method, and then i round the number down using the Floor() method
          let randomIndex = Math.floor(Math.random() * messageArr.length);
          //the char at the random index gets removed from the messagearray because of the splice method and gets stored in the randomchar 


          let randomChar = messageArr.splice(randomIndex, 1)[0];

          //the char gets appended into the randomarray
          randomArr.push(randomChar);
        }
        this.outputMessage += " " + randomArr.join("");
        
      },
    },
  });
  