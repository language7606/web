let names = []; // new Array();
names[0] = 'Hong';
names.push('주성원');
names.push('홍길동');
names.unshift('박길동');

delete names[0]; // 값을 지움.
names.pop(); // 제일 뒤쪽 요소부터 제거.
names.shift(); // 제일 앞쪽 요소부터 제거.

for (let i = 0; i < names.length; i++) {
    console.log(i, names[i]);
}
let ns = names.join(',');
console.log(ns);

ns = names.reverse();
names.push('김길동');

ns = names.slice(1, 2);
console.log(ns);
console.log(names);