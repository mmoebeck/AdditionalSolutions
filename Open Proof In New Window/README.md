#Open Proof In New Window for OrderCloud 

This solution will open the Proof in a neww window.  This is benificial in case of a Pageflex error.  Users will not accidently close out their session when they close the error.

##Setup

###1. Update the 'productDisplayService.js' file.

Add the **`productDisplayService.js`** file to your project.

If you are using a repository, add this file to the **`/js/services`** directory.

If you are using file overrides, create a new file override named **`js/services/productDisplayService.js`** and add this file as the content by following these steps:

 1. Edit your 2.0 site
 2. Go to “Code Editor” tab
 3. Hit “New File Override”
 4. Name this file `js/services/productDisplayService.js`
 5. Place raw code in the section below. Save.