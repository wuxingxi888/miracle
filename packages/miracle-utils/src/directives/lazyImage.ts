import type { Directive } from 'vue';

interface LazyOptions {
  src: string;
  loading?: string; // 加载中占位图
  error?: string; // 加载失败占位图
}

/**
 * 图片懒加载指令
 * 该指令用于图片懒加载，当图片出现在可视区域时才加载图片，可以减少图片加载的次数，优化页面性能
 * v-lazy="url" 或 v-lazy="{ src: url, loading: loadingUrl, error: errorUrl }"
 * <img v-lazy="url"/>
 * <img v-lazy="{ src: url, loading: loadingUrl, error: errorUrl }"/>
 */

// 添加动画样式到 head
const styleElement = document.createElement('style');
styleElement.textContent = `
	@keyframes lazy-img-blur-in {
		0% {
			filter: blur(12px);
			opacity: 0;
		}
		100% {
			filter: blur(0);
			opacity: 1;
		}
	}
`;
document.head.appendChild(styleElement);

// 默认占位图
const DEFAULT_LOADING = 'https://dummyimage.com/300/&text=loading';
const DEFAULT_ERROR = 'https://dummyimage.com/300/&text=error';

const lazyImage: Directive = {
  mounted(el, { value }) {
    // 处理配置参数
    const config: LazyOptions =
      typeof value === 'string' ? { src: value } : value;

    const { src, loading = DEFAULT_LOADING, error = DEFAULT_ERROR } = config;

    // 设置加载中占位图
    if (el.tagName === 'IMG') {
      el.src = loading;
    } else {
      const imgEl = el.getElementsByTagName('img');
      for (const el of imgEl) {
        el.src = loading;
      }
    }

    const observer = new IntersectionObserver(([{ isIntersecting }]) => {
      if (isIntersecting) {
        // 判断当前元素是不是img标签
        if (el.tagName === 'IMG') {
          el.src = src;
          el.onload = () => {
            el.style.animation = 'lazy-img-blur-in 0.2s linear both';
          };
          el.onerror = () => {
            el.src = error;
          };
        } else {
          const imgEl = el.getElementsByTagName('img');

          for (const el of imgEl) {
            el.src = src;
            el.onload = () => {
              el.style.animation = 'lazy-img-blur-in 0.2s linear both';
            };
            el.onerror = () => {
              el.src = error;
            };
          }
        }

        el.addEventListener(
          'animationend',
          () => {
            el.style.animation = '';
          },
          { once: true },
        );

        observer.unobserve(el);
      }
    });

    observer.observe(el);
  },
};

export default lazyImage;
