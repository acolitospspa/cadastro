
//---------------------------------Criando Ações para os botões ENTER e TAB --------------------------------------

var listaInput = document.querySelectorAll('.percorrer');
const quantidadeInput = listaInput.length;

for (let contadorIndices = 0; contadorIndices < quantidadeInput; contadorIndices++) {
    
    var indiceAtual = contadorIndices;
    var ultimoIndice = quantidadeInput - 1;
    
    
    if (contadorIndices < ultimoIndice){
        var proximoIndice = indiceAtual + 1;
    }
    else {

        var proximoIndice = ultimoIndice;
        
    };

//-------------------------------------------------Resultados Obtidos----------------------------------------------------

    let idCampoAtual = listaInput[indiceAtual].id;
    let idProximoCampo = listaInput[proximoIndice].id;

//-------------------------------------------------Ações do Teclado----------------------------------------------------


    listaInput[contadorIndices].addEventListener('keydown', function(event) {
        
        var teclaPressionada = event.key;
        var tipoCampoAtual = document.getElementById(idCampoAtual).type;

       if (teclaPressionada == 'Enter' ){
    
        if (tipoCampoAtual == 'radio'){
            selecionarItem(event, idCampoAtual);
        }
        else {
            moverFoco(event, idProximoCampo);
        };

       };


    });
};

//--------------------------------Funções do Teclado-------------------------------------------

function moverFoco(event, proximoCampoId) { 
   
    
        event.preventDefault();
        document.getElementById(proximoCampoId).focus();
    

};

function selecionarItem (event, campoId) {
   
        event.preventDefault();
        document.getElementById(campoId).checked = true;
    

};

//-------------------------------Funções de Regra---------------------------------------------

function validarEmail(email) {
    // Expressão regular para validar e-mails
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}



function limpaForm() {
    var formulario = document.getElementById("cadastro-form")
            // Obtém todos os elementos do formulário
    var elementos = formulario.elements;

    // Itera sobre os elementos e redefine seus valores
    for (var i = 0; i < elementos.length; i++) {
        // Verifica se o elemento é um campo de formulário (input, textarea, select, etc.)
        if (elementos[i].type !== 'submit') {
            elementos[i].value = '';
        }
    }
};


function abrirOver() {			  
      document.getElementById('overlay').style.display = 'block';
      document.querySelector('body').style = "overflow: hidden"

    }

function fecharOver() {
  document.getElementById('overlay').style.display = 'none';
  document.querySelector('body').style.removeProperty('overflow')

}



function mostrarCarregamento(){
    
    var itemAbrir = document.getElementById("loading");
    var buttonSubmit = document.getElementById("submit-button");
    
    if(itemAbrir.style.display === "none" || itemAbrir.style.display == "" ){
        itemAbrir.style.display = "block";
        buttonSubmit.disabled;
        abrirOver();
        }
        else{
            itemAbrir.style.display = "block";
        }
    };
    
    function fechaCarregamento(){
    
    var itemOcultar = document.getElementById("loading")
    var buttonSubmit = document.getElementById("submit-button");
    
    
    if(itemOcultar.style.display != "none"){
        itemOcultar.style.display = "none";
        buttonSubmit.removeAttribute.disabled;
        fecharOver();
        }
        else{
            itemOcultar.style.display = "none"
        }
    };
    
function abrirJanelaSucesso(){
    
    var itemAbrir = document.getElementById("sucesso");
    var buttonSubmit = document.getElementById("submit-button");

    
    if(itemAbrir.style.display != "none"){
        itemAbrir.style.display = "block";
        buttonSubmit.disabled;
        abrirOver();
        }
        else{
            itemAbrir.style.display = "block";
        }
    };
    
    function fechaJanelaSucesso(){
    
    var itemOcultar = document.getElementById("sucesso");
    var buttonSubmit = document.getElementById("submit-button");

    
    if(itemOcultar.style.display === "block" || itemOcultar.style.display == ""){
        itemOcultar.style.display = "none";
        buttonSubmit.removeAttribute.disabled;
        fecharOver();
        }
        else{
            itemOcultar.style.display = "none"
        }
    };

function abrirJanelaIdade(){
    
    var itemAbrir = document.getElementById("mensagemIdade");
    var buttonSubmit = document.getElementById("submit-button");
    
    if(itemAbrir.style.display === "none" || itemAbrir.style.display == "" ){
        itemAbrir.style.display = "block";
        buttonSubmit.disabled;
        abrirOver();
        }
        else{
            itemAbrir.style.display = "block";
        }
    };


