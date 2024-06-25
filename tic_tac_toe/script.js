$(document).ready(function()
{
    $(".btn").click(function restart(){
        for (let i = 1; i <=9; i++) {
            s="#b"+String(i)+" .block"
            console.log($(s).text(""))
        }
        $(".block").css("color","#333")
        $("#note").css("background-color","#534d4d")
        $("#note").text(ch+" Turn")
        set=true
        $(".block").css("background-color","#12aa84a1")
    })
    
    var set=true
    var ch='X'
    $(".block").click(function(){
        if (set)
        {
            if($(this).text()==""){
                $(this).text(ch)
                if (ch=='X'){  
                    ch='O'
                    $("#note").text("O Turn")
                }
                else{
                    $(this).css("color","white")
                    ch='X'
                    $("#note").text("X Turn")
                }
    
            }
            if (check()=="win"){
                var win=$(this).text()+"  WINNER!"
                $("#note").text(win)
                $("#note").css("background-color","#1bbd64")
                set=false
            }
            if (check()=="tie"){
                var tie="XO  DRAW!"
                $("#note").text(tie)
                $("#note").css("background-color","#c43f55")
            }

        }
        
    });

    function check(){
        b1=$("#b1").text()
        b2=$("#b2").text()
        b3=$("#b3").text()
        b4=$("#b4").text()
        b5=$("#b5").text()
        b6=$("#b6").text()
        b7=$("#b7").text()
        b8=$("#b8").text()
        b9=$("#b9").text()


        function win_color(b1,b2,b3){
                $(b1+" .block").css('background-color','#e4abc1')
                $(b2+" .block").css('background-color','#e4abc1')
                $(b3+" .block").css('background-color','#e4abc1')

        }
        if (b1!="" && b2!="" && b3!=""){
            if (b1==b2 && b2==b3){
                win_color("#b1","#b2","#b3")
                
                return "win"
            }
        }
        if (b4!="" && b5!="" && b6!=""){
            if (b4==b5 && b5==b6){
                win_color("#b4","#b5","#b6")
                return "win"
            }
        }
        if (b7!="" && b8!="" && b9!=""){
            if (b7==b8 && b8==b9){
                win_color("#b7","#b8","#b9")
                return "win"
            }
        }
        if (b1!="" && b5!="" && b9!=""){
            if (b1==b5 && b5==b9){
                win_color("#b1","#b5","#b9")
                return "win"
            }
        }
        if (b3!="" && b5!="" && b7!=""){
            if (b3==b5 && b5==b7){
                win_color("#b3","#b5","#b7")
                return "win"
            }
        }
        if (b1!="" && b4!="" && b7!=""){
            if (b1==b4 && b4==b7){
                win_color("#b1","#b4","#b7")
                return "win"
            }
        }
        if (b2!="" && b5!="" && b8!=""){
            if (b2==b5 && b5==b8){
                win_color("#b2","#b5","#b8")
                return "win"
            }
        }
        if (b3!="" && b6!="" && b9!=""){
            if (b3==b6 && b6==b9){
                win_color("#b3","#b6","#b9")
                return "win"
            }
        }
        if (b1!="" && b2!="" && b3!="" && b4!="" && b5!="" && b6!="" && b7!="" && b8!="" && b9!="")
        {
            return "tie"
        }
    }
    
});