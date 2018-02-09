

## SplitQuick

SplitQuick Live! [](https://splitquick.herokuapp.com/)

**SplitQuick** is an expense tracking application that is inspired by Splitwise. Created using Ruby on Rails for the backend, a PostgreSQL database , and  React/Redux for the frontend, SplitQuick enables users to quickly and accurately keep track of debts between themselves and other users.

### Features


#### Account Creation and Login
  The homepage allows new users to create a new account by clicking the button labeled Get Started Now!, which will take them to the sign up page requesting they pick a username and password.

  Returning users can click the Log in button on the navbar located at the top of the screen. Clicking the Log in button also gives the user the option to login as a guest by clicking the Demo Log in button.

   <img src='images/Screen Shot 2018-02-09 at 2.48.51 PM.png'>

#### Current Friends List and New Friend Search

  After users log in to their account a side bar will display all of the users current friends. Bellow the list of current friends users have the option of searching for new friends under the Add Friends section. The friend search will auto-populate once the user begins typing their friends name, displaying all usernames that match. Clicking on the username will add it to the current friends list.

  <img src='images/Screen Shot 2018-02-09 at 3.09.09 PM.png' width=200px>

#### Expenses List

  By clicking All expenses located on the sidebar users can view all of their bills listed out in chronological order with the most recent bills listed on top. Each listed bill will show the date it was recorded along with the description and amount that the user is owed or owes. Coloring the amount the user owes(orange) as well as the amount they are owed(green) allows for easy and quick interpretation of each bill. Deleting a bill is as easy as clicking the red trash can icon. Deleting bills should be done cautiously as deleting a bill will delete it for you *and* the other user you share it with.

  <img src='images/Screen Shot 2018-02-09 at 3.07.33 PM.png' >



#### Adding Bills
  A user can add a bill by clicking on the Add a Bill button and selecting who the bill is with from the drop down list of all the users friends (if the user is on an individual friend's page this will default to that friend), entering a brief description of the bill, an amount and who paid.

<img src='images/Screen Shot 2018-02-09 at 3.09.42 PM.png'>


#### Friend Show Page

  Users can see all of the expenses they have with specific friends by clicking on their username in the Friends section of the sidebar.

  Friends can be deleted from the friends list by clicking the small trash can icon by the side of the friends username.

<img src='images/Screen Shot 2018-02-09 at 3.14.35 PM.png'>


### Features to be Added

  * Dividing bills among multiple people.

  * Creating Groups that share common expenses.

  * Commenting on individual bills.
