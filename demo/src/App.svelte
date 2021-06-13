<script>
  import '../../lib';
  const handleTest = params => {
    console.log('params: ', params);
    // alert(params)
  }
</script>

<main>
  <div class="container" >
    <cosmo-button on:click={handleTest}>默认按钮</cosmo-button>
    <cosmo-button color="secondary">第二颜色</cosmo-button>
    <cosmo-button disabled>disabled效果</cosmo-button>
    <cosmo-button ripple={false}>点击无波纹效果</cosmo-button>
    <cosmo-button variant="raised">凸起效果</cosmo-button>
    <cosmo-button variant="unelevated">平效果</cosmo-button>
    <cosmo-button href="http://example.com" target="_blank">链接</cosmo-button>
  </div>
</main>
