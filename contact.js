function ssmPOST(){
    //Getting user's inputs
    var form_name_val       = document.getElementById('form_name').value;
    var form_subject_val    = document.getElementById('form_subject').value;
    var form_message_val    = document.getElementById('form_message').value;
    var form_email_val      = document.getElementById('form_email').value;
    //Data to be sent 
    let _data = {
      "form_name" : form_name_val,
      "form_subject": form_subject_val,
      "form_message": form_message_val,
      "form_email": form_email_val
    }
    //SENDING
    fetch('https://apitechcompany.herokuapp.com/api/contact-forms/Benedict', {
      method: "POST",
      body: JSON.stringify(_data),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(json => console.log(json))
    .catch((error) => {
    console.error('Error:', error)
    })
  }   