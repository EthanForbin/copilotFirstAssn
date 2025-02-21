// Create web server
// Create a web server that listens to port 3000 and returns a JSON response with the following structure:
// {
//   comments: [
//     { id: 1, author: "user1", comment: "This is a comment" },
//     { id: 2, author: "user2", comment: "This is another comment" },
//     ...
//   ]
// }
// The comments array should have at least 5 comments.

const http = require('http');

const comments = [
  { id: 1, author: 'user1', comment: 'This is a comment' },
  { id: 2, author: 'user2', comment: 'This is another comment' },
  { id: 3, author: 'user3', comment: 'This is a third comment' },
  { id: 4, author: 'user4', comment: 'This is a fourth comment' },
  { id: 5, author: 'user5', comment: 'This is a fifth comment' }
];

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ comments }));
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
