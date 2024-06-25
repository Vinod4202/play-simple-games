function calc(){
    var s1=document.getElementById("name1").value;
    var s2=document.getElementById("name2").value;
    var t=0,l=0;
    Array.from("true").forEach(i => {
        t=t+count(i,s1)+count(i,s2);
    });
    Array.from("love").forEach(i => {
        l=l+count(i,s1)+count(i,s2);
    });
    tl=String(t)+String(l)+"%";
    document.getElementById("number").innerHTML=tl;
    document.getElementById("number").style.color='white';
}
function count(c,str){
    return Array.from(str).filter(char => char === c).length;

}