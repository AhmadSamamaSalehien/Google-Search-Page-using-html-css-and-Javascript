# Google-Search-Page-using-html-css-and-Javascript

I made 2 version of this project this one is made by using html, css and javascript only the other version is made using html, css, javascript and php

Google Search Clone Project

Overview

This project is a simplified Google Search clone built using HTML, CSS, and JavaScript. It mimics the core functionality of Google's search engine interface, featuring a search bar that fetches results from the Google Custom Search JSON API. The website displays search results with titles, URLs, and snippets in a clean, responsive layout similar to Google's search results page.
Features

Responsive Design: Adapts to various screen sizes using CSS flexbox and percentage-based widths for a consistent experience on desktops, tablets, and mobiles.
Search Functionality: Allows users to input queries in a search bar (search-bar) and fetch results using the Google Custom Search JSON API (Google.js).
Interactive Search: Triggers search on pressing the "Enter" key (keypress event listener) or clicking the search button (search-bar button).
Results Display: Shows search results (result) with clickable titles (h3 a), URLs (.url), and snippets (.result p) styled to resemble Google's layout.
Error Handling: Displays "Loading...", "No results found", or error messages for failed API requests.
Minimalist UI: Clean design with a centered logo (logo), search bar with shadow (search-bar), and results container (results-container).

Technologies Used

HTML5: For semantic structure and content.
CSS3: For styling, layout, and responsive design (e.g., flex, box-shadow, border-radius).
JavaScript (ES6): For dynamic search functionality using the Fetch API and event listeners (Google.js).
External Resources:
Google Custom Search JSON API (https://www.googleapis.com/customsearch/v1) for fetching search results.
API Key: AIzaSyBTCZBDrgxOYstLSrXisxm23RqfDXPp0Q0.
Custom Search Engine ID: 66c11f09da19446ce.



File Structure

Google.html: Main HTML file containing the search interface and results container.
Google.css: CSS file for styling the layout, search bar, and results.
Google.js: JavaScript file for handling search queries and API integration.
Images: Placeholder image for the Google logo (e.g., logo class image) should be placed in an images/ folder.
Note: Ensure the logo image is added to the images/ folder and referenced in Google.html.



Naming Conventions
The project uses clear and descriptive class names:

search-container: Container for the logo and search bar.
logo: Google logo image.
search-bar: Search input and button container.
results-container: Container for search results.
result: Individual search result item.
url: URL display for each result.
h3, p, a: Standard HTML elements for result titles, snippets, and links.

Setup Instructions

Clone or Download:
Clone the repository or download the project files.


File Placement:
Place Google.html, Google.css, and Google.js in the project root.
Create an images/ folder and add the Google logo image (referenced in Google.html as logo).


Dependencies:
Ensure an internet connection to access the Google Custom Search JSON API (https://www.googleapis.com/customsearch/v1).
The API key (AIzaSyBTCZBDrgxOYstLSrXisxm23RqfDXPp0Q0) and Custom Search Engine ID (66c11f09da19446ce) are embedded in Google.js. Replace them with your own if needed.


Run the Project:
Open Google.html in a web browser to view the search interface.
No server setup is required as it uses static HTML, CSS, and client-side JavaScript.



Usage

Search: Enter a query in the search bar (searchInput) and press "Enter" or click the search button to fetch results.
Results: View search results with clickable titles (h3 a) that open in a new tab (target="_blank"), URLs (.url), and snippets (.result p).
Error Handling: If no query is entered, no action is taken. If the API fails, an error message is displayed in the results container (results).

Customization

Styling: Modify Google.css to change colors, fonts, or layout.
Background: #f8f9fa (light gray).
Search bar shadow: box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28).
Link color: #1a0dab (Google blue).
URL color: #006621 (Google green).
Text color: #4d5156 (dark gray for snippets).


Content: Update the logo image or placeholder text in Google.html.
API: Replace the API key and Custom Search Engine ID in Google.js with your own (obtain from Google Cloud Console).
Functionality: Enhance Google.js to add features like pagination, additional search parameters, or result filtering.

Notes

The Google Custom Search JSON API has usage limits (e.g., 100 free queries per day). For production use, consider a paid plan or monitor usage via the Google Cloud Console.
The API key and Custom Search Engine ID in Google.js are specific to this project. Replace them with your own for security and reliability.
The logo image must be added to the images/ folder and referenced correctly in Google.html.
The project is optimized for modern browsers (Chrome, Firefox, Edge, Safari).
Ensure an internet connection for API requests to work.
The search button (search-bar button) requires an icon or text in Google.html (e.g., a magnifying glass icon via Font Awesome or an image).

Credits

Designed by: Ahmad Samama
API: Google Custom Search JSON API
Fonts: Arial (system font)
Images: Placeholder Google logo (replace with your own).

License
© Copyright 2025 Ahmad Samama. All Rights Reserved.

1. Interface

<img width="1440" height="811" alt="Googleinterface" src="https://github.com/user-attachments/assets/94b11bfb-1a8c-4d22-98fd-8e49cf61a348" />
