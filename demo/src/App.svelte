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
    <hr />
    <c-query-view></c-query-view>
    <c-single-input label="手机号" placeholder="占位符1" attr="phone" />
    <c-single-input label="验证码" placeholder="占位符2" ismust="true" attr="code" />
    <c-single-input label="测试label/wrapper样式" labelcol="8" wrappercol="10" placeholder="占位符1" attr="phone" />
  </div>
</main>
