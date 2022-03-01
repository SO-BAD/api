var queryData = new Array();
var sortNow = 'tickets';
var sortOrd = 0;
function addSelectOpt() {
    originData.list.forEach(element => {
        for (let key in element) {
            if (key == "amounts") {
                //amount            銷售金額
            } else if (key == "country") {
                //country           國別地區
                if (country.indexOf(element.country) == -1) {
                    let l = country.length;
                    country.push(element.country);
                    let opt = document.createElement("option");
                    opt.setAttribute("value", l)
                    opt.innerText = element.country;
                    document.querySelector("#countrySelect").appendChild(opt);
                }
            } else if (key == "issue") {
                //issue             申請人
            } else if (key == "name") {
                //name              中文片名
            } else if (key == "produce") {
                //produce           出品
            } else if (key == "releaseDate") {
                //releaseDate       上映日期
            } else if (key == "theaterCount") {
                //theaterCount      上映院數
            } else if (key == "ticketChangeRate") {
                //ticketChangeRate 週票數變動率
            } else if (key == "tickets") {
                //tickets           銷售票數
            } else if (key == "totalAmounts") {
                //totalamoiunts     累計銷售金額
            } else if (key == "totalTickets") {
                //totaltickets      累計銷售票數
            }
        }
    })
}

function addChkBox() {
    country = [];
    originData.list.forEach(element => {
        for (let key in element) {
            if (key == "amounts") {
                //amount            銷售金額
            } else if (key == "country") {
                //country           國別地區
                if (country.indexOf(element.country) == -1) {
                    let div = document.createElement("div");

                    let l = country.length;
                    country.push(element.country);

                    let str = `<div><input type='checkbox' value='${l}' onclick ='qData()' checked>${element.country}</div>`;
                    div.innerHTML = str;
                    document.querySelector("#countyMenu").appendChild(div);



                }
            } else if (key == "issue") {
                //issue             申請人
            } else if (key == "name") {
                //name              中文片名
            } else if (key == "produce") {
                //produce           出品
            } else if (key == "releaseDate") {
                //releaseDate       上映日期
            } else if (key == "theaterCount") {
                //theaterCount      上映院數
            } else if (key == "ticketChangeRate") {
                //ticketChangeRate 週票數變動率
            } else if (key == "tickets") {
                //tickets           銷售票數
            } else if (key == "totalAmounts") {
                //totalamoiunts     累計銷售金額
            } else if (key == "totalTickets") {
                //totaltickets      累計銷售票數
            }
        }
    })

}

function chkAll(num) {
    if (num == 1) {
        $("input[type='checkbox']").prop("checked", true);
    } else {
        $("input[type='checkbox']").prop("checked", false);
    }
    qData();
}


function selectSort(obj) {
    if (sortNow == $(obj).data("sort")) {
        sortOrd = (sortOrd + 1) % 2;
        if (sortOrd == 0) {
            $(obj).find(".sortOrd").html("<i class='fa-solid fa-arrow-up'></i>");
        } else {
            $(obj).find(".sortOrd").html("<i class='fa-solid fa-arrow-down'></i>");
        }
    } else {
        $(".sortOrd").html("");
        $(obj).find(".sortOrd").html("<i class='fa-solid fa-arrow-up'></i>");
        sortNow = $(obj).data("sort")
        sortOrd = 0;
    }
    $(".dataCol>*").removeClass("sortNow");
    $(obj).addClass("sortNow");


    qData();
}

function clearKeyword(){
    document.getElementById('keyword').value = '';
    qData();
}


function qData() {
    $("#container").html("");
    let checkCountry = new Array();
    let chkbox = document.querySelectorAll("input[type='checkbox']");
    let keyword = $("#keyword").val();
    chkbox.forEach((e, k) => {
        if (e.checked == true) {
            checkCountry.push(country[k])
        }
    })

    queryData = [];


    if (keyword.trim() == "") {
        $(".keywordClear").hide();
        originData.list.forEach(element => {
            if (checkCountry.includes(element.country)) {
                queryData.push(element);
            }
        });
    } else {
        $(".keywordClear").show();
        originData.list.forEach(element => {
            if (checkCountry.includes(element.country) && element.name.includes(keyword.trim())) {
                queryData.push(element);
            }
        });
    }




    if (sortOrd == 0) {
        queryData.sort(function (a, b) {
            return parseInt(b[sortNow]) - parseInt(a[sortNow]);
        })
    } else {
        queryData.sort(function (a, b) {
            return parseInt(a[sortNow]) - parseInt(b[sortNow]);
        })
    }
    showTable(queryData);
    addPageNum(queryData.length);
    page($(".pageBtn").eq(0), 1)
}

