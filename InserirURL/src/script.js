//Adicionando filme URL
function adicionarFilme() {
  //Pegando valor escrito na caixa de texto
  var filmeFavorito = document.getElementById("filme").value;
  
  //Imprimindo a URL da imagem inserido na caixa de texto
  var elementoListaFilme = document.getElementById("listaFilmes").innerHTML += "<img src=" + filmeFavorito + ">";
  
  //Reseta caixa de texto após adicionar filme
  document.getElementById("filme").value = "";
}

//Adicionando filme URL jpg/png. Se não, informa caixa de alerta
function adicionarFilme() {
  //Pegando valor escrito na caixa de texto
  var filmeFavorito = document.getElementById("filme").value;
  
  //Imprimindo a URL da imagem inserido na caixa de texto
  if(filmeFavorito.endsWith("jpg") || filmeFavorito.endsWith("jpeg") || filmeFavorito.endsWith(".png")) {
    var elementoListaFilme = document.getElementById("listaFilmes").innerHTML += "<img src=" + filmeFavorito + ">";
    document.getElementById("filme").value = "";
  } else {
    alert("URL inválido. Informe um URL de imagem jpg.")
  }
}

//Adicionando filme URL jpg. Se não, informa caixa de alerta
//Adicionando trailer do filme URL youtube ao clicar. Se não, informa caixa de alerta
//Falta parte do trailer ao clicar no filme...
function adicionarFilme() {

  //Pegando valor inserido na caixa de texto
  var filmeFavorito = document.getElementById("filme").value;
  var trailerFilme = document.getElementById("trailer").value;
  if(filmeFavorito.endsWith("jpg") || filmeFavorito.endsWith("jpeg") || filmeFavorito.endsWith(".png")) {
    var elementoListaFilme = document.getElementById("listaFilmes").innerHTML += "<img src=" + filmeFavorito + ">";
    document.getElementById("filme").value = "";
  } else {
    alert("URL inválido. Informe um URL de imagem jpg.");
  }
  
  if(trailerFilme.startsWith("https://www.youtube.com")){
    
    document.getElementById("trailer").value = "";
  }
}