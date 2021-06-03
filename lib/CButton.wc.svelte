<svelte:options tag="cosmo-button"/>

<script>
  export let type = ''
  export let ghost = false

  import { get_current_component } from "svelte/internal";
  
  const component = get_current_component();
  console.log('component: ', component);
  
  // example function for dispatching events
  const dispatchEvent = (name, detail) => {
    console.log('name: ', name);
    component?.dispatchEvent(new CustomEvent(name, {
      detail,
      composed: true  // propagate across the shadow DOM
    }));
  };
</script>

<button class={`ant-btn ant-btn-${type}`} on:click={() => dispatchEvent("test", "Hello!")}>
  <slot>按钮默认文字</slot>
</button>

<style>
  @import url('https://unpkg.com/antd@4.16.1/dist/antd.css')
</style>