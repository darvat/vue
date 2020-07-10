// needs <div id="app"></div>


new Vue({
  el: '#app',
  data: {
    textInput: ''
  },
  computed: {
    bummer() { return jdenticon.toSvg(this.textInput, 200) },
    reverso() { return this.textInput.split('').reverse().join('') }
  },
  methods: {
    onInput(e) {
      this.textInput = e.target.value
    }
  }, 
  template: `
  <div>
    <div>
      Input: <input @input="onInput" :value="textInput"/>
    </div>
    <div>
      Output1: <span v-html="bummer"></span>
    </div>
    <div>
      Output2: <span>{{ reverso }}</span>
    </div>
  </div>`
})
