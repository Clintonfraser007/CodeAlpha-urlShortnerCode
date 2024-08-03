# Simple URL Shortener

A simple URL shortener service that takes long URLs and provides shortened versions. When the shortened URL is accessed, users are redirected to the original URL. This project uses Express.js (Node.js) for the backend and stores URL mappings in a database.

## Features

- Shorten long URLs
- Redirect to the original URL using the shortened URL
- Store URL mappings in a database
- Get Analytics of Url clicks

## Tech Stack

- **Backend Framework:** Express.js (Node.js)
- **Database:** MongoDB
- **Optional:** Redis for caching (if needed)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Clintonfraser007/CodeAlpha-urlShortnerCode.git


2.Navigate to the project directory:
cd short-url


3.Install dependencies:
npm install

4.Set up environment variables:
Create a .env file in the root directory and add the following variables:
PORT=3000
DB_CONNECTION_STRING=your_database_connection_string


5.Run the application:
npm start

The server will start on `http://localhost:3000`.



USAGE

Shorten a URL:

Send a POST request to http://localhost:3000/shorten with a JSON payload:

{
  "url": "https://www.facebook.com"
}


Response:

{
  "shortenedUrl": "http://localhost:3000/r-jdbqC0"
}


Redirect to the original URL:

Access the shortened URL in your browser or via GET request:

http://localhost:3000/r-jdbqC0

You will be redirected to https://www.facebook.com.



Contributing
Fork the repository
Create a new branch (git checkout -b feature/your-feature)
Commit your changes (git commit -am 'Add new feature')
Push to the branch (git push origin feature/your-feature)
Create a new Pull Request
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Express.js for the backend framework
[Your Database Choice] for the database



Feel free to adjust the instructions based on the specific details of your project!

