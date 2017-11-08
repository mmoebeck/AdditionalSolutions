#Featured Products for OrderCloud 

This solution creates a row containing up to 4 featured products to be used on the home screen.

##Setup

###1. Add the Category Nav module file to your project

Add the **`featuredProducts.js`** file to your project.

If you are using a repository, add this file to the **`/lib/oc`** directory.

If you are using file overrides, create a new file override named **`lib/oc/featuredProducts.js`** and add this file as the content by following these steps:

 1. Edit your 2.0 site
 2. Go to “Code Editor” tab
 3. Hit “New File Override”
 4. Name this file `lib/oc/featuredProducts.js`
 5. Place raw code in the section below. Save.

**Important!** Be sure to reference the new/updated JS file in the **`index.html`** file by following these steps:

 1. In Code Editor, locate your `index.html` file, hit edit.
 2. Add **`<script src="lib/oc/featuredProducts.js" data-group="resources"></script>`** in the section with “lib/oc” files. Save.

###2. Load the module into your application.
Add a dependency for  **`OrderCloud-FeaturedProducts`** to the Four51.app module in the **`js/app.js`** file by following these steps: 

 1. In Code Editor, locate your **`js/app.js`** file, hit edit.
 2. Add **'OrderCloud-FeaturedProducts'** into the file. Save

###3. Add the Featured Products directive

 1. In Code Editor, locate your `partials/categoryView.html` file, hit edit.
 2. Add the markup below underneath the catelog “section” in the “partials/categoryView.html” file. Save.

```html
<div ng-if="isActive('catalog')">
    <featuredproducts></featuredproducts>
</div>
```

###4. Update the custom.css file.

 1. In Code Editor, locate your `css/custom.css` file, hit edit.
 2. Add the markup below in the “css/custom.css” file. Save.
 3. Adjust colors and sizes as needed.

```css
.featured-well {
    margin-bottom: 0px;
    border: 1px solid #cccccc;
}
.featured-image {
	max-height: 150px;
}
.featured-name {
    background-color: #cccccc;
    color: #ffffff;
    margin-bottom: 20px;
}
```
