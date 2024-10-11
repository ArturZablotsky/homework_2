undefined + 1// NaN --> undefined;
'true' == true // false --> boolean;
false == 'false' // false --> boolean;
null == '' // false --> boolean;
3 ** (9 / 3) // 27 --> number;
!!'false' == !!'true' // true --> boolean;
0 || '0' && 1 // 1 --> number;
1 < 2 < 3 // true --> boolean
'foo'+ + +'bar'// NaN --> undefined;
3 ** 2 / 3 // 3 --> number;
1 < 2 > 3 // false --> boolean;
(+null == false) < 1 // false --> boolean;
false && true || true // true --> boolean;
false && (true || true) // false --> boolean;
(+null == false) < 1 ** 5 // false --> boolean;