function sendEmailOnSubmit() {
  
  // Initialising vars and constants
  
  var emailBody = '';
  var activeForm = FormApp.getActiveForm();
  var activeFormId = activeForm.getId()
  var formResponses = activeForm.getResponses();
  
  // Extracting the reponses
  var formResponse = formResponses[formResponses.length-1];
  // we choose the last response - the one just submitted with this form
  var itemResponses = formResponse.getItemResponses();
  for (var j = 0; j < itemResponses.length; j++) {
      var itemResponse = itemResponses[j];
      // extracting questions and responses
      emailBody = emailBody + '<b>' + itemResponse.getItem().getTitle() + 
        '</b> <br>' +  itemResponse.getResponse() + '<br><br>';
    
  }
  
  // Extracting some information to be used in the email  
  const emailAddress = itemResponses[0].getResponse(); // itemResponses[0] has to be the email address
  const firstName = itemResponses[1].getResponse(); 
  const lastName = itemResponses[2].getResponse();
  const rating = itemResponses[5].getResponse();
  const newMember = (itemResponses[3].getResponse() == "New member"); // should be True or False
  
  // Choose a greeting depending on whether the applicant is returning or new
  if (newMember == true) {
      var greeting = 'Welcome to the club! '
      } else{
      var greeting = 'Welcome back, nice to see you again! '
      }
  
  
  // Composing the email
  emailBody = 'Hi ' + firstName +', <br><br> Thank you for submitting the form! <br><br>' +  
               greeting + 'In the last question you chose number ' +     rating.toString() +  
               '. <br><br> The information you have provided to us: <br><br>'+ emailBody + 
                 '<br>Best regards, <br> Mega Club Team';
  
  GmailApp.sendEmail(emailAddress, 
                     'Your form submission', 
                     '' , {htmlBody: emailBody, name: 'Mega Club'});  // email to the applicant
  
  
//  GmailApp.sendEmail(['admin1@domain.com', 'admin2@domain.com'], 
//                    'New form submission - ' + firstName + ' ' + lastName, '',
//                      {htmlBody:  emailBody,  name: 'Mega Club'});   // emails to the administrators
  
    
  
}
