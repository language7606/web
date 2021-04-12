let xhtp = new XMLHttpRequest();
xhtp.onreadystatechange = function () {
    console.log(xhtp.readyState, xhtp.status);
    if (xhtp.readyState == 4 && xhtp.status == 200) {
        console.log(xhtp.responseText);
        let data = JSON.parse(xhtp.responseText);
        console.log(data);
        for (obj of data) { // 0, .... 14
            for (field in obj) { // id, first_name, last_name...
                console.log(field, obj[field]);
            }
        }
    }
}
xhtp.open('get', 'MOCK_DATA.json');
xhtp.send();

let xhtp = new XMLHttpRequest();
        xhtp.onreadystatechange = function () {
            //4 : request(요청) finished and response(응답) is ready
            //200 : server status : 'OK'
            if (xhtp.readyState == 4 && xhtp.status == 200) {
                console.log(xhtp.responseXML);
                let doc = xhtp.responseXML;
                let rows = doc.getElementsByTagName('record');
                for (let i = 0; i < rows.length; i++) {
                    console.log(rows[i].children[0].innerHTML,
                        rows[i].children[1].innerHTML,
                        rows[i].children[2].innerHTML,
                        rows[i].children[3].innerHTML,
                        rows[i].children[4].innerHTML,
                        rows[i].children[5].innerHTML
                    );
                }
            }
        }
        xhtp.open('get', 'dataset.xml');
        xhtp.send();