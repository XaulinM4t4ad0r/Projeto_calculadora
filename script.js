class Calculator {
    constructor() {
        // Aqui é a propriedade que recebe os valores digitados pelo usuarios
        this.displayValue = "";
    }
    // *Este metodo adiciona valores a propriedade displayValue
    // ?E em seguida chama o metodo updateDisplay para atualizar o (input)

    appendToDisplay(value) {
        this.displayValue += value;
        this.updatedDisplay();
    }
    // !Este metodo atualiza o (input)
    // todo/Com os valores que o usuario digitou

    updatedDisplay() {
        document.getElementById("displayContent").value = this.displayValue;
    }
    // !Este metodo limpa os valores do (input)
    clearDisplay() {
        this.displayValue = "";
        this.updatedDisplay();
    }

    calculate() {
        try {
            const result = eval(this.displayValue);
            this.displayValue = result
            this.updatedDisplay();
        } catch (error) {
            this.displayValue = "Error";
            this.updatedDisplay();
        }
    }
}
// todo Instanciando o objeto

const calc = new Calculator();