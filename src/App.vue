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
  // user-select: none;
}

html, body {
  height: 100%;
  @include scrollBar();
}

@keyframes view-out {
  from { max-height: 220px; }
  to { max-height: 0px; }
}
</style>
