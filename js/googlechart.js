window.addEventListener("DOMContentLoaded",
  function () {
    var trainingdata = document.getElementById("trainingForm");
    trainingdata.addEventListener("submit", function (event) {
      event.preventDefault();//form 送信のキャンセル
      var trainingName = document.getElementById().value
    });

    //必要なパッケージの読み込み
    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      //オプション設定
      var options = {
        'title': 'サンプルチャート',
        'width': window.innerWidth,
        'height': window.innerHeight
      };
      //月別データ
      var data = google.visualization.arrayToDataTable([
        ['月', '数量'],
        ['１月', 65],
        ['２月', 59],
        ['３月', 80],
        ['４月', 81],
        ['５月', 56],
        ['６月', 55],
        ['７月', 48]
      ]);
      var stage = document.getElementById('graph-area');
      //グラフの種類を設定
      var chart = new google.visualization.ColumnChart(stage);
      //データとオプションを設定
      chart.draw(data, options);
    }


    // fetch()が鍵　Javascriptの関数？らしい




  });

