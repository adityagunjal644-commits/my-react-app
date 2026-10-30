import { useState } from 'react';
import { Button, Input } from './components';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <main style={{ padding: 24 }}>
      <h1>UI Component Library</h1>

      <h2>Button variants</h2>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
        <Button disabled>Disabled</Button>
      </div>

      <h2>Button sizes</h2>
      <div
        style={{
          display: 'flex',
          gap: 12,
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>

      <h2>Full width</h2>
      <Button fullWidth>Full width button</Button>

      <h2>Input</h2>
      <div style={{ display: 'grid', gap: 16 }}>
        <Input
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={email && !email.includes('@') ? 'Enter a valid email' : ''}
        />
        <Input
          label="Disabled input"
          value="Cannot edit"
          onChange={() => {}}
          disabled
        />
      </div>
    </main>
  );
}

export default App;
