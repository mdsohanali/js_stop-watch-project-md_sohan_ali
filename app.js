
let dispalyTime = document.querySelector('#displayTime');
let push = document.querySelector('#push');
let play = document.querySelector('#play');
let Reset = document.querySelector('#reset');
let timer = null;

let [hours,minites,secound,miliSecound]= [0,0,0,0];

function watch(){
	miliSecound++;
if(miliSecound==10){
	miliSecound=0;
	secound++;
	if(secound==60){
		secound=0;
		minites++;
		if(minites==60){
			minites=0;
			hours++;
		}
	}
}
	
	
	let h = hours<10? "0"+hours:hours;
	let m = minites<10? "0"+minites:minites;
	let s = secound<10? "0"+secound:secound;
	let mi = miliSecound<10? "0"+miliSecound:miliSecound;
	
	dispalyTime.innerHTML =h +":"+ m +":"+s +":"+mi;
	
	
	
}


play.addEventListener('click',function(){
	if(timer!==null){
		clearInterval(timer)
	}
	timer= setInterval(watch,100)

})

push.addEventListener('click',function(){
	clearInterval(timer)
})

Reset.addEventListener('click',function(){
	
	clearInterval(timer);
	[hours,minites,secound,miliSecound]= [0,0,0,0];
	dispalyTime.innerHTML ="00:00:00:00";
	
})