"# webWorker" 
Project Name: Array Sorter with Web Workers
Project Overview
This project demonstrates sorting arrays using both Web Workers and the main thread to compare performance differences in web applications. It features a Node.js backend (server.js) and a frontend that includes main.js, worker.js, and index.html. The application allows users to sort arrays and displays the sorted array alongside the time taken to perform the sorting with and without Web Workers.

Features
Sort Arrays: Perform array sorting operations in the browser.
Compare Performance: View the time difference between sorting with and without Web Workers.
Display Results: Sorted arrays are displayed on the webpage, along with the time taken to sort them.
Prerequisites
Before running this project, ensure you have Node.js installed on your system. You can download it from nodejs.org.

Installation
Clone the Repository

bash
Copy code
git clone [your-repository-url]
cd [your-project-directory]
Install Dependencies

Inside the project directory, run:

bash
Copy code
npm install
Running the Application
Start the Backend Server

bash
Copy code
node server.js
This command starts the Node.js server on a default port (usually 3000 unless configured otherwise).

Access the Application

Open a web browser and navigate to http://localhost:3000 to view the application.

Project Structure
server.js: Node.js backend server setup.
public/: Folder containing frontend files.
index.html: Main HTML file.
main.js: Frontend JavaScript logic without Web Worker.
worker.js: Web Worker script for performing array sorting in a background thread.
Using the Application
Sort Array: Enter an array and select the sorting method (with or without Web Worker).
View Results: The sorted array and the time taken for the sorting operation will be displayed on the page.
