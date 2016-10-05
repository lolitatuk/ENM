var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        alert(1);
        $.ajax({
          type: "GET",
          dataType: "json",
          url: 'http://yachtlife.adoestudio.com.ar/test.json',
          crossDomain: true,
          timeout: 60 * 1000,
          cache: false,
          success: function(data) {
            if (data.link) {
                $(".page-content").prepend('\
                    <a onclick="cordova.InAppBrowser.open(\'' + data.link + '\', \'_blank\', \'location=yes\');">\
                        <div class="notificationLink">\
                            <div class="imageLink">\
                                <img src="' + data.image + '" />\
                            </div>\
                            <div class="contentLink">\
                                <span>' + data.title + '</span>\
                            </div>\
                        </div>\
                    </a>\
                ')
            }
          },
          error: function(XMLHttpRequest, textStatus, errorThrown) { 
            alert("Status: " + textStatus); alert("Error: " + errorThrown); 
          }  
        });
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

function func(json){
  console.log('data', json);
}