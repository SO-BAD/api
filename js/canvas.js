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
var animaVar;

class WAVE{
    constructor(){
        this.waveR = 10;
        this.waveInterval = 0 ;
        this.addSpeed = 1; 
        this.rSpeed = 0.1;
        this.intervalSpeed = 0.5;
        this.count = 0;
        this.time = this.waveR/this.addSpeed + this.waveR /this.rSpeed;
        this.color = "rgba( 0,0,255,";
        this.opacity = 1;
        this.bgColor = "white";
        
    }

    drow(){

        ctx.clearRect(0,0,300,150)

        let  num = Math.ceil(2*this.count/this.time)
        for(let i =0;i<num;i++){

            let r =  ((this.count-i*this.time/2) < this.waveR/this.addSpeed)? this.addSpeed*(this.count-i*this.time/2) : this.waveR - ((this.count-i*this.time/2) - this.waveR/this.addSpeed)*this.rSpeed;
            let wr =  ((this.count-i*this.time/2) < this.waveR/this.addSpeed)? 0 : this.waveInterval + ((this.count-i*this.time/2) - this.waveR/this.addSpeed)*this.intervalSpeed;
            ctx.beginPath();
            ctx.arc(100, 50, r+wr, 0, Math.PI * 2, true);
            ctx.fillStyle =this.color +(this.opacity - (this.count-i*this.time/2)/this.time) +")";
            ctx.fill();
        
            if( wr != 0){
                ctx.beginPath();
                ctx.arc(100, 50, wr, 0, Math.PI * 2, true);
                ctx.fillStyle ="white";
                ctx.fill();
            }
        }
        this.count ++;
        if(this.count >= this.time) this.count  = this.time/2+1;
    }
}

var wave = new WAVE();
function startAnimate(){
    animaVar = setInterval(()=>{
        wave.drow();
    },20)
}

