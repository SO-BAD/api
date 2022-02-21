var data;
var url ="https://quality.data.gov.tw/dq_download_json.php?nid=18420&md5_url=44314524414150faa7ccb2800813f493";
$.get("./getData.php",()=>{
    $.get("data.json",(res)=>{
        data = res;
        sort();
        console.log(sort1);
    })
})

var sort1= new Array();
function sort(){
    for(let i=0;i<data.length;i++){
        if(!sort1.includes(data[i].產業別)){
            sort1.push(data[i].產業別);
        }
    }
}