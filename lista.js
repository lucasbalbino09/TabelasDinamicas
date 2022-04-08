function adicionar() {


    // Os 3 inputs;
    let text = document.getElementById("texto").value;
    let valorc = document.getElementById("valor").value;
    let quant = document.getElementById("quant").value;

    // Os 3 resultados;
    let restxt = document.getElementById("resitem").innerHTML;
    let resvalor = document.getElementById("resvalue").innerHTML;
    let resquant = document.getElementById("resqaunt").innerHTML;



    if (text == 0 || valorc == 0 || quant == 0) {

        window.alert("Erro, verifique os dados e tente novamente..");

    } else {

        this.arrayProdutos = [];
        let tbody = document.getElementById("tbl");

        for (let i = 0; i < this.arrayProdutos; i++) {



            //logica;
            document.getElementById("resitem").innerHTML = text;
            document.getElementById("resvalue").innerHTML = valorc;
            document.getElementById("resqaunt").innerHTML = quant;




            //Limpeza altomatizada;
            document.getElementById("texto").value = null;
            document.getElementById("valor").value = null;
            document.getElementById("quant").value = null;
        }



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