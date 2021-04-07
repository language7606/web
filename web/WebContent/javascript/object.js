let car = {



    start: function() {
        console.log('출발합니다.')
    },
    stop: function() {
        console.log('정지합니다.')
    }
}
car.name = 'Sonata'
car.model = 'Electronic'
car['weight'] = 2200;
car['color'] = 'blue'
car.start();
car.stop();

for (field in car) {
    console.log(field + '=>' + car[field])
}

let fruits = ['Apple', 'Banana', 'Cherry'];
for (let i = 0; i < fruits.length; i++) {

}

let elem = document.getElementById('list');
for (fruit of fruits) {
    let liTag = document.createElement('li');
    let text = document.createTextNode(fruit);
    liTag.appendChild(text);
    // elem.appendChild(liTag);
}

let m1 = {
    name: 'Hong',
    score: 80
}
let m2 = {
    name: 'Hwang',
    score: 90
}
let m3 = {
    name: 'Park',
    score: 70
}
let memList = document.getElementById('members');
let members = [m1, m2, m3];
for (let member of members) {
    for (let field in member) {
        // field:필드명, member[field]:값
        console.log(field, member[field]);
        let liTag = document.createElement('li');
        let text = document.createTextNode(member[field]);
        liTag.appendChild(text);
        // memList.appendChild(liTag);
    }

}
// let obj = {}; // new Object();
        // obj.color = 'white';
        // obj.price = 1000000;
        // obj.info = function () {
        //     return obj.color + ' ' + obj.price;
        // }
        // console.log(obj.color);
        // console.log(obj.price);
        // console.log(obj.info());

        // function getTime() {
        //     let show = document.getElementById('show');
        //     let time = new Date();
        //     let year = time.getFullYear();
        //     let month = time.getMonth();
        //     let date = time.getDate();
        //     let hh = time.getHours();
        //     let mm = time.getMinutes()
        //     let ss = time.getSeconds();

        //     show.innerHTML = year + '년' + (month + 1) + '월' + date + '일' +
        //         hh + ':' + mm + ':' + ss;
        // }
        // setInterval(function () {
        //     getTime();
        // }, 1000);
        // getTime();

        // let today = new Date();
        // let nowYear = today.getFullYear();

        // let theDate = new Date(nowYear, 11, 31);
        // let diffDate = theDate.getTime() - today.getTime();

        // let result = Math.ceil(diffDate / (60 * 1000 * 60 * 24));
        // document.write("점심시간이 " + result + "분 남았습니다.");
