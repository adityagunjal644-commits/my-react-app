import { useState } from 'react';
import { Button, Input, Card, Badge, Modal, Navbar } from './components';
import './App.css';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Tasks', href: '#tasks' },
  { label: 'About', href: '#about' },
];

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar brand="Task Manager" links={NAV_LINKS} />

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

        <h2>Badge</h2>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Badge text="Info" />
          <Badge text="Completed" variant="success" />
          <Badge text="Pending" variant="warning" />
          <Badge text="High priority" variant="danger" />
        </div>

        <h2>Card</h2>
        <div
          style={{
            display: 'grid',
            gap: 16,
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          }}
        >
          <Card
            title="Finish Week 2 report"
            footer={
              <>
                <Button size="sm">Edit</Button>
                <Button size="sm" variant="danger">
                  Delete
                </Button>
              </>
            }
          >
            <p style={{ margin: 0 }}>Write the component documentation.</p>
            <Badge text="High priority" variant="danger" />
          </Card>

          <Card title="Test on mobile">
            <p style={{ margin: 0 }}>Check 320px, 768px and 1024px widths.</p>
            <Badge text="Pending" variant="warning" />
          </Card>
        </div>

        <h2>Modal</h2>
        <Button onClick={() => setIsModalOpen(true)}>Open modal</Button>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Delete task?"
        >
          <p style={{ margin: 0 }}>This action cannot be undone.</p>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={() => setIsModalOpen(false)}>
              Delete
            </Button>
          </div>
        </Modal>
      </main>
    </>
  );
}

export default App;
