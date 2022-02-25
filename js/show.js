var queryData = new Array();

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

function qData() {
    let cSelect = $("#countrySelect").val();
    let sSelect = $("#sortSelect").val();
    let oSelect = $("#ordSelect").val();
    queryData = [];
    if (cSelect == -1) {
        queryData = originData.list;
    } else {
        originData.list.forEach(element => {
            if (element.country == country[cSelect]) {
                queryData.push(element);
            }
        });
    }


    if (oSelect == 0) {
        queryData.sort(function (a, b) {
            return parseInt(b[sSelect]) - parseInt(a[sSelect]);
        })
    } else {
        queryData.sort(function (a, b) {
            return parseInt(a[sSelect]) - parseInt(b[sSelect]);
        })
    }
    showTable(queryData);
    addPageNum(queryData.length);
    page($(".pageBtn").eq(0),1)
}

function showTable(data) {
    let dataTable= document.querySelector("#dataTable"); 
    dataTable.innerHTML ="";
    data.forEach(element => {
        let fDiv = document.createElement("div");
        fDiv.setAttribute("class", "dataRow");
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
}


var pageDataCount = 8;
var nowDataCount = 0;

function addPageNum(dataLen){
    let pageNum = (dataLen - dataLen%pageDataCount)/pageDataCount;
    pageNum = (dataLen%pageDataCount ==0 )? pageNum:pageNum+1;
    let dataPage = document.querySelector(".dataPage");
    dataPage.innerHTML = "";
    for(let i=1;i<=pageNum;i++){
        let div =document.createElement("div")
        div.setAttribute("class","pageBtn")
        div.setAttribute("onclick","page(this,"+i+")");
        div.innerText = i;
        dataPage.appendChild(div);
    }
    
}

function page(obj,num){
    $(".dataRow").hide();
    
    $(".pageBtn").removeClass("activePage");
    $(obj).addClass("activePage");
    
    let dataRow = document.querySelectorAll(".dataRow");
    for(let i =0;i<dataRow.length;i++){
        if( i >=(num-1)*pageDataCount && i< pageDataCount*num){
            $(".dataRow").eq(i).show();
        }
    }
}