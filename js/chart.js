


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
   }
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