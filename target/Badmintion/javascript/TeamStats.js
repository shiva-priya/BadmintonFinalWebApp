function teamStats(){
    loadHome();
    var d = document.cookie.split(";");
    var dat = d[0].split("=");
    //alert(dat[1]);
   
        $.get('TeamStats', {
            data : dat[1]
        }, function(responseText) {
           // e.preventDefault();

                 // alert(responseText);
                 // e.preventDefault();
                 //console.log(cookie);

                 // console.log(responseText);
             if(responseText.length>0 && responseText !== "null"){
                // console.log(responseText)
                //alert(responseText);

                        UIfunction(responseText);
                      }
              else{
                    alert(responseText);
                    window.location.replace("playerReg.html");
              }
        });
}


function UIfunction(details){

   // var team = JSON.stringify(details);
   var maindiv = document.createElement('div');
        maindiv.setAttribute('class','maindiv');

     var tem = JSON.parse(details);
   //  alert("teams"+tem);
  // alert(team.Name);
   for(let i=0;i<Object.keys(tem).length;i++){
    var team = tem[i];
    var name = team.teamName;
   // alert(name);
   var teamId = team.tId;
   var MatchesPlayed = team.MatchesPlayed;
   var wins = team.wins;
   var losses = team.lost;
   
   var points = team.teamPoints;
   var tour = team.tournamentName;

         var x = document.createElement('div');
         x.setAttribute('class','bdiv');


         var tagdiv = document.createElement('span');
         tagdiv.setAttribute('class','tagdiv');

         

         var nameT = document.createElement('h1');
         nameT.textContent = name;

         var genderT = document.createElement('h4');
         genderT.textContent ="wins : " + wins;

         var mplT = document.createElement('h4');
         mplT.textContent ="Matches Played : " + MatchesPlayed;

         var teamT = document.createElement('h3');
         teamT.textContent ="losses : " + losses;

         var pointsT = document.createElement('h3');
         pointsT.textContent ="Points : " + points;

         tagdiv.appendChild(nameT);
         tagdiv.appendChild(pointsT);
        
         tagdiv.appendChild(mplT);
         tagdiv.appendChild(teamT);
         
         tagdiv.appendChild(genderT);

         x.appendChild(tagdiv);

        // i++;

         maindiv.appendChild(x);
     }
     maindiv.style.display = "block";
     document.body.appendChild(maindiv);
}