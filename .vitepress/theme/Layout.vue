<template>
  <Layout>
    <template #doc-before>
      <BreadcrumbSchema />
      <SeoSchema />
    </template>
  </Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>