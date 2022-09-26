function loadStyle(href){
    // avoid duplicates
    for(var i = 0; i < document.styleSheets.length; i++){
        if(document.styleSheets[i].href == href){
            return;
        }
    }
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = href;
    head.appendChild(link);
}

loadStyle("https://fonts.googleapis.com/icon?family=Material+Icons");

function loadScript(url, callback){

    var script = document.createElement("script")
    script.type = "text/javascript";

    if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        script.onload = function(){
            callback();
        };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

// vor 10.2018 https://use.fontawesome.com/2dc7123acd.js
loadScript("https://use.fontawesome.com/releases/v5.3.1/js/all.js", function(){
    //initialization code
});


Reveal.addEventListener( 'ready', function( event ) {
	
	var left = document.querySelector(".navigate-left");
	left.innerHTML = '<i class="fa fa-chevron-left" aria-hidden="true"></i>';
	
	var up = document.querySelector(".navigate-up");
	up.innerHTML = '<i class="fa fa-chevron-up" aria-hidden="true"></i>';

	var down = document.querySelector(".navigate-down");
	down.innerHTML = '<i class="fa fa-chevron-down" aria-hidden="true"></i>';
	
	var right = document.querySelector(".navigate-right");
	right.innerHTML = '<i class="fa fa-chevron-right" aria-hidden="true"></i>';
	

} );

