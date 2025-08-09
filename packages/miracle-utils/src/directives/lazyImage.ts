import type { Directive, DirectiveBinding } from 'vue';

interface LazyOptions {
    src: string;
    loading?: string;
    error?: string;
    animationType?: 'fade' | 'blur';
    rootMargin?: string;
    threshold?: number;
}

// 默认配置
const DEFAULT_CONFIG = {
    loading: 'https://dummyimage.com/300/&text=loading',
    error: 'https://dummyimage.com/300/&text=error',
    animationType: 'fade' as const,
    rootMargin: '0px',
    threshold: 0.1,
};

// 动画样式 - 只添加一次
const ANIMATION_STYLES = `
@keyframes lazy-img-blur-in {
  0% { filter: blur(12px); opacity: 0; }
  100% { filter: blur(0); opacity: 1; }
}
@keyframes lazy-img-fade-in {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
`;

// 确保样式只注入一次
let stylesInjected = false;

const injectStyles = () => {
    if (!stylesInjected && typeof document !== 'undefined') {
        const styleElement = document.createElement('style');
        styleElement.textContent = ANIMATION_STYLES;
        document.head.appendChild(styleElement);
        stylesInjected = true;
    }
};

const setImageSource = (img: HTMLImageElement, src: string) => {
    // 如果已经是相同的src，不再处理
    if (img.src === src) return;

    // 先设置src为空，避免旧图片闪烁
    img.src = '';
    img.src = src;
};

// 类型扩展
declare global {
    interface HTMLElement {
        _lazyObserver?: IntersectionObserver;
        _lazyConfig?: LazyOptions;
    }

    // 扩展Element类型以支持_lazyConfig属性访问
    interface Element {
        _lazyConfig?: LazyOptions;
    }
}

// 提取mounted逻辑为独立函数
const mountLazyImage = (
    el: HTMLElement,
    binding: DirectiveBinding<string | LazyOptions>,
) => {
    injectStyles();

    // 解析配置
    const { value } = binding;
    const config: LazyOptions =
        typeof value === 'string' ? { src: value } : { ...value };

    const {
        src,
        loading = DEFAULT_CONFIG.loading,
        error = DEFAULT_CONFIG.error,
        animationType = DEFAULT_CONFIG.animationType,
        rootMargin = DEFAULT_CONFIG.rootMargin,
        threshold = DEFAULT_CONFIG.threshold,
    } = config;

    // 存储配置到元素上，以便unmounted时使用
    el._lazyConfig = { src, loading, error, animationType };

    // 处理图片元素
    const processImageElement = (img: HTMLImageElement) => {
        setImageSource(img, loading);

        img.onload = null;
        img.onerror = null;
    };

    // 初始化所有图片
    if (el.tagName === 'IMG') {
        processImageElement(el as HTMLImageElement);
    } else {
        const images = el.querySelectorAll('img');
        images.forEach(processImageElement);
    }

    // 创建IntersectionObserver
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                const { target } = entry;
                const config = target._lazyConfig as LazyOptions;
                const animationName =
                    config.animationType === 'blur'
                        ? 'lazy-img-blur-in'
                        : 'lazy-img-fade-in';

                const loadImage = (img: HTMLImageElement) => {
                    setImageSource(img, config.src);

                    img.onload = () => {
                        img.style.animation = `${animationName} 0.5s ease-out forwards`;
                        img.addEventListener(
                            'animationend',
                            () => {
                                img.style.animation = '';
                            },
                            { once: true },
                        );
                    };

                    img.onerror = () => {
                        setImageSource(
                            img,
                            config.error || DEFAULT_CONFIG.error,
                        );
                    };
                };

                if (target.tagName === 'IMG') {
                    loadImage(target as HTMLImageElement);
                } else {
                    const images = target.querySelectorAll('img');
                    images.forEach(loadImage);
                }

                observer.unobserve(target);
            });
        },
        { rootMargin, threshold },
    );

    observer.observe(el);
    el._lazyObserver = observer;
};

// 提取清理逻辑为独立函数
const cleanupObserver = (el: HTMLElement) => {
    // 清理工作
    if (el._lazyObserver) {
        el._lazyObserver.disconnect();
        delete el._lazyObserver;
    }

    if (el._lazyConfig) {
        delete el._lazyConfig;
    }

    // 清理图片事件监听器
    const images =
        el.tagName === 'IMG'
            ? [el as HTMLImageElement]
            : el.querySelectorAll('img');

    images.forEach((img) => {
        img.onload = null;
        img.onerror = null;
    });
};

/**
 * 图片懒加载指令
 * 该指令用于图片懒加载，当图片出现在可视区域时才加载图片，可以减少图片加载的次数，优化页面性能
 * v-lazy="url" 或 v-lazy="{ src: url, loading: loadingUrl, error: errorUrl, animationType: 'fade'|'blur' }"
 * <img v-lazy="url"/>
 * <img v-lazy="{ src: url, loading: loadingUrl, error: errorUrl, animationType: 'blur', rootMargin: '100px', threshold: 0.1 }"/>
 */
const lazyImage: Directive<HTMLElement, string | LazyOptions> = {
    mounted(el, binding) {
        mountLazyImage(el, binding);
    },

    unmounted(el) {
        cleanupObserver(el);
    },

    updated(el, binding) {
        // 如果值没有变化，不做处理
        if (binding.value === binding.oldValue) return;

        // 先卸载旧的
        cleanupObserver(el);

        // 然后重新挂载新的
        mountLazyImage(el, binding);
    },
};

export default lazyImage;
