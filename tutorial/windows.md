---
title: 一元机场Windows客户端教程 - Clash for Windows配置与使用指南
description: 详细图文教程教你配置一元机场Clash for Windows客户端，包含下载安装、订阅导入、节点选择及代理模式设置，解决Windows系统科学上网问题。
keywords: 一元机场Windows教程,Clash for Windows配置,Windows科学上网,PC VPN设置,Clash使用指南,Windows代理软件,翻墙软件教程
head:
  - - link
    - rel: canonical
      href: https://1yuan.win/tutorial/windows.html
  - - meta
    - property: og:type
      content: article
  - - meta
    - property: og:title
      content: 一元机场Windows教程 - Clash for Windows配置与使用指南
  - - meta
    - property: og:description
      content: 详细图文教程教你配置一元机场Clash for Windows客户端，包含下载安装、订阅导入、节点选择及代理模式设置，解决Windows系统科学上网问题。
  - - meta
    - property: og:url
      content: https://1yuan.win/tutorial/windows.html
  - - meta
    - property: og:image
      content: https://1yuan.win/assets/win/img1.png
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - meta
    - name: twitter:title
      content: 一元机场Windows教程 - Clash for Windows配置与使用指南
  - - meta
    - name: twitter:description
      content: 详细图文教程教你配置一元机场Clash for Windows客户端，包含下载安装、订阅导入、节点选择及代理模式设置，解决Windows系统科学上网问题。
  - - meta
    - name: twitter:image
      content: https://1yuan.win/assets/win/img1.png
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "一元机场Windows客户端使用教程",
        "description": "详细的Clash for Windows配置教程，包含下载、安装、配置和使用步骤",
        "image": "https://1yuan.win/assets/win/img1.png",
        "totalTime": "PT10M",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "CNY",
          "value": "0"
        },
        "supply": [
          {
            "@type": "HowToSupply",
            "name": "Windows电脑"
          },
          {
            "@type": "HowToSupply", 
            "name": "一元机场订阅链接"
          }
        ],
        "tool": [
          {
            "@type": "HowToTool",
            "name": "Clash for Windows"
          }
        ],
        "step": [
          {
            "@type": "HowToStep",
            "name": "下载与安装",
            "text": "下载Clash for Windows客户端并完成安装",
            "image": "https://1yuan.win/assets/win/img1.png"
          },
          {
            "@type": "HowToStep",
            "name": "获取订阅",
            "text": "在Profiles页面添加订阅链接并下载配置",
            "image": "https://1yuan.win/assets/win/img2.png"
          },
          {
            "@type": "HowToStep",
            "name": "选择节点和模式",
            "text": "在Proxies页面选择代理模式和节点，开启System Proxy",
            "image": "https://1yuan.win/assets/win/img3.png"
          }
        ]
      }
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": "一元机场Windows客户端使用教程",
        "description": "详细图文教程教你配置一元机场Clash for Windows客户端",
        "image": "https://1yuan.win/assets/win/img1.png",
        "author": {
          "@type": "Organization",
          "name": "一元机场"
        },
        "publisher": {
          "@type": "Organization",
          "name": "一元机场",
          "logo": {
            "@type": "ImageObject",
            "url": "https://1yuan.win/logo.png"
          }
        },
        "datePublished": "2024-01-01",
        "dateModified": "2024-12-01",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://1yuan.win/tutorial/windows.html"
        }
      }
---
# 一元机场windows客户端使用教程

## Windows客户端-Clash for Windows

Clash for Windows是Windows上流行的客户端，以下教程将提供Clash for Windows的基础使用方法。

**请注意，教程编写时最新版为0.19.14，后续版本界面可能会与图片所示内容有所差异，请以最新版为准。**

## 1.下载与安装

请在[此处](https://xn--4gq62f52gdss.com/down/clash.7z)下载。

Clash.for.Windows-0.XX.XX-win.7z（XX.XX具体随版本号而定）是绿色版，解压即用。

Clash.for.Windows.Setup.0.XX.XX.exe（XX.XX具体随版本号而定）是安装版，使用前需安装。

**在安装界面，如果出现Windows防火墙或杀软警告，请全部允许！**

在安装完毕后，运行"Clash for Windows.exe"，进入如下界面：

![一元机场Win教程](/assets/win/img1.png "一元机场Win教程")

## 2.获取订阅

点击左侧的“Profiles”，进入如下界面：

![一元机场Win教程](/assets/win/img2.png "一元机场Win教程")

请在本站首页，仪表盘 - 一键订阅，复制您的订阅链接，并粘贴到界面上方的输入框中，然后点击“Download”按钮。

下载好之后，此界面会出现一个订阅，点击它。

**如果发现节点不能使用，请先点击“Update All”按钮更新订阅！**

## 3.选择节点和模式，开始使用

点击左侧的“Proxies”，进入如下界面：

![一元机场Win教程](/assets/win/img3.png "一元机场Win教程")

上方的按钮是代理模式，其中Script不常用，其它介绍如下：

-   Global是全局代理，若选择此项，所有的网站经过代理访问。
    
-   Rule是规则代理，若选择此项，只有国外的网站才会经过代理访问。
    
-   Direct是全部直连，若选择此项，则所有网站都不经过代理。
    

在选择了代理模式之后，选择一个希望使用的节点，然后回到“General”。

将倒数第二行的“System Proxy”开启，即可代理浏览器流量。

## 4.其它

-   如果想要了解更多，请查阅[Clash文档](https://docs.cfw.lbyczf.com/)。
    
-   请注意：Clash默认情况下只代理浏览器，若需代理Windows应用，请使用TUN模式，TUN模式使用方式请自行查阅。

------------------
::: tip 🎉 节点推荐

- 🚀 [优信云：IEPL/IPLC 高速专线，￥15.00/月](https://www.优信云.com/#/register?code=JRtE5uIV)<br>
- 🚀 [TNTCloud：新开机场，季付30，每月低至￥10.00/月](https://a.suola.link/tnt)<br>
- 🚀 [魔戒：不限时，不限制使用人数，直至套餐流量用完，低至￥14.9/130G流量](https://mojie.app/#/register?code=sSdtPtLo)<br>
:::