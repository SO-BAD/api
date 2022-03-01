


function showChart(){
   let type =$("#chartType").val();
   console.log(type);
   switch(type){
      case "scatter":
         showScatter();
         break;
      case "bar":
         showBar();
         break;
      case "column":
         showColumn();
         break;
      case "pie":
         showPie();
         break;
   }
}

function showPie(){   
   $("#container").css("height","480px");
   var chart = {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false
  };
  var title = {
     text: '電影票房占有比例'   
  };      
  var tooltip = {
     pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  };
  var plotOptions = {
     pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
           enabled: true,
           format: '<b>{point.name}</b>: {point.percentage:.1f} %',
           style: {
              color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
           }
        }
     }
  };

   let arr = new Array();
   let total = 0;
   originData.list.forEach( e =>{
      total += e.amounts;
   })

   originData.list.forEach( e =>{
      arr.push([e.name,e.amounts/total]);
   })


  var series= [{
     type: 'pie',
     name: 'Browser share',
     data:arr
  }];     
     
  var json = {};   
  json.chart = chart; 
  json.title = title;     
  json.tooltip = tooltip;  
  json.series = series;
  json.plotOptions = plotOptions;
  $('#container').highcharts(json);  
}


function showColumn(){
   $("#container").css("height","480px");
   var chart = {
      type: 'column'
   };
   var title = {
      text: '金額'   
   };
   var subtitle = {
      text: 'Source: 文化資料開放服務網'  
   };   
   var yAxis = {
      min: 0,
      title: {
         text: '金額'         
      }      
   };
   var tooltip = {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
         '<td style="padding:0"><b>{point.y} </b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
   };
   var plotOptions = {
      column: {
         pointPadding: 0.2,
         borderWidth: 0
      }
   };  
   var credits = {
      enabled: false
   };
   let nameArr = new Array();
   let nameAmounts = new Array();
   let nameTotal = new Array();
   originData.list.forEach( e =>{
      nameArr.push(e.name);
      nameAmounts.push(e.amounts);
      nameTotal.push(e.totalAmounts);
   })
   var xAxis = {
      categories: nameArr,
      crosshair: true
   };

   var series= [{
      name: 'amounts',
         data: nameAmounts
     }, {
         name: 'totalAmounts',
         data: nameTotal
     }
];  



   var json = {};   
   json.chart = chart; 
   json.title = title;   
   json.subtitle = subtitle; 
   json.tooltip = tooltip;
   json.xAxis = xAxis;
   json.yAxis = yAxis;  
   json.series = series;
   json.plotOptions = plotOptions;  
   json.credits = credits;
   $('#container').highcharts(json);
}



function showBar(){
   $("#container").css("height","600px");
   var chart = {
      type: 'bar'
   };
   var title = {
      text: 'Historic World Population by Region'   
   };
   var subtitle = {
      text: 'Source: Wikipedia.org'  
   };
   var yAxis = {
      min: 0,
      title: {
         text: '金額',
         align: 'high'
      },
      labels: {
         overflow: 'justify'
      }
   };
   var tooltip = {
      valueSuffix: ' millions'
   };
   var plotOptions = {
      bar: {
         dataLabels: {
            enabled: true
         }
      }
   };
   var legend = {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: -40,
      y: 100,
      floating: true,
      borderWidth: 1,
      backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
      shadow: true
   };
   var credits = {
      enabled: false
   };
   let nameArr = new Array();
   let nameAmounts = new Array();
   let nameTotal = new Array();
   originData.list.forEach( e =>{
      nameArr.push(e.name);
      nameAmounts.push(e.amounts);
      nameTotal.push(e.totalAmounts);
   })

   var xAxis = {
      categories: nameArr,
      title: {
         text: null
      }
   };
   var series= [{
         name: 'amounts',
            data: nameAmounts
        }, {
            name: 'totalAmounts',
            data: nameTotal
        }
   ];     
      
   var json = {};   
   json.chart = chart; 
   json.title = title;   
   json.subtitle = subtitle; 
   json.tooltip = tooltip;
   json.xAxis = xAxis;
   json.yAxis = yAxis;  
   json.series = series;
   json.plotOptions = plotOptions;
   json.legend = legend;
   json.credits = credits;
   $('#container').highcharts(json);
  
}



function showScatter() {
   
   $("#container").css("height","480px");
    var chart = {
        type: 'scatter',
        zoomType: 'xy'
     };
     var title = {
        text: '上映院數跟銷售金額'   
     };
     var xAxis = {
        title: {
        enabled: true,
           text: 'amounts'
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true
     };
     var yAxis = {
        title: {
           text: 'releaseDate'
        }
     };
     var legend = {   
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: -300,
        y: 0,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
        borderWidth: 1
     }  

     var plotOptions = {
        scatter: {
           marker: {
              radius: 5,
              states: {
                 hover: {
                    enabled: true,
                    lineColor: 'rgb(100,100,100)'
                 }
              }
           },
           states: {
              hover: {
                 marker: {
                    enabled: false
                 }
              }
           },
           tooltip: {
              headerFormat: '<b>{series.name}</b><br>',
              pointFormat: '{point.x} 間, {point.y} 元'
           }
        }
     };
    //  let qq =new Array();
     let nn = new Array();
     originData.list.forEach(e => {
        //  nn.push(e.name);
        //  qq.push([e.theaterCount,e.amounts]);
        nn.push({
            name:e.name,
            color:'rgba(223, 83, 83, .5)',
            data:[[e.theaterCount,e.amounts]]
        })
     });



     var series =nn;

     var json = {};   
    json.chart = chart; 
    json.title = title;   
   json.legend = legend;
   json.xAxis = xAxis;
   json.yAxis = yAxis;  
   json.series = series;
   json.plotOptions = plotOptions;
   $('#container').highcharts(json);

}