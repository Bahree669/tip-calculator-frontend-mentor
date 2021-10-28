# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
-   [Author](#author)

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for the app depending on their device's screen size
-   See hover states for all interactive elements on the page
-   Calculate the correct tip and total cost of the bill per person

### Screenshot

[Here is the mobile view screenshot](./screenshot/mobile-view.png)

### Links

-   Solution URL: [www.google.com]
-   Live Site URL: [https://bahree669.github.io/tip-calculator-app-main/](see the project live)

## My process

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   CSS Grid
-   Mobile-first workflow
-   JavaScript

### What I learned

-   I learn how to get form value using JavaScript

```js
function returnVal() {
    return document.querySelector(".val").value;
}
```

```js
const radio = document.getElementsByName("radio-name");
radio.forEach((el) => {
    el.addEventListener("click", (e) => {
        let data = e.target.value;
    });
});
```

### Continued development

This is my first project in using javascript language. It is so challenging and fun 😍 and I learn a lot of new cool stuff. There is a lot of stuff I need to learn (again) to make myself less strugling in the future project. 😊

## Author

<!-- - Website - [Add your name here](https://www.your-site.com) -->

-   Frontend Mentor - [@Bahree669](https://www.frontendmentor.io/profile/Bahree669)
-   Twitter - [@bahree69](https://twitter.com/bahree69)