function fechaJanelaIdade(){
    
    var itemOcultar = document.getElementById("mensagemIdade")
    var buttonSubmit = document.getElementById("submit-button");
    
    if(itemOcultar.style.display === "block" || itemOcultar.style.display == ""){
        itemOcultar.style.display = "none";
        buttonSubmit.removeAttribute.disabled;
        fecharOver();
        }
        else{
            itemOcultar.style.display = "none"
        }
    };
    
    function abrirJanelaCat(){
    
    var itemAbrir = document.getElementById("caixa-mensagem-cat")
    var buttonSubmit = document.getElementById("submit-button");

    
    if(itemAbrir.style.display === "none" || itemAbrir.style.display == "" ){
        itemAbrir.style.display = "block";
        buttonSubmit.disabled;
        abrirOver();
        }
        else{
            itemAbrir.style.display = "block";
        }
    };


function fecharJanelaCat(){
    
    var itemOcultar = document.getElementById("caixa-mensagem-cat");
    var buttonSubmit = document.getElementById("submit-button");
    
    if(itemOcultar.style.display === "block" || itemOcultar.style.display == ""){
        itemOcultar.style.display = "none";
        buttonSubmit.removeAttribute.disabled;
        fecharOver();
        }
        else{
            itemOcultar.style.display = "none"
        }
    };
    

    function abrirJanelaNull(){
    
    var itemAbrir = document.getElementById("caixa-mensagem-null");
    var buttonSubmit = document.getElementById("submit-button");
    
    if(itemAbrir.style.display === "none" || itemAbrir.style.display == "" ){
        itemAbrir.style.display = "block";
        buttonSubmit.disabled;
        abrirOver();				}
        else{
            itemAbrir.style.display = "block";
        }
    };


function fecharJanelaNull(){
    
    var itemOcultar = document.getElementById("caixa-mensagem-null");
    var buttonSubmit = document.getElementById("submit-button");
    
    if(itemOcultar.style.display === "block" || itemOcultar.style.display == ""){
itemOcultar.style.display = "none";
        buttonSubmit.removeAttribute.disabled;
        fecharOver();				}
        else{
            itemOcultar.style.display = "none"
        }
    };
    
function abrirJanelaCpf(){
    
    var itemAbrir = document.getElementById("caixaMensagemCpf");
    var buttonSubmit = document.getElementById("submit-button");
    
    if((itemAbrir.style.display === "none" || itemAbrir.style.display == "")){
        itemAbrir.style.display = "block";
        buttonSubmit.disabled;
        abrirOver()}
        else{
            itemAbrir.style.display = "block";
        }
    };

function fechaJanelaCpf(){
        
        var itemOcultar = document.getElementById("caixaMensagemCpf");
        var buttonSubmit = document.getElementById("submit-button");
        
        if(itemOcultar.style.display === "block" || itemOcultar.style.display == ""){
            itemOcultar.style.display = "none";
            buttonSubmit.removeAttribute.disabled;
            fecharOver();
            }
            else{
                itemOcultar.style.display = "none"
            }
        };
        
// Selecione os elementos de entrada de contato com a classe "cpf-input"
const cpfInput= document.querySelectorAll(".cpf-input");

// Inicialize o "IMask" com a formatação desejada
cpfInput.forEach(function (input) {
    IMask(input, {
        mask: [
            {
                mask: '000.000.000-00' // Máscara para cpf
            }
        ]
    });
});


const crismadoRadio = document.querySelector("#crismado-sim");
const naoCrismadoRadio = document.querySelector("#crismado-nao");
const catequeseGroup = document.querySelector("#catequese-group");

crismadoRadio.addEventListener("change", function () {
    if (this.checked) {
        catequeseGroup.style.display = "none";
    }
});

naoCrismadoRadio.addEventListener("change", function () {
    if (this.checked) {
        catequeseGroup.style.display = "block";
    }
});

 const dataNascimentoInput = document.querySelector("#dataNascimento");
const dateError = document.querySelector("#date-error");

dataNascimentoInput.addEventListener("change", function () {
    const dataNascimento = new Date(this.value);
    const dataAtual = new Date();

    if (dataNascimento > dataAtual) {
        dateError.style.display = "block";
    } else {
        dateError.style.display = "none";
    }
});
// Selecione os elementos de entrada de data de nascimento, idade e os elementos de aviso
const dataNascimentoInput1 = document.querySelector("#dataNascimento");
const idadeInput = document.querySelector("#idade");
const cadastroForm = document.querySelector("#cadastro-form");
const dateWarning = document.querySelector("#date-warning");

// Adicione um ouvinte de evento à entrada de data de nascimento para calcular a idade e validar a data
dataNascimentoInput1.addEventListener("change", function () {
const dataNascimento = new Date(this.value);
const dataAtual = new Date();
const anoLimite = new Date("1900-01-01"); // Data limite a partir de 1900

if (this.value === "" || dataNascimento < anoLimite) {
// Se o campo de data de nascimento estiver vazio ou for anterior a 1900, limpe o campo de idade
idadeInput.value = "";
dateWarning.style.display = "block"; // Exibe o aviso
} else {
dateWarning.style.display = "none"; // Esconde o aviso
// Calcule a idade
const diffEmAnos = dataAtual.getFullYear() - dataNascimento.getFullYear();

// Defina o valor do campo de idade com a idade calculada
idadeInput.value = diffEmAnos;
}
});

