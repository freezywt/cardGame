# Random Card Deck 

This project consists of consuming an external API to display five random cards on a screen. Each card should have a name, an image, a description, and a random point value. The user should be able to enter a name on the first screen and click a button to see the cards on the next screen. On the cards screen, the user can draw a new random card or shuffle the order of the cards.

### API
The public API Rick And Morty was chosen for this project. It is a free API that allows you to get characters values.

### Technologies Used

This project was developed using React Native and TypeScript. The external libraries used were axios for HTTP requests, styled components for style and react-navigation for screen navigation.

### How to Run the Application

- Clone the project repository on your machine.
- Navigate to the project folder.
- Run the command `npm install` to install the project dependencies.
- Run the command `npx react-native run-android` to start the application.
- Open the Android or iOS emulator on your machine.
- The application will be running.

### Project Structure
The project is organized as follows:


```
|- src/
   |- api/
      |- api.js
   |- contexts/
      |- authContext.js
   |- routes/
      |- app.routes.tsx
      |- auth.routes.tsx
      |- index.tsx
   |- screens/
      |- Game/
        |- index.tsx
      |- Home/
        |- index.tsx
   |- styles/
      |- game.js
      |- home.js
   |- App.tsx
```

### Conclusion

This project meets all the requested requirements and follows good programming practices. The code is easy to understand and maintain. The instructions for setting up and running the application have been clearly documented. External libraries have been used to assist in the development process.