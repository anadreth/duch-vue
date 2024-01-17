<script setup>
const props = defineProps({
  treeData: {
    type: Object,
    required: true,
    default: () => ({ label: '', children: [] })
  }
})
</script>

<template>
  <OrganizationChart :value="props.treeData">
    <template #default="slotProps">
      <span>{{ slotProps.node.label }}</span>
    </template>
  </OrganizationChart>
</template>

<style>
.p-organizationchart-lines {
  td {
    div {
      margin-left: auto;
      margin-right: auto;
    }
  }
}
</style>
