<svelte:options tag="cosmo-button"/>

<script>
  // 属性参考:　https://sveltematerialui.com/demo/button/
  import Button, { Label, Icon  } from '@smui/button';
  import { get_current_component } from "svelte/internal";
  
  const component = get_current_component();
  
  // example function for dispatching events
  const dispatchEvent = (name, detail) => {
    component?.dispatchEvent(new CustomEvent(name, {
      detail,
      composed: true  // propagate across the shadow DOM
    }));
  };

  export let disabled = false
  export let ripple = true
  export let variant = 'outlined'
  export let className = ''
  export let color = ''
  export let href = null
  export let target = '_blank'

  function toParent () {
    console.log('toParent: ');
    dispatchEvent("click", "Hello!")
  }
</script>

<Button
  on:click={toParent}
  disabled={disabled}
  ripple={ripple}
  variant={variant}
  color={color}
  class={className}
  href={href}
  target={target}>
  <Label>
    <slot />
  </Label>
</Button>

<style>
  @import url('https://unpkg.com/svelte-material-ui/bare.css')
</style>