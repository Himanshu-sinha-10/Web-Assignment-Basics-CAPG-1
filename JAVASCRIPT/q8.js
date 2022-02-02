function isPalindrome(s){
    var n=s.length;
    var i=0
    while(i<=n)
    {
        if(s[i]==s[n-1])
        {
            i++;
            n--;
        }
        else return false;
    }
    return true;
}
console.log(isPalindrome("nitin"));