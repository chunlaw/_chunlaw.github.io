var barChartOptions = {
    responsive: true,
    segmentShowStroke: false,
    animateRotate: true,
    animateScale: false,
    percentageInnerCutout: 50,
    multiTooltipTemplate: "<%if (datasetLabel){%><%=datasetLabel%>: <%}%><%= value %>"
}

var lineChartOptions = function ( inPercentage ){
    return {
        // responsive: true,
        bezierCurve: false,
        tooltipTemplate: "<%=datasetLabel%>: <%= value %>" + (inPercentage == true ? "%" : "")
    }
};

var datasetsTemplate = function (label, color, data) {
    return { label: label,
             fillColor : "rgba("+color+",0.5)",
             strokeColor : "rgba("+color+",0.8)",
             highlightFill : "rgba("+color+",0.75)",
             highlightStroke : "rgba("+color+",1)",
             data: data
            }
}

var dabDatasets = function (values){
    return datasetsTemplate ( "民建聯", "15,110,180", values );
};

var ftuDatasets = function (values){
    return datasetsTemplate ( "工聯會", "220,0,20", values);
};

var nwscDatasets = function (values){
    return datasetsTemplate ( "街工", "250,250,105", values);
};

var independentDatasets = function (values){
    return datasetsTemplate ( "獨立", "100,100,100", values);
}

var dpDatasets = function ( values ){
    return datasetsTemplate ( "民主黨", "50,180,145", values);
}

var cpDatasets = function ( values ){
    return datasetsTemplate ( "公民黨", "130,65,150", values  )
}

var randomScalingFactor = function(){ return Math.round(Math.random()*100)};

var KHElectionData = {
    labels : ["2003","2007","2011","2015"],
    datasets :[ dabDatasets( [887,1011,null,null] ),
                ftuDatasets( [null, 768, 1944, 1139] ),
                nwscDatasets( [2627,2221,2606,2931])
    ]
}

var KFElectionData = {
    labels: ["2003","2007","2011","2015"],
    datasets :[ 
        independentDatasets ([257,null,null,null]),
        dabDatasets ( [615,null,null,null] ),
        datasetsTemplate ("南溪行", "160,0,255", [null, 594, null, null]),
        datasetsTemplate ("綠黨","35,130,90", [null,null,387,null]),
        datasetsTemplate ("勞聯", "0,130,60", [null, null, null, 1624]),
        nwscDatasets ( [4512, 3858, 3944, 3301] )
    ]
}

var KSEElectionData = {
    labels: ["2007","2008","2011","2015"],
    datasets :[
        independentDatasets ([null,null,null,75]),
        independentDatasets ([null,null,null,677]),
        datasetsTemplate ("葵青民生動力", "0,150,255", [1192,1099, null, null]),
        dabDatasets ( [null ,1451, 1894, 1833] ),
        nwscDatasets ( [2355,1356, 3469, 3212])
    ]
}

var KCNElectionData = {
    labels: ["2011","2015"],
    datasets: [
        independentDatasets ( [75,null] ),
        dabDatasets ( [843, 1617 ] ),
        nwscDatasets ( [1752,2195] )
    ]
}

var KCSElectionData = {
    labels: ["2003","2007","2011","2015"],
    datasets: [
        independentDatasets ( [149, null, null, null] ),
        independentDatasets ( [205, null, 191, null] ),
        datasetsTemplate ( "婦聯", "210,10,140", [null,821,null,null] ),
        dpDatasets ( [1314,734, null, null] ),
        dabDatasets ( [809, null, 573, 1790] ),
        nwscDatasets ( [null, 1410, 1150, 2320] ),
    ]
}

var KSWElectionData = {
    labels: ["2011","2015"],
    datasets: [
        cpDatasets ( [1379,null] ),
        ftuDatasets ( [3239,3157] ),
        nwscDatasets ( [null, 2146] )
    ]
}

var SYElectionData= {
    labels: ["2003","2007"],
    datasets: [
        dabDatasets ( [1744,1437] ),
        nwscDatasets ( [2332,3062] )
    ]
}

var OYElectionData= {
    labels: ["2003","2007"],
    datasets: [
        dabDatasets ( [1232, null] ),
        ftuDatasets ( [null, 2929] ),
        nwscDatasets ( [3290,2014] )
    ]
}

var SPKElectionData= {
    labels: ["2003"],
    datasets: [
        independentDatasets ( [2324] ),
        nwscDatasets ( [1385] )
    ]
}

var CKElectionData= {
    labels: ["2011","2015"],
    datasets: [
        independentDatasets ( [190,632] ),
        nwscDatasets ( [1443,null] ),
        ftuDatasets ( [1848,2423] ),
    ]
}

var NWSCElectionData = {
    labels: ["2003","2007","2008","2011","2015"],
    datasets: [ {
                  label: "總票數",
                  fillColor : "rgba(250,250,105,0.2)",
                  strokeColor : "rgba(250,250,105,1)",
                  pointColor : "rgba(250,250,105,1)",
                  pointStrokeColor : "#fff",
                  pointHighlightFill : "#fff",
                  pointHighlightStroke : "rgba(250,250,105,1)",
                  data : [14146,14920,1356,14364,16105]
                }
    ]
}

var NWSCPercentElectionData = {
    labels: [ "2003", "2007", "2008", "2011", "2015" ],
    datasets: [ {
                    label: "各區整合總支持度",
                    fillColor : "rgba(250,250,105,0.2)",
                    strokeColor : "rgba(250,250,105,1)",
                    pointColor : "rgba(250,250,105,1)",
                    pointStrokeColor : "#fff",
                    pointHighlightFill : "#fff",
                    pointHighlightStroke : "rgba(250,250,105,1)",
                    data : [73.83, 61.13, 34.72, 64.34, 57.48]
                }
              ]
}
