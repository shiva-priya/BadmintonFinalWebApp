function tourLoad(){
    loadHome();
        $.get('LiveScoreUpdate', {}, function(responseText) {
            var dib = document.createElement('div');
            dib.innerText = responseText;
            dib.setAttribute('class','div');
            document.body.appendChild(dib);
            alert(responseText);
        });
}
