import { defineComponent, ref } from 'vue'

export default defineComponent({
  compatConfig: { MODE: 3, COMPONENT_V_MODEL: false },
  name: 'Calculadoratwo',

  setup() {
    // const textLabel: Ref<string> = ref('Hola mundo');

    
    const ModalCalc = ref<any>(null);
    const display = ref('0')
    const currentInput = '0'
    const previousInput = null
    const operator = null
    const buttons = [
      { label: '1', value: '1' },
      { label: '2', value: '2' },
      { label: '3', value: '3' },
      { label: '+', value: '+' },
      { label: '4', value: '4' },
      { label: '5', value: '5' },
      { label: '6', value: '6' },
      { label: '-', value: '-' },
      { label: '7', value: '7' },
      { label: '8', value: '8' },
      { label: '9', value: '9' },
      { label: '*', value: '*' },
      { label: '0', value: '0' },
      { label: '.', value: '.' },
      { label: '%', value: '%' },
      { label: '/', value: '/' },
      { label: '√', value: '√' },
      { label: '=', value: '=' },
      { label: 'C', value: 'C' },
    ]

    return {
      display,
      currentInput,
      previousInput,
      operator,
      buttons,
      ModalCalc,
    }
  },
  methods: {
    OpenModalCalc(): void {
      this.ModalCalc.show();
    },

    handleButtonClick(button) {
      const { value } = button

      if (this.isNumber(value)) {
        this.handleNumberInput(value)
      } else if (this.isOperator(value)) {
        this.handleOperatorInput(value)
      } else if (value === '√') {
        this.handleRoot()
      } else if (value === '=') {
        this.handleEqual()
      } else if (value === 'C') {
        this.handleClear()
      }
    },
    isNumber(input) {
      return /^\d+(\.\d+)?$/.test(input)
    },
    isOperator(input) {
      return ['+', '-', '*', '/', '%'].includes(input)
    },
    handleNumberInput(number) {
      if (this.currentInput === '0') {
        this.currentInput = number
      } else {
        this.currentInput += number
      }
      this.display = this.currentInput
    },
    handleOperatorInput(operator) {
      if (this.previousInput === null) {
        this.previousInput = this.currentInput
      } else {
        this.handleEqual()
      }
      this.operator = operator
      this.currentInput = '0'
    },
    handleRoot() {
      const number = parseFloat(this.currentInput)
      if (!isNaN(number)) {
        this.currentInput = Math.sqrt(number).toString()
        this.display = this.currentInput
      }
    },
    handleEqual() {
      const prevNumber = parseFloat(this.previousInput)
      const currentNumber = parseFloat(this.currentInput)

      if (!isNaN(prevNumber) && !isNaN(currentNumber) && this.operator) {
        switch (this.operator) {
          case '+':
            this.currentInput = (prevNumber + currentNumber).toString()
            break
          case '-':
            this.currentInput = (prevNumber - currentNumber).toString()
            break
          case '*':
            this.currentInput = (prevNumber * currentNumber).toString()
            break
          case '/':
            this.currentInput = (prevNumber / currentNumber).toString()
            break
          case '%':
            this.currentInput = ((prevNumber / 100) * currentNumber).toString()
            break
        }
        this.display = this.currentInput
        this.previousInput = null
        this.operator = null
      }
    },
    handleClear() {
      this.display = '0'
      this.currentInput = '0'
      this.previousInput = null
      this.operator = null
    },
  },
})
