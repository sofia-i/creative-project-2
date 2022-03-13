<template>
  <div class="calc-page">
    <div class="page-title">
      <h2>Simple Calculator</h2>
    </div>
    <h4>Enter a simple calculation <em>([num] [operator] [num])</em></h4>
    <div class="machine">
      <div class="table">
        <div id='disp'> {{ displaytext }} </div>
        <div class="buttons">
          <button id='clear'      class="nonnumber" @click="clear()">     Clear </button>
          <button id='backspace'  class="nonnumber" @click="backspace()"> &larr; </button>
          <button id='divide'     class="nonnumber" @click="addChar('÷')"> &divide; </button>
          <button id='multiply'   class="nonnumber" @click="addChar('×')"> &times; </button>
          <button id='subtract'   class="nonnumber" @click="addChar('-')"> - </button>
          <button id='add'        class="nonnumber" @click="addChar('+')"> + </button>
          <button id='equals'     class="nonnumber" @click="runCalc()">    = </button>
          <button id='nine' class="row3 col1" @click="addChar(9)"> 9 </button>
          <button id='eight' class="row3 col2" @click="addChar(8)"> 8 </button>
          <button id='seven' class="row3 col3" @click="addChar(7)"> 7 </button>
          <button id='six' class="row4 col1" @click="addChar(6)"> 6 </button>
          <button id='five' class="row4 col2" @click="addChar(5)"> 5 </button>
          <button id='four' class="row4 col3" @click="addChar(4)"> 4 </button>
          <button id='three' class="row5 col1" @click="addChar(3)"> 3 </button>
          <button id='two' class="row5 col2" @click="addChar(2)"> 2 </button>
          <button id='one' class="row5 col3" @click="addChar(1)"> 1 </button>
          <button id='zero' @click="addChar(0)"> 0 </button>
        </div> <!--buttons-->
      </div> <!--table-->
    </div> <!--machine-->
    <h3><u>Last 5 Results:</u></h3>
    <div class="results">
      <div class="resultItem" v-for="(result, index) in resultArr" :key="index">
        <h3>{{result}}</h3>
      </div>
    </div>
    <p>**Note: answers with decimals will be simplified to the next lowest integer when using 
    it for another calculation**</p>
  </div>
</template>

<script>

export default {
  name: 'CalcView',
  props: {
    recents: Array
  },
  data() {
    return {
      displaytext: '',
      operator: ''
    }
  },
  computed: {
    resultArr () {
      return this.$root.$data.recents.filter((el, index) => (index >= this.$root.$data.recents.length - 5));
    }
  },
  methods: {
    addChar(c) {
      let disp = this.displaytext;
      if(isNaN(parseInt(disp))) {
        this.displaytext = "";
      }
      if(!((disp + "").indexOf(".") === -1)) {
        this.displaytext = parseInt(this.displaytext);
      }
      this.displaytext += c;
    },
    clear() {
      this.displaytext = '';
    },
    backspace() {
      this.displaytext = (this.displaytext + "").substr(0, this.displaytext.length - 1);
    },
    runCalc() {
      let eqtn = this.displaytext.toString();
      let firstNum = parseInt(eqtn);
      //if the first number isn't a number, call the reset protocol
      if(isNaN(firstNum)) {
        this.tryAgain();
        return;
      }
      //take the first num out of the eqtn string
      eqtn = eqtn.substr(firstNum.toString().length);
      if(eqtn.length === 0) {
        return;
      }

      //get the operator next from the string
      this.operator = eqtn.substring(0,1);
      eqtn = eqtn.substr(eqtn.search(/\d/));
      let secondNum = parseInt(eqtn);
      if(isNaN(secondNum)) {
        this.tryAgain();
        return;
      }

      let result = this.calculate(firstNum, secondNum);
      this.$root.$data.recents.push(result);

      this.displaytext = result;
    },
    tryAgain() {
      this.displaytext = "invalid input. clear and try again";
    },
    calculate(firstNum, secondNum) {
      if(this.operator == '+') {
        return firstNum + secondNum;
      }
      else if(this.operator == '-') {
        return firstNum - secondNum;
      }
      else if(this.operator == '×') {
        return firstNum * secondNum;
      }
      else if(this.operator == '÷') {
        if(secondNum === 0) {
          return "Error: Dividing by 0";
        }
        return firstNum / secondNum;
      }
    }
  },
  components: {
  },
}
</script>

<style scoped>
.table {
  background-color: #737373;
  padding: 10px;
  max-width: 800px;
  margin: 15px auto;
}
.table * {
  padding: 5px;
  font-size: 1.2em;
}
.buttons {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 5px;
  row-gap: 2px;
  background-color: #555555;
}
#disp {
  grid-row: 1;
  grid-column: 1/4;
  height: 35px;
  background: #fff;
  margin-bottom: 10px;
  color: #000;
  font-size: 1.3em;
}
.row3 {
  grid-row: 3;
}
.row4 {
  grid-row: 4;
}
.row5 {
  grid-row: 5;
}
.col1 {
  grid-column: 1;
}
.col2 {
  grid-column: 2;
}
.col3 {
  grid-column: 3;
}
#clear {
  grid-row: 2;
  grid-column: 1;
}
#backspace {
  grid-row: 2;
  grid-column: 3;
}
#divide {
  grid-row: 2;
  grid-column: 4;
}
#multiply {
  grid-row: 3;
  grid-column: 4;
}
#subtract {
  grid-row: 4;
  grid-column: 4;
}
#add {
  grid-row: 5;
  grid-column: 4;
}
#zero {
  grid-row: 6;
  grid-column: 2;
}
#equals {
  grid-row: 6;
  grid-column: 4/5;
}
.results {
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
}
.resultItem {
  margin: 3px;
}
.resultItem:last-of-type {
  font-weight: bold;
}
.nonnumber {
  font-weight: bold;
}
h3 {
  margin-bottom: 0;
  padding: 0;
}
</style>
