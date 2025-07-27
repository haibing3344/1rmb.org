<template>
  <div style="display: none;"></div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
let scriptElement = null

onMounted(() => {
  const path = route.path
  const breadcrumbs = []
  
  // 首页
  breadcrumbs.push({
    "@type": "ListItem",
    "position": 1,
    "name": "首页",
    "item": "https://1yuan.win"
  })
  
  // 根据路径生成面包屑
  if (path.includes('/tutorial/')) {
    breadcrumbs.push({
      "@type": "ListItem",
      "position": 2,
      "name": "教程",
      "item": "https://1yuan.win/tutorial/"
    })
    
    if (path.includes('android')) {
      breadcrumbs.push({
        "@type": "ListItem",
        "position": 3,
        "name": "Android教程",
        "item": "https://1yuan.win/tutorial/android.html"
      })
    } else if (path.includes('ios')) {
      breadcrumbs.push({
        "@type": "ListItem",
        "position": 3,
        "name": "iOS教程",
        "item": "https://1yuan.win/tutorial/ios.html"
      })
    } else if (path.includes('windows')) {
      breadcrumbs.push({
        "@type": "ListItem",
        "position": 3,
        "name": "Windows教程",
        "item": "https://1yuan.win/tutorial/windows.html"
      })
    } else if (path.includes('macos')) {
      breadcrumbs.push({
        "@type": "ListItem",
        "position": 3,
        "name": "MacOS教程",
        "item": "https://1yuan.win/tutorial/macos.html"
      })
    }
  } else if (path.includes('/download')) {
    breadcrumbs.push({
      "@type": "ListItem",
      "position": 2,
      "name": "客户端下载",
      "item": "https://1yuan.win/download.html"
    })
  } else if (path.includes('/subscribe')) {
    breadcrumbs.push({
      "@type": "ListItem",
      "position": 2,
      "name": "订阅购买",
      "item": "https://1yuan.win/subscribe.html"
    })
  } else if (path.includes('/faq')) {
    breadcrumbs.push({
      "@type": "ListItem",
      "position": 2,
      "name": "常见问题",
      "item": "https://1yuan.win/faq.html"
    })
  }
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs
  }
  
  // 创建并添加script标签
  scriptElement = document.createElement('script')
  scriptElement.type = 'application/ld+json'
  scriptElement.textContent = JSON.stringify(schema)
  document.head.appendChild(scriptElement)
})

onUnmounted(() => {
  // 清理script标签
  if (scriptElement && scriptElement.parentNode) {
    scriptElement.parentNode.removeChild(scriptElement)
  }
})
</script>