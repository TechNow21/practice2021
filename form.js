(function(){
    var form = document.getElementById('newEmail'); //The form
    var email = document.getElementById('email'); //Email input
    var submit = document.getElementById('submit'); //Submit button

    var submitted = false; //Has form been submitted?

    submit.disabled = true; //Disable submit button
    submit.className = 'disabled'; //Style submit button

//On input: Check whether or not to enable the submit button
    addEvent(email, 'input', function(e){ //On input of password
        var target = e.target || e.srcElement; //Target of event
        submit.disabled = submitted || !target.value; //Set disabled properly
        //If form has been submitted or emal has no value set CSS to disabled
        submit.className = (!target.value || submitted) ? 'disabled' : 'enabled';
    });

    //On submit: Disable the form so it cannot be sumitted again
    addEvent(form, 'submit', function(e){ //On submit
        if (submit.disabled || submitted){ //If disabled OR sent
            e.preventDefault(); //Stop from submission
            return; //Stop processing function
        } //Otherwise continue...
        submit.disabled = true; //Disable submit button
        submitted = true; //Update submitted var
        submit.className = 'disabled'; //Update style

    //Demo purposes only: What would have been sent & show submit is disabled
        e.preventDefault(); //Stop form submitting
        alert('Email is ' + email.value); //Show the text
    });
}());