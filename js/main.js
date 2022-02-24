var data;
// var url ="https://data.taipei/api/getDatasetInfo/downloadResource?id=61ff4b3a-8a8a-47e4-96ec-e180b2abbfdb&rid=87b38c72-f9e7-4f75-b3af-5b6684f2a059";

function showForm() {
        $(".search").hide();
        $(".searchForm").animate({ top: "10px" });
}

function hideSearchForm() {
        $(".searchForm").animate({ top: "-400px" }, () => {
                $(".search").show();
        });
}

function showDate(start,end){
        $("#dateText").text("查詢結果日期 : "+start +" ~ " + end)
}

function q() {
        let start = document.querySelector("#start").value;
        let end = document.querySelector("#end").value;
        // console.log(start);
        // let url = `https://boxoffice.tfi.org.tw/api/export?start=${start}&end=${end}`;


        // $.post("./getData.php", { url }, (res) => {
        //         data = JSON.parse(res);
        //         console.log(data.list.length);
        // })
        showDate(start,end);
        hideSearchForm();
}




//時間區間最多90天
//JSON格式最早2020/3/1


//序號、、、、、、、、、、、
//amount            銷售金額
//country           國別地區
//issue             申請人
//name              中文片名
//produce           出品
//releaseDate       上映日期
//theaterCount      上映院數
// ticketChangeRate 週票數變動率
//tickets           銷售票數
//totalamoiunts     累計銷售金額
//totaltickets      累計銷售票數

// 2/13
// amounts: 37379
// country: "中華民國"
// issue: "滿滿額娛樂股份有限公司"
// name: "嗨！神獸"
// produce: "滿滿額娛樂股份有限公司##華納集團##凱擘影藝股份有限公司##百聿數碼創意股份有限公司##硯石(廈門)文化傳媒有限公司##神州娛樂股份有限公司"
// releaseDate: "2022-02-01T00:00:00"
// theaterCount: 33
// ticketChangeRate: -0.42955326460481097
// tickets: 166
// totalAmounts: 1456575
// totalTickets: 6279