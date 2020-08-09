
function mostrar() {
    document.getElementById('orcamento').style.display = "block";
}
function mostraResult() {
    document.getElementById('result').style.display = "block";
}

function pegaValor() {

    mostraResult();

    m1 = document.getElementById("inputMedida1").value;
    m2 = document.getElementById("inputMedida2").value;
    r = (m1 * m2) * 55;
    valor = r.toFixed(2);

    nome = document.getElementById("inputName").value;
    email = document.getElementById("inputEmail4").value;
    tel = document.getElementById("inputPhone").value;
    acab = document.getElementById("acab").value;
    material = document.getElementById("material").value;

    document.getElementById("ficha").innerHTML =
        "<p><b>Cliente: </b>" + nome + "</p>" + "<p><b>E-mail: </b>" + email + "</p>" +
        "<p><b>Telefone: </b>" + tel + "</p>" + "<p><b>Acabamento: </b>" + acab + "</p>" +
        "<p><b>Material: </b>" + material + "</p>" + "<p><b>Valor R$: </b>" + valor + "</p>";
}
