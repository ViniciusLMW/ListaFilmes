var nomesFilmes = ['Up: Altas Aventuras', 'Minions', 'Meu Malvado Favorito', 'Rambo', 'Matrix'];
var listaFilmes = ['https://br.web.img3.acsta.net/medias/nmedia/18/92/03/73/20176438.jpg'
  , 'https://www.cinea.com.br/storage/filmes/152711202008315f4d40ff02ca4.jpg'
  , 'https://br.web.img3.acsta.net/medias/nmedia/18/87/89/83/20028679.jpg'
  , 'https://br.web.img3.acsta.net/pictures/19/08/12/22/46/1191330.jpg'
  , 'https://br.web.img2.acsta.net/medias/nmedia/18/91/08/82/20128877.jpg'];

//Imprimindo listaFilmes
for(var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}

//Imprimindo listaFilmes se possuir jpg ou jpeg no final da URL
for(var i = 0; i < listaFilmes.length; i++) {
  if(listaFilmes[i].endsWith("jpg") || listaFilmes[i].endsWith("jpeg")) {
    document.write("<img src=" + listaFilmes[i] + ">");
  } else {
    alert("A URL " + (i+1) + " não é uma jpg");
  }
}

//Imprimindo listaFilmes com seus respectivos nomes
for(var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
  document.write("<h2>" + nomesFilmes[i] + "</h2>");
}

//Imprimindo listaFilmes com while
var i = 0;
while(i < listaFilmes.length) {
  document.write("<img src=" + listaFilmes[i] + ">");
  i++;
}