Work Completed for Front-end: Added file upload functionality, added component to be displayed on the front page pulling all file data from the mongodb server and displaying them alongside the link. Remade the Profile page to allow file uploading alongside a progress bar. Cleaned up a couple issues and bugs, navigation from home bug fixed.

Work Completed for Back-end: Added a way to link the images uploaded to the user who has uploaded. This is done by creating an image list on a user profile that holds all the file names of the images they have uploaded. I created a PATCH function that could allow us to update the image list whenever the user has uploaded a new image.
This allows us know on the front-end who has upload what image. Updated old test cases to have the image list in them, and added another test to make sure the PATCH 
function works.

Front-end test cases: 
Gets, Types and asserts: Tests to see if the page runs, tests to see if navigation bar is displaying properly 
Routes: Tests to see if routing is working properly, checks url to make sure it is correct, also tests routing through the navbar dropdown 
Signup/Login works: Tests to see if routing to signup works, enters mock values for signup page, and runs the signup method to see if it properly posts to the api. Then routes to the login page and tests the login method to make sure it properly gets values from the api to check if the user exists. Also checks to see if login properly routes when the method is successful 
Profile posting through api and through text field: Tests to see if the post and get methods works through the profile page Also added mounting for most components for component testing
Uploadfile through mongodb server/uploadFile api, tests to make sure file gets uploaded and checks to make sure all files are properly being displayed on the front page

Back-end test cases: 
User profile insert: Test to see if we can insert an object into the api. Preiously of Sprint 4, we tested using three items. Now, it tests for four items where one of them is an array. It will return an error if the items were unable to be added to the api. 
User profile get all: Test to see if we can retrieve all objects inside the user profile api. The test will fail if no items were retrieved from the user profile api. File Uploads: Test to see if the file has been uploaded to MongoDB. This will return an error if the files were not uploaded to MongoDB. 
File Downloads: Test if we could download the image from the image api. This will return an error if the program was unable to download the image from the image api. File Lists: Shows a list of files inside the MongoDB. If there are no files, return an error. This can also be seen by looking inside MongoDB directly. 
User image list update: Uses the PATCH function inside GO. We create a user profile. After, we want add another item to the image list of that specific user. We check if the specifc user has been updated with the new image list.

Backend API Documentation:
After creating our upload images backend process with MongoDB, we wanted a way to link the user and image because we wanted to identify who posted what image.
To resolve this, we created another variable called image list. Image list is an array that is now part of the user profile. Once we created the list, we did not know how to modify the list whenever we want for a specific person. For the GO program, we only had GET and POST. I learned there were other functionalities such as
PUT, PATCH, and DELETE. We wanted to add the PATCH function as we want to find a user that had a specific name and add an image name under their image list.
I implemented the PATCH function and image list inside all the GO functions. After the implementation was done, I wanted to test if the function would work or not. I 
have also updated the other test functions to include an array of either an empty array or an array with two images in it. The patch test does full testing to see if
initializing the user works. After that, we use the patch function to make sure it correctly inputs another file to the image list.

Steps for running tests:
Make sure to open command prompt
Run the Node.JS upload images:node src/server.js (Runs on localhost:8082)
Run GO test cases: go test -cover ./...
Run GO API: go run httpd/main.go


