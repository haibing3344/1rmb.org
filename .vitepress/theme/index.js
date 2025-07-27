import DefaultTheme from 'vitepress/theme'
import './custom.css'
import "./style/index.css"; //引入自定义的样式
import "./style/pricing.css"; //引入自定义的样式
import BreadcrumbSchema from './components/BreadcrumbSchema.vue'
import SeoSchema from './components/SeoSchema.vue'
import Layout from './Layout.vue'

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    // 注册全局组件
    app.component('BreadcrumbSchema', BreadcrumbSchema)
    app.component('SeoSchema', SeoSchema)
  }
}