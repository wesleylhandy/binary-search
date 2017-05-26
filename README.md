# Binary-Search

Currently, this repo uses a pre-sorted version of [Webster's Unabridged English Dictionary](http://www.gutenberg.org/ebooks/29765), obtained from [here](https://github.com/adambom/dictionary).

`binary-search.js` reads this file and performs binary search on the dictionary from a term entered on Node Command line.

## What is binary search?

Binary search is an algorithm that searches through a list (i.e, an array) by calculating the midpoint of the list and checking if the search term is greater or lower than the term at the midpoint. 

If the term at the middle is greater, the term below it becomes the new maximum, and a new midpoint is calculated from the bottom of the list to that new point. Alternately, if the middle term is lower, the term above it becomes the new bottom and a new midpoint is recalculated. 

This logical operation is completed until either the search term is found in the list or the low and high indices cross, which means the search term could not be found.

In terms of time complexity, this is log<sub>2</sub> n. So for a list of 8 terms, binary search should iterate no more than 3 times; for a list of 1,048,576 terms, it would take no more than 20 iterations to complete.