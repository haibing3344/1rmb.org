<template>
  <div style="display: none;"></div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
let scriptElement = null

onMounted(() => {
  const baseUrl = 'https://1yuan.win'
  const currentUrl = `${baseUrl}${route.path}`
  
  // 基础组织信息
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "一元机场",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "description": "一元机场提供快速稳定的VPN服务，轻松突破网络限制，自由访问全球互联网。",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "url": "https://t.me/jichang360"
    },
    "sameAs": [
      "https://t.me/jichang360"
    ]
  }

  // 网站信息
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "一元机场",
    "url": baseUrl,
    "description": "一元机场提供快速稳定的VPN服务，轻松突破网络限制，自由访问全球互联网。",
    "publisher": {
      "@type": "Organization",
      "name": "一元机场",
      "logo": `${baseUrl}/logo.png`
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${baseUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  }

  // 根据路径返回不同的结构化数据
  const data = [organization, website]
  
  // 创建并添加script标签
  scriptElement = document.createElement('script')
  scriptElement.type = 'application/ld+json'
  scriptElement.textContent = JSON.stringify(data)
  document.head.appendChild(scriptElement)
})

onUnmounted(() => {
  // 清理script标签
  if (scriptElement && scriptElement.parentNode) {
    scriptElement.parentNode.removeChild(scriptElement)
  }
})
</script>