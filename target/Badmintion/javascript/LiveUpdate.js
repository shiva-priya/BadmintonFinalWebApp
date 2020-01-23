//root
function LiveLoad(){
loadHome();
var maindiv = document.createElement('div');
maindiv.setAttribute('class','main');
document.body.appendChild(maindiv);


//staring three parts div
var liveupdateContainer = document.createElement('div');
liveupdateContainer.setAttribute('class','starting');
maindiv.appendChild(liveupdateContainer);



//matchnumber

var matchno=document.createElement('p');
matchno.textContent="Match ID:";


var matchnobox = document.createElement('input');
matchnobox.setAttribute('type','text');
matchnobox.setAttribute('class','textbox');

liveupdateContainer.appendChild(matchno);
matchno.appendChild(matchnobox);


//select teams

var match=document.createElement('p');
match.textContent="Match between";
var dropdown=document.createElement('select');
dropdown.setAttribute('class','dropbox');
dropdown.setAttribute('id','teamADrop');
var option_ptb=document.createElement('option');
option_ptb.textContent="Team A";

liveupdateContainer.appendChild(match);
liveupdateContainer.appendChild(dropdown);
dropdown.appendChild(option_ptb);
// dropdown.appendChild(option1);
// dropdown.appendChild(option2);
// dropdown.appendChild(option3);
// dropdown.appendChild(option4);


var dropdown2=document.createElement('select');
dropdown2.setAttribute('class','dropbox');
dropdown2.setAttribute('id','teamBDrop');
var option_t=document.createElement('option');
option_t.textContent="Team B";





liveupdateContainer.appendChild(dropdown2);
dropdown2.appendChild(option_t);
// dropdown2.appendChild(option_1);
// dropdown2.appendChild(option_2);
// dropdown2.appendChild(option_3);
// dropdown2.appendChild(option_4);

//select players

var players=document.createElement('p');
players.textContent="Select Players";


var dropdownp1=document.createElement('select');
dropdownp1.setAttribute('class','dropbox');
dropdownp1.setAttribute('id','Aplayers');

var option_pta=document.createElement('option');
option_pta.textContent="Team A";



liveupdateContainer.appendChild(players);
liveupdateContainer.appendChild(dropdownp1);
dropdownp1.appendChild(option_pta);



var dropdownp2=document.createElement('select');
dropdownp2.setAttribute('class','dropbox');

dropdownp2.setAttribute('id','Bplayers');
var option_ptb=document.createElement('option');
option_ptb.textContent="Team B";



liveupdateContainer.appendChild(dropdownp2);
dropdownp2.appendChild(option_ptb);




//sets

var pointstable=document.createElement("div")
pointstable.setAttribute('class','pointstable');
pointstable.style.padding = "20px";
var setLabel = document.createElement('label');
setLabel.textContent = "SET 1 : ";
var pointstext1 = document.createElement('input');
pointstext1.setAttribute('type','text');
pointstext1.setAttribute('class','textbox');

var pointstext2 = document.createElement('input');
pointstext2.setAttribute('type','text');
pointstext2.setAttribute('class','textbox');
pointstext2.style.margin = "20px";
var pointstext3 = document.createElement('input');
pointstext3.setAttribute('type','text');
pointstext3.setAttribute('placeholder','RESULT');
var  Button3 = document.createElement('input');
pointstext3.setAttribute('class','textbox');
Button3.setAttribute('type','submit');
Button3.setAttribute('value','submit');
Button3.setAttribute('class','button');

maindiv.appendChild(pointstable);
pointstable.appendChild(setLabel);
pointstable.appendChild(pointstext1);
pointstable.appendChild(pointstext2);
pointstable.appendChild(pointstext3);
pointstable.appendChild(Button3);

var pointstable2=document.createElement("div")
pointstable2.setAttribute('class','pointstable2');
pointstable2.style.padding = "20px";
var setLabel2 = document.createElement('label');
setLabel2.textContent = "SET 2 : ";
var pointstext_1 = document.createElement('input');
pointstext_1.setAttribute('type','text');
pointstext_1.setAttribute('class','textbox');
var pointstext_2 = document.createElement('input');
pointstext_2.setAttribute('type','text');
pointstext_2.style.margin = "20px";
pointstext_2.setAttribute('class','textbox');
var pointstext_3 = document.createElement('input');
pointstext_3.setAttribute('type','text');
pointstext_3.setAttribute('class','textbox');
pointstext_3.setAttribute('placeholder','RESULT');
var  Button2 = document.createElement('input');
Button2.setAttribute('class','button');
Button2.setAttribute('type','submit');
Button2.setAttribute('value','submit');

maindiv.appendChild(pointstable2);
pointstable2.appendChild(setLabel2);
pointstable2.appendChild(pointstext_1);
pointstable2.appendChild(pointstext_2);
pointstable2.appendChild(pointstext_3);
pointstable2.appendChild(Button2);


var pointstable3=document.createElement("div");
pointstable3.setAttribute('class','pointstable3');
pointstable3.style.padding = "20px";
var setLabel3 = document.createElement('label');
setLabel3.textContent = "SET 3 : ";
var pointstext1_1 = document.createElement('input');
pointstext1_1.setAttribute('type','text');
pointstext1_1.setAttribute('class','textbox');
var pointstext1_2 = document.createElement('input');
pointstext1_2.setAttribute('type','text');
pointstext1_2.setAttribute('class','textbox');
pointstext1_2.style.margin = "20px";
var pointstext1_3 = document.createElement('input');
pointstext1_3.setAttribute('type','text');
pointstext1_3.setAttribute('class','textbox');
pointstext1_3.setAttribute('placeholder','RESULT');
var  sButton = document.createElement('input');
sButton.setAttribute('class','button');
sButton.setAttribute('type','submit');
sButton.setAttribute('value','submit');
maindiv.appendChild(pointstable3);
pointstable3.appendChild(setLabel3);
pointstable3.appendChild(pointstext1_1);
pointstable3.appendChild(pointstext1_2);
pointstable3.appendChild(pointstext1_3);

pointstable3.appendChild(sButton);

}

