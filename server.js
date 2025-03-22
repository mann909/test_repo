const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// // Route for the home page
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// // Route for the about page
// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });

// // Route for the services page
// app.get("/services", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "services.html"));
// });

// // Route for the contact page
// app.get("/contact", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "contact.html"));
// });

// // Route for the gallery page
// app.get("/gallery", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "gallery.html"));
// });

// // Route for the blog page
// app.get("/blog", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "blog.html"));
// });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});