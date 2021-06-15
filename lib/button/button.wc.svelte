<svelte:options tag="c-button"/>

<script>
  import classNames from "../utils/classes";
  import { get_current_component } from "svelte/internal";
  
  const component = get_current_component();
  
  // example function for dispatching events
  const dispatchEvent = (name, detail) => {
    component?.dispatchEvent(new CustomEvent(name, {
      detail,
      composed: true  // propagate across the shadow DOM
    }));
  };

  let sizeMap = {
    large: "lg",
    small: "sm"
  };
  export let prefixCls = 'ant-btn';
  export let type = 'default';
  export let htmlType = 'button';
  export let icon = '';
  export let shape;
  export let size = 'default';
  export let loading;
  export let disabled;
  export let ghost;
  export let block;
  export let href;
  export let target;
  export let danger = false

  $: buttonProps = {
    disabled,
    class: classNames({
      [`${prefixCls}`]: true,
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-${shape}`]: shape,
      [`${prefixCls}-${sizeMap[size]}`]: sizeMap[size],
      // [`${prefixCls}-icon-only`]: !children && children !== 0 && icon,
      [`${prefixCls}-loading`]: loading,
      [`${prefixCls}-background-ghost`]: ghost || type === "ghost",
      // [`${prefixCls}-two-chinese-chars`]: hasTwoCNChar,
      [`${prefixCls}-block`]: block,
      [`${prefixCls}-dangerous`]: !!danger
    })
  };

  function toParent () {
    console.log('toParent: ');
    dispatchEvent("click", "Hello!")
  }
</script>

<button
  {...buttonProps}
  type={htmlType || 'button'}>
  <slot />
</button>

<style>
  @import url('https://unpkg.com/antd@4.16.2/dist/antd.min.css');
</style>