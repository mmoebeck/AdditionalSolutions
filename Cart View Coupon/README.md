#Cart View Coupon for OrderCloud 

This is a brief description of the solution.

##Setup

###1. Add the Cart View Coupon module file to your project

Add the **`cartViewCoupon.js`** file to your project.

If you are using a repository, add this file to the **`/lib/oc`** directory.

If you are using file overrides, create a new file override named **`lib/oc/cartViewCoupon.js`** and add this file as the content by following these steps:

 1. Edit your 2.0 site
 2. Go to “Code Editor” tab
 3. Hit “New File Override”
 4. Name this file `lib/oc/cartViewCoupon.js`
 5. Place raw code in the section below. Save.

**Important!** Be sure to reference the new/updated JS file in the **`index.html`** file by following these steps:

 1. In Code Editor, locate your `index.html` file, hit edit.
 2. Add **`<script src="lib/oc/cartViewCoupon.js" data-group="resources"></script>`** in the section with “lib/oc” files. Save.

###2. Load the module into your application.
Add a dependency for  **`OrderCloud-CartViewCoupon`** to the Four51.app module in the **`js/app.js`** file by following these steps: 

 1. In Code Editor, locate your **`js/app.js`** file, hit edit.
 2. Add **'OrderCloud-CartViewCoupon'** into the file. Save

###3. Add the 'cartviewcoupon' directive

 1. In Code Editor, locate your `partials/cartView.html` file, hit edit.
 2. Add the markup below underneath the catelog “section” in the “partials/cartView.html” file. Save.

```html
<cartviewcoupon ng-if="user.Permissions.contains('ViewPromotions')" />
```

###4. Update the orderSummary.html file.

 1. In Code Editor, locate your `partials/controls/orderSummary.html` file, hit edit.
 2. Place raw code in the “partials/controls/orderSummary.html” file. Save.