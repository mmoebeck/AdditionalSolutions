#Category Nav for OrderCloud 

This solution creates a nav bar for categories and 1st tier sub categories.

##Setup

###1. Add the Category Nav module file to your project

Add the **`categoryNav.js`** file to your project.

If you are using a repository, add this file to the **`/lib/oc`** directory.

If you are using file overrides, create a new file override named **`lib/oc/categoryNav.js`** and add this file as the content by following these steps:

 1. Edit your 2.0 site
 2. Go to “Code Editor” tab
 3. Hit “New File Override”
 4. Name this file `lib/oc/categoryNav.js`
 5. Place raw code in the section below. Save.

**Important!** Be sure to reference the new/updated JS file in the **`index.html`** file by following these steps:

 1. In Code Editor, locate your `index.html` file, hit edit.
 2. Add **`<script src="lib/oc/categoryNav.js" data-group="resources"></script>`** in the section with “lib/oc” files. Save.

###2. Load the module into your application.
Add a dependency for  **`OrderCloud-CategoryNav`** to the Four51.app module in the **`js/app.js`** file by following these steps: 

 1. In Code Editor, locate your **`js/app.js`** file, hit edit.
 2. Add **'OrderCloud-CategoryNav'** into the file. Save

###3. Add the Category Nav directive

 1. Add **`<categorynav tree="tree"></categorynav>`** anywhere in your application.

For example you may add it into the index.html file like this:

```html
<section class="hidden-print">
    <categorynav tree="tree"></categorynav>
</section>
```