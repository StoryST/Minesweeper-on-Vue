<template>
    <div class="minesweeper__cell" :class="getClass()">
      <div v-if="cell.isOpen && cell.bombCount">
        {{ cell.bombCount }}
      </div>
      <div v-if="cell.hasFlag">
        &#9873;
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'minesweeper__cell',
    props: {
      cell: {
        type: Object,
        required: true,
      },
    },
    methods: {
      getClass() {
        const { cell } = this;
        if (cell.isOpen && cell.hasBomb) {
          return 'minesweeper__bomb';
        }
        if (cell.isOpen) {
          return 'minesweeper__open';
        }
        if (cell.hasFlag) {
          return 'minesweeper__flag';
        }
        return '';
      },
    },
  };
  </script>
  
  <style scoped>
      .minesweeper__cell {
        align-items: center;
        background: rgba(0, 0, 0, 0.1);
        border: 1px white solid;
        color: #2c3e50;
        cursor: pointer;
        display: flex;
        font-size: 1.3em;
        justify-content: center;
        min-height: 35px;
        min-width: 35px;
      }
  
      .minesweeper__bomb {
        background: #c0392b;
      }
  
      .minesweeper__open {
        background: rgba(0, 0, 0, 0.05);
      }
  
      .minesweeper__flag {
        background: #2ecc71;
      }
  </style>