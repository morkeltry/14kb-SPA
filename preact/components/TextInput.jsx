
import { h } from 'preact';
import { store } from '../store';
import { state } from '../state';
export function TextInput({ id }) {
    return (
      <input value={state.inputs.get(id) || ''}
             onChange={(e) => store.setInput(id, e.target.value)}
      />
    );
  }
  