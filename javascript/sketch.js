var x = 0;
var y = 0;
var step = 1;
var head 

function setup() {
    head = true;
   createCanvas(720, 400);
    frameRate(30);
  
}

function draw() {
      background(" #548e5e");
    if(head == true){
    	x = x+step

    }
    //body
    fill(5, 13, 71);
    noStroke;
    rect(210, 299, 280, 160); 
    //head
fill(221, 170, 104);
  strokeWeight(4);
    stroke(206, 159, 101)
 rect(x+230, y+150, 200, 160);
 //leftlense
    fill(210, 218, 224);
     strokeWeight(4);
    stroke(51);
    rect(x+200, y+180, 82, 50);
    //rightlense
     fill(210, 218, 224);
     strokeWeight(4);
    stroke(51);
    rect(x+300, y+180, 100, 50);
    //hair
    fill(56, 48, 45);
    noStroke();
   rect(x+225, y+108, 225, 50);
    //hair2
    fill(56, 48, 45);
    noStroke();
   rect(x+420, y+108, 50, 205);
    //hair2
    fill(56, 48, 45);
    noStroke();
   rect(x+350, y+265, 120, 50);
    //mouth
    fill(104, 34, 8);
    noStroke();
    arc(x+280, y+265, 80, 80, 0, PI);
    
//     x = x+step

	if(x > 10) {
		step = -1;
	}

	if( x < -10) {
		step = 1
	}
    
   
}
 
