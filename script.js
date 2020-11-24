var amimal1;
var animal2;
var animal3;
var adj;
var ver;
var num;
var speed;
var mq;
var msg;

function gostory(){
	for(var i=0;i<8;i++){
	document.getElementsByClassName("anml1")[i].innerHTML=localStorage.getItem("animal1");}
	for(var j=0;j<9;j++){
	document.getElementsByClassName("anml2")[j].innerHTML=localStorage.getItem("animal2");}
	document.getElementsByClassName("anml3")[0].innerHTML=localStorage.getItem("animal3");
	document.getElementsByClassName("yesno")[0].innerHTML=localStorage.getItem("ans");
	document.getElementsByClassName("speed")[0].innerHTML=localStorage.getItem("speed");
	document.getElementsByClassName("adj")[0].innerHTML=localStorage.getItem("adjective");
	document.getElementsByClassName("mq")[0].innerHTML=localStorage.getItem("motivational");
	document.getElementsByClassName("num")[0].innerHTML=localStorage.getItem("number");
	for(var k=0;k<3;k++)
	{
	document.getElementsByClassName("ver")[k].innerHTML=localStorage.getItem("verb");
	}
	document.getElementsByClassName("msg")[0].innerHTML=localStorage.getItem("message");
}
function ans(a)
{
	localStorage.setItem("ans",a);
}
function index()
{
animal1=document.getElementById("animal1").value;
localStorage.setItem("animal1", animal1);
animal2=document.getElementById("animal2").value;
localStorage.setItem("animal2", animal2);
animal3=document.getElementById("animal3").value;
localStorage.setItem("animal3", animal3);
adj=document.getElementById("adj").value;
localStorage.setItem("adjective", adj);
ver=document.getElementById("verb").value;
localStorage.setItem("verb", ver);
num=document.getElementById("num").value;
localStorage.setItem("number", num);
speed=document.getElementById("speed").value;
localStorage.setItem("speed", speed);
mq=document.getElementById("mq").value;
localStorage.setItem("motivational", mq);
msg=document.getElementById("msg").value;
localStorage.setItem("message", msg);

}

	
	function nul1() {
	
	for(var i=0;i<26;i++){
	document.getElementsByClassName('nul1')[i].innerHTML="null";
}
}
