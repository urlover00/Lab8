
const text = "";
	function Hide() 
	{
		document.getElementById('hide').innerHTML = text;
	};	
	
function Hide_button()
	{
		var delbtn = document.getElementById('hider_btn');
		delbtn.remove(this);
	};


function Changer()
	{
		document.getElementById('text_to_change').value = "NANI?";
	};

function Square()
	{
		let a = document.getElementById('square_number').value;
		alert( a * a);
	};

function Changer_btn_value()
	{
		document.getElementById('change_value').value = "I SAID DON'T";
	};

function Changer_color()
	{
		var color = document.getElementById('color_to_change').style.color = "#f00000";
	};


var image = document.getElementById("image_to_change");
var imgs = new Array('./images/meme1.jpg', './images/meme2.jpg');
	var i = 1;
function Changer_img() 
{
	image.src = imgs[i];
  		i++;
  if (i == 2) 
  	{
   	 	i = 0;
  	}
 
}