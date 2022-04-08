function adicionar() {

    if (texto == 0 || valor == 0 || quant == 0) {

        windows.alert("Opaa, verifique os dados e tente novamente.");

    } else {

        // Os 3 inputs;
        let texto = document.getElementById("texto").value;
        let valor = document.getElementById("valor").value;
        let quant = document.getElementById("quant").value;
        let somar = valor * quant;

        //Tabela, linha e incersão.
        let tb = document.getElementById("tabl");
        var qtdlinhas = tb.rows.length;
        let linhas = tb.insertRow(qtdlinhas);

        //posição de cada linha. 
        let cellposi = linhas.insertCell(0);
        let celltext = linhas.insertCell(1);
        let cellvalor = linhas.insertCell(2);
        let cellquant = linhas.insertCell(3);
        let cellsoma = linhas.insertCell(4);

        //modificação em cada linha.
        cellposi.innerHTML = qtdlinhas + "ª";
        celltext.innerHTML = texto
        cellvalor.innerHTML = valor
        cellquant.innerHTML = quant
        cellsoma.innerHTML = somar



        //Limpeza altomatizada;
        document.getElementById("texto").value = null;
        document.getElementById("valor").value = null;
        document.getElementById("quant").value = null;

    }

}



function limpar() {


    let text = document.getElementById("texto").value;
    let valorc = document.getElementById("valor").value;
    let quant = document.getElementById("quant").value;


    document.getElementById("texto").value = null;
    document.getElementById("valor").value = null;
    document.getElementById("quant").value = null;



}