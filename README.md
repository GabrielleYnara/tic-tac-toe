# Tic-Tac-Toe
## Welcome to a nostalgic game repository! 
This classic game has been implemented using modern web technologies and provides an interactive user experience. Two players can compete against each other, with scores being tracked throughout the gameplay.

## Installation Instructions
[Game link](https://gabrielleynara.github.io/tic-tac-toe/) - no installation needed.  

OR
1. Clone the repository to your local machine.
2. Open `index.html` in your preferred web browser.  
3. Start playing!

## Gameplay
* Select your icon (either X or O).  
* Players take turns clicking on the game board to place their icon.  
* The game tracks scores and displays the winner or indicates a tie.

## User Stories
As a user, I should be able to start a new tic tac toe game.  
As a user, I should be able to click on a square to add X first and then O, and so on  
As a user, I should be shown a message after each turn for if I win, lose, tie or who's turn it is next  
As a user, I should not be able to click the same square twice  
As a user, I should be shown a message when I win, lose or tie  
As a user, I should not be able to continue playing once I win, lose, or tie  
As a user, I should be able to play the game again without refreshing the page

## Technologies Used
* **HTML**: Used for structuring the game board and interface.
* **CSS**: For styling and animations, paired with Google fonts rendering a familiar notebook aesthetic.
* **JavaScript**: Drives the game's logic, handles user interactions, and updates the game state.

## Approach
1. **Wireframe**: The development began with a wireframe that served as a blueprint for the game design and interface.
![alt text][wireframe]

[wireframe]: https://github.com/GabrielleYnara/tic-tac-toe/blob/main/img/wireframe.png "Game Wireframe picture"
2. **Development Plans**:
* 🥉 **Bronze (MVP)**: A basic, fully functional Tic Tac Toe game where two players can play against each other on the same computer.
* 🥈 **Silver**: Enhancements to the basic version, including tracking and displaying scores, animations, sound effects, improved user interface, and the introduction of a computer opponent (AI).  
_Current Progress_: All features implemented except for the AI opponent.
* 🥇 **Gold**: Future enhancements such as online multiplayer, and data persistence.
3. **Modular Design**: The game logic and player details are encapsulated in separate classes (Game and User respectively).
4. **Object-Oriented Programming**: The game and players are represented as objects, promoting code reusability and maintainability.
5. **Event-Driven**: User interactions such as icon selection and grid clicks are handled through event listeners.

## Main Features
* **Icon Selection**: Before the game starts, the player can choose their icon, X or O.
* **Sound Effects**: Enhanced user experience with engaging sound effects. A distinct sound plays when drawing the board, and an audible signal when a player wins or when there's a tie.
* **Smooth Onboarding Animations**: Visual cues, in the form of subtle animations, guide the players. Whether it's an indication that the game has started or a gentle nudge that a spot is already taken.
* **Responsiveness**: Play on any device! The game is designed to adapt and look great whether you're on a desktop, tablet, or mobile device.

## Room for Improvement
* **AI Opponent**: Upgrade the computer opponent for a smarter model.
* **Online Multiplayer**: Allowing two players to play against each other online.
* **Persist Data**: Allow games to continue after page refresh or loss of internet connectivity.

## Feedback
If you have any feedback or suggestions, feel free to open an issue. Contributions are always welcome!
