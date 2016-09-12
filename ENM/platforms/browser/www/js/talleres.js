var talleres = [
  {
  	title: 'Encuentros Nacionales de Mujeres',
  	description: 'Los Encuentros Nacionales de Mujeres en la Argentina. Impacto social y político de los Encuentros, del XXXI en particular. Forma de convocatoria, funcionamiento y organización\
  	Autogestión y organización. Rol y objetivos de la Comisión Organizadora. Relación de los movimientos nacionales de mujeres con los Encuentros.\
  	 Niveles de interrelación y coordinación de los movimientos de mujeres con otros movimientos sociales. Encuentros regionales y locales; iniciativas. Balances y desafíos. Historia y logros.',
  	ubication: 'Facultad de Derecho UNR, Córdoba 2020',
  	map:'-32.9439334,-60.6533037',
  	datetime:1475960400
  },
  {
  	title: 'Mujeres y feminismos',
  	description: 'Feminismos, su historia, genealogía y actualidad en la Argentina y en América Latina. Condiciones sociales y políticas actuales. Feminismos y sus vínculos con los movimientos de mujeres,\
  	 sociales y políticos y las organizaciones populares. Despatriarcalización de las políticas populares. Diferentes corrientes y nuevos movimientos feministas. Avances y desafíos.\
  	  Agenda feminista y reivindicaciones. ',
  	ubication: 'Facultad de Derecho UNR, Córdoba 2020',
  	map:'-32.9439334,-60.6533037',
  	datetime:1475960400
  },
  {
  	title: ' Movimientos de mujeres y activismos',
  	description: 'Historia de los movimientos de mujeres en Argentina, principales hitos, activismos actuales: feministas, sociales, partidarios, étnicos, lésbicos, trans, queer, sindicalistas,\
  	 legalización del aborto, socorrismos, educación sexual integral, contra todo tipo de violencias, comunicacionales, profesionales, pueblos originarios, medioambiente, ecología, trabajadoras rurales,\
  	  cooperativas, mercados populares, organizaciones barriales, derechos humanos, adolescencia y juventud, universitarias, científicas, educación, migrantes, de la cultura, deportes, diversidad corporal.\
  	   Articulaciones, confluencias y posibilidades de agendas conjuntas.',
  	ubication: 'Facultad de Derecho UNR, Córdoba 2020',   
  	map:'-32.9439334,-60.6533037',
  	image:'',
  	datetime:1475960400
  },
  {
  	title: 'Mujeres y relaciones de pareja',
  	description: 'Diferentes tipos de relaciones. Amor en todas sus formas. Amor libre. Relaciones sexoafectivas diversas. Poliamor. Igualdad. Subordinación. Independencia. Compañerismo. Ética, acuerdos y cuidados.\
  	 Dependencia. Infidelidades. Celos. Crisis. Amistades. Despersonalización en la pareja. Mandatos sociales sobre los roles en la pareja.',
  	ubication: 'Escuela Normal Superior N° 1 "Dr. Nicolás Avellaneda", Corrientes 1191.',
  	map:'32.9505515,-60.6450447',
  	image:'',
  	datetime:1475960400
  }
]

$(document).ready(function(){
	talleres.map(function(taller, index){
		var date = new Date(taller.datetime * 1000);
		var months = ['ENE', 'FEB', 'MAR','ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
		console.log(date);
		$(".container").append('\
			<div class="demo-card-wide mdl-card mdl-shadow--2dp autorender">\
              <div class="mdl-card__title" style="background-image: url(\'img/talleres/Taller' + (index + 1) + '.jpg\'); background-repeat: no-repeat">\
                <div class="degrade"></div>\
                <h2 class="mdl-card__title-text">' + taller.title + '</h2>\
              </div>\
              <div class="mdl-card__supporting-text">\
                ' + taller.description + '\
              </div>\
              <div class="mdl-card__actions mdl-card--border">\
                <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="talleres.html">\
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