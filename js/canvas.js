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
            ctx.clearRect((3+3*i),0,300,150)
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


// requestAnimationFrame