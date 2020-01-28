function newLoad(){
    loadHome();
  //  homePage();
}


function homePage(){
            $.get('HomePage', {}, function(responseText) {
              //  alert(responseText);
                UIfunction(responseText);
    
            });
}
