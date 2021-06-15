<script>
  import '../../lib';
  const handleTest = params => {
    console.log('params: ', params);
    // alert(params)
  }
</script>

<main>
  <div class="container" >
    <c-button>默认按钮</c-button>
    <c-button type="primary">主要按钮</c-button>
    <c-button ghost>ghost</c-button>
    <c-button loading>loading</c-button>
    <hr />
    <c-query-view></c-query-view>
  </div>
</main>
