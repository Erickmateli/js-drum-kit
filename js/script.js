//listen for the event on the window i.e e on the function stands for event
window.addEventListener("keydown",playsound);
function playsound(e){
	console.log(e);
	//select the audio files using js ES6 template string and also using the attribute selector
	const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
	//prevent null from occuring i.e heating a key such as q that is not part of the kit
	if(!audio){
		return
	}
	//rewind the sound when hit multiple time i.e start the audio
	audio.currentTime = 0;
	audio.play();
//add an animation effect
const key =  document.querySelector(`.key[data-key = "${e.keyCode}"]`);
key.classList.add("playing");
}

//selects  all the keys and add an event listner
const keys = document.querySelectorAll(".key");
// console.log(keys);
keys.forEach(key => key.addEventListener("transitionend",removeTransition));
//remove transition function
function removeTransition(e){
	//skip if it is not a transform;
	console.log(e);
	if(e.propertyName != "transform") {
		return;
	};
	this.classList.remove("playing");
}
