var data;
// var url ="https://data.taipei/api/getDatasetInfo/downloadResource?id=61ff4b3a-8a8a-47e4-96ec-e180b2abbfdb&rid=87b38c72-f9e7-4f75-b3af-5b6684f2a059";
var url ="https://boxoffice.tfi.org.tw/api/export?start=2022-02-13&end=2022-02-13";


$.post("./getData.php",{url},(res)=>{
        data = JSON.parse(res);
        console.log(data);
})
