#Spec Form Preview for OrderCloud 

This solution produces a button on the spec form to allow users to check their work before saving the variant and adding it to the cart.

##Setup

###1. Add the Spec Form Preview module file to your project

Add the **`specFormPreview.js`** file to your project.

If you are using a repository, add this file to the **`/lib/oc`** directory.

If you are using file overrides, create a new file override named **`lib/oc/specFormPreview.js`** and add this file as the content by following these steps:

 1. Edit your 2.0 site
 2. Go to “Code Editor” tab
 3. Hit “New File Override”
 4. Name this file `lib/oc/specFormPreview.js`
 5. Place raw code in the section below. Save.

**Important!** Be sure to reference the new/updated JS file in the **`index.html`** file by following these steps:

Make sure to update lines 4 and 5 of the base index.html file with:

```html
<!--baseTagToken-->
<!--headscriptToken-->
```

 1. In Code Editor, locate your `index.html` file, hit edit.
 2. Add **`<script src="lib/oc/specFormPreview.js" data-group="resources"></script>`** in the section with “lib/oc” files. Save.

###2. Load the module into your application.
Add a dependency for  **`OrderCloud-SpecFormPreview`** to the Four51.app module in the **`js/app.js`** file by following these steps: 

 1. In Code Editor, locate your **`js/app.js`** file, hit edit.
 2. Add **'OrderCloud-SpecFormPreview'** into the file. Save

###3. Update the specFormCtrl.js file in your project.

Add the **`specFormCtrl.js`** file to your project.

If you are using a repository, add this file to the **`/js/controllers`** directory.

If you are using file overrides, create a new file override named **`js/controllers/specFormCtrl.js`** and add this file as the content by following these steps:

 1. Edit your 2.0 site
 2. Go to “Code Editor” tab
 3. Hit “New File Override”
 4. Name this file `js/controllers/specFormCtrl.js`
 5. Place raw code in the section below. Save.


##Usage

###1. Use the 'ExampleSpecForm' file as a 2.0 Spec Form template for product

 1. This directive is designed to be used in the spec form of a variable text product.
 2. Navigate to the desired product and use the **`ExampleSpecForm.html`** as a starting point for your spec form.
 3. Note the use of the directive as seen below.

```html
<specformpreview variant="Variant" product="Product" varianterrors="variantErrors" previewvariant="PreviewVariant"></specformpreview>
```
 4. Replace this section with your actual specs

```html
<!-- START YOUR SPECIFIC VARIABLE SPEC FORM -->
<div class="row">
	<div ng-class="{'col-md-4': isInPath('new'),'col-md-12': isInPath('edit')}">
		<customtextfield customfield="Variant.Specs.Name"></customtextfield>
	</div>
</div>
<div class="row">
	<div ng-class="{'col-md-4': isInPath('new'),'col-md-12': isInPath('edit')}">
		<customtextfield customfield="Variant.Specs.Title1"></customtextfield>
	</div>
</div>
<div class="row">
	<div ng-class="{'col-md-4': isInPath('new'),'col-md-12': isInPath('edit')}">
		<customtextfield customfield="Variant.Specs.Title2"></customtextfield>
	</div>
</div>
<!-- END YOUR SPECIFIC VARIABLE SPEC FORM -->
```