google.load('visualization', '1', {'packages': ['geochart']});
google.setOnLoadCallback(drawRegionsMap);
function drawRegionsMap() {
    var data_bb = google.visualization.arrayToDataTable([["City","Point"],["hokkaido",5],["aomori",2],["iwate",3],["miyagi",3],["akita",4],["yamagata",4],["fukushima",1],["ibaraki",1],["tochigi",3],["gunma",1],["saitama",2],["chiba",1],["tokyo",2],["kanagawa",1],["niigata",5],["toyama",1],["ishikawa",1],["fukui",6],["yamanashi",3],["nagano",4],["gifu",2],["shizuoka",2],["aichi",1],["mie",1],["shiga",4],["kyoto",2],["osaka",2],["hyogo",7],["nara",1],["wakayama",2],["tottori",2],["shimane",6],["okayama",1],["hiroshima",2],["yamaguchi",4],["tokushima",1],["kagawa",4],["ehime",4],["kochi",1],["fukuoka",4],["saga",5],["nagasaki",6],["kumamoto",1],["oita",2],["miyazaki",1],["kagoshima",2],["okinawa",5]]);
    var data_hc = google.visualization.arrayToDataTable([["City","Point"],["hokkaido",4],["aomori",2],["iwate",2],["miyagi",3],["akita",2],["yamagata",4],["fukushima",1],["ibaraki",1],["tochigi",3],["gunma",1],["saitama",2],["chiba",2],["tokyo",4],["kanagawa",1],["niigata",4],["toyama",1],["ishikawa",1],["fukui",5],["yamanashi",3],["nagano",1],["gifu",3],["shizuoka",5],["aichi",2],["mie",2],["shiga",4],["kyoto",1],["osaka",1],["hyogo",7],["nara",1],["wakayama",1],["tottori",2],["shimane",4],["okayama",1],["hiroshima",2],["yamaguchi",6],["tokushima",1],["kagawa",5],["ehime",4],["kochi",1],["fukuoka",5],["saga",6],["nagasaki",4],["kumamoto",1],["oita",1],["miyazaki",1],["kagoshima",2],["okinawa",4]]);
    var data_hm = google.visualization.arrayToDataTable([["City","Point"],["hokkaido",7],["aomori",1],["iwate",3],["miyagi",3],["akita",3],["yamagata",3],["fukushima",3],["ibaraki",1],["tochigi",2],["gunma",1],["saitama",2],["chiba",1],["tokyo",2],["kanagawa",1],["niigata",5],["toyama",1],["ishikawa",1],["fukui",4],["yamanashi",3],["nagano",4],["gifu",2],["shizuoka",4],["aichi",1],["mie",1],["shiga",4],["kyoto",2],["osaka",1],["hyogo",7],["nara",1],["wakayama",2],["tottori",4],["shimane",5],["okayama",1],["hiroshima",1],["yamaguchi",4],["tokushima",1],["kagawa",4],["ehime",4],["kochi",1],["fukuoka",6],["saga",7],["nagasaki",4],["kumamoto",1],["oita",1],["miyazaki",1],["kagoshima",3],["okinawa",5]]);
    
    var chart_width = 560;
    var chart_height = 350;

    var options = {
        region:'JP',
        resolution:'provinces',
        colorAxis: {colors: ['#ff0000', '#ffffff']},
        width: chart_width,
        height: chart_height
    };

    var chart_bb = new google.visualization.GeoChart(document.getElementById('chart_bb'));
    chart_bb.draw(data_bb, options);
    var chart_hc = new google.visualization.GeoChart(document.getElementById('chart_hc'));
    chart_hc.draw(data_hc, options);
    var chart_hm = new google.visualization.GeoChart(document.getElementById('chart_hm'));
    chart_hm.draw(data_hm, options);

    document.getElementById("chart_bb").style.display = "block";
    document.getElementById("chart_hc").style.display = "none";
    document.getElementById("chart_hm").style.display = "none";

    var obj = document.getElementById('magazine');
    obj.onchange = function() {
        document.getElementById("chart_bb").style.display = "none";
        document.getElementById("chart_hc").style.display = "none";
        document.getElementById("chart_hm").style.display = "none";
        var i = obj.selectedIndex;
        var v = obj.options[i].value;
        if (v == 1) {
            document.getElementById("chart_bb").style.display = "block";
        } else if (v == 2) {
            document.getElementById("chart_hc").style.display = "block";
        } else if (v == 3) {
            document.getElementById("chart_hm").style.display = "block";
        }
    }
};
