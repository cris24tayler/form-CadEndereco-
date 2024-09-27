'use strict' //ativa o modo restrito
//esse modo faz com que o java script opere de forma mais segura e rigorosa, ajudando a evitar erros comums de programação /* consumo de api - https://viacep.com.br/*/

//função para limpar campos preenchidos
const limparformularios = () => {
    document.getElementById('logradouro').value = endereco.logradouro= '';
    document.getElementById('bairro').value = endereco.bairro= '';
    document.getElementById('localidade').value = endereco.localidade= '';
    document.getElementById('uf').value =endereco.uf= '';
}
//verifica se o cep é valido
const enumero = (numero)=> /^[0-9]+$/.test(numero);
const cepvalido = (cep) => cep.length == 8 && enumero(cep)


const preencherformulario = (endereço) => {
    document.getElementById('logradouro').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('localidade').value = endereco.localidade;
    document.getElementById('uf').value = endereco.uf;
}
//função para consumo de API viaCEP
const pesquisarcep = async() => {
    limparformularios();
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;
    if(cepvalido(cep.value)){
        const dados = await fetch(url);
        const addres = await dados.jason();

        if(addres.hasOwnProperty('erro')){
            alert('CEP não encontrado')
        }else{
            preencherformulario(addres);
        }
    }else{
        alert('CEP incorreto');
    }
}
//chama o escutador para disparar ação de preenchimento
document.getElementById('cep').addEventListener('focusout', pesquisarcep);