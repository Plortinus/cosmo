import { get_current_component } from "svelte/internal";

const component = get_current_component();
  
// example function for dispatching events
const dispatchEvent = (name, detail) => {
  console.log('name: ', name);
  component.dispatchEvent && component.dispatchEvent(new CustomEvent(name, {
    detail,
    composed: true  // propagate across the shadow DOM
  }));
};

export { dispatchEvent }