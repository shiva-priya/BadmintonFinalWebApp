function newLoad(){
    loadHome();
    homePage();
}


function homePage(){
            $.get('HomePage', {}, function(responseText) {
              //  alert(responseText);
                UIfunction(responseText);
    
            });
}

function UIfunction(responseText){

    var data = JSON.parse(responseText);
    
    var name = data.fname + " " + data.lname;
    var img = data.image;
    var ppts = data.points;
    var tm = data.team;

    var trn = data.trname;
    var tmname =  data.tmname;
    var tpts = data.pts;
    //alert(name + img + tm + ppts + tm +trn+ tmname);

    var tpl = document.createElement('div');
    tpl.setAttribute('class','tpl');
    
    var plr = document.createElement('h1');
    plr.textContent = "TOP PLAYER";


    var nm = document.createElement('h2');
    nm.textContent = name;

    var imdiv = document.createElement('img') ;
    imdiv.src = img;

    var pp = document.createElement('h2');
    pp.textContent = "Points : "+ ppts;

    var pt = document.createElement('h2');
    pt.textContent ="Team Name : "+ tm;

    tpl.appendChild(plr);
    tpl.appendChild(nm);
    tpl.appendChild(imdiv);
    tpl.appendChild(pp);
    tpl.appendChild(pt);
    document.body.appendChild(tpl);

    var ttl = document.createElement('div');
    ttl.setAttribute('class','ttl');
    
    var trnn = document.createElement('h1');
    trnn.textContent = "TOP TEAM";

    var trnname = document.createElement('h2');
    trnname.textContent = "Tournament Name : "+trn;

    var trntm = document.createElement('h2');
    trntm.textContent = "Team Name : "+tmname;

    var tpp = document.createElement('h2');
    tpp.textContent = "Points : "+ tpts;

    ttl.appendChild(trnn);
    ttl.appendChild(trnname);
    ttl.appendChild(trntm);
    ttl.appendChild(tpp);
    
    var idiv = document.createElement('div');
    idiv.setAttribute('class','info');

    var info = document.createElement('p');
   
    info.textContent = "Badminton is a racket sport played by either two opposing players (singles) or two opposing pairs (doubles), who take positions on opposite halves of a rectangular court that is divided by a net. Players score points by striking a shuttlecock with their racket so that it passes over the net and lands in their opponents' half of the court. A rally ends once the shuttlecock has struck the ground, and the shuttlecock may only be struck once by each side before it passes over the net. The shuttlecock (or shuttle) is a feathered projectile whose unique aerodynamic properties cause it to fly differently from the balls used in most racket sports; in particular, the feathers create much higher drag, causing the shuttlecock to decelerate more rapidly than a ball. Shuttlecocks have a much higher top speed, when compared to other racket sports. As the shuttlecock flight is stubbornly affected by wind, competitive badminton is always played indoors. Badminton is also played outdoors as a casual recreational activity, often as a garden or beach game. Since 1992, badminton has been an Olympic sport with five events: men's and women's singles, men's and women's doubles, and mixed doubles, in which each pair is a man and a woman. At high levels of play, the sport demands excellent fitness: players require aerobic stamina, agility, strength, speed, and precision. It is also a technical sport, requiring good motor coordination and the development of sophisticated racket movements.";
    idiv.appendChild(info);

    document.body.appendChild(ttl);
    document.body.appendChild(idiv);

 }