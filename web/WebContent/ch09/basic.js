//basic.js
var fruit = 'Cherry';
document.write('<h1>hello</h1>');
fruit = ['Cherry', 'Strawberry', 'Melon'];
document.write('<ul>');
document.write('<li>Apple</li>');
document.write('<li>Banana</li>');
for(var i=0; i<fruit.length; i++){
    document.write('<li>' + fruit[i] + '</li>');
}
document.write('<li>'+fruit+'</li>');
document.write('</ul>');



console.log('1');

var img1 = document.getElementById('img1');
console.log(img1);

console.log('2');

function turn_on() {
    var bulbon = 10;
    bulbon = 'hello';
    bulbon = document.getElementById('img1');
    bulbon.setAttribute('class','img');
    bulbon.setAttribute('src','http://www.w3schools.com/js/pic_bulbon.gif')
    console.log(bulbon);
}
function turn_off() {
    img = 'screen';
    console.log(img);
    var bulboff = document.getElementById('img1');            
    bulboff.setAttribute('src','http://www.w3schools.com/js/pic_bulboff.gif')
}
turn_off();

console.log(img);