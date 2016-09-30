var remeras = [
  {
    title: 'Ni una menos.',
    description: '',
    ubication: '',
    map:'-32.9439334,-60.6533037',
    datetime:1475935200
  },
  {
    title: 'PDT- Plenario de Trabajadoras',
    description: '',
    ubication: '',   
    map:'-32.9439334,-60.6533037',
    image:'',
    datetime:1475949600
  },
  {
    title: 'Aborto legal, seguro y gratuito.',
    description: '',
    ubication: '',
    map:'32.9505515,-60.6450447',
    image:'',
    datetime:1475964000
  },
  {
    title: 'Desmantelamiento de las redes de trata.',
    description: '', 
    ubication: '',  
    map:'-32.9439334,-60.6533037',
    image:'',
    datetime:1475964000
  },
  {
    title: 'Unidad socialista de América Latina.',
    description: '',
    ubication: '',
    map:'-32.9439334,-60.6533037',
    datetime:1476014400
  },
  {
    title: 'Basta de violencia contra las mujeres.',
    description: '',
    ubication: '',
    map:'-32.9439334,-60.6533037',
    datetime:1475935200
  },
  {
    title: 'Trabajo genuino, basta de precarización.',
    description: '',
    ubication: '',   
    map:'-32.9439334,-60.6533037',
    image:'',
    datetime:1475949600
  },
  {
    title: 'Socialismo o Barbarie.',
    description: '',
    ubication: '',
    map:'32.9505515,-60.6450447',
    image:'',
    datetime:1475964000
  },
  {
    title: 'No a la impunidad de ayer y de hoy.',
    description: '', 
    ubication: '',  
    map:'-32.9439334,-60.6533037',
    image:'',
    datetime:1475964000
  },
  {
    title: 'Basta de crímenes de odio.',
    description: '',
    ubication: '',
    map:'-32.9439334,-60.6533037',
    datetime:1476014400
  }
]


$(document).ready(function(){
  remeras.map(function(remeras, index){
    var date = new Date(remeras.datetime * 1000);
    var months = ['ENE', 'FEB', 'MAR','ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
    var address = remeras.ubication.split(',')[remeras.ubication.split(',').length - 1].replace('.', '').replace(' ', '+') + ',+Rosario+Santa+Fe,+Argentina';
    $(".sliderPages").append('\
      <div class="demo-card-wide mdl-card mdl-shadow--2dp autorender sliderPage">\
              <div class="mdl-card__title" style="background-image: url(\'img/remeras/Remera' + (index + 1) + '.jpg\'); background-repeat: no-repeat; height:' + $(window).width() + 'px;">\
                <div class="degrade"></div>\
                <h2 class="mdl-card__title-text">' + remeras.title + '</h2>\
              </div>\
            </div>\
          </div>\
    ')
  })
});