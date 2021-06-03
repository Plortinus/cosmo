<script>
  import '../../lib';
  const handleTest = params => {
    console.log('params: ', params);
    // alert(params)
  }
</script>

<main>
  <div class="container">
    <cosmo-button on:test={handleTest}>默认按钮</cosmo-button>
    <cosmo-button type="primary">主要按钮</cosmo-button>
    <cosmo-button type="danger">危险按钮</cosmo-button>
  </div>
</main>

<style>

  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }

    .container {
      display: inline-block;
      max-width: 640px;
    }
  }
</style>
