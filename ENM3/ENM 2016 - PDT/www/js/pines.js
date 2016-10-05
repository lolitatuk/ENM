var pines = [
  {
    title: '',
    description: '',
    ubication: '',
    map:'-32.9439334,-60.6533037',
    datetime:1475935200
  },
  {
    title: '',
    description: '',
    ubication: '',   
    map:'-32.9439334,-60.6533037',
    image:'',
    datetime:1475949600
  },
  {
    title: '',
    description: '',
    ubication: '',
    map:'32.9505515,-60.6450447',
    image:'',
    datetime:1475964000
  },
  {
    title: '',
    description: '', 
    ubication: '',  
    map:'-32.9439334,-60.6533037',
    image:'',
    datetime:1475964000
  },
  {
    title: '',
    description: '',
    ubication: '',
    map:'-32.9439334,-60.6533037',
    datetime:1476014400
  },
  {
    title: '',
    description: '',
    ubication: '',
    map:'-32.9439334,-60.6533037',
    datetime:1475935200
  }
]


$(document).ready(function(){
  pines.map(function(pin, index){
    $(".sliderPages").append('\
      <div class="demo-card-wide mdl-card mdl-shadow--2dp autorender sliderPage">\
              <div class="mdl-card__title" style="background-image: url(\'img/pines/pin' + (index + 1) + '.jpg\'); background-repeat: no-repeat; height:' + $(window).width() + 'px;">\
                <div class="degrade"></div>\
                <h2 class="mdl-card__title-text">' + pines.title + '</h2>\
              </div>\
            </div>\
          </div>\
    ')
  })
});