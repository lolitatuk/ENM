var activitities = [
  {
    title: 'Acto de Apertura del XXXI Encuentro Nacional de Mujeres.',
    description: 'Acto de Apertura.',
    ubication: 'Monumento Histórico Nacional a la Bandera, Santa Fe 581.',
    map:'-32.9439334,-60.6533037',
    datetime:1475935200
  },
  {
    title: 'Inicio de los talleres',
    description: 'Desarrollo de los talleres en los lugares asignados hasta las 18hs',
    ubication: 'takemetotalleres',   
    map:'-32.9439334,-60.6533037',
    image:'',
    datetime:1475949600
  },
  {
    title: 'Acto',
    description: '',
    ubication: '',
    map:'32.9505515,-60.6450447',
    image:'',
    datetime:1475964000
    /* FALTA DESC Y UBICACION */
  },
  {
    title: 'Actividad Cultural: “Nenina” De Luciana Morcillo, Iván Moschner y Olga Viglieca.',
    description: 'TEATRO. \"En una habitación de la casa de su abuela Milena graba un mensaje para Nenina. Su intención es hacerle llegar ese video para que sepa que no está sola, que muchos luchan por ella.\
    La obra nos invita a reflexionar sobre la libertad, la locura, los derechos de la mujer, desde una mirada declaradamente crítica del sistema en el que vivimos.\"   <br /> <br />  <br /> Crítica en Revista Ñ: <br /> <br />\
    LA EMOCION COMO GESTO POLITICO. <br /> Una obra de corte intimista reflexiona sobre el caso Romina Tejerina y, sin caer en el registro panfletario, apunta al blanco de los sentimientos.\
    Según la antigua leyenda japonesa, quien pliegue mil pajaritas de papel recibirá, como contraprestación de quién sabe qué lejana entidad, la concreción de un deseo.\
    Esa es la tarea a la que se consagra, con perseverante afán Milena, la protagonista de Nenina-pieza teatral que por estos días protagoniza Luciana Morcillo bajo la dirección de Iván Moschner-,\
    para que Romina Tejerina (condenada por la justicia jujeña a 14 años de prisión luego de que asesinara a su bebé, fruo de una violación) recupere su libertad. Son 827 las grullas que Milena ha alcanzado\
    a fabricar hasta el momento en que la obra termina, un número que, si creemos en el esoterismo milagroso de las promesas, habilita 173 casilleros a la esperanza. No es poca cosa.\
    Escrita por Morcillo y Moschner en colaboración con Olga Viglieca, la obra configura un fuerte alegato a favor de los tan zarandeados derechos de la mujer y, concretamente, en torno de la revisión de un caso\
    que excede la mera crónica policial y que, a la fecha, ocupa un lugar prioritario en la agenda de los organismos de derechos humanos. Una escena despojada-apenas un par de sillones, una mesa y un velador-contiene a Milena,\
    que interactúa con los miembros de su familia (el fantasma de su abuela muerta, un hermano que clasifica, en un cuarto anexo, reliquias de la parentela) y graba un video para enviar a la cárcel donde sobrevive Tejerina.\
    Si bien el tono del relato oscila entre la melancolía y cierto registro cotidiano, la puesta cobra un impulso fundamental en aquellas zonas donde el texto se desvela francamente político. Morcillo, que pasa con habilidad \
    por diferentes estados-desde el enternecimiento aniñado hasta la emoción militante- consigue que los pasajes más encendidos resuenen como salidos de una interioridad profunda.\
    El director y la dramaturgia no olvidan que la protagonista habla desde la intimidad de su cuarto, muy lejos de la pompa de las barricadas. Algo que convierte a la obra en una experiencia de índole entrañable.\
    Iván Moschner, que como actor ha tenido roles destacados en puestas de Luciano Suardi, Laura Yusem y Ricardo Monti, no recarga las tintas y maneja los tiempos de la introspección con mano sutil.\
    Apela a los sentimientos y abre paso para que la reflexión inicie su latencia en el espectador, incluso el menos comprometido. De camino hacia casa, alguien habrá aprendido que ponerse en los zapatos de otro sirve para dar el primer paso hacia la justicia.\
    <br /> <BR /> Ida Mogones', 
    ubication: 'El Espiral, Ituzaingo 1719',  
    map:'-32.9439334,-60.6533037',
    image:'',
    datetime:1475964000
  },
  {
    title: 'Actividad Cultural: \“Palomas\” De Patricia Barone y Javier González',
    description: 'La presentación contará con la interpretación del tema ¨Palomas¨ (Música: Javier González/Letra: Patricia Barone), vinculado a la urgente temática de ¨violencia de género¨. Si en 1991, compusimos ¨Ser mina flor de cardo¨, que daba cuenta del\
    nuevo lugar que la mujer empezaba a ocupar en la sociedad, hoy es el tiempo de este nuevo testimonio, en la lucha enorme que la mujer sostiene, para seguir avanzando hacia mejores estándares de ¨humanidad¨.',
    ubication: 'Centro Cultural San Lorenzo, San Carlos 1901-1999',
    map:'32.9505515,-60.6450447',
    image:'',
    datetime:1475969400
  },
  {
    title: 'Inicio de los talleres',
    description: 'Funcionamiento de los talleres en los lugares asignados hasta las 11:30hs.',
    ubication: '',
    map:'-32.9439334,-60.6533037',
    datetime:1476014400
  },
  {
    title: 'Acto y foto de la delegación nacional del Plenario de Trabajadoras',
    description: '',
    ubication: ' Monumento Histórico Nacional a la Bandera, Santa Fe 581',   
    map:'-32.9439334,-60.6533037',
    image:'',
    datetime:1476025200
  },
  {
    title: 'Continuacion de los talleres,',
    description: 'Funcionamiento de los talleres en los lugares asignados hasta las 17:30hs.',
    ubication: '',
    map:'-32.9439334,-60.6533037',
    datetime:1476036000
  },
  {
    title: 'Movilización del Encuentro Nacional de Mujeres',
    description: '¡Marcha con el Plenario de Trabajadoras!',
    ubication: '',
    map:'-32.9439334,-60.6533037',
    datetime:1476046800
  },
  {
    title: 'Acto de cierre',
    description: '',
    ubication: 'Monumento Histórico Nacional a la Bandera, Santa Fe 581.',
    map:'32.9505515,-60.6450447',
    image:'',
    datetime:1476108000
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