function calcularEconomia() {
    // Captura o valor digitado pelo usuário no HTML
    const hectaresInput = document.getElementById('hectares').value;
    const hectares = parseFloat(hectaresInput);

    // Validação simples para garantir que o número é válido
    if (isNaN(hectares) || hectares <= 0) {
        alert("Por favor, insira um número válido de hectares.");
        return;
    }

    // Base de cálculo fictícia/educacional:
    // Supondo que a irrigação inteligente economiza cerca de 3.000 litros de água por hectare/dia
    const economiaPorHectare = 3000; 
    const totalEconomizado = hectares * economiaPorHectare;

    // Captura o elemento onde o resultado será exibido
    const resultadoDiv = document.getElementById('resultado');

    // Altera o conteúdo e a classe CSS para exibir na tela de forma bonita
    resultadoDiv.className = "resultado-visivel";
    resultadoDiv.innerHTML = `
        <h3>📊 Resultado da Simulação:</h3>
        <p>Ao adotar sistemas de irrigação inteligente em <strong>${hectares} hectares</strong>, 
        estima-se uma economia de até <strong>${totalEconomizado.toLocaleString('pt-BR')} litros</strong> de água por dia!</p>
        <p><em>Isso garante a produção forte hoje e protege o lençol freático para o amanhã.</em></p>
    `;
}