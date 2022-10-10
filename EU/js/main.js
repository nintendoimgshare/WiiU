function auto_scroll(scroll_width){
    var ua = navigator.userAgent;
    ua = navigator.userAgent;
    if (ua.indexOf("3DS", 0) >= 0) {
        window.scroll(0, scroll_width);
    }
}

/* ã‚µãƒ–ãƒŸãƒƒãƒˆãƒœã‚¿ãƒ³ã‚’ç„¡åŠ¹ã«ã™ã‚‹(é€£æ‰“å¯¾å¿œ) */
function disableSubmit(window) {
    var forms = window.document.forms;
    for (var formIdx = 0; formIdx < forms.length; formIdx++) {
        var elements = forms[formIdx].elements;
        for (var i = 0; i < elements.length; i++) {
         elements[i].blur();
         if (elements[i].type == 'submit' || elements[i].type == 'button') {
              elements[i].disabled = true;
         } else if (elements[i].type == 'text') {
              //elements[i].readOnly = true;
              elements[i].disabled = true;

              // ã‚³ãƒ¡ãƒ³ãƒˆå†…å®¹ã‚’åŒåã®hiddenè¦ç´ ã‚’ä½œã£ã¦POST
              var sub   = window.document.createElement('input');
              sub.type  = 'hidden';
              sub.name  = elements[i].name;
              sub.value = elements[i].value;

              var ex_form = window.document.getElementsByClassName('input-area');
              ex_form[0].appendChild(sub);

         }
         
        }
    }
}


