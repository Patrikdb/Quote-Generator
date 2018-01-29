
 var rnum;
 var myRequest = new XMLHttpRequest();
 myRequest.open('GET', 'https://random-quote-generator.herokuapp.com/api/quotes/');
 myRequest.send();

myRequest.onload = function(myData) {
  $( "#rdmquote" ).hide();
  $( "#rdmquote" ).fadeIn( "slow");

  rnum = Math.floor(Math.random() * 80) + 1;
  var myData = JSON.parse(myRequest.responseText);
  document.getElementById('rdmquote').innerHTML = "";
  document.getElementById('rdmquote').innerHTML = "<div id='quote'>"+myData[rnum].quote+"</div><br><div id='author'>"+myData[rnum].author+"</div>";
};

 var generate = document.getElementById('generate');
 generate.addEventListener("click",
 function(myData) {

var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

$( "#rdmquote" ).animate({
          color: "#fff"
        }, 0 );
$( "body" ).animate({
          backgroundColor: hue
        }, 1000 );

        $( "#rdmquote" ).animate({
                  color: "#222"
                }, 500 );

   rnum = Math.floor(Math.random() * 80) + 1;
   var myData = JSON.parse(myRequest.responseText);

   if(myData[rnum].author === undefined){
     rnum++
     document.getElementById('rdmquote').innerHTML = "";
     document.getElementById('rdmquote').innerHTML = "<div id='quote'>"+myData[rnum].quote+"</div><br><div class='text-muted' id='author'>"+myData[rnum].author+"</div>";
   } else {
     document.getElementById('rdmquote').innerHTML = "";
     document.getElementById('rdmquote').innerHTML = "<div id='quote'>"+myData[rnum].quote+"</div><br><div class='text-muted' id='author'>- "+myData[rnum].author+"</div>";
   }

 });
