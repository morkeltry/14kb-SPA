const state = {
    tickboxes: new Map(), // Map<id: string, value: boolean>
    inputs: new Map(),    // Map<id: string, value: string>
    tooltip: null         // Number|null (active tooltip ID)
  };
  
export const store = {
  state,

  setTickbox(id, value) {
    state.tickboxes.set(id, value);
    this._notify();
  },

  setInput(id, value) {
    state.inputs.set(id, value);
    this._notify();
  },

  showTooltip(id) {
    state.tooltip = id;
    this._notify();
  },

  hideTooltip() {
    state.tooltip = null;
    this._notify();
  },

  // Internal
  _notify() {
    document.dispatchEvent(new CustomEvent('state-change'));
  }
};
  