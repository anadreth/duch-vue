<script setup>
import { RouterView } from 'vue-router'
import TreeChart from './components/TreeChart.vue'
import { ref } from 'vue'

const data = ref({
  label: 'Argentina',
  children: [
    {
      label: 'Argentina',
      children: [
        {
          label: 'Argentina'
        },
        {
          label: 'Croatia'
        }
      ]
    },
    {
      label: 'France',
      children: [
        {
          label: 'France'
        },
        {
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


