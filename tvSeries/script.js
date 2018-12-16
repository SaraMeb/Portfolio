document.querySelector('button').addEventListener('click', function() {
  search();
})
document.querySelector('body').addEventListener('keydown', function(el){
  if(el.key === 'Enter'){
  search();
  }
})
document.querySelector('body').addEventListener('click', function(el) {
  if(el.target.classList.contains('image')) {
    el.target.parentElement.nextSibling.classList.toggle('hidden');
  }

})
function search(){
  const inputValue = document.querySelector('input').value;
  // ternary: const inputValue = document.querySelector('input').value ? document.querySelector('input').value : "null";
  if(inputValue === ""){
    // Aucune valeur dans l'input
  } else {
    const xhttp = new XMLHttpRequest ();
    xhttp.open("GET", "http://api.tvmaze.com/search/shows?q=" + inputValue, false);
    xhttp.send();
    let results = JSON.parse(xhttp.response);
    document.querySelector('main').innerHTML = "";// pour supprimer la première rechercher et afficher uniquement la deuxieme

    for (let i = 0; i < results.length; i++) {
      displaySerie(results[i]);
    }
  }
}
function displaySerie(serie) {
  let target = document.querySelector('main');
  //on crée nos element
  let div = document.createElement('DIV');
  let name = document.createElement('H1');
  let img = document.createElement('DIV');
  let image = document.createElement('IMG');
  let summary = document.createElement('P');
  let status = document.createElement('P');
//on définit nos elements
  name.innerHTML = serie.show.name;
  if(serie.show.image == null){
   image.src = "https://via.placeholder.com/210x295"
  } else {
    image.src = serie.show.image.medium;
  }
  summary.innerHTML = serie.show.summary;
  status.innerHTML = serie.show.status;
//on ajoute nos elements au parents
  div.appendChild(name);
  div.appendChild(img);
  div.appendChild(summary);
  div.appendChild(status);
  img.appendChild(image);
  target.appendChild(div);


  div.classList.add('mySerie');
  name.classList.add('title');
  img.classList.add('div-image');
  summary.classList.add('summary');
  summary.classList.add('hidden');
  image.classList.add('image');
  status.classList.add('status')
}
