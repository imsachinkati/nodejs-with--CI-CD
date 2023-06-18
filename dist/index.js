"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Create Express app
const app = (0, express_1.default)();
// Define routes
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});
app.get('/users', (req, res) => {
    const users = ['Alice', 'Bob', 'Charlie'];
    res.json(users);
});
// Start the server
app.listen(8000, () => {
    console.log('Server is running on port 8000');
});
