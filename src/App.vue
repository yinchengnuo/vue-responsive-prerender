<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  -webkit-overflow-scrolling: touch;
  -webkit-tap-highlight-color: transparent!important;
}

html, body {
  height: 100%;
  overflow-x: hidden;
  @include scrollBar();
}

@keyframes view-out {
  from { max-height: 220px; }
  to { max-height: 0px; }
}
</style>
