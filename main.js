let section=document.getElementById('section');
card.forEach(card =>{
    let string ='<article>';
    string +='<div class="youtube"><iframe class="video" src="'+card.video+'" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> </div>';
    string +='<div class="titulo"><h2>'+card.titulo+'</h2></div>';
    string +='<div class="datos"> <div class="categoria"> <h3>'+card.categoria+'</h3> </div>'
    string +='<div class="categoria fecha"><h5>'+card.fecha+'</h5></div>';
    string +='<div class="descripcion"><h4>'+card.descripcion+ '</h4> </div> <br>';
    string +='<div class="lenguaje"> <h4>Lenguaje: '+card.lenguaje+'</h4></div>';
    string +='<div class="repo"><a target="_blank" class="repoLink" href="'+card.repo+'">Ir al Repositorio GitHub</a></h4></div>';
    if (card.link!="") string +='<div class="btnContenedor"> <button class="boton"> <a target="_blank" href="'+card.link+'">'+card.linkTexto+'</a> </button></div></div></article>';
    string +='</article>';
    section.innerHTML+=string;
})