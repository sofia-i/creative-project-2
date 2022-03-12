<template>
  <div class="info">
    <div class="page-title">
        <h1>Number Information</h1>
        <p><em>Find out more about your numbers</em></p>
    </div>
    <div class="recents">
        <button v-for="(recent, index) in selectedRecents" :key="index" @click="showInfo(recent)"> {{recent}} </button>
        <h3>Recently Calculated Numbers:</h3>
    </div>
    <p v-if="selectedRecents.length === 0"> None selected yet. Do some calculations in the Calculator
    tab to see them appear here!</p>
    <div class="resultInfo" v-if="show">
        <div class="col1">
            <h1>{{selectedInfo[0].id}}</h1>
        </div>
        <div class="col2">
            <h3> {{selectedInfo[0].name}} </h3>
            <p> Factors: {{selectedInfo[0].factors}} </p>
            <p v-if="selectedInfo[0].prime"> This number is prime. </p>
            <p v-else>This number is composite. </p>
        </div>
    </div>
    <div class="badInput" v-if="badInput">
        <p> We don't have information on that number. Select an integer between 1 and 100.</p>
    </div>
  </div>
</template>


<script>
export default {
    name: 'NumInfoView',
    data() {
        return {
            selectedNum: -1,
            show: false,
            badInput: false
        }
    },
    computed: {
        selectedRecents() {
            let data = this.$root.$data;
            return data.recents.filter((el, index) => (index >= this.$root.$data.recents.length - 5));
        },
        selectedInfo() {
            let data = this.$root.$data;
            return data.numbers.filter((el, index) => (index + 1 === this.selectedNum));
        }
    },
    methods: {
        showInfo(num) {
            this.badInput = false;
            this.show = false;
            if(num > 0 && num <= 100) {
                this.selectedNum = num;
                this.show = true;
            }
            else {
                this.badInput = true;
            }
        }
    }
}
</script>

<style scoped>

h1, h3, p {
    margin: 8px;
}

.recents {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
}

.recents button {
    padding: 5px 10px;
    margin: 7px;
}

.resultInfo {
    background-color: #B6D6E3;
    max-width: 40%;
    margin: 0 auto;
    border-radius: 20px;
    padding: 10px;
}
</style>