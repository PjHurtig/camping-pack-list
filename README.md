# Camping Pack List

This is an app for people who want to go camping but do not want to forget the essentials!
The user gets a list of suggested gear from which they can edit/add/remove according to their own preferences.

![amiresponsive](https://i.ibb.co/fvJndY0/chrome-Qkz8-Gkhg1n.png)

# Features

## Current Features

- Generate a list of essential gear
- Add “gear” to the pack-list
- Remove “gear” from the pack-list
- Edit “gear” in the pack-list
- Mark gear as “packed” (checked)
- when edit button is pressed the focus moves to the editable text
- when entering an item in the text input field you can press the add-button or press enter to add.  
- Whole app is fully responsive

## Future Features

- Approximated weight of gear (if toothbrush added “Toothbrush ~ 15grams”)
- User-added weight to gear
- Total pack-weight
- User-added Categories.
- Make profile for better suggestions (hygiene products depending on biological circumstances etc.)
- Local storage
- Choose prefilled lists (drop-down) that can be added to, for “Camping”, “Bike-packing”, “Kayak-Camping” or Empty list
- Categories within a list (Camping -> Essentials – Extra Comfort – Optional etc.) that can be removed

## User Stories

- As a user I want to get a list of suggested items to bring camping
- As a user I want to add items to the list
- As a user I want to edit gear on the list
- As a user I want to remove gear on the list
- As a user I want to check off items packed

# Design

### Colour Palette

I chose a simple colour palette that is easy on the eyes and does not take attention away from the content. Palette chosen with [mycolor](https://mycolor.space/)

![amiresponsive](https://i.ibb.co/F88mgnp/Code-P8-CElp-MPnc.png)

Background gradient generated with [cssgradient](https://cssgradient.io/)

### Typography

For headings i used "Fjalla One" and for buttons and text i used "Cantarell" since they make a nice clean font pair. (pairing chosen through [fontpair](https://www.fontpair.co/all))

![fontpair](https://i.ibb.co/PN0VJ1V/chrome-h-XB7-Wr-JD03.png)

### Imagery

![camping](https://i.ibb.co/5FJpzsJ/Untitled-2.png)

Image is from [unsplash](https://unsplash.com/photos/68YXvKCobKI) and evokes a feeling of freedom and how camping can be enjoyed when you have all the gear you need!

### Overall feel

I wanted this to be a very simple and easy to understand tool for anyone wanting to check off the essentials before their trip. No instructions needed, just a functioning pack-list with unintrusive colors and images.

## Wireframe / Initial design

### Initial wireframe

![Wireframe1](https://i.ibb.co/4Sx2xdq/wireframe1.png)

[notebook sketch](https://i.ibb.co/PcSp4Gq/wireframe2.jpg)

# Tools Used

- [balsamiq](https://balsamiq.com/) for initial wireframe
- [css gradient](https://cssgradient.io/) for background gradient
- [tinypng](https://tinypng.com/) for reducing size of image
- [gimp](https://www.gimp.org/) for cropping image
- [w3 css vaildator](https://jigsaw.w3.org/css-validator/) for validating the css file
- [w3 html vaildator](https://validator.w3.org/) for validating HTML file
- [jshint](https://jshint.com/) for testing javascript file
- [lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=sv) for checking performance and more
- [google fonts](https://fonts.google.com/) for the fonts used
- [imgbb](https://imgbb.com/) for hosting images in this readme

## Languages used

- [HTML](https://en.wikipedia.org/wiki/HTML)
- [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

# Testing

## Validator Testing

Throughout development i have contiously used theese validator services to test and adress warnings and errors in the code

- [w3 css vaildator](https://jigsaw.w3.org/css-validator/) for validating the css file
- [w3 html vaildator](https://validator.w3.org/) for validating HTML file
- [jshint](https://jshint.com/) for testing javascript file
- [lighthouse](https://chrome.google.com/webstore/detail/lighthouse/) for checking performance and more

CSS

![cssvalidator](https://i.ibb.co/pwhqbNC/chrome-SB8-Ci-W7-WZh.png)

HTML

![htmlvalidator](https://i.ibb.co/QXf5t8p/chrome-gem-Jd0-OUU3.png)

## Lighthouse Testing

### Lighthouse

![lighthouse desktop](https://i.ibb.co/JFwQmCt/chrome-n83vb8s-Ify.png)

The accessibility score is low because of the checkbox inputs generated do not have labels, the checkboxes are only used as a visual cue that the item is packed (see image below).

![label on input](https://i.ibb.co/Dpmj9R9/chrome-2-PJu-YAF3-LO.png)

## Other testing

In depth testing of functions and user stories in a separate document [Here]()

### Personal Testing

i have tested the app successully on theese devices available to me.

#### Phones

Huawei mate 20 pro

- Chrome
- Firefox

Samsung s8

- Chrome
- Firefox

#### Computers

lenovo ideapad

- Chrome
- Firefox
- Edge
- Opera

Lenovo thinkbook

- Firefox
- Edge

### Third party testing

I have gotten positive feedback on both usability and aesthetics from friends, family and professionals testing the app on their devices.

# Bugs and solutions

## Hide/Show edit/done button

I made a function to hide the edit putton when pressed and show the "done"-button instead, and vice versa. This worked very well untill i called the function from the eventlistener that made the text uneditable by keydown of "enter-key".

So even if the editing was "done" the button did not revert to "edit" as can be seen in "sleeping system" item below it is not editable (as the water item) but button has not changed.

![editbutton does not show](https://i.ibb.co/VwHB5t9/hidebutton-event.png)

i got this error mesage in dev tools console:

![hidesavebutton](https://i.ibb.co/xXbzxsc/chrome-Yk23q-HMi9x.png)

Solution: though i had connected the funtions related to the rows in the error message with parameters, there was an other eventlistener that needed to be connected for it all to work.

With help from the kind tutor Kevin i got help to understand how they needed to be connected and why.

![initial edit button eventlistener](https://i.ibb.co/K9SpJ6y/chrome-ccdp-Rq-G38-E.png)

## Early code bug

In early code i wanted to do something similar and had another bug, at that point i tried to do everything inside the same eventlistener that created both of the buttons, this resulted in invisible "done"-buttons being created every time the edit button was pressed.

This was only noticed in dev tools element view as the code seemed to work on the surface, the solution that i used then was to remove the button and create it every time so it did not stack in the code. Thankfully as i learned more about functions and the importance of refactoring code, i came up with a much better solution (not without its own complications though!).

# Deployment

## Deployment through GitHub Pages

This app was deployed through GitHub Pages using the following steps:

1. Log into [GitHub](https://github.com/).
2. Locate the [repository](https://github.com/PjHurtig/camping-pack-list).
3. Locate the settings option along the options bar.
4. Locate GitHub Pages options in the sidebar.
5. In 'Source' dropdown, select 'Master' from the branch options.
6. Click the save button.
7. After a while the link is available.

## Making a Local Clone

1. Log into [GitHub](https://github.com/).
2. Locate the [repository](https://github.com/PjHurtig/camping-pack-list).
3. Click the 'Code' dropdown above the file list.
4. Choose "Local" tab
5. Copy the "HTTPS" URL for the repository.
6. Open Git Bash on your device.
7. Change the current working directory to the location where you want the cloned directory.
8. Type git clone and the URL you copied earlier. This is what it should look like:

- $ git clone <https://github.com/PjHurtig/camping-pack-list.git>
  
9. Press Enter to create your local clone.

# Credits

## Code

- Initial code and inspiration from CodeDuck video: [youtube](https://www.youtube.com/watch?v=-pRg_daFjfk)
- Edit button (content editable) information from: [codepen](https://codepen.io/JoannaEl/pen/ZjaBvr)
- Submit on "Enter-key" keydown information from: [w3schools](https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp)

## Content

All text content made by Jonatan Hurtig (thats me, the author of this project)

## Media

Image at the top is from Guillaume Gouin on [unsplash](https://unsplash.com/photos/68YXvKCobKI)