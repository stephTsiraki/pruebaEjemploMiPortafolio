$(document).ready(function(){
//Asignar un evento click al elemento Hiperenlace
//Selector de jquery delemento "a", permitirá con el evento click ejecutar la funcion callback
$("a").click(function(){
    var gato = this.hash
    //El elemento al cual se le aplica el evento click para eso nos sirve this y con .hash obtengo la dirección de ese hiperenlace
    $("html, body").animate(
        {
            scrollTop: $(gato).offset().top - 70
    },
    800
    )

})
})

//Tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
