#Spec Form Directives for OrderCloud 2.0

This is a repository of useful AngularJS directives for OrderCloud 2.0 including usage for spec forms and product detail templates. Similar directives are already included in the OrderCloud Storefront reference application and are annotated below where the alternative storefront method is available. 

##Setup
###1. Add module file to your project.
Add the **`ordercloud-specforms.js`** file to your project.

If you are using a repository, we suggest adding this file to the **`/lib/oc`** directory.

If you are using file overrides, create a new file override named **`lib/oc/ordercloud-specforms.js`** and add this file as the content by following these steps:

 1. Edit your 2.0 site
 2. Go to “Code Editor” tab
 3. Click “New File Override”
 4. Name this file **`lib/oc/ordercloud-specforms.js`**
 5. Place raw code from **`ordercloud-specforms.js`**  in the section below. Save.

###2. Reference the script.
**Important!** Be sure to reference the new/updated JS files in the **`index.html`** file by following these steps:

 1. In Code Editor, locate your index.html file, hit edit. 
 2. Add `<script src="lib/oc/ordercloud-specforms.js" data-group="resources"></script>` in the section with “lib/oc” files. 
 3. Add the external script reference for the octextboxfield.  Add `<script src="//cdn.ckeditor.com/4.4.7/basic/ckeditor.js" data-group="cdn"></script>`. 
 4. Save

###3. Load the module into the application.
Inject the module into your app.module function.  For example, add a dependency for `OrderCloud-SpecForms` to the Four51.app module in the **`js/app.js`** file by following these steps. 

 1. In Code Editor, locate your **`js/app.js`** file, hit edit. 
 2. Add **‘OrderCloud-SpecForms’** into the file.
 3. Save.

# Directives

## ocmaskfield

A directive that allows for masking input for variable specs. The key difference between this directive and the angular directive "ui-mask" is that the value will include the mask characters. 

- Properties
  - customfield: Required property. Specify the variable spec
  - label: Optional property. Specify the label.
  - mask: Required property. Specify the mask signature. Ex: 999-***-aaa
  - hideprefix: Boolean value. If set to "true" prefix text will be hidden
  - hidesuffix: Boolean value. If set to "true" suffix text will be hidden
- Example usage
  - ``` <ocmaskfield customfield='Variant.Specs.Phone' label='Custom' mask='999.999.9999 x999'></ocmaskfield>```
- Notes
  - The plugin is an angular implementation of the Masked Input plugin for jQuery @ http://digitalbush.com/projects/masked-input-plugin/#license
  
## occasefield

A directive that enforces case specified for variable specs.  

- Properties
  - customfield: Required property. Specify the variable spec
  - label: Optional property. Specify the label.
  - placeholder: Optional property. Specify the placeholder.
  - case: Required property. Specify the case to enforce. Options: 'upper', 'lower'
  - hideprefix: Boolean value. If set to "true" prefix text will be hidden
  - hidesuffix: Boolean value. If set to "true" suffix text will be hidden
- Example usage
  - ``` <occasefield customfield='Variant.Specs.Name' label='Custom' case='upper'></occasefield>```

## octitlefield

A directive that enforces Title Case specified for variable specs.  

- Properties
  - customfield: Required property. Specify the variable spec
  - label: Optional property. Specify the label.
  - placeholder: Optional property. Specify the placeholder.
  - hideprefix: Boolean value. If set to "true" prefix text will be hidden
  - hidesuffix: Boolean value. If set to "true" suffix text will be hidden
- Example usage
  - ``` <octitlefield customfield='Variant.Specs.Name' label='Custom'></octitlefield>```

## octextfield

A directive for generic text input. When the variable spec property contains multiple lines a textarea element is added to the DOM rather than a one line text input control. If the field has a mask value, such as for Custom Order Fields and Custom User Fields, the value will include the mask characters. 

- Properties
  - customfield: Required property. Specify the variable spec
  - label: Optional property. Specify the label.
  - placeholder: Optional property. Specify the placeholder.
  - hideprefix: Boolean value. If set to "true" prefix text will be hidden
  - hidesuffix: Boolean value. If set to "true" suffix text will be hidden
- Example usage
  - ``` <octextfield customfield='Variant.Specs.SpecName' label='Custom'></octextfield>``` 
- *Alternative Method in Storefront*
  - ``` <customtextfield customfield='Variant.Specs.SpecName'></customtextfield>``` 

## ocemailfield

A directive for generic email input. If the field has a mask value, such as for Custom Order Fields and Custom User Fields, the value will include the mask characters. 

