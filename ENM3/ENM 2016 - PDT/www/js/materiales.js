var materiales = [
  {
    title: 'Remeras',
    description: 'Podés adquirir en nuestras mesas tu remera del Plenario de Trabajadoras. Tenemos todos los siguientes talles (XS, S, M, L XL y XXL), todas naranja con estos diez diseños para elegir',
    ubication: '',
    map:'-32.9439334,-60.6533037',
    datetime:1475935200
  },
  {
    title: 'Publicaciones',
    description: 'Conocé nuestras publicaciones',
    ubication: '',   
    map:'-32.9439334,-60.6533037',
    image:'',
    datetime:1475949600
  },
  {
    title: 'Pines',
    description: '',
    ubication: '',
    map:'32.9505515,-60.6450447',
    image:'',
    datetime:1475964000
  },
  {
    title: 'Afiches',
    description: '', 
    ubication: '',  
    map:'-32.9439334,-60.6533037',
    image:'',
    datetime:1475964000
  },
  {
    title: 'Calendarios',
    description: 'Funcionamiento de los talleres en los lugares asignados hasta las 11:30hs.',
    ubication: '',
    map:'-32.9439334,-60.6533037',
    datetime:1476014400
  },
  {
    title: 'Pañuelos',
    description: 'Funcionamiento de los talleres en los lugares asignados hasta las 11:30hs.',
    ubication: '',
    map:'-32.9439334,-60.6533037',
    datetime:1476014400
  }
]


$(document).ready(function(){
  materiales.map(function(material, index){
    var date = new Date(material.datetime * 1000);
    var months = ['ENE', 'FEB', 'MAR','ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
    var address = material.ubication.split(',')[material.ubication.split(',').length - 1].replace('.', '').replace(' ', '+') + ',+Rosario+Santa+Fe,+Argentina';
    $(".sliderPages").append('\
      <div class="demo-card-wide mdl-card mdl-shadow--2dp autorender sliderPage">\
              <div class="mdl-card__title" style="background-image: url(\'img/materiales/mat' + (index + 1) + '.jpg\'); background-repeat: no-repeat">\
                <div class="degrade"></div>\
                <h2 class="mdl-card__title-text">' + material.title + '</h2>\
              </div>\
              <div class="mdl-card__supporting-text">\
                ' + material.description + '\
              </div>\
              <div class="mdl-card__actions mdl-card--border">\
                <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href=\'' + material.title.toLowerCase() + '.html\'">\
                  Ver Más\
                </a>\
              </div>\
            </div>\
          </div>\
    ')
  })
})