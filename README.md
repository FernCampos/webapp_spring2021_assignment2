# webapp_spring2021_assignment2

Part 1 - Google Books Project

Authors: Fernando Campos & Quy Pham

Google Books Project

Design Choices

For part 1 of assignment 2, we decided to just build off the google books classworks that we worked on in class, using the simple CSS
file that was provided to us for simple functionality. The layout is the same as well, having the submit and reset buttons right under
the "enter keyword" text input. Included are two buttons, previous and next which will show either the previous 20 books or the next
20 books based on the search query that was entered. 

Implementation details

The next and previous buttons simply change an index variable that we created, where the buttons are bounded to functions that will increment
or decrement the variable respectively, and call the searchGoogleBooks function right after with this new index value. This updates all the 
books shown on the screen. 

What is being displayed

We decided to display the thumbnail of the book as a separate list item in the HTML template. We also decided to add in the page count and the average
rating for the book if it is available. Along with that, if there are any fields that are not available in the book object, we simply do not show
those list objects, making each entry on the page simple to look at without any empty fields being shown. For the authors, we decided to show each author
as a list inside of the list so that viewers can see the list of authors in a human readable format, rather than an array object. 
