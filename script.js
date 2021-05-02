
// Cuidad.
// Temperatura actual.
// Un ícono que nos muestra como está el clima en la ciudad elegida.
// Una descrición breve del clima en dicha ciudad.
// let ciudad = $('input').val();

$('button').click(cargarCiudad);

function cargarCiudad(){
    let ciudad = $('input').val()
    if(ciudad.length === 0){
        alert("Fun Fact... el nombre mas corto de una ciudad es Å... y esta en Noruega... no ingresar nada no es una posibilidad, vamos a ver el tiempo de algun lugar...")
   } else {
        let ciudad = $('input').val();
    $.getJSON (`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es`, function(data){
        console.log(data);
        document.querySelector(".container").style.visibility = "visible"
        $("#ciudad").text(data.name);
        $('input[type="text"]').val('');
        let country = data.sys.country;
        $("#ciudad").append(`<sup id = "sup2"> ${country} </sup>`);
        $("#temperatura").text(Math.floor(data.main.temp));
        $("#temperatura").append('<sup>°C</sup>');
        // $("grados").append("<sup>°C</sup>") no funciona así
        $("#wicon").attr('src', 'https://openweathermap.org/img/w/'+data.weather[0].icon+'.png');
        $("#descripcion").text(data.weather[0].description);
    })
    .fail(function(){
        alert ('Fun Fact... la ciudad con el nombre mas raro es "Llanfairpwllgwyngyll" y esta en Reino Unido... pero lo que pusiste ni cerca estaba, probemos otra vez...');
        $('input[type="text"]').val('');
    })
}    
};