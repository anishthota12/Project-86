var canvas = new fabric.Canvas('myCanvas');
var audio = document.getElementById("bdayaudio");

function new_image()
{
	
	fabric.Image.fromURL('bdaypic.jpg', function(Img) {
	canvasimg = Img;
		
	canvasimg.scaleToWidth(600);
	canvasimg.scaleToHeight(400);
	canvasimg.set({
	top:0,
	left:0
	});
	canvas.add(canvasimg);
	});
	
}

function playSound(){
	audio.play();
}