// Adicione um ouvinte de evento ao campo de data de nascimento para verificar se ele foi apagado
dataNascimentoInput1.addEventListener("input", function () {
if (this.value === "") {
// Se o campo de data de nascimento for apagado, limpe o campo de idade e esconda o aviso
idadeInput.value = "";
dateWarning.style.display = "none";
}
});

// Adicione um ouvinte de evento ao formulário para impedir a submissão se a data for anterior a 1900
cadastroForm.addEventListener("submit", function (event) {
const dataNascimento = new Date(dataNascimentoInput1.value);
const anoLimite = new Date("1900-01-01"); // Data limite a partir de 1900

if (dataNascimento < anoLimite) {
event.preventDefault(); // Impede a submissão do formulário
alert("A data de nascimento não pode ser anterior a 1900.");
}
});

// Selecione os elementos de entrada de contato com a classe "phone-input"
const phoneInputs = document.querySelectorAll(".phone-input");

// Inicialize o "IMask" com a formatação desejada
phoneInputs.forEach(function (input) {
IMask(input, {
mask: [
    {
        mask: '(00) 0000-0000' // Máscara para telefone
    },
    {
        mask: '(00) 00000-0000' // Máscara para celular
    }
]
});
});


// Evento para enviar os dados do formulário
document.getElementById("submit-button").addEventListener("click", function (event) {
event.preventDefault();

mostrarCarregamento();
var nome = document.getElementById("nome").value;
var dataNascimento = document.getElementById("dataNascimento").value;
var idade = document.getElementById("idade").value;
var celular = document.getElementById("celular").value;
var nomePai = document.getElementById("nomePai").value;
var nomeMae = document.getElementById("nomeMae").value;
var endereco = document.getElementById("endereco").value;
var capela = document.getElementById("capela").value;
var email = document.getElementById("email").value;
var crismadoSim = document.getElementById("crismado-sim").checked;
var crismadoNao = document.getElementById("crismado-nao").checked;
var catequizadoSim = document.getElementById("catequese-sim").checked;
var catequizadoNao = document.getElementById("catequese-nao").checked;
var catequizado, crismado;
var cpf = document.getElementById("cpf-input").value;
var cpfFormatado= cpf.replace(/\D/g, "");
if (crismadoSim) {
    catequizado = "Sim";
    crismado = "Sim"; }
else if (catequizadoSim && crismadoNao){
    catequizado = "Sim";
    crismado = "Não"; 
}
else {
    catequizado = "Não";
    crismado = "Não"; 
};
var emailValido =  validarEmail(email);




var urlCpf = 'https://script.google.com/macros/s/AKfycbxANxC9Be5SjX4K4PqvcMhm1PMkGG9zsk9mFkjz-awm8ve7q_mvHdvclJNUJh_35L8K/exec?cpf='+cpfFormatado

fetch(urlCpf)
.then(response => {
if (!response.ok) {
throw new Error('Erro na requisição');
}
return response.json(); // Converte a resposta para JSON
})
.then(data => {
// Use os dados obtidos da requisição
var cpfEncontrado = data.cpfExiste;

if (!nome || !dataNascimento || !idade || !celular || !nomePai || !nomeMae || !endereco || (!crismadoSim && !crismadoNao) || !cpf || !email) {
    fechaCarregamento();
    abrirJanelaNull();
} else if (idade < 14) {
    fechaCarregamento();
    abrirJanelaIdade();
} 
else if (crismado == "Não" && catequizado == "Não"){
    fechaCarregamento();
    abrirJanelaCat();
}
else if (cpfEncontrado == 1){
    fechaCarregamento();
    abrirJanelaCpf();
}
else if (emailValido == false) {
    fechaCarregamento();
    document.getElementById('email-error').style.display = "block"

}
else {

var urlCadastro = 'https://script.google.com/macros/s/AKfycbxANxC9Be5SjX4K4PqvcMhm1PMkGG9zsk9mFkjz-awm8ve7q_mvHdvclJNUJh_35L8K/exec'; // Verifique e substitua pela URL correta

fetch(urlCadastro, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
        'Content-Type': 'application/json'
    },
   body: JSON.stringify({ 
                            Nome: nome, 
                            DataNascimento: dataNascimento, 
                            Idade: idade, 
                            Celular: celular, 
                            NomePai: nomePai, 
                            NomeMae: nomeMae, 
                            Endereco: endereco, 
                            Capela: capela, 
                            Catequizado: catequizado, 
                            Crismado: crismado,
                            Cpf: cpfFormatado,
                            Emailpessoal: email,
                            Funcexecutar: "cadastroCandidato"
                        })

});


        /*limpador de formulário*/
        limpaForm();
        fechaCarregamento();
        abrirOver();
        abrirJanelaSucesso();
        document.getElementById('email-error').style.display = "none"
    }
});
    


});