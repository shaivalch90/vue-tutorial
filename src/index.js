const Vue = require('shaival');

//Registers Component
// require('./scripts/containerComponent');

let myApp = new Vue({
  el: '#vue-tutorial',
  data: {
    firstAppVar: 'Hello World',
    name: 'Bro',
    isCheckBoxSelected: false,
    selectedCheckBoxes: [],
    selectedRadio: 'orange',
    selectedDropdown: '',
    selectedMultiDropdown: [],
    link: 'google'
  },
  methods: {
    changeContent: function () {
      this.firstAppVar = this.firstAppVar === 'Hello World' ? 'This is pretty Cool' : 'Hello World';
    }
  }
})
