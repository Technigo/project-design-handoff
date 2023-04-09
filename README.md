# Design Handoff
The objective of this project, was to closely follow a design for a landingpage made by a UX/UI design student. The landingpage should be built in React, use styled components and have some reusable components.

## The problem
This week started with a design-handoff, where we were presented with the design and had a chance to ask questions.
This project was both very fun and very challenging. One of the biggest challenges was definitely the scale of the project. It took at long time to get the layout and styling to look like the design. This particular design also included two carousels, which were new to me. After an intense struggle with an npm-package, I almost gave up on the carousels. However, I went back to it the next day, looked at some code for inspo, and managed to complete the two carousels in two different ways. 
- One with built on its own, using useState to change index and connect the index to prev/next buttons. 
- The other was built using a simple npm package. With the npm package, there were some limitations with styling (there seemed to be some default styling, that was hard to override), and I didn't quite figure out how to get around that. As a result, the progress-dots turned out way to big. But all in all, it seems to work.

I used styled components for the first time for this project, which (once I got used to it) was much easier to manage in React than vanilla CSS.

Lastly, the page also includes a form with some radio-buttons. I tried for a long time to style the radio buttons (no circle, background changes color when selected), but I could not get it to work with React/styled-components.

If I had more time, I would:
- do both carousels with an npm package.
- Figure out how to customize the styling more when using and npm package.
- Make a functional hamburger menu, as detailed in the design brief.
- Fix the radio-buttons.
- Add form validation, and hook it up to HTTPbin/Netlify Forms.

## View it live
https://keen-palmier-948cc7.netlify.app/