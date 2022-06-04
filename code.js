const inputFileButton = document.getElementById("inputfilebutton");
inputfilebutton.addEventListener("click", clickFileButton);

const inputNumberButton = document.getElementById("inputfilenumber");
inputfilenumber.addEventListener("click", clickNumberButton);

function clickFileButton(){
    arquivo = document.getElementById("inputfile");

    var fr=new FileReader();
    try{
        fr.readAsText(arquivo.files[0]);
        fr.onload=function(){
            var info = fr.result;
            document.getElementById('output').textContent=fr.result;
    }
}
    catch{
        document.getElementById('output').textContent="Arquivo não localizado!";
    }
    finally{
        alert("Obrigado pela visita!");
    }
    
}

function clickNumberButton (){

    number = document.getElementById("inputnumber").value

    try {
        if (number == '') throw 'informe um valor';
        else if (number<5 || number>10) throw 'informe um valor maior que 5 e menor que 10' 
        document.getElementById("outputnumber").innerHTML = '';

    }
    catch (erro){
        // alert("Erro: " +erro)
        document.getElementById("outputnumber").innerHTML = "Erro: " +erro;
    }
    finally{
        alert("O número escolhido foi " +number)
    }
}

