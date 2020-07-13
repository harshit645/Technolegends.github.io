xPlayers = document.getElementsByTagName('x-lottie-player');

var animations = {};
$(document).ready(function() {
	for (var i = 0; i < xPlayers.length; i++){
		xPlayer = xPlayers[i];
		makeLottie(xPlayer);
	}
});

function makeLottie(xPlayer){
	var d = document.createElement('div');
	d.setAttribute('style', xPlayer.style.cssText);
	xPlayer.appendChild(d);
	d.style.visibility = 'inherit';
	var animation = bodymovin.loadAnimation({
		container: d,
		renderer: 'svg',
		loop: true,
		autoplay: false,
		path: xPlayer.getAttribute('src')
	});
	var IDStr = '_' + Math.random().toString(36).substr(2, 9);
	animations[IDStr] = animation;
	xPlayer.setAttribute('idstr', IDStr);
	xPlayer.pause = pauseAnimation;
	xPlayer.play = playAnimation;
}

function pauseAnimation(){
	var IDStr = this.getAttribute('idstr');
	var animation = animations[IDStr];
	animation.pause()
}

function playAnimation(){
	var IDStr = this.getAttribute('idstr');
	var animation = animations[IDStr];
	animation.play()
}