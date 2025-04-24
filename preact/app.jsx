
import { h } from 'preact';
import { render } from 'preact';  // Avoid default imports
import { useEffect, useState } from 'preact/hooks';

import { Tickbox, TextInput, Tooltip, Section } from './components';
import { store } from './store';
import { state } from './state';

function App() {
  // Force re-renders on store change
  const [_, setVersion] = useState(0);
  
  useEffect(() => {
    const forceUpdate = () => setVersion(v => v + 1);
    document.addEventListener('state-change', forceUpdate);
    return () => document.removeEventListener('state-change', forceUpdate);
  }, []);

  return (
    <div class="app">
      <Section id="basic-section">
        <Tickbox id="notifications" />
        <TextInput id="username" />
      </Section>

      <Section id="advanced-section">
        <TextInput id="api-key" />
        <Tooltip id="key-help" content="Paste your API token here" />
      </Section>
    </div>
  );
}

render(<App />, document.getElementById('root'));
export default App;
