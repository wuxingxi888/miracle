import type { Directive } from 'vue';

// 配置常量
const ANIMATION_CONFIG = {
    distance: 100, // 动画移动距离(px)
    duration: 200, // 动画持续时间(ms)
    easing: 'ease', // 动画缓动函数
    initialOpacity: 0.5, // 初始透明度
};

// 使用WeakMap存储动画实例
const animationMap = new WeakMap<HTMLElement, Animation>();

// 单例IntersectionObserver
let observer: IntersectionObserver | null = null;

/**
 * 获取或创建IntersectionObserver实例
 */
const getObserver = () => {
    if (!observer) {
        observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const animation = animationMap.get(
                            entry.target as HTMLElement,
                        );
                        animation?.play();
                        observer?.unobserve(entry.target);
                    }
                });
            },
            {
                rootMargin: '0px 0px 0px 0px', // 提前100px触发观察
            },
        );
    }
    return observer;
};

/**
 * 创建滑动动画
 */
const createSlideAnimation = (el: HTMLElement) => {
    return el.animate(
        [
            {
                transform: `translateY(${ANIMATION_CONFIG.distance}px)`,
                opacity: ANIMATION_CONFIG.initialOpacity,
            },
            {
                transform: 'translateY(0)',
                opacity: 1,
            },
        ],
        {
            duration: ANIMATION_CONFIG.duration,
            easing: ANIMATION_CONFIG.easing,
            fill: 'forwards', // 保持动画结束状态
        },
    );
};

/**
 * 检查元素是否在视口下方
 */
const isBelowViewport = (el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    return rect.top > window.innerHeight;
};

/**
 * 窗口元素进入动画（slide-in）
 * v-slide-in
 * <item v-slide-in></item>
 */
const slideIn: Directive<HTMLElement> = {
    mounted(el) {
        // 使用requestAnimationFrame确保在下一帧执行
        requestAnimationFrame(() => {
            if (!isBelowViewport(el)) return;

            const animation = createSlideAnimation(el);
            animation.pause();
            animationMap.set(el, animation);
            getObserver().observe(el);
        });
    },

    unmounted(el) {
        getObserver().unobserve(el);
        animationMap.get(el)?.cancel();
        animationMap.delete(el);
    },
};

export default slideIn;
