#Dynamic Drop Down Lists for Two Existing Selection Specs

This solution will change the options in a Title2 variable spec based on a Title1 selection spec value. It is designed to be used in combination with the "Spec Forms With Labels" solution.

##Setup

###1. Create a Variable Text Product

The **`ExampleSpecForm.html`** markup assumes that there are 2 variable specs.
 1. Title1
 2. Title2

The options for Title1 are:
 • Colors
 • Numbers

The options for Title2 are:
 • Red
 • Blue
 • Green
 • One
 • Two
 • Three

The **`ExampleSpecForm.html`** markup uses a controller that will set the Title2 options based on the Title1 selection.