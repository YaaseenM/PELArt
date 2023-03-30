Work completed for Sprint 3:

Frontend Work: Cleaned up the home page and modified the signup and login methods to properly talk to the api, added a post method to the profile component for making text posts to the page through GET and POST on the api, added ui for uploading files but still working on functionality between frontend and backend. 

Front-end test cases: 
Gets, Types and asserts: Tests to see if the page runs, tests to see if navigation bar is displaying properly
Routes: Tests to see if routing is working properly, checks url to make sure it is correct, also tests routing through the navbar dropdown
Signup/Login works: Tests to see if routing to signup works, enters mock values for signup page, and runs the signup method to see if it properly posts to the api. Then routes to the login page and tests the login method to make sure it properly gets values from the api to check if the user exists. Also checks to see if login properly routes when the method is successful
Profile posting through api and through text field: Tests to see if the post and get methods works through the profile page
Also added mounting for most components for component testing

Back-end test cases:

Documentation for backend API:
Previously for Sprint 2, we created a newsfeed api that was able to hold two items:title and post. You were able to get and post new newsfeed items onto the website using command. We first tested this api using newsfeed_test.go to see if the api is able to operate using all the function correctly. In addition, we created a localhost with Go to demostate it on a local host website. We later implemented the newsfeed inside Angular as a user login. Since we were able to connect the GO newsfeed api to angular, we are now can add more items to the api at a time. We have updated the api to three items opposed to two, and we have also tailored it towards a login page by changing the naming conventions. The names are now fullnamme, email, and password. After updating the user profile api, we wanted to focus on creating an image api. At first, we attempted to work with Go, however, this became difficult to pass images around to different classes while holding it sinde an api. We were able to handle one image at a time, but it does not have the ability to hold multiple images simultaneously as an api should. To  fix this issue, we decided to use Node.js to create our backend api for images. Not only could it create an api for images, but alos connect to a database called MongoDB. Howevewe were only able to link MongoDB to local servers. We are still trying to work on uploading it to the cloud on the MongoDB website.
