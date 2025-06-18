## Unit Assignment: Flixster

Submitted by: **Liliana Cantero**

Estimated time spent: **9** hours spent in total

Deployed Application (optional): [Flixster Deployed Site](https://flixster-starter-nmdz.onrender.com/)

### Application Features

#### REQUIRED FEATURES

- [x] **Display Movies**
  - [x] Users can view a list of current movies from The Movie Database API in a grid view.
    - [x] Movie tiles should be reasonably sized (at least 6 playlists on your laptop when full screen; large enough that the playlist components detailed in the next feature are legible).
  - [x] For each movie displayed, users can see the movie's:
    - [x] Title
    - [x] Poster image
    - [x] Vote average
  - [x] Users can load more current movies by clicking a button which adds more movies to the grid without reloading the entire page. 
- [x] **Search Functionality**
  - [x] Users can use a search bar to search for movies by title.
  - [x] The search bar should include:
    - [x] Text input field
    - [x] Submit/Search button
    - [x] Clear button
  - [x] Movies with a title containing the search query in the text input field are displayed in a grid view when the user either:
    - [x] Presses the Enter key
    - [x] Clicks the Submit/Search button
  - [x] Users can click the Clear button. When clicked:
    - [x] All text in the text input field is deleted
    - [x] The most recent search results are cleared from the text input field and the grid view and all current movies are displayed in a grid view
- [x] **Design Features**
  - [x] Website implements all of the following accessibility features:
    - [x] Semantic HTML
    - [x] [Color contrast](https://webaim.org/resources/contrastchecker/)
    - [x] Alt text for images 
  - [x] Website implements responsive web design.
    - [x] Uses CSS Flexbox or CSS Grid
    - [x] Movie tiles and images shrink/grow in response to window size
  - [x] Users can click on a movie tile to view more details about a movie in a pop-up modal.
    - [x] The pop-up window is centered in the screen and does not occupy the entire screen.
    - [x] The pop-up window has a shadow to show that it is a pop-up and appears floating on the screen.
    - [x] The backdrop of the pop-up appears darker or in a different shade than before. including:
    - [x] The pop-up displays additional details about the moving including:
      - [x] Runtime in minutes
      - [x] Backdrop poster
      - [x] Release date
      - [x] Genres
      - [x] An overview
  - [x] Users can use a drop-down menu to sort movies.
    - [x] Drop-down allows movies to be sorted by:
      - [x] Title (alphabetic, A-Z)
      - [x] Release date (chronologically, most recent to oldest)
      - [x] Vote average (descending, highest to lowest)
    - [x] When a sort option is clicked, movies display in a grid according to selected criterion.
  - [x] Website displays:
    - [x] Header section
    - [x] Banner section
    - [x] Search bar
    - [x] Movie grid
    - [x] Footer section
    - [x] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS**: To ease the grading process, please use the [color contrast checker](https://webaim.org/resources/contrastchecker/) to demonstrate to the grading team that text and background colors on your website have appropriate contrast. The Contrast Ratio should be above 4.5:1 and should have a green box surrounding it. 

#### STRETCH FEATURES

- [x] **Deployment**
  - [x] Website is deployed via Render.
  - [x] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS**: For ease of grading, please use the deployed version of your website when creating your walkthrough. 
- [x] **Embedded Movie Trailers**
  - [x] Within the pop-up modal displaying a movie's details, the movie trailer is viewable.
    - [x] When the trailer is clicked, users can play the movie trailer.
- [ ] **Favorite Button**
  - [ ] For each movie displayed, users can favorite the movie.
  - [ ] There should be visual element (such as a heart icon) on each movie's tile to show whether or not the movie has been favorited.
  - [ ] If the movie is not favorited:
    - [ ] Clicking on the visual element should mark the movie as favorited
    - [ ] There should be visual feedback (such as the heart turning a different color) to show that the movie has been favorited by the user.
  - [ ] If the movie is already favorited:
    - [ ] Clicking on the visual element should mark the movie as *not* favorited.
    - [ ] There should be visual feedback (such as the heart turning a different color) to show that the movie has been unfavorited. 
- [ ] **Watched Checkbox**
  - [ ] For each movie displayed, users can mark the movie as watched.
  - [ ] There should be visual element (such as an eye icon) on each movie's tile to show whether or not the movie has been watched.
  - [ ] If the movie has not been watched:
    - [ ] Clicking on the visual element should mark the movie as watched
    - [ ] There should be visual feedback (such as the eye turning a different color) to show that the movie has been watched by the user.
  - [ ] If the movie is already watched:
    - [ ] Clicking on the visual element should mark the movie as *not* watched.
    - [ ] There should be visual feedback (such as the eye turning a different color) to show that the movie has not been watched.
- [ ] **Sidebar**
  - [ ] The website includes a side navigation bar.
  - [ ] The sidebar has three pages:
    - [ ] Home
    - [ ] Favorites
    - [ ] Watched
  - [ ] The Home page displays all current movies in a grid view, the search bar, and the sort movies drop-down.
  - [ ] The Favorites page displays all favorited movies in a grid view.
  - [ ] The Watched page displays all watched movies in a grid view.

### Walkthrough Video

[Project 3 Walkthrough](https://www.loom.com/share/77dc879305644a6c9ba84e90521d7720?sid=f8d577fa-2cfc-4236-802e-2458e01544a1)

`<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/77dc879305644a6c9ba84e90521d7720?sid=393831da-2e24-4731-989c-8715aae6b1b5" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>`

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

Yes, the topics on React, API usage, and props, really helped me complete this project. Example walkthroughs, like the Pokemon example, immensely helped out as well!

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
If I had more time, I might have been able to create the sidebar with the watched and favorited categories. I think they would've been amazing to implement! Also, I got inspiration from peers, and I would have loved to look into TMDb more, especially when it comes to the cast properties to reveal the actors in the movies!

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

Like I mentioned above, not only doing the project assigned, but also being able to go above and beyond because of interest is a skill I would like to attain. This time, while working on projects, I socialized more and went around to find css inspiration. I aim to ask for help from my peers more, and maybe in the future, build the confidence to try and help a peer one day!

### Open-source libraries used

- https://imagecolorpicker.com/
- https://stackoverflow.com/questions/35912731/how-to-create-a-simple-react-dropdown
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event
- https://developer.themoviedb.org/reference/movie-videos
- demo pokemon github for examples on Modal & List

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.

Shout out to all of my peers and all of the advisors! They are all truly talented people and help me find inspiration and strive to be a better programmer, presenter, designer, etc. I believe this program is truly rewiring my brain, in the sense that I feel more inclined to collaborate than I have in the past. But I am so grateful for this new skill I am picking up and can't wait to utilize it in the real-world and at my university in the future! As for the advisors, for this project, either before or after presenting, I consulted each one for help, whether that was with code or to vent about how I felt regarding the project and my presentation, which was at times: feeling behind, feeling as though my presentation was not as good as my last one, comparing myself to others who might have a better grasp at these topics, etc. I truly feel as though each advisor is a compassionate instructor, which is always great to encounter in the CS field. 

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
