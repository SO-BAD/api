
var originData;
var country = new Array();
// var url ="https://data.taipei/api/getDatasetInfo/downloadResource?id=61ff4b3a-8a8a-47e4-96ec-e180b2abbfdb&rid=87b38c72-f9e7-4f75-b3af-5b6684f2a059";

function showForm() {
        $(".search").hide();
        $(".searchForm").animate({ top: "10px" });
}

function closeSearchForm() {
        $(".searchForm").animate({ top: "-400px" }, () => {
                $(".search").show();
        });
}

function echoDate(start, end) {
        $("#dateText").text("查詢結果日期 : " + start + " ~ " + end)
}
function moveMenu(){
        $(".item").eq(0).animate({"margin-left":"0px"});
}
function sw(obj,num){
        $(".item").removeClass("activeItem")
        $(obj).addClass("activeItem");
        $("#tableContent").animate({"left":(num*100).toString()+"%"});
        $("#chartContent").animate({"left":(100 - num*100).toString()+"%"});
}


function q() {
        let start = document.querySelector("#start").value;
        let end = document.querySelector("#end").value;
        let ans = date_ck(start, end);
        if (ans == "ok") {
                echoDate(start, end);
                ajaxData(start, end);
                closeSearchForm();
                moveMenu();
                clearCanvas();
                $("#tableContent").html("");
                $("#chartContent").html("");
                sortNow = 'tickets';
                sortOrd = 0;
        }
}
function date_ck(start, end) {
        let s1 = new Date("2020/3/1");
        let startTime = new Date(start);
        if (start == "" || end == "") {
                alert("輸入不得為空");
                return "err";
        }

        if (startTime.getTime() < s1.getTime()) {
                alert("請輸入2020/3/1之後日期");
                return "err";
        }
        let endTime = new Date(end);
        if (endTime.getTime() > (startTime.getTime() + 90 * 24 * 60 * 60 * 1000)) {
                alert("日期間隔不得大於90天");
                return "err";
        }



        if (endTime.getTime() < startTime.getTime()) {
                alert("結束日期請大於開始日期");
                return "err";
        }

        let now = new Date();
        if (endTime.getTime() > now.getTime()) {
                alert("結束日期不得超過今天日期");
                return "err";
        }

        return "ok";
}
function ajaxData(start, end, type) {
        startAnimate();
        let url = `https://boxoffice.tfi.org.tw/api/export?start=${start}&end=${end}`;

        $.post("./getData.php", { url }, (res) => {
        // $.get("./data.json", (res) => {
                originData = JSON.parse(res);
                // originData = res;
                if (originData.list.length > 0) {
                        $("#tableContent").load("./include/table.html", () => {
                                // addSelectOpt();
                                addChkBox();
                                qData();
                        })
                        $("#chartContent").load("./include/chart.html")
                } else {
                        $("#tableContent").text("目前還無資料");
                }
        })
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
//ticketChangeRate 週票數變動率
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