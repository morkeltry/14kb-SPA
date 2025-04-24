
import { h } from 'preact';
import { store } from '../store';
import { state } from '../state';
export function Section({ id, children }) {
    return (
      <section id={id}>
        Section
        {children}
      </section>
    );
  }
  