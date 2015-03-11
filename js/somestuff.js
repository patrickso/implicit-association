$('#redx').hide();
$('#results').hide();
$('#pic1').hide();
var start = 0;
var counter = 0;
var wrong = 0;
var cur = null
var items = []
var dis = []
var har = []
var din = []
var des = []
var hardes = 0;
var hardin = 0;
var disdes = 0;
var disdin = 0;
var round = 1
var E = 'Dinner'
var I = 'Dessert'
$(document).bind('keydown',function(e){
	if (start == 0){
		if (e.keyCode == 13){
			start = 1;
			$('#p1').show();
			$('#p2').show();
			$('#pic1').show();
			$('#startmenu').hide();
			startRound(round);
}
}
	else{
		checkA(e.keyCode);
}
});

function getPic(){
if (cur == hamburger){
	cur = icecream;
	return icecream;
} 
else{
	cur = hamburger;
	return hamburger;
}
}

function startRound(x){
	if (x==1){
		createItems([din,des]);
		E = 'Dissonance'
		I = 'Harmony'
			
}
	if (x==2){
		createItems([dis,har]);
		E = 'Dinner or Dissonance'
		I = 'Dessert or Harmony'

	}
	if (x==3){
		createItems([dis,har,des,din])
		E = 'Dessert'
		I = 'Dinner'
}
	if (x==4){
		createItems([des,din])
		E = 'Dissonance'
		I = 'Harmony'
}
	if (x==5){
		createItems([har,dis])
		E = 'Dessert or Dissonance'
		I = 'Dinner or Harmony'
		
}
	if (x==6){
		createItems([des,din,har,dis])
	
}
}

function checkA(code){
if (round<4){
	if (code == 73){
		if (cur.a == icecream.a || cur.a == har1.a){
			changePicture(items[counter]);
			$('#redx').hide();
			increaseCount();
}
	else{
		if(round == 3 || round == 6){
			if (cur.a == 'dinner'){
				hardin++;
}
			if (cur.a == 'dissonance'){
				disdes++;
}}

		$('#redx').show();
	}}
	if (code == 69){
		if(cur.a == hamburger.a || cur.a == dis1.a){
			changePicture(items[counter]);
			$('#redx').hide();
			increaseCount();


}
		else{
		if(round == 3 || round == 6){
			if (cur.a == 'dessert'){
				disdes++;
}
			if (cur.a == 'harmony'){
				hardin++;
}}

			$('#redx').show();
			wrong=wrong+1;

}
}
}
else{
	if (code == 69){
		if (cur.a == icecream.a || cur.a == dis1.a){
			changePicture(items[counter]);
			$('#redx').hide();
			increaseCount();

}	
	else{		
		if(round == 3 || round == 6){
			if (cur.a == 'harmony'){
				hardes++;
}
			if (cur.a == 'dinner'){
				disdin++;
}}

		$('#redx').show();
		wrong = wrong+1;
}}
	if (code == 73){
		if(cur.a == hamburger.a || cur.a == har1.a){
			changePicture(items[counter]);
			$('#redx').hide();
			increaseCount();


}
		else{
		if(round == 3 || round == 6){
			if (cur.a == 'dessert'){
				hardes++;
}
			if (cur.a == 'dissonance'){
				disdin++;
}}

			$('#redx').show();
			wrong=wrong+1;

}
}

}
}
function increaseCount(){
counter = counter + 1;
if (counter == 20){
	if (round == 6){
		printRes();
		return;
}
	$('#p1').text('Press E for '+E);
	$('#p2').text('Press I for '+I);
	$('#sound').attr('src','');
	round=round+1;
	counter = 0;
	wrong=0;
	start = 0;
	$('#startmenu').show()
	$('#pic1').hide()
	}

}

function randomPicture(){
	return items[Math.floor(Math.random() * items.length)]
}

function changePicture(x){
	cur = items[counter];
	$('#pic1').attr('src',x.pic);
	$('#sound').attr('src',x.src);
}


function PicClass(pic, a){
	this.pic = pic;
	this.src = ''
	this.a = a;
	addClass(this, this.a);
	}

function SoundClip(src, a){
	this.src = src;
	this.pic = 'musicnote.jpg';
	this.a = a;
	addClass(this,this.a);
}

function addClass(b,a){
	if (a == 'dissonance'){
		dis.push(b);
}
	if (a == 'harmony'){
		har.push(b);
}
	if (a == 'dessert'){
		des.push(b);
}
	if (a == 'dinner'){
		din.push(b);
}
}

function createItems(cat){
	items=[]
	while (items.length < 20){
		for(i=0;i<cat.length;i++){
			items.push(cat[i][Math.floor(Math.random() * cat[i].length)]);
}		
}
	var currentIndex = items.length, temporaryValue, randomIndex ;

	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = items[currentIndex];
		items[currentIndex] = items[randomIndex];
    		items[randomIndex] = temporaryValue;
  }
	cur = items[0];
	changePicture(items[0]);
}

function printRes(){
console.log('Harmony and Dessert '+hardin);
console.log('Harmony and Dinner '+hardes);
console.log('Dissonance and Dessert ' +disdes);
console.log('Dissonance and Dinner ' +disdin);
}
var hamburger = new PicClass('dinner/hamburger.jpg','dinner')
var steak = new PicClass('dinner/steak.jpg','dinner')
var cake = new PicClass('dessert/cake.jpg','dessert')
var icecream = new PicClass('dessert/icecream.jpg','dessert')
var har1 = new SoundClip('harmony/har1.m4a','harmony')
var har2 = new SoundClip('harmony/har2.m4a','harmony')
var har3 = new SoundClip('harmony/har3.m4a','harmony')
var har4 = new SoundClip('harmony/har4.m4a','harmony')
var har5 = new SoundClip('harmony/har5.m4a','harmony')
var dis1 = new SoundClip('dissonance/dis1.m4a','dissonance')
var dis2 = new SoundClip('dissonance/dis2.m4a','dissonance')
var dis3 = new SoundClip('dissonance/dis3.m4a','dissonance')
var dis4 = new SoundClip('dissonance/dis4.m4a','dissonance')
var dis5 = new SoundClip('dissonance/dis5.m4a','dissonance')

