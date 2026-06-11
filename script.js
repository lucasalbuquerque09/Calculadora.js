// Variável para selecionar o elemento de exibição do resultado
let result = document.querySelector("#display");
// Função para adicionar valores ao display
function addDisplay(valor) {
    // Verificar se o valor é um ponto decimal e se o display já contém um ponto
    if(result.value === "0" && valor === ".") {
        
        return result.value += valor;
    
    } else if(result.value === "" && valor === ".") {
       
        return result.value = "0.";
    
    } else if(result.value === "ERRO" || result.value === "0") {
        
        return result.value = valor;
    };
    // Adicionar o valor ao display
    return result.value += valor;
};

// Função para limpar o display
function cleanResult() {
    
    return result.value = "";

};

// Função para deletar o último valor do display
function deleteLastValue() {
   
    return result.value = result.value.slice(0, -1);

};

// Função para calcular o resultado da expressão no display
function calculateResult() {
    // Verificar se o display está vazio e exibir "ERRO" se estiver
    result.value === "" ? result.value = "ERRO" : result.value = result.value;
    // Tentar avaliar a expressão usando eval e exibir o resultado, ou exibir "ERRO" se houver um erro na avaliação
    try{
       
        return result.value = eval(result.value);
    
    } catch(erro){
        
        return result.value = "ERRO";
    }
};