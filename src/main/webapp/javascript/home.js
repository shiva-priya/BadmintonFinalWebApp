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
    

    document.body.appendChild(ttl);

 }