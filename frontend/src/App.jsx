import React, { useEffect, useState } from 'react';
import './App.css';

const API_URL = 'http://localhost:8000/api/messages'; // Adjust if backend runs elsewhere

function App() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch messages from backend
  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error('Failed to fetch messages');
      const data = await res.json();
      setMessages(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    setError('');
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: newMessage })
      });
      if (!res.ok) throw new Error('Failed to send message');
      setNewMessage('');
      fetchMessages();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="app-container">
      <h1>Message Board</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={newMessage}
          onChange={e => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit" disabled={!newMessage.trim()}>Send</button>
      </form>
      {error && <div style={{ color: 'red', margin: '12px 0' }}>{error}</div>}
      {loading ? (
        <div>Loading messages...</div>
      ) : (
        <ul className="message-list">
          {messages.map(msg => (
            <li key={msg._id || msg.id} className="message-item">
              {msg.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