function getTeams(lis,id){
   
    for(let i = 0;i<list.length;i++){
     // console.log(lis[i]);
     // console.log(id);
     var option1_ptb=document.createElement('option');
     option1_ptb.setAttribute('id','optnB'+String(i));
     option1_ptb.textContent=list[i];
    // option1_ptb.setAttribute('onclick','setTeam('teamBDrop')');
     document.getElementById('teamBDrop').appendChild(option1_ptb);
    }
    
}

function setTeam(id1){
    var name = document.getElementById(id1).value;
    var opt = name.options[name.selectedIndex];
    console.log("text = "+opt.text);
    console.log("value = "+opt.value);
}


$(document).ready(function(){
    $("#teamADrop").one('click',function(){

    
          $.get('GetTeamsA',{} 
          , function(responseText) {
                list = JSON.parse(responseText);
                
               if(list.length > 0){
                   console.log("1");
                   for(let i = 0;i<list.length;i++){
                    // console.log(lis[i]);
                    // console.log(id);
                    var option1_ptb=document.createElement('option');
                    option1_ptb.setAttribute('id','optnA'+String(i));
                    option1_ptb.textContent=list[i];
                   // option1_ptb.setAttribute('onclick','setTeam('teamADrop')');
                    document.getElementById('teamADrop').appendChild(option1_ptb);
                    console.log("2");
                    }
                    $(document).ready(function(){
                        $("#Aplayers").one('click',function(){
                    
                        
                              $.get('GetPlayersA',{
                                    team : $("#teamADrop").val()
                              } 
                              , function(responseText) {
                                    list = JSON.parse(responseText);
                                    
                                   if(list.length > 0){
                
                                    var s = document.getElementById('Aplayers');
                                  
                                    for(let i = 0;i<list.length;i++){
                                          // console.log(lis[i]);
                                          // console.log(id);
                                          var option1_ptb=document.createElement('option');
                                          option1_ptb.setAttribute('id','optnA'+String(i));
                                          option1_ptb.textContent=list[i];
                                         // option1_ptb.setAttribute('onclick','setTeam('teamADrop')');
                                          document.getElementById('Aplayers').appendChild(option1_ptb);
                                          console.log("2");
                                          } 
                                    
                                    
                                   }
                                    else{
                                          alert(responseText);
                                          
                                    }
                              });
                         });
                        });
            
                    
                }
            
                else{
                      alert(responseText);
                      
                }
          });
     });
    });

    $(document).ready(function(){
        $("#teamADrop").one('click',function(){
    
        
              $.get('GetTeamsA',{} 
              , function(responseText) {
                    list = JSON.parse(responseText);
                    
                   if(list.length > 0){

                    var s = document.getElementById('teamBDrop');
                  
                       getTeams();   
                       $(document).ready(function(){
                        $("#Bplayers").one('click',function(){
                    
                        
                              $.get('GetPlayersA',{
                                    team : $("#teamBDrop").val()
                              } 
                              , function(responseText) {
                                    list = JSON.parse(responseText);
                                    
                                   if(list.length > 0){
                
                                    var s = document.getElementById('Bplayers');
                                  
                                    for(let i = 0;i<list.length;i++){
                                          // console.log(lis[i]);
                                          // console.log(id);
                                          var option1_ptb=document.createElement('option');
                                          option1_ptb.setAttribute('id','optnA'+String(i));
                                          option1_ptb.textContent=list[i];
                                         // option1_ptb.setAttribute('onclick','setTeam('teamADrop')');
                                          document.getElementById('Bplayers').appendChild(option1_ptb);
                                          console.log("2");
                                          }
                                    
                                    
                                   }
                                    else{
                                          alert(responseText);
                                          
                                    }
                              });
                         });
                        });
                    
                   }
                    else{
                          alert(responseText);
                          
                    }
              });
         });
        });
    
       
           
      
    
