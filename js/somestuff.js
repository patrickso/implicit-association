$('#redx').hide();
$('#pic1').hide();
var start = 0;
var counter = 0;
var wrong = 0;
var cur = null
var items = []
var dis = []
var har = []
var bad = []
var good = []
var hargood = 0;
var harbad = 0;
var disgood = 0;
var disbad = 0;
var round = 1
var E = 'Bad Emotions'
var I = 'Good Emotions'
$(document).bind('keydown',function(e){
	if (start == 2){
		return;
}
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


function startRound(x){
	if (x==1){
		createItems([good,bad]);
		E = 'Dissonance'
		I = 'Harmony'
			
}
	if (x==2){
		createItems([dis,har]);
		E = 'Bad Emotions or Dissonance'
		I = 'Good Emotions or Harmony'

	}
	if (x==3){
		createItems([dis,har,good,bad])
		E = 'Good Emotions'
		I = 'Bad Emotions'
}
	if (x==4){
		createItems([good,bad])
		E = 'Dissonance'
		I = 'Harmony'
}
	if (x==5){
		createItems([har,dis])
		E = 'Good Emotions or Dissonance'
		I = 'Bad Emotions or Harmony'
		
}
	if (x==6){
		createItems([good,bad,har,dis])
	
}
}

function checkA(code){
if (round<4){
	if (code == 73){
		if (cur.a == good[0].a || cur.a == har[0].a){
			changePicture(items[counter]);
			$('#redx').hide();
			increaseCount();
}
	else{
		if(round == 3 || round == 6){
			if (cur.a == 'bad'){
				harbad++;
}
			if (cur.a == 'dissonance'){
				disgood++;
}}

		$('#redx').show();
	}}
	if (code == 69){
		if(cur.a == bad[0].a || cur.a == dis[0].a){
			changePicture(items[counter]);
			$('#redx').hide();
			increaseCount();


}
		else{
		if(round == 3 || round == 6){
			if (cur.a == 'good'){
				disgood++;
}
			if (cur.a == 'harmony'){
				harbad++;
}}

			$('#redx').show();
			wrong=wrong+1;

}
}
}
else{
	if (code == 69){
		if (cur.a == good[0].a || cur.a == dis[0].a){
			changePicture(items[counter]);
			$('#redx').hide();
			increaseCount();

}	
	else{		
		if(round == 3 || round == 6){
			if (cur.a == 'harmony'){
				hargood++;
}
			if (cur.a == 'bad'){
				disbad++;
}}

		$('#redx').show();
		wrong = wrong+1;
}}
	if (code == 73){
		if(cur.a == bad[0].a || cur.a == har[0].a){
			changePicture(items[counter]);
			$('#redx').hide();
			increaseCount();


}
		else{
		if(round == 3 || round == 6){
			if (cur.a == 'good'){
				hargood++;
}
			if (cur.a == 'dissonance'){
				disbad++;
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
		finish();
		start = 2;
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
	if (a == 'good'){
		good.push(b);
}
	if (a == 'bad'){
		bad.push(b);
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

function finish(){
	$('#pic1').hide();
	$('#sound').attr('src','');
	$('#p1').hide();
	$('#p2').hide();
	x = analyze();
	$('#results').text('You '+x[0]+' associate '+x[1]);
}

function analyze(){
	x = [hargood,harbad,disgood,disbad];
	max = Math.max.apply(Math, x);
	deg = ''
	as = ''
	if (max <2){
		return ['do not','Emotion with Music'] 
}
	if (max <3){
		deg = 'slightly';
}
	if (max < 5){
		deg = 'moderately';
}
	if (max >4){
		deg = 'highly';
}
	if (hargood == max){
		as = 'Harmony with Good Emotions';
}
	if (harbad == max){
		as = 'Harmony with Bad Emotions';
}
	if (disgood == max){
		as = 'Dissonance with Good Emotions';
}
	if (disbad == max){
		as = 'Dissonance with Bad Emotions';
}
	return [deg,as];
}

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
var anger = new PicClass('bad/anger.jpg','bad');
var annoyed = new PicClass('bad/annoyed.jpg','bad');
var cry = new PicClass('bad/cry.jpg','bad');
var disgust = new PicClass('bad/disgust.jpg','bad');
var fear = new PicClass('bad/fear.jpg','bad');
var mean = new PicClass('bad/mean.jpg','bad');
var pain = new PicClass('bad/pain.jpg','bad');
var worry = new PicClass('bad/worry.jpg','bad');
var child = new PicClass('good/child.jpg','good');
var excited = new PicClass('good/excited.jpg','good');
var fun = new PicClass('good/fun.jpg','good');
var happy = new PicClass('good/happy.jpg','good');
var joy = new PicClass('good/joy.jpg','good');
var relief = new PicClass('good/relief.jpg','good');
var smile = new PicClass('good/smile.jpg','good');
var thumbs = new PicClass('good/thumbs.jpg','good');











