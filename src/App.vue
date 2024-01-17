<script setup>
import { RouterView } from 'vue-router'
import TreeChart from './components/TreeChart.vue'
import { ref } from 'vue'

const data = ref({
  key: '0',
  label: 'Argentina',
  children: [
    {
      key: '0_0',
      label: 'Argentina',
      children: [
        {
          key: '0_0_0',
          label: 'Argentina'
        },
        {
          key: '0_0_1',
          label: 'Croatia'
        }
      ]
    },
    {
      key: '0_1',
      label: 'France',
      children: [
        {
          key: '0_1_0',
          label: 'France'
        },
        {
          key: '0_1_1',
          label: 'Morocco'
        }
      ]
    }
  ]
})
</script>

<template>
  <div class="tree">
    <TreeChart :tree-data="data" />
  </div>
  <RouterView />
</template>


