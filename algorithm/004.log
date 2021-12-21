let s = 'Monday Tuesday Wednesday Thursday Friday'
undefined
s.match(/(on|ues)|(rida)/g);
(3) ['on', 'ues', 'rida']0: "on"1: "ues"2: "rida"length: 3[[Prototype]]: Array(0)
[['on', 'ues'], ['rida']]
(2) [Array(2), Array(1)]
let 문자열 = '6746-29301-28391 신한은행'
undefined
//match(패턴)
undefined
문자열.match(/[0-9]{4}/g);
(3) ['6746', '2930', '2839']
문자열.match(/[0-9]{4,5}/g);
(3) ['6746', '29301', '28391']
//'신한은행 !!! 6746 29301 28391'
undefined
문자열.match(/[0-9]{4,5}/g).join('!!');
'6746!!29301!!28391'
문자열.match(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+/g)+'!!!'+문자열.match(/[0-9]{4,5}/g).join(' ');
'신한은행!!!6746 29301 28391'
문자열.match(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+/g)+' !!! '+문자열.match(/[0-9]{4,5}/g).join(' ');
'신한은행 !!! 6746 29301 28391'
문자열 = '[(name, leehojun), (age, 10), (height, 180), (email, paul-lab@naver.com)]'
'[(name, leehojun), (age, 10), (height, 180), (email, paul-lab@naver.com)]'
문자열.match(/\[\]/g);
null
문자열.match(/\([a-zA-Z0-9, ]\)/g);
null
문자열.match(/\([a-zA-Z0-9, ]+\)/g);
(3) ['(name, leehojun)', '(age, 10)', '(height, 180)']
문자열.match(/\([a-zA-Z0-9 ]+,[a-zA-Z0-9 ]+\)/g);
(3) ['(name, leehojun)', '(age, 10)', '(height, 180)']
문자열.match(/[a-zA-Z0-9 ]/g);
(53) ['n', 'a', 'm', 'e', ' ', 'l', 'e', 'e', 'h', 'o', 'j', 'u', 'n', ' ', 'a', 'g', 'e', ' ', '1', '0', ' ', 'h', 'e', 'i', 'g', 'h', 't', ' ', '1', '8', '0', ' ', 'e', 'm', 'a', 'i', 'l', ' ', 'p', 'a', 'u', 'l', 'l', 'a', 'b', 'n', 'a', 'v', 'e', 'r', 'c', 'o', 'm']
문자열.match(/[a-zA-Z0-9 ]+/g);
(14) ['name', ' leehojun', ' ', 'age', ' 10', ' ', 'height', ' 180', ' ', 'email', ' paul', 'lab', 'naver', 'com']
문자열.match(/[a-zA-Z0-9]+/g);
(11) ['name', 'leehojun', 'age', '10', 'height', '180', 'email', 'paul', 'lab', 'naver', 'com']
문자열.match(/\([a-zA-Z0-9, -@]+\)/g);
['(name, leehojun), (age, 10), (height, 180), (email, paul-lab@naver.com)']
문자열.match(/\([a-zA-Z0-9, -@]+\)/g).map((e)=>e.split(', '));
[Array(8)]0: Array(8)0: "(name"1: "leehojun)"2: "(age"3: "10)"4: "(height"5: "180)"6: "(email"7: "paul-lab@naver.com)"length: 8[[Prototype]]: Array(0)length: 1[[Prototype]]: Array(0)
문자열.match(/\([a-zA-Z0-9, -@]+\)/g).map((e)=>e.split(', ').remove(')').remove('('));
VM606:1 Uncaught TypeError: e.split(...).remove is not a function
    at <anonymous>:1:59
    at Array.map (<anonymous>)
    at <anonymous>:1:36
(익명) @ VM606:1
(익명) @ VM606:1
문자열.match(/\([a-zA-Z0-9, -@]+\)/g).map((e)=>e.replace(')', '').replace('(', '').split(', ');
VM721:1 Uncaught SyntaxError: missing ) after argument list
문자열.match(/\([a-zA-Z0-9, -@]+\)/g).map((e)=>e.replace(')', '').replace('(', '').split(', '));
[Array(8)]0: Array(8)0: "name"1: "leehojun"2: "(age"3: "10)"4: "(height"5: "180)"6: "(email"7: "paul-lab@naver.com)"length: 8[[Prototype]]: Array(0)length: 1[[Prototype]]: Array(0)
문자열.match(/\([a-zA-Z0-9, -@]+\)/g).map((e)=>e.replace(/)/g, '').replace(/)/g, '').split(', '));
VM754:1 Uncaught SyntaxError: Invalid regular expression: /)/: Unmatched ')'
문자열.match(/\([a-zA-Z0-9, -@]+\)/g).map((e)=>e.replace(/\)/g, '').replace(/\)/g, '').split(', '));
[Array(8)]0: Array(8)0: "(name"1: "leehojun"2: "(age"3: "10"4: "(height"5: "180"6: "(email"7: "paul-lab@naver.com"length: 8[[Prototype]]: Array(0)length: 1[[Prototype]]: Array(0)
문자열.match(/\([a-zA-Z0-9, -@]+\)/g).map((e)=>e.replace(/\)/g, '').replace(/\(/g, '').split(', '));
[Array(8)]0: Array(8)0: "name"1: "leehojun"2: "age"3: "10"4: "height"5: "180"6: "email"7: "paul-lab@naver.com"length: 8[[Prototype]]: Array(0)length: 1[[Prototype]]: Array(0)