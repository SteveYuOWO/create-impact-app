// Because of my first push npm package
// I am not realized the package entry.Path is so loooooooong.
import ImpacterApp, { Text, VStack } from "@steveyuowo/impacter.js/src/Impacter";

// Impacter.js
// Build App without css
ImpacterApp.render(
  new VStack(
      new Text("Hello, Impacter.js!")
          .padding()
          .fontSize(30),
      new Text("🔆Using impacter.js to build app without css")
  )
  , document.getElementById("impacter-app")
);
