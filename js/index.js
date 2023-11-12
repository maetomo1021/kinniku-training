var test = "";
var syozaiti = document.getElementById("itizyouhou");
var kizaizyouhou = document.getElementById("tanmatu");
// Syozaiti.innerHTML ="dadada";


/* 日にち、曜日の取得 */
window.addEventListener("DOMContentLoaded", function () {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var date = today.getDate();
    var day = today.getDay();
    var weekday = new Array("日", "月", "火", "水", "木", "金", "土");
    if (month <= 9) { month = "0" + month; }
    if (date <= 9) { date = "0" + date; }
    // $("p.date").html(year + "年" + month + "月" + date + "日" + "(" + weekday[day] + ")");
    var Hiniti = document.getElementById("date").innerHTML = ("今日の日付は：" + year + "年" + month + "月" + date + "日" + "(" + weekday[day] + ")")
    // console.log(Hiniti)
    const Nengappi = (year + "年" + month + "月" + date + "日" + "(" + weekday[day] + ")")
    //Canvasのオブジェクトの作成
    // var canvas = document.getElementById("canvas-area")
    // var ctx= canvas.getContext('2d');     
});


/* 位置情報の取得 */
window.addEventListener("DOMContentLoaded", function () {
    // alert("触ったな（#^ω^）");
    // var position =  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    if (navigator.geolocation) {
        // Geolocation APIをサポートしている場合の処理
        console.log("hello")
        const watchId = navigator.geolocation.watchPosition(success, error);

        function success(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log(latitude)
            console.log(longitude)
            a = ("緯度：" + longitude + "軽度" + latitude)
            // 取得した位置情報を活用する処理
        }

        function error(error) {
            alert("リンゴユーザーはお使いいただけません(o^―^o)")
            // 位置情報の取得に失敗した場合の処理
        }
    } else {
        // Geolocation APIをサポートしていない場合の処理
        console.log("No")
    }


});


/* 端末情報の取得 */
window.addEventListener("DOMContentLoaded", function () {
    const browserName = navigator.appName;
    const browserVersion = navigator.appVersion;
    const osName = navigator.platform;

    console.log("ブラウザ名: " + browserName);
    console.log("ブラウザバージョン: " + browserVersion);
    console.log("OS名: " + osName);
    // location.href = "https://www.google.co.jp/maps/place/35%C2%B041'29.5%22N+139%C2%B041'48.3%22E/@35.6915291,139.6941813"
    console.log("111111111111111111111111")
    console.log(syozaiti)
    console.log(kizaizyouhou)

})
