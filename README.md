## Beam Dental Boxing Kata

Given a family's brush color preferences, the application will generate a description of how the boxes should be filled. The focus of this kata should be building a website to handle perks.

### Functionality
* Upon entering the shipping screen, the starter box summary and cards should be displayed as default.
* Has two tabs for generating and displaying starter boxes and refill boxes. One tab will be enabled (clickable) and the other tab will be disabled (unclickable) at all times.
* Application attempts to fetch data everytime a user switches tabs.
* While in the process of fetching data from the JSON endpoint, displays a loading spinner instead of box summary and box cards.
* If the JSON endpoint call fails, displays an error message of "**Error:  Could not receive family preferences**" instead of box summary and box cards.
* Displays starter and refill boxes, grouped by colors when possible.
* A starter box can contain a maximum of 2 brushes and 2 replacement heads in any combination of colors.
* A refill box can contain a maximum of 4 replacement heads in any combination of colors.


### Design Choices and Style
I tried to stay true to the given lo-fi wireframes and have similar color palletes. 

#### Color Pallete

| Color          | Hex                                                                |
| -------------- | ------------------------------------------------------------------ |
| Black          | ![#000000](https://via.placeholder.com/10/000000?text=+) `#000000` |
| Dark Grey      | ![#5B5B5B](https://via.placeholder.com/10/5B5B5B?text=+) `#5B5B5B` |
| Grey           | ![#DEDEDE](https://via.placeholder.com/10/DEDEDE?text=+) `#DEDEDE` |
| White          | ![#F7F7F7](https://via.placeholder.com/10/F7F7F7?text=+) `#F7F7F7` |
| Blue           | ![#01C4E9](https://via.placeholder.com/10/01C4E9?text=+) `#01C4E9` |
| Green          | ![#E0E900](https://via.placeholder.com/10/E0E900?text=+) `#E0E900` |
| Pink           | ![#E92FAC](https://via.placeholder.com/10/E92FAC?text=+) `#E92FAC` |


### Packages/Libraries Used
* **Axios**: Used to retrieve family data from the given [JSON endpoint](https://beamtech.github.io/boxing-kata-js/perks.json).
* **Jest**: Used to create test cases for the getSummaryData, getStarterCardsData, and getRefillCardsData functions.

### Technical Thought Process
My initial thought while reading this project description was that it could be implemented in React, a front end framework I am comfortable in. A feature of React is the ability to create components and connect them together. I immediately saw that the tab buttons, boxes summary, and box cards could all be made into components. These components will then be imported by the parent App.js file and will be manipulated to create the application. When creating the tab buttons, I created a state named "activeBoxDisplay" to hold the current tab that is clicked, either "starter" or "refill." Depending on the current state of the "activeBoxDisplay", the application will render the respective summary and box cards. I used the Axios package to retrieve the family data from the JSON endpoint. If the JSON endpoint previously fails, I thought that switching tabs should make another call to the endpoint just in case the endpoint starts working again so I made that into a feature. I then created 3 functions (getSummaryData, getStarterCardsData, and getRefillCardsData) to take in the family data and return JSON objects of what should be rendered in the HTML. I did not directly render in the HTML through the function and wanted to return JSON objects in order for the functions to be testable. Finally, I used Jest to create and run custom test inputs and outputs upon my functions.

### How to run the project
1. Make sure you have [Node.js](https://nodejs.org/en/) installed on your computer.
2. Clone the repo and save it to desired file directory.
3. Open up the command prompt and cd to the file directory.
4. Type and enter **`npm install`** to install necessary dependencies.
5. After the installation has completed, type and enter **`npm start`** to run the project on your local server.


