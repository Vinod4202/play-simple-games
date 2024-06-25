
$(document).ready(function(){

    $("#btn").click(function(){
        calc();
    });

    function calc(){
        var s1 = $("#name1").val();
        var s2 = $("#name2").val();
        
        var result = flames(s1, s2);
        $("#result-text").text(result);
    
        var img_src = img_name(result);
        $("#result-img").attr("src",img_src);
        
        $(".result").fadeIn(1000);
    
        $(".tohide").hide();

        if (result == "Enemies"){
            $("#result-text").css("color","red");
        }
    
    }

    function flames(s1, s2){
        var l1 = s1.split('');
        var l2 = s2.split('');
        var t = "";
        
        for (var i = 0; i < l1.length; i++) {
            for (var j = 0; j < l2.length; j++){
                if (l1[i]==l2[j]){
                    t = t+j;
                    l2[j] = '0';
                    break;
                }
            }
            
        }
        
        var tl = s1.length+s2.length-(2*t.length);
        var f = ['f','l','a','m','e','s']
        var i=0,ct=0;
        while (i<f.length){
            ct = ct+1;
            if (f.length==1)
                break;
            if ((i==f.length-1) && (ct<tl)){
                i=0;
                continue;
            }
            if ((i==f.length-1) && (ct==tl)){
                f.splice(i,1);
                i=0;
                ct=0;
                continue;
            }
            if (ct == tl){
                f.splice(i,1);
                ct = 0;
                continue;
            }
            i++;
        }
        
        switch (f[0]) {
            case 'f':
                return "Friends";
            case 'l':
                return "Lovers";
            case 'a':
                return "Affectionate";
            case 'm':
                return "Marriage";
            case 'e':
                return "Enemies";
            case 's':
                return "Siblings";
            default:
                break;
        }
    }
    
    function img_name(result){
        switch (result[0]) {
            case 'F':
                return "F.png";
            case 'L':
                return "L.png";
            case 'A':
                return "A.jpg";
            case 'M':
                return "M.png";
            case 'E':
                return "E.jpg";
            case 'S':
                return "S.png";
            default:
                break;
        }
    }

})






