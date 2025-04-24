
import { h } from 'preact';
import { store } from '../store';
import { state } from '../state';
export function Tickbox({ id }) {
    const checked = state.tickboxes.get(id);
    return (
      <input type="checkbox" 
             checked={!!checked}
             onChange={(e) => store.setTickbox(id, e.target.checked)}
      />
    );
  }
  