function showTable(data) {


    let dataTable = document.querySelector("#dataTable");
    dataTable.innerHTML = "";
    data.forEach((element, key) => {
        let fDiv = document.createElement("div");
        fDiv.setAttribute("class", "dataRow");
        fDiv.setAttribute("onclick", "modal(" + key + ")");
        for (let key in element) {


            if (key == "amounts") {
                //amount            銷售金額
                let cDiv = document.createElement("div");
                cDiv.innerText = element[key];
                fDiv.appendChild(cDiv);
            } else if (key == "country") {
                //country           國別地區
                let cDiv = document.createElement("div");
                cDiv.innerText = element[key];
                fDiv.appendChild(cDiv);
            } else if (key == "issue") {
                //issue             申請人
            } else if (key == "name") {
                //name              中文片名
                let cDiv = document.createElement("div");
                cDiv.innerText = element[key];
                fDiv.appendChild(cDiv);
            } else if (key == "produce") {
                //produce           出品
            } else if (key == "releaseDate") {
                //releaseDate       上映日期
            } else if (key == "theaterCount") {
                //theaterCount      上映院數
            } else if (key == "ticketChangeRate") {
                //ticketChangeRate 週票數變動率
            } else if (key == "tickets") {
                //tickets           銷售票數
                let cDiv = document.createElement("div");
                cDiv.innerText = element[key];
                fDiv.appendChild(cDiv);
            } else if (key == "totalAmounts") {
                //totalamoiunts     累計銷售金額
                let cDiv = document.createElement("div");
                cDiv.innerText = element[key];
                fDiv.appendChild(cDiv);
            } else if (key == "totalTickets") {
                //totaltickets      累計銷售票數
                let cDiv = document.createElement("div");
                cDiv.innerText = element[key];
                fDiv.appendChild(cDiv);
            }
        }
        dataTable.appendChild(fDiv);
    });
    clearInterval(animaVar);
    ctx.clearRect(0, 0, 300, 150);
}

function adjModal() {
    $(".modal_bg").css("width", window.innerWidth + "px");
    $(".modal_bg").css("height", window.innerHeight + "px");
}
function modal(num) {
    adjModal();
    $(".modal_bg").css("display", "flex");

    $(".modal").html("");
    let modal = document.querySelector(".modal");
    for (let prop in queryData[num]) {
        let div = document.createElement("div");
        div.setAttribute("class", "modalRow");
        div.innerHTML = "<div>" + prop + "</div><div> " + queryData[num][prop] + "</div>";
        modal.appendChild(div);
    }
}
$("body").on("click", (e) => {
    if (e.target.className == "modal_bg") {
        $(".modal_bg").css("display", "none");
    }

})



var pageDataCount = 8;
var nowDataCount = 0;

function addPageNum(dataLen) {
    let pageNum = (dataLen - dataLen % pageDataCount) / pageDataCount;
    pageNum = (dataLen % pageDataCount == 0) ? pageNum : pageNum + 1;
    let dataPage = document.querySelector(".dataPage");
    dataPage.innerHTML = "";
    for (let i = 1; i <= pageNum; i++) {
        let div = document.createElement("div")
        div.setAttribute("class", "pageBtn")
        div.setAttribute("onclick", "page(this," + i + ")");
        div.innerText = i;
        dataPage.appendChild(div);
    }

}

function page(obj, num) {
    $(".dataRow").hide();

    $(".pageBtn").removeClass("activePage");
    $(obj).addClass("activePage");

    let dataRow = document.querySelectorAll(".dataRow");
    for (let i = 0; i < dataRow.length; i++) {
        if (i >= (num - 1) * pageDataCount && i < pageDataCount * num) {
            $(".dataRow").eq(i).show();
        }
    }
    let pageBtn = document.querySelectorAll(".pageBtn");
    for (let i = 0; i < pageBtn.length; i++) {
        if ((i - num < 4 && num - i < 6)) {
            $(".pageBtn").eq(i).show();
            $(".pageBtn").eq(i).css({ 'margin-left': "0px", 'margin-right': "0px" });
        } else {
            if (i == 0) {
                $(".pageBtn").eq(i).show();
                $(".pageBtn").eq(i).css("margin-right", "30px");
            } else if (i == (pageBtn.length - 1)) {
                $(".pageBtn").eq(i).show();
                $(".pageBtn").eq(i).css("margin-left", "30px");
            } else {
                $(".pageBtn").eq(i).hide();
            }
        }
    }
}