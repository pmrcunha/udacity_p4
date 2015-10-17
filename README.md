## Website Performance Optimization portfolio project

This repository includes websites which I optimized for speed, as a project for Udacity's Front End nanodegree. A list of optimizations follows underneath.

### Running the project

To run the websites, you can simply visit this [Github Page](http://pmrcunha.github.io/udacity_p4/).

### Optimizations

####Index.html

1. Inlining all the CSS, JS and images.
_Note: While the CSS is render blocking and effectively was a hinder to the page's performance, the JS and the images didn't need to be inlined, and inlining them could be a problem if they weren't such small files. In this case inlining them too was of no relevance to performance and it allowed me to automate the task with a plugin._

####pizza.html

1. Refactoring some functions to avoid forced synchronous layouts. Namely, I changed them so that they did all DOM queries first, and then applied all style changes in a single batch.
2. Using requestAnimationFrame in the functions that did style changes, to make the animation run smoothly, executing the functions before painting the next frame.
3. Minifying CSS and JS.

####All Pages

1. Compressing all the images, and resizing those that were not adjusted to their display size.
2. Minifying all the HTML files.
_Note: This also minifies the CSS and JS that is inlined in index.html_

The code was separated into production (build) and source (src) code. Tasks were automated using GruntJS.

### Dependencies

+ _grunt_
+ _grunt-contrib-cssmin_
+ _grunt-contrib-htmlmin_
+ _grunt-contrib-imagemin_
+ _grunt-contrib-uglify_
+ _grunt-inline-css_