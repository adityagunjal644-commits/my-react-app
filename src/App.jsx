import { Button } from './components';
import './App.css';

function App() {
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
    </main>
  );
}

export default App;
