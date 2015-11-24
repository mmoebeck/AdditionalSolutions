#Fix for 1.0 link builder to 2.0 app

The 2.0 app does not always load completly when users access the app through a 1.0 link builder link.  This fix resolves the issue.

##Setup

###1. Update the userEditCtrl file in your project

Update the **`userEditCtrl.js`** file in your project.

If you are using a repository, update this file in the **`/js/controllers`** directory.

If you are using file overrides, create a new file override named **`js/controllers/userEditCtrl.js`** and add this file as the content by following these steps:

 1. Edit your 2.0 site
 2. Go to “Code Editor” tab
 3. Hit “New File Override”
 4. Name this file `js/controllers/userEditCtrl.js`
 5. Place raw code in the section below. Save.