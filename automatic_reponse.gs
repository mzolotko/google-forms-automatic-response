function sendEmailOnSubmit() {
  
  // Initialising vars and constants
  

  var email_body = '';
  var act_form = FormApp.getActiveForm();
  var act_form_id = act_form.getId()
  var formResponses = act_form.getResponses();
  
  // Extracting the reponses
  var formResponse = formResponses[formResponses.length-1];  // we choose the last response - the one just submitted with this form
  var itemResponses = formResponse.getItemResponses();
  for (var j = 0; j < itemResponses.length; j++) {
      var itemResponse = itemResponses[j];
      // extracting questions and responses
      email_body = email_body + '<b>' + itemResponse.getItem().getTitle() + '</b> <br>' +  itemResponse.getResponse() + '<br><br>';
    
  }
  
  // Extracting some information to be used in the email  
  const email_address = itemResponses[0].getResponse(); // itemResponses[0] has to be the email address
  const first_name = itemResponses[1].getResponse(); 
  const last_name = itemResponses[2].getResponse();
  const rating = itemResponses[5].getResponse();
  const new_member = (itemResponses[3].getResponse() == "New member"); // should be True or False
  
  // Choose a greeting depending on whether the applicant is returning or new
  if (new_member == true) {
      var greeting = 'Welcome to the club! '
      } else{
      var greeting = 'Welcome back, nice to see you again! '
      }
  
  
  // Composing the email
  email_body = 'Hi ' + first_name +', <br><br> Thank you for submitting the form! <br><br>' +  greeting + 'In the last question you chose number ' + 
    rating.toString() +  
                '. <br><br> The information you have provided to us: <br><br>'+ email_body + '<br>Best regards, <br> Mega Club Team';
  
  GmailApp.sendEmail(email_address, 
                     'Your form submission', 
                     '' , {htmlBody: email_body, name: 'Mega Club'});  // email to the applicant
  
  
//  GmailApp.sendEmail(['admin1@domain.com', 'admin2@domain.com'], 
//                    'New form submission - ' + first_name + ' ' + last_name, '',
//                      {htmlBody:  email_body,  name: 'Mega Club'});   // emails to the administrators
  
    
  
}
