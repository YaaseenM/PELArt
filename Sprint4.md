Work Completed:

Frontend Unit and Cypress Tests:

Backend Unit Tests:

Backend API Documentation:
After creating our upload images backend process with MongoDB, we wanted a way to link the user and image because we wanted to identify who posted what image.
To resolve this, we created another variable called image list. Image list is an array that is now part of the user profile. Once we created the list, we did not know how
to modify the list whenever we want for a specific person. For the GO program, we only had GET and POST. I learned there were other functionalities such as
PUT, PATCH, and DELETE. We wanted to add the PATCH function as we want to find a user that had a specific name and add an image name under their image list.
I implemented the PATCH function and image list inside all the GO functions. After the implementation was done, I wanted to test if the function would work or not. I 
have also updated the other test functions to include an array of either an empty array or an array with two images in it. The patch test does full testing to see if
initializing the user works. After that, we use the patch function to make sure it correctly inputs another file to the image list.
