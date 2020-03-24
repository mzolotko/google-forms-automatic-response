# google-forms-automatic-response
A template script to customise automatic responses sent by Google Forms


Google Forms is a very useful tool for collecting standardised information from numerous people. Often you want to send a response to the form submitter, first of all to remind what information he/she has submitted, and second, possibly to provide further instructions based on the submitted information. Google does provide the possibility to send all answers to the submitter in an email, but to customise the text of this email some scripting in Google Script is necessary.

This script is a simplified version of a script I wrote for a membership form of one public speaking club. 
The Google Form at the following link:  https://forms.gle/DWfG5hzp5vFyaby18 is a simplified version of this membership form.
The script in automatic_response.gs is the script that runs behind this Google Form.

The script sends a personalised email to the submitter using the provided email address, greeting him/her differently based on the choice he/she made, using his/her first name and mentioning explicitly one of the responses in the email text. In addition, a list of all questions and responses is also part of the email.

In order to be able to use the script, follow these steps:

1. Recreate the form at the link above in your Google account.
1. In the upper menu click on three dots -> Script editor.
1. In the script editor you should see the file Code.js containing an empty function definition - replace all code with the content of automatic_response.gs.
1. Change the name of the project (in the upper-left corner) from Untitled project to some meaningful name.
1. In the upper menu of the Script editor, click on the clock symbol (Current project's triggers).
1. Click on Add Trigger
1. Make sure that sendEmailOnSubmit (the name of the function you created) is selected in the first drop-down list ("Choose which function to run"). "From form" should be selected in the "Select event source" list. Select "On form submit" in the "Select event type" list.
1. Click on Save, if prompted, confirm that you trust this script
1. Try submitting the form, for testing purposes try indicating an email address that is different from the address of your Google account.
