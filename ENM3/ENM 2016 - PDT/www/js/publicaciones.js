var publicaciones = [
  {
    title: 'Libro \“La lucha socialista por la emancipación de la mujer\”.',
    description: 'La cuestión de la mujer estuvo en la praxis del socialismo revolucionario desde sus orígenes. Desde la puesta en pie de una Internacional de Mujeres Socialistas,\
     pasando por la lucha en torno a la conquista del derecho al voto para las trabajadoras con una campaña mundial por el Día de la Mujer, hasta la proclamación del aborto legal en la URSS en 1920,\
     la corriente histórica del marxismo comprendió la lucha por los derechos de las mujeres como una tarea indispensable para emancipar a la clase obrera. Frente al ascenso del movimiento de mujeres en la Argentina y\
     los intentos por parte de los partidos capitalistas de manipularlo, ocultando su contenido de clase, resulta una tarea de primer orden clariﬁcar un programa que se demuestre capaz de aportar una orientación política.\
     En vísperas del aniversario de los 100 años de la Revolución Rusa, acercamos a las y los lectores parte de este programa histórico, como un aporte para la lucha actual.',
    ubication: '',
    map:'-32.9439334,-60.6533037',
    datetime:1475935200
  },
  {
    title: 'En defensa del marxismo N°48',
    description: 'América Latina, uno de los temas centrales de En defensa del marxismo N°48 <br/> \
    Ya se encuentra disponible la nueva edición de En defensa del marxismo, la revista teórica del Partido Obrero. Como siempre, la revista contiene cuestiones de importancia estratégica para los socialistas.',
    ubication: '',   
    map:'-32.9439334,-60.6533037',
    image:'',
    datetime:1475949600
  },
  {
    title: 'Boletín \“Trabajadoras\”',
    description: '',
    ubication: '',
    map:'32.9505515,-60.6450447',
    image:'',
    datetime:1475964000
  },
  {
    title: 'Prensa Obrera N°1431',
    description: '', 
    ubication: '',  
    map:'-32.9439334,-60.6533037',
    image:'',
    datetime:1475964000
  }
]


$(document).ready(function(){
  publicaciones.map(function(publicacion, index){
    $(".sliderPages").append('\
      <div class="demo-card-wide mdl-card mdl-shadow--2dp autorender sliderPage">\
              <div class="mdl-card__title" style="background-image: url(\'img/publicaciones/publi' + (index + 1) + '.jpg\'); background-repeat: no-repeat; height:' + $(window).width() + 'px;">\
                <div class="degrade"></div>\
                <h2 class="mdl-card__title-text">' + publicacion.title + '</h2>\
              </div>\
              <div class="mdl-card__supporting-text">\
                ' + publicacion.description + '\
              </div>\
            </div>\
          </div>\
    ')
  })
});