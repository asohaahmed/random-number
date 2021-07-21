// document.getElementById("sohan").innerHTML="hello world"


  var youwin= 0;
  var youloss= 0;

for(var niharika =0; niharika<5; niharika++){
    var randomNumber= parseInt(prompt("Enter your number 1 to 5"));

var sohan = Math.floor( Math.random()*5) + 1;

if(randomNumber==sohan){
    document.write("win number = "+ sohan + "<br/>");
    console.log("you are win");
    youwin++
}
else{
    document.write("lost number = "+ sohan + "<br/>");


    console.log("you are loss");
    youloss++;

}

}
console.log("total loss = " + youloss);
document.write( "<br/>"+ "total loss = " + youloss);
console.log(" total win " + youwin);
document.write("<br/>" +" total win " + youwin);
