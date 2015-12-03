#Spending Accounts Nav for OrderCloud 

This solution will display the users first spending account in the main nav bar.

##Setup

###1. Update the Four51Ctrl file in your project
Add the **`Four51Ctrl.js`** file to your project.

If you are using a repository, add this file to the **`/js/controllers`** directory.

If you are using file overrides, create a new file override named **`js/controllers/Four51Ctrl.js`** and add this file as the content by following these steps:

 1. Edit your 2.0 site
 2. Go to “Code Editor” tab
 3. Hit “New File Override”
 4. Name this file `js/controllers/Four51Ctrl.js`
 5. Place raw code in the section below. Save.

###2. Update the Nav file in your project

Add the **`nav.html`** file to your project.

If you are using a repository, add this file to the **`/partials/controls`** directory.

If you are using file overrides, create a new file override named **`partials/controls/nav.html`** and add this file as the content by following these steps:

 1. Edit your 2.0 site
 2. Go to “Code Editor” tab
 3. Hit “New File Override”
 4. Name this file `partials/controls/nav.html`
 5. Place raw code in the section below. Save.

###3. Update the custom.css file.

 1. In Code Editor, locate your `css/custom.css` file, hit edit.
 2. Add the markup below in the “css/custom.css” file. Save.
 3. Adjust colors and sizes as needed.

```css
.spendingaccounts {
    padding: 20px 15px;
    color: #ffffff;
}
```
