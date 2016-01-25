#Auto Select Shipper for OrderCloud 

This solution will automaticly select a shipper when an address is selected on an order.

##Setup

###1. Update the ordershipping file to your project

Add the **`ordershipping.js`** file to your project.

If you are using a repository, add this file to the **`/js/directives`** directory.

If you are using file overrides, create a new file override named **`js/directives/ordershipping.js`** and add this file as the content by following these steps:

 1. Edit your 2.0 site
 2. Go to “Code Editor” tab
 3. Hit “New File Override”
 4. Name this file `js/directives/ordershipping.js`
 5. Place raw code in the section below. Save.


##Usage

###1. Load the module into your application.
Update "DEFAULTSHIPPERNAME" on lines "138" and "166" to the name of the shipper assigned to your buyer that you wish to use as the default shipper.


##Optional Usage
You may choose to hide the shipper selection from the end user entirely.  This may be done if there is to only be 1 shipper option that must be selected and the user is not given another choice.

###1. Update the orderShipping file to your project

Add the **`orderShipping.html`** file to your project.

If you are using a repository, add this file to the **`/partials/controls`** directory.

If you are using file overrides, create a new file override named **`partials/controls/orderShipping.html`** and add this file as the content by following these steps:

 1. Edit your 2.0 site
 2. Go to “Code Editor” tab
 3. Hit “New File Override”
 4. Name this file `partials/controls/orderShipping.html`
 5. Place raw code in the section below. Save.