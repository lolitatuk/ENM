var activitities = [
  {
    title: 'Remeras',
    description: '',
    ubication: '',
    map:'-32.9439334,-60.6533037',
    datetime:1475935200
  },
  {
    title: 'Publicaciones',
    description: '',
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
    /* FALTA DESC Y UBICACION */
  },
  {
    title: 'Bolsas',
    description: '', 
    ubication: '',  
    map:'-32.9439334,-60.6533037',
    image:'',
    datetime:1475964000
  },
  {
    title: 'Cuadernos',
    description: 'Funcionamiento de los talleres en los lugares asignados hasta las 11:30hs.',
    ubication: '',
    map:'-32.9439334,-60.6533037',
    datetime:1476014400
  }
]


$(document).ready(function(){
  activitities.map(function(activity, index){
    var date = new Date(activity.datetime * 1000);
    var months = ['ENE', 'FEB', 'MAR','ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
    var address = activity.ubication.split(',')[activity.ubication.split(',').length - 1].replace('.', '').replace(' ', '+') + ',+Rosario+Santa+Fe,+Argentina';
    $(".container").append('\
      <div class="demo-card-wide mdl-card mdl-shadow--2dp autorender">\
              <div class="mdl-card__title" style="background-image: url(\'img/agenda/act' + (index + 1) + '.jpg\'); background-repeat: no-repeat">\
                <div class="degrade"></div>\
                <h2 class="mdl-card__title-text">' + activity.title + '</h2>\
              </div>\
              <div class="mdl-card__supporting-text">\
                ' + activity.description + '\
              </div>\
              <div class="mdl-card__actions mdl-card--border">\
                <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" onclick="cordova.InAppBrowser.open(\'https://www.google.com.ar/maps/place/' + address + '\', \'_blank\', \'location=yes\');">\
                  Ubicacion\
                </a>\
              </div>\
              <div class="mdl-card__menu datetime">\
                <span class="date">' + date.getDate() + ' - ' + months[date.getMonth()] + '</span>\
                <span class="hour">' + date.getHours() + (date.getMinutes() !== 0 ? ':' + date.getMinutes() : '') + ' HRS </span>\
                  </div>\
            </div>\
          </div>\
    ')
  })
})