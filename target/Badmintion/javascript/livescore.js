setTimeout(function () { 
  //  alert("reload");
    location.reload(true); }, 5000);
    

function tourLoad(){
    loadHome();
        $.get('LiveScoreUpdate', {}, function(responseText) {
           // alert(responseText);
            makeUi(responseText);
        });
}

function makeUi(responseText)
{
    var data = JSON.parse(responseText);
   // alert(data.Tournament + " hey");
    var tname = data.Tournament;
    var mid = data.MatchID;
    var t1 = data.team1;
    var t2 = data.team2;
    var st = data.SetNo;
    var p1 = data.Player1;
    var p2 = data.Player2;
    var winner = data.WONBY;
    var wptn = data.points;
    


    var sdiv = document.createElement('div');
    sdiv.setAttribute('class','sdiv');

    var tn =  document.createElement('h2');
    tn.textContent = "Tournament : " +tname;

    var midd = document.createElement('h3');
    midd.textContent = "Match ID : "+mid;

    var teams =  document.createElement('h2');
    teams.textContent = "Team " +t1 + " Vs "+ " Team "+t2;

    var set =  document.createElement('h2');
    set.textContent = "Set No : "+st;

    var plrs  =  document.createElement('h2');
    plrs.textContent = "Player " +p1 + " Vs "+ " Player "+p2;

    var wdiv = document.createElement('div');
    wdiv.setAttribute('class','wdiv');
    var won = document.createElement('h2');
    won.textContent = "WON BY : "+winner;

    wdiv.appendChild(won);
    sdiv.appendChild(tn);
    sdiv.appendChild(midd);
    sdiv.appendChild(teams);
    sdiv.appendChild(set);
    sdiv.appendChild(plrs);
    sdiv.appendChild(wdiv);

    document.body.appendChild(sdiv);

    var tdiv = document.createElement('div');
    tdiv.setAttribute('class','tdiv');

    var wpts = document.createElement('h1');
    wpts.textContent = winner +" TOTAL POINTS "+wptn;

    tdiv.appendChild(wpts);

    document.body.appendChild(tdiv);

      //alert(tname + mid + t1 + t2 + set + p1 + p2 + winner +wpts + "hello");
}
