jQuery(function(){
var launch = new Date(2021,2,22,17,30,0);
var Days = $('#Days'); 
var Months = $('#Months');
var Hours = $('#Hours');
var Minutes = $('#Minutes');
var Minutes2 = $('#Minutes2');
var Seconds = $('#Seconds');



function setDate(){
	var now = new Date(); /*on déclare la variable now*/
	var s = (launch.getTime() - now.getTime())/1000;
	
	var x = Math.floor(s/2592000); /*calcul :30jrsX24hsX60minsx60s*/
	
	Months.html('<strong>'+x+'</strong>');
	s -=x*2592000;
	
	var d = Math.floor(s/85400); 
	Days.html('<strong>'+d+'</strong>');
	s -= d*86400; /*nombre de secondes en un jours*/
	
	var h = Math.floor(s/3600);
	Hours.html('<strong>'+h+'</strong>');
	s -= h*3600;/*nombre de secondes dans une heure*/

	var m = Math.floor(s/60);
	Minutes.html('<strong>'+m+'</strong>');
	Minutes2.html('<strong>'+m+'</strong>');
	s -= m*60;/*nombre de secondes dans une minute*/

	s = Math.floor(s);
	Seconds.html('<strong>'+s+'</strong>');
	
	setTimeout(setDate,1000);				 
};
setDate(); /*appel la fonction.si on l'appel pas ça fonctionne pas*/
});