- Properties
  - customfield: Required property. Specify the variable spec
  - label: Optional property. Specify the label.
  - placeholder: Optional property. Specify the placeholder.
  - hideprefix: Boolean value. If set to "true" prefix text will be hidden
  - hidesuffix: Boolean value. If set to "true" suffix text will be hidden
- Example usage
  - ``` <ocemailfield customfield='Variant.Specs.SpecName' label='Custom'></ocemailfield>```

## ocselectionfield

A directive for select lists. The result is a dropdown control that contains all of the options defined in the spec properties. This directive also accommodates the "Other" option functionality. 

- Properties
  - customfield: Required property. Specify the variable spec
  - label: Optional property. Specify the label.
  - hideprefix: Boolean value. If set to "true" prefix text will be hidden
  - hidesuffix: Boolean value. If set to "true" suffix text will be hidden
- Example usage
  - ``` <ocselectionfield customfield='Variant.Specs.Options' label='Custom'></ocselectionfield>```
- *Alternative Method in Storefront*
  - ``` <customselectionfield customfield='Variant.Specs.SpecName'></customselectionfield>``` 

## ocfilefield

A directive to the HTML5 File Upload control with Variable Specs. This directive utilizes the HTML5 File API to upload the content chosen in the proper format to the API. It also exposes the delete and replace functionality. It is only compatible with IE10+ and all evergreen browsers. IE9 does not support the HTML5 File API.

- Properties
  - customfield: Required property. Specify the variable spec
  - label: Optional property. Specify the label.
- Example usage
  - ``` <ocfilefield customfield='Variant.Specs.Photo' label='Custom'></ocfilefield>```
- *Alternative Method in Storefront*
  - ``` <customfilefield customfield='Variant.Specs.SpecName'></customfilefield>``` 

## ocdatefield

A directive to provide a calendar control for date selection. The spec must be a text type for this to work properly.  

- Properties
  - customfield: Required property. Specify the variable spec
  - label: Optional property. Specify the label.
  - hideprefix: Boolean value. If set to "true" prefix text will be hidden
  - hidesuffix: Boolean value. If set to "true" suffix text will be hidden
  - format: The format for displayed dates. Defaults to 'MM/dd/yyyy'
- Example usage
  - ``` <ocdatefield customfield='Variant.Specs.StartDate' label='Custom' format='dd-MM-yyyy'></ocdatefield>```
- *Alternative Method in Storefront*
  - ``` <customdatefield customfield='Variant.Specs.SpecName'></customdatefield>``` 

## octimefield

A directive to utilize the Angular Bootstrap [http://angular-ui.github.io/bootstrap/#/timepicker] timepicker directive for time of day selection in conjunction with the Spec. The spec must be a text type for this to work properly. The value is converted to an ISO string for compatibility with the API.

- Properties
  - customfield: Required property. Specify the variable spec
  - label: Optional property. Specify the label.
  - hideprefix: Boolean value. If set to "true" prefix text will be hidden
  - hidesuffix: Boolean value. If set to "true" suffix text will be hidden
- Example usage
  - ``` <octimefield customfield='Variant.Specs.StartTime' label='Custom'></octimefield>```
- *Alternative Method in Storefront*
  - ``` <customtimefield customfield='Variant.Specs.SpecName'></customtimefield>``` 

## occheckboxfield

A directive to expose a checkbox control and apply the defined value to the Spec. 

- Properties
  - customfield: Required property. Specify the variable spec
  - label: Optional property. Specify the label.
  - checked: The value assigned to the spec when the control state is checked
  - unchecked: The value assigned to the spec when the control state is not checked
  
- Example usage
  - ``` <occheckboxfield customfield='Variant.Specs.Approved' label='Custom' checked='Yes' unchecked='No'></occheckboxfield>```
- *Alternative Method in Storefront*
  - ``` <customcheckboxfield customfield='Variant.Specs.SpecName' checked='unchecked'></customcheckboxfield>``` 

## octextboxfield

A directive to create a ckeditor on the page and bind it to a model.
- Properties
  - ng-model: This is the value you want to bind to.

- Example usage
  ```html 
  <label>Custom Label</label>
  <textarea octextboxfield ng-model="Variant.Specs.SpecName.Value"></textarea> 
  ```

- Important Note: if you are using the octextboxfield, in the index file you need to add an extra script:
```
<script src="//cdn.ckeditor.com/4.4.7/basic/ckeditor.js" data-group="cdn"></script>
```
