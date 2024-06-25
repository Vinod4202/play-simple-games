
$(document).ready(function(){
    var imgs=["chars/winry.png","chars/alphonse.png","chars/Edward.png","chars/hawkaye.png","chars/maychang.png","chars/mustang.png"];
    
    var fimgs=imgs.concat(imgs);
    for (i in fimgs){
        var j=Math.floor(Math.random()*fimgs.length);
        var k=Math.floor(Math.random()*fimgs.length);
        
        [fimgs[j],fimgs[k]]=[fimgs[k],fimgs[j]];
    }

    
    var c=0,temp,s=1,set=true,count=0,moves=15,score=0;
    $(".block").click(function(){
        var bg=$(this).css("background-image");
            $(".note").text("");
            if(set && bg.includes("chars/bgw.png")){
                var i=$(".block").index(this);
                $(this).css("background-image","url("+fimgs[i]+")");
                
                c++;
                if (c==2){
                    set=false;
                    moves--;
                    $(".moves #num1").text(String(moves));

                    if (fimgs[i]!=fimgs[temp]){
                        $(".note").text("Try again!")
                        setTimeout(function() {
                            $(".block").css("background-image",'url("chars/bgw.png")');
                            set=true;
                            
                        }, 1000);
                    }
                    else{
                        $(".note").text("Matched!");
                        score+=10;
                        $(".score #num").text(String(score));
                        count++;
                        var self=this;
                        
                        s=0;
                        setTimeout(function() {
                            
                            $(self).hide();
                            $(".block").eq(temp).hide();
                            set=true;  
                            
                        }, 1000);
                    }
                    c=0;
                }
                
                if (s!=0){
                    temp=i;
                }
                s=1;
            }
            setTimeout(function() {
                            
                if (count>=6 || moves==0){
                    if (count>=6){
                        $(".mnote").text("Yahoo! Winner!\nScore:"+String(score+(moves*12)));
                    }
                    else{
                        $(".mnote").text("Game Over!");
                    }
                    
                    $(".container table").hide();
                    $(".mnote").css("height","500px");
                    $(".mnote").css("font-size","70px");
                    $(".reset").css("width","200px");
                    $(".reset").css("height","50px");
                } 
                
            }, 1000);
            
            
    })
    
    
})
