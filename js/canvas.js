var myCanvas = document.querySelector("#canvas");
var ctx = myCanvas.getContext("2d");
var arr =new Array();
function printHint() {
    let text = "點擊開啟查詢表單";

    ctx.font = "20px Microsoft JhengHei";
    for(let i=0; i<arr.length;i++){
        clearTimeout(arr[i]);
    }
    for(let i =0;i<100;i++){
        let x = setTimeout(()=>{
            ctx.fillText(text, 60 ,20)
            ctx.clearRect((3+3*i),0,300,25)
        },30*i)
        arr.push(x);
    }
}
function clearCanvas(){
    for(let i=0; i<arr.length;i++){
        clearTimeout(arr[i]);
    }
    ctx.clearRect(0,0,300,150)
}
printHint();
var count = 0;
var x = 10;
var y =0;
var vx =0.1;
var vy = 0.5;
var r =169;
var g =169;
var b =169;
var animaVar;


function startAnimate(){
    animaVar = setInterval(()=>{
	
    if(count < 50){
    	ctx.clearRect(0,0,300,150)
    	ctx.beginPath();
    	ctx.arc(100, 50, x+y+count*(vy-vx), 0, Math.PI * 2, true);
        if(count < 34){
        	r = 202-count;
            g = 169 +count;
        }else{
        	r = 169;
        	g = 202 -(count-33);
            b = 169 + (count -33);
        }
        // console.log(r,g,b);
    	ctx.fillStyle = "rgb("+r+","+g+","+b+")";
        // ctx.fillStyle ="blue";
    	ctx.fill();
    
    	ctx.beginPath();
    	ctx.arc(100, 50, y+count*vy, 0, Math.PI * 2, true);
    	ctx.fillStyle = "white";
    	ctx.fill();
    }else{
    	ctx.clearRect(0,0,200,100)
    	ctx.beginPath();
    	ctx.arc(100, 50, x+y+count*(vy-vx), 0, Math.PI * 2, true);
        
        
        if(count < 67){
            r = 169;
        	g = 185 -(count-50);
            b = 186 + (count -50);

        }else{
        	r = 169 + (count -66);
        	g = 169;
            b = 202 - (count -66);
        }


    	ctx.fillStyle = "rgb("+r+","+g+","+b+")";
    	ctx.fill();
    
    	ctx.beginPath();
    	ctx.arc(100, 50, y+count*vy, 0, Math.PI * 2, true);
    	ctx.fillStyle = "white";
    	ctx.fill();
    
    	ctx.beginPath();
    	ctx.arc(100, 50, x+y+(count-50)*(vy-vx), 0, Math.PI * 2, true);
        
        
        if(count < 84){
        	r = 202-(count-50);
            g = 169 +(count-50);
        }else{
        	r = 169;
        	g = 202 -(count-83);
            b = 169 + (count -83);
        }
        
    	ctx.fillStyle = "rgb("+r+","+g+","+b+")";
    	ctx.fill();
    
    	ctx.beginPath();
    	ctx.arc(100, 50, y+(count-50)*vy, 0, Math.PI * 2, true);
    	ctx.fillStyle = "white";
    	ctx.fill();
    
    
    }
	if(count ==100) count =50;
    count++;
},10)
}

// requestAnimationFrame

