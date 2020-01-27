function tourLoad(){
    loadHome();
        $.get('LiveScoreUpdate', {}, function(responseText) {
            alert(responseText);
            makeUi(responseText);
           



        });
}

function makeUi(responseText)
{
    var data = JSON.parse(responseText);
    alert(data.Tournament + " hey");
    var tname = data.Tournament;
    var mid = data.MatchID;
    var t1 = data.team1;
    var t2 = data.team2;
    var set = data.SetNo;
    var p1 = data.Player1;
    var p2 = data.Player2;
    var winner = data.WONBY;
    var wptn = data.points;


    var sdiv = document.createElement('div');

    var tn =  document.createElement('h2');
    tn.textContent = "Tournament : " +tname;

    var midd = document.createElement('h3');
    midd.textContent = "Match ID : "+mid;

    var teams =  document.createElement('h2');
    teams.textContent = "Team " +t1 + " Vs "+ " Team "+t2;

    var plrs  =  document.createElement('h2');
    teams.textContent = "Player " +p1 + " Vs "+ " Player "+p2;

    var won = document.createElement('h2');
    won.textContent = "Won By : "+winner;

    sdiv.appendChild(tn);
    sdiv.appendChild(midd);
    sdiv.appendChild(teams);
    sdiv.appendChild(plrs);
    sdiv.appendChild(won);

    document.body.appendChild(sdiv);

    var tdiv = document.createElement('div');

    var wpts = document.createElement('h1');
    wpts.textContent = "WIN TEAM TOTAL POINTS : "+wptn;

    tdiv.appendChild(wpts);

    document.body.appendChild(tdiv);

      alert(tname + mid + t1 + t2 + set + p1 + p2 + winner +wpts + "hello");
}
