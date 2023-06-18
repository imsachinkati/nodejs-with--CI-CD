import express, { Request, Response } from 'express';

// Create Express app
const app = express();

// Define routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express!');
});

app.get('/users', (req: Request, res: Response) => {
  const users = ['Alice', 'Bob', 'Charlie'];
  res.json(users);
});

// Start the server
app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
