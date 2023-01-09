# Piano
This is a simple piano app that plays audio when the keys are clicked.

To run the app, you will need to have Node.js and npm installed. Then, clone the repository and run `npm install` to install the dependencies. Finally, start the app with `npm run dev`.

The app is built using Next.js, and the audio is played using the HTML5 Audio element. The app also uses a custom hook, useKeyboard, which handles keyboard events and plays the corresponding audio when a key is pressed.

To customize the app, you can edit the audio files in the `/sounds` directory and update the audioFiles object in `useKeyboard.tsx` to match the file names. You can also customize the appearance of the piano keys by updating the CSS in the `index.tsx` file.
