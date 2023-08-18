<template>
    <button class="btn btn-reset btn-success">
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    name: 'my-button'
  }
  </script>
  
  <style scoped>
  .btn {
    padding: 10px 15px;
    background: none;
    color: rgb(110, 21, 174);
    border: 1px solid rgb(110, 21, 174);
    border-radius: 3px;
    cursor: pointer;
  }
  </style>