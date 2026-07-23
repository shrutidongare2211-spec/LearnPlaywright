let a = 5;
console.log(a++ + ++a - --a + a-- + ++a); //5 + 7 - 6 + 6 + 6 = 18
//a++ = 5 , a = 6, 
//++a = 7, a = 7, 
//--a = 6, a = 6, 
//a-- = 6, a = 5 , 
//++a = 6, a = 6 
console.log(a); //6