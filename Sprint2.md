We were able to fix problems with the go get vs go install commands. The repository for the gorilla mux package was archived as of last semester. On top of this, the go get command, to get the gorillamux package, is outdated aswell. Instead Go prompts us to use go install <repo address>@latest which results in "package is not main package" and then an error. The fix to this is to use GO111MODULE=off go get <repo url> OUTSIDE of VSCode. We were able to add other packages in the tutorial that weren't main packages aswell.
  
  For the backend tests:
  We added ability to get REST information from the front-end to the backend (add items, retrieve items).
  We added ability to use get all functions to get items from the back-end API. 

  Frontend Cypress:
  Added mounting for the compenents, as well as a specific test for the app component checking the default input for the file upload function

   In the backend, we will have two portions. One portion being the title and the second being the body. We use six functions to create the functioanlity of the backend api. Main.go starts up the functions get, post, and ping. We have the newsfeeder which has the basic functions for the backend such as adding an item onto the list and getting all items from the list. The three functions inside the handler folder are used to link up the api data with angular.
