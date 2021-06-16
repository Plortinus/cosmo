<svelte:options tag="c-single-input"/>

<script>
  export let id
  export let placeholder
  export let label
  export let attr
  export let ismust
  export let value
  export let labelcol = 8
  export let wrappercol = 16
  $: required =  !!ismust

  $: labelclass = `ant-col ant-col-${labelcol} ant-form-item-label`
  $: wrapperclass = `ant-col ant-col-${wrappercol} ant-form-item-control`
</script>

<div class="ant-row ant-form-item" style="row-gap: 0px;">
  <div class={labelclass}>
    <label for="basic_username" class:ant-form-item-required="{required}">
      {label}
    </label>
  </div>
  <div class={wrapperclass}>
    <div class="ant-form-item-control-input">
      <div class="ant-form-item-control-input-content">
        <input
          type="text"
          id={id}
          placeholder={placeholder}
          class="ant-input"
          name={attr}
          value={value || ''}
          >
      </div>
    </div>
  </div>
</div>

<style>
  @import url('https://unpkg.com/antd@4.16.2/dist/antd.min.css');
</style>