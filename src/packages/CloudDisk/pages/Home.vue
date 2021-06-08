<template>
  <div class="body-wrap boxed-container">
    <PageHeader></PageHeader>
    <main>
      <section class="hero text-center">
        <div class="container-sm">
          <div class="hero-inner">
            <h1 class="hero-title h2-mobile is-revealing">CloudDisk</h1>
            <p class="hero-paragraph is-revealing">{{description}}</p>
            <div class="hero-form newsletter-form field field-grouped is-revealing">
              <PageButton class="download-button" @click.native="downloadFile" :disabled="!versionInfo.version" v-show="downloadAddress">Download v{{versionInfo.version}}</PageButton>
            </div>
            <div class="hero-browser">
              <div class="bubble-3 is-revealing">
                <svg width="427" height="286" viewBox="0 0 427 286" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path d="M213.5 286C331.413 286 427 190.413 427 72.5S304.221 16.45 186.309 16.45C68.396 16.45 0-45.414 0 72.5S95.587 286 213.5 286z"
                          id="bubble-3-a"/>
                  </defs>
                  <g fill="none" fill-rule="evenodd">
                    <mask id="bubble-3-b" fill="#fff">
                      <use xlink:href="#bubble-3-a"/>
                    </mask>
                    <use fill="#4E8FF8" xlink:href="#bubble-3-a"/>
                    <path d="M64.5 129.77c117.913 0 213.5-95.588 213.5-213.5 0-117.914-122.779-56.052-240.691-56.052C-80.604-139.782-149-201.644-149-83.73c0 117.913 95.587 213.5 213.5 213.5z"
                          fill="#1274ED" mask="url(#bubble-3-b)"/>
                    <path d="M381.5 501.77c117.913 0 213.5-95.588 213.5-213.5 0-117.914-122.779-56.052-240.691-56.052C236.396 232.218 168 170.356 168 288.27c0 117.913 95.587 213.5 213.5 213.5z"
                          fill="#75ABF3" mask="url(#bubble-3-b)"/>
                  </g>
                </svg>
              </div>
              <div class="bubble-4 is-revealing">
                <svg width="230" height="235" viewBox="0 0 230 235" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path d="M196.605 234.11C256.252 234.11 216 167.646 216 108 216 48.353 167.647 0 108 0S0 48.353 0 108s136.959 126.11 196.605 126.11z"
                          id="bubble-4-a"/>
                  </defs>
                  <g fill="none" fill-rule="evenodd">
                    <mask id="bubble-4-b" fill="#fff">
                      <use xlink:href="#bubble-4-a"/>
                    </mask>
                    <use fill="#7CE8DD" xlink:href="#bubble-4-a"/>
                    <circle fill="#3BDDCC" mask="url(#bubble-4-b)" cx="30" cy="108" r="108"/>
                    <circle fill="#B1F1EA" opacity=".7" mask="url(#bubble-4-b)" cx="265" cy="88"
                            r="108"/>
                  </g>
                </svg>
              </div>
              <div class="hero-browser-inner is-revealing">
                <img :src="mainBackground" alt="" draggable="false">
              </div>
              <div class="bubble-1 is-revealing">
                <svg width="61" height="52" viewBox="0 0 61 52" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path d="M32 43.992c17.673 0 28.05 17.673 28.05 0S49.674 0 32 0C14.327 0 0 14.327 0 32c0 17.673 14.327 11.992 32 11.992z"
                          id="bubble-1-a"/>
                  </defs>
                  <g fill="none" fill-rule="evenodd">
                    <mask id="bubble-1-b" fill="#fff">
                      <use xlink:href="#bubble-1-a"/>
                    </mask>
                    <use fill="#FF6D8B" xlink:href="#bubble-1-a"/>
                    <path d="M2 43.992c17.673 0 28.05 17.673 28.05 0S19.674 0 2 0c-17.673 0-32 14.327-32 32 0 17.673 14.327 11.992 32 11.992z"
                          fill="#FF4F73" mask="url(#bubble-1-b)"/>
                    <path d="M74 30.992c17.673 0 28.05 17.673 28.05 0S91.674-13 74-13C56.327-13 42 1.327 42 19c0 17.673 14.327 11.992 32 11.992z"
                          fill-opacity=".8" fill="#FFA3B5" mask="url(#bubble-1-b)"/>
                  </g>
                </svg>
              </div>
              <div class="bubble-2 is-revealing">
                <svg width="179" height="126" viewBox="0 0 179 126" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path d="M104.697 125.661c41.034 0 74.298-33.264 74.298-74.298s-43.231-7.425-84.265-7.425S0-28.44 0 12.593c0 41.034 63.663 113.068 104.697 113.068z"
                          id="bubble-2-a"/>
                  </defs>
                  <g fill="none" fill-rule="evenodd">
                    <mask id="bubble-2-b" fill="#fff">
                      <use xlink:href="#bubble-2-a"/>
                    </mask>
                    <use fill="#838DEA" xlink:href="#bubble-2-a"/>
                    <path d="M202.697 211.661c41.034 0 74.298-33.264 74.298-74.298s-43.231-7.425-84.265-7.425S98 57.56 98 98.593c0 41.034 63.663 113.068 104.697 113.068z"
                          fill="#626CD5" mask="url(#bubble-2-b)"/>
                    <path d="M43.697 56.661c41.034 0 74.298-33.264 74.298-74.298s-43.231-7.425-84.265-7.425S-61-97.44-61-56.407C-61-15.373 2.663 56.661 43.697 56.661z"
                          fill="#B1B6F1" opacity=".64" mask="url(#bubble-2-b)"/>
                  </g>
                </svg>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="features section text-center">
        <div class="container">
          <div class="features-inner section-inner has-bottom-divider">
            <div class="features-wrap">
              <!-- <div class="feature is-revealing">
                   <div class="feature-inner">
                       <div class="feature-icon">
                           <svg width="80" height="80" xmlns="http://www.w3.org/2000/svg">
                               <g fill="none" fill-rule="evenodd">
                                   <path d="M48.066 61.627c6.628 0 10.087-16.79 10.087-23.418 0-6.627-5.025-9.209-11.652-9.209C39.874 29 24 42.507 24 49.135c0 6.627 17.439 12.492 24.066 12.492z"
                                         fill-opacity=".24" fill="#A0A6EE"/>
                                   <path d="M26 54l28-28" stroke="#838DEA" stroke-width="2"
                                         stroke-linecap="square"/>
                                   <path d="M26 46l20-20M26 38l12-12M26 30l4-4M34 54l20-20M42 54l12-12"
                                         stroke="#767DE1" stroke-width="2" stroke-linecap="square"/>
                                   <path d="M50 54l4-4" stroke="#838DEA" stroke-width="2"
                                         stroke-linecap="square"/>
                               </g>
                           </svg>
                       </div>
                       <h3 class="feature-title">在线查看</h3>
                       <p class="text-sm">内置的查看器，可满足在线查看图片、视频、音频、文本及pdf文档</p>
                   </div>
               </div>
               <div class="feature is-revealing">
                   <div class="feature-inner">
                       <div class="feature-icon">
                           <img src="../assets/svg/feature.svg" alt="">
                       </div>
                       <h3 class="feature-title">在线解压</h3>
                       <p class="text-sm">支持在线解压200M以内的zip压缩包</p>
                   </div>
               </div>-->
              <div class="feature is-revealing" v-for="(item,index) in topFeature">
                <div class="feature-inner">
                  <div class="feature-icon">
                    <img :src="item.icon" alt="" draggable="false">
                  </div>
                  <h3 class="feature-title">{{item.title}}</h3>
                  <p class="text-sm">{{item.description}}</p>
                </div>
              </div>
            </div>
            <div class="features-wrap">
              <div class="feature is-revealing" v-for="(item,index) in leftFeature">
                <div class="feature-inner">
                  <div class="feature-icon">
                    <img :src="item.icon" alt="" draggable="false">
                  </div>
                  <h3 class="feature-title">{{item.title}}</h3>
                  <p class="text-sm">{{item.description}}</p>
                </div>
              </div>
              <!-- <div class="feature is-revealing">
                   <div class="feature-inner">
                       <div class="feature-icon">
                           <svg width="80" height="80" xmlns="http://www.w3.org/2000/svg">
                               <g fill="none" fill-rule="evenodd">
                                   <path d="M48.066 61.627c6.628 0 10.087-16.79 10.087-23.418 0-6.627-5.025-9.209-11.652-9.209C39.874 29 24 42.507 24 49.135c0 6.627 17.439 12.492 24.066 12.492z"
                                         fill-opacity=".32" fill="#FF97AC"/>
                                   <path stroke="#FF6D8B" stroke-width="2" stroke-linecap="square"
                                         d="M49 45h6V25H35v6M43 55h2v-2M25 53v2h2M27 35h-2v2"/>
                                   <path stroke="#FF6D8B" stroke-width="2" stroke-linecap="square"
                                         d="M43 35h2v2M39 55h-2M33 55h-2M39 35h-2M33 35h-2M45 49v-2M25 49v-2M25 43v-2M45 43v-2"/>
                               </g>
                           </svg>
                       </div>
                       <h3 class="feature-title">Discover</h3>
                       <p class="text-sm">Where text is visible, people tend to focus on the textual
                           content rather than upon overall presentation.</p>
                   </div>
               </div>
               <div class="feature is-revealing">
                   <div class="feature-inner">
                       <div class="feature-icon">
                           <svg width="80" height="80" xmlns="http://www.w3.org/2000/svg">
                               <g transform="translate(24 25)" fill="none" fill-rule="evenodd">
                                   <path d="M24.066 36.627c6.628 0 10.087-16.79 10.087-23.418C34.153 6.582 29.128 4 22.501 4 15.874 4 0 17.507 0 24.135c0 6.627 17.439 12.492 24.066 12.492z"
                                         fill-opacity=".32" fill="#A0EEE5"/>
                                   <circle stroke="#39D8C8" stroke-width="2" stroke-linecap="square" cx="5"
                                           cy="4" r="4"/>
                                   <path stroke="#39D8C8" stroke-width="2" stroke-linecap="square"
                                         d="M23 22h8v8h-8zM11 10l9 9"/>
                               </g>
                           </svg>
                       </div>
                       <h3 class="feature-title">Discover</h3>
                       <p class="text-sm">Where text is visible, people tend to focus on the textual
                           content rather than upon overall presentation.</p>
                   </div>
               </div>-->
            </div>
          </div>
        </div>
      </section>
      <section class="newsletter section">
        <div class="container-sm">
          <div class="newsletter-inner section-inner">
            <div class="newsletter-header text-center is-revealing">
              <h2 class="section-title">开源项目</h2>
              <p class="section-paragraph">{{$route.name}}是一个开源项目，如果你觉得不错或感兴趣，
                欢迎前往clone fork star</p>
            </div>
            <div class="footer-form newsletter-form field field-grouped is-revealing">
              <div class="control control-expanded">
                <input class="input" type="text" readonly :value="gitAddress">
              </div>
              <PageButton @click.native="goGitAddress">GO</PageButton>
            </div>
          </div>
        </div>
      </section>
    </main>
    <PageFooter></PageFooter>
  </div>
</template>

<script>
import scrollReveal from 'scrollreveal'
import { useImportPath } from '@/utils'
import PageHeader from '../components/PageHeader.vue'
import PageButton from '../components/PageButton.vue'
import PageFooter from '../components/PageFooter.vue'

export default {
  name: 'Home',
  components: {
    PageHeader, PageButton, PageFooter,
  },
  computed: {
    description() {
      return this.worksData.CloudDisk.description
    },
    mainBackground() {
      return useImportPath('img/CloudDisk/main.png')
    },
    topFeature() {
      return this.worksData.CloudDisk.features.filter((i, index) => index < 2)
    },
    leftFeature() {
      return this.worksData.CloudDisk.features.filter((i, index) => index > 1)
    },
    gitAddress() {
      return this.worksData.CloudDisk.gitAddress
    },
    downloadAddress() {
      return this.worksData.CloudDisk.downloadAddress
    },
  },
  data() {
    return {
      scrollReveal: scrollReveal(),
      worksData: {
        CloudDisk: {
          features: [
            {
              title: '在线解压',
              icon: useImportPath('img/CloudDisk/feature1.svg'),
              description: '目前已支持在线解压200M以内的zip压缩包',
            },
            {
              title: '在线查看',
              icon: useImportPath('img/CloudDisk/feature3.svg'),
              description: '目前已支持图片、音视频、pdf文档、常见文档在线查看',
            },
            {
              title: '断点续传',
              icon: useImportPath('img/CloudDisk/feature2.svg'),
              description: '传输任务支持暂停恢复，可以在下次启动时继续传输',
            },
            {
              title: '多端同步',
              icon: useImportPath('img/CloudDisk/feature4.svg'),
              description: '一地上传，多地使用，文件将同步至CloudDisk网页版',
            }
          ],
          description: '这是一款简洁的网盘，支持断点续传、多种常见文件在线查看、在线解压文件，部分代码已支持代码高亮。',
          gitAddress: 'https://github.com/zjinh/CloudDisk',
          downloadAddress: 'https://update.zjinh.cn/c-disk/',
        },
        // CloudMusic: {
        //   features: [
        //     {
        //       title: '桌面歌词',
        //       icon: require('../assets/svg/feature3.svg'),
        //       description: '支持桌面歌词显示，在不影响操作的情况下提供歌词显示',
        //     },
        //     {
        //       title: '可视化音乐',
        //       icon: require('../assets/svg/feature2.svg'),
        //       description: '底部音浪以及封面的环型效果给音乐带来活性',
        //     },
        //     {
        //       title: '音乐匹配',
        //       icon: require('../assets/svg/feature1.svg'),
        //       description: '扫描本地音乐可匹配识别歌手、专辑等媒体信息',
        //     },
        //     {
        //       title: '每日推荐',
        //       icon: require('../assets/svg/feature4.svg'),
        //       description: '根据听过的音乐，推荐符合您口味的歌单及曲目',
        //     }
        //   ],
        //   description: '这是一款使用API接口的播放器，目前已实现搜索、歌单播放、本地音乐识别、视频播放、桌面歌词等功能。仍在持续开发中。',
        //   gitAddress: 'https://github.com/zjinh/CloudMusic',
        //   downloadAddress: 'https://update.zjinh.cn/c-music/',
        // },
      },
      versionInfo: {},
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const e = this.scrollReveal
      e.reveal('.hero-title, .hero-paragraph, .newsletter-header, .newsletter-form', {
        duration: 1e3,
        distance: '40px',
        easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
        origin: 'bottom',
        interval: 150,
      }), e.reveal('.bubble-3, .bubble-4, .hero-browser-inner, .bubble-1, .bubble-2', {
        duration: 1e3,
        scale: 0.95,
        easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
        interval: 150,
      }), e.reveal('.feature', {
        duration: 600,
        distance: '40px',
        easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
        interval: 100,
        origin: 'bottom',
        viewFactor: 0.5,
      })
      if (this.downloadAddress) {
        this.getPackageInfo()
      }
      // const link = document.querySelector("link[rel*='icon']") || document.createElement('link')
      // link.type = 'image/x-icon'
      // link.rel = 'shortcut icon'
      // link.href = require('../assets/img/' + this.$route.name + '/logo.png') || '/favicon.ico'
      // document.getElementsByTagName('head')[0].appendChild(link)
      document.onkeydown = function () {
        const e = window.event || arguments[0]
        if (e.keyCode === 123) {
          return process.env.NODE_ENV === 'development'
        } else if ((e.ctrlKey) && (e.shiftKey) && (e.keyCode === 73)) {
          return false
        } else if ((e.ctrlKey) && (e.keyCode === 85)) {
          return false
        } else if ((e.ctrlKey) && (e.keyCode === 83)) {
          return false
        }
      }
    },
    getPackageInfo() {
      fetch(this.downloadAddress + '/latest.yml').then(res => res.text()).then((rs) => {
        const arr = rs.split(/\n/g)
        if (!arr[arr.length]) { // 如果最后一行后面有换行符，删除数组最后一项空字符串
          arr.pop()
        }
        const obj = { files: {} }
        for (let i = 0; i < arr.length; i++) {
          const a = arr[i].split(': ')
          const key = a[0].trim().split('- ').reverse()[0]
          if (obj[key.replace(/:/g, '')]) continue
          const value = a[1].trim()
          const str = '- url,size,sha512'
          // debugger
          if (str.indexOf(key) > -1) {
            const obj1 = {}
            obj1[key] = value
            obj.files = Object.assign(obj.files, obj1)
          } else {
            obj[key] = value
          }
        }
        this.versionInfo = obj
      })
    },
    goGitAddress() {
      window.open(this.gitAddress, '_blank')
    },
    downloadFile() {
      window.open(this.downloadAddress + this.versionInfo.path, '_blank')
    },
  },
}
</script>

<style lang="scss">
@import './home.scss';
</style>
