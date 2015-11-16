#ngFader by Jason Voirin

This is a pre-built solution for OrderCloud using https://github.com/jasonvoirin/ngFader

##Setup

###1. Add the ngFader module file to your project

Add the **`ngFader.js`** file to your project.

If you are using a repository, add this file to the **`/lib/oc`** directory.

If you are using file overrides, create a new file override named **`lib/oc/ngFader.js`** and add this file as the content by following these steps:

 1. Edit your 2.0 site
 2. Go to “Code Editor” tab
 3. Hit “New File Override”
 4. Name this file `lib/oc/ngFader.js`
 5. Place raw code in the section below. Save.

**Important!** Be sure to reference the new/updated JS file in the **`index.html`** file by following these steps:

 1. In Code Editor, locate your `index.html` file, hit edit.
 2. Add **`<script src="lib/oc/ngFader.js" data-group="resources"></script>`** in the section with “lib/oc” files. Save.

###1.5 Add the ngFader css file to your project

Add the **`ngFader.css`** file to your project.

If you are using a repository, add this file to the **`/css`** directory.

If you are using file overrides, create a new file override named **`css/ngFader.css`** and add this file as the content by following these steps:

 1. Edit your 2.0 site
 2. Go to “Code Editor” tab
 3. Hit “New File Override”
 4. Name this file `css/ngFader.css`
 5. Place raw code in the section below. Save.

**Important!** Be sure to reference the new/updated JS file in the **`index.html`** file by following these steps:

 1. In Code Editor, locate your `index.html` file, hit edit.
 2. Add **`<link rel="stylesheet" href="css/ngFader.css" data-group="source" />`** in the head along with the other “css” links. Save.

###2. Load the module into your application.
Add a dependency for  **`OrderCloud-ngFader`** to the Four51.app module in the **`js/app.js`** file by following these steps: 

 1. In Code Editor, locate your **`js/app.js`** file, hit edit.
 2. Add **'OrderCloud-ngFader'** into the file. Save

###3. Customize the ngFader.js file

 1. In Code Editor, locate your `lib/oc/ngFader.js` file, hit edit.
 2. Update the images variable as seen below to match up with the images you wish to use. Save.

```javascript
scope.images = [{
	src: 'img/fader-images/1.png',
	alt: 'The Beach'
}, {
	src: 'img/fader-images/2.png',
	alt: 'The Beach'
}, {
	src: 'img/fader-images/3.png',
	alt: 'The Beach'
}, {
	src: 'img/fader-images/4.png',
	alt: 'The Beach'
}, {
	src: 'img/fader-images/5.png',
	alt: 'The Beach'
}, {
	src: 'img/fader-images/6.png',
	alt: 'The Beach'
}];
```

###4. Add the 'ng-fader' directive

 1. In Code Editor, locate your `partials/partialName.html` file, hit edit.
 2. Add the markup below underneath the catelog “section” in the “partials/partialName.html” file. Save.

```html
<div>
    <ng-fader></ng-fader>
</div>
```