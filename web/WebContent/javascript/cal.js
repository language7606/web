function createCal() {
    // 2021년 3월
    let today = new Date();
    let thisYear = today.getFullYear(); // 2021
    let thisMonth = today.getMonth(); // 3
    let thisDate = today.getDate(); // 6
    let thisDay = today.getDay(); // 0:일, 1:월, 2:화, 3:수, 4:목, 5:금, 6:토
    console.log(thisYear);
    console.log(thisMonth);
    console.log(thisDate);
    console.log(thisDay);

    let lastDate = new Date(thisYear, thisMonth + 1, 0).getDate(); // 이번 달 마지막 날.
    let firstDate = new Date(thisYear, thisMonth, 1); // 이번 달 1일의 요일값
    let firstDay = firstDate.getDay();
    let days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    

    document.write('<table border="1">');
    for (let i = 0; i <= 6; i++) {
        document.write('<th>' + days[i] + '</th>')
    }
    document.write('</tr><tr>');
    for (let i = 0; i < firstDay; i++) {
        document.write('<td></td>')
    }
    for (let i = 1; i <= lastDate; i++) {
        if (i % 7 == (7 - firstDay)) {
            document.write('<td>' + i + '</td></tr><tr>')
        } else if (i == thisDate) {
            document.write('<td style="background-color: yellow;">' + i + '</td>')
        } else {
            document.write('<td>' + i + '</td>')
        }
    }
    document.write('</tr></table>')
    //fistDay = 4;
}