/* function reverseString(s){
    var i=s.length-1;
    var ans="";
    while(i>=0)
    {
    ans+=s[i];
    i--;
    }
    return ans;
}
var res=reverseString("hello");
console.log(res); */
function reverseString(s)
{
    return s.split("").reverse().join("");
}
var res=reverseString("hello");
console.log(res);