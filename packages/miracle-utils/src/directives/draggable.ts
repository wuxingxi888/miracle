import type { Directive } from 'vue';

/**
 * 可拖拽元素类型扩展
 * 确保父元素具有必要的布局属性
 */
interface DraggableElement extends HTMLElement {
    parentNode: HTMLElement & {
        offsetWidth: number; // 父元素宽度
        offsetHeight: number; // 父元素高度
    };
}

/**
 * 拖拽事件类型（鼠标或触摸）
 */
type DragEvent = MouseEvent | TouchEvent;

// 常量定义
const DRAG_THRESHOLD = 5; // 拖动触发阈值(像素)
const DRAG_CURSOR = 'move'; // 拖拽时鼠标样式

/**
 * Vue可拖拽指令
 * 功能：使元素可以在其父容器内拖拽
 *
 * 使用要求：
 * 1. 父元素需要设置定位(position: relative/absolute/fixed)
 * 2. 当前元素需要设置定位(position: absolute)
 *
 * 使用示例：
 * <template>
 *   <div class="container">
 *     <button v-drag>拖拽我</button>
 *   </div>
 * </template>
 *
 * 特性：
 * - 支持鼠标和触摸事件
 * - 拖拽时有边界限制
 * - 小幅度移动不会触发拖拽(防止误操作)
 * - 自动清理事件监听
 */
const draggable: Directive<DraggableElement> = {
    /**
     * 指令挂载时调用
     * @param el 指令绑定的元素
     */
    mounted(el) {
        // 初始化元素样式
        el.style.cursor = DRAG_CURSOR;
        el.style.position = 'absolute';

        /**
         * 开始拖拽处理函数
         * @param e 拖拽事件
         * @param isTouch 是否为触摸事件
         */
        const startDrag = (e: DragEvent, isTouch: boolean) => {
            e.stopPropagation(); // 阻止事件冒泡

            // 获取起始坐标
            const clientX = isTouch
                ? (e as TouchEvent).touches[0].clientX
                : (e as MouseEvent).clientX;
            const clientY = isTouch
                ? (e as TouchEvent).touches[0].clientY
                : (e as MouseEvent).clientY;

            const startX = clientX;
            const startY = clientY;
            const startLeft = el.offsetLeft; // 元素初始左偏移
            const startTop = el.offsetTop; // 元素初始上偏移

            let isDragging = false; // 是否正在拖拽

            /**
             * 移动处理函数
             * @param e 移动事件
             */
            const moveHandler = (e: DragEvent) => {
                // 获取当前坐标
                const currentX = isTouch
                    ? (e as TouchEvent).touches[0].clientX
                    : (e as MouseEvent).clientX;
                const currentY = isTouch
                    ? (e as TouchEvent).touches[0].clientY
                    : (e as MouseEvent).clientY;

                // 检查是否达到拖拽阈值
                if (!isDragging) {
                    const dx = Math.abs(currentX - startX);
                    const dy = Math.abs(currentY - startY);

                    if (dx > DRAG_THRESHOLD || dy > DRAG_THRESHOLD) {
                        isDragging = true;
                        e.preventDefault(); // 阻止默认行为
                    }
                    return;
                }

                e.preventDefault(); // 阻止默认行为(如页面滚动)

                // 计算新位置
                let newX = startLeft + (currentX - startX);
                let newY = startTop + (currentY - startY);

                // 计算边界限制
                const maxX = el.parentNode.offsetWidth - el.offsetWidth;
                const maxY = el.parentNode.offsetHeight - el.offsetHeight;

                // 限制在父元素范围内
                newX = Math.max(0, Math.min(newX, maxX));
                newY = Math.max(0, Math.min(newY, maxY));

                // 使用requestAnimationFrame优化渲染
                requestAnimationFrame(() => {
                    el.style.left = `${newX}px`;
                    el.style.top = `${newY}px`;
                });
            };

            /**
             * 结束拖拽处理函数
             * @param e 结束事件
             */
            const endHandler = (e: DragEvent) => {
                // 移除事件监听
                document.removeEventListener(
                    isTouch ? 'touchmove' : 'mousemove',
                    moveHandler,
                );
                document.removeEventListener(
                    isTouch ? 'touchend' : 'mouseup',
                    endHandler,
                );

                // 如果不是拖拽而是点击，触发点击事件
                if (!isDragging && e.target instanceof HTMLElement) {
                    e.target.click();
                }
            };

            // 添加移动事件监听
            document.addEventListener(
                isTouch ? 'touchmove' : 'mousemove',
                moveHandler,
                { passive: false }, // 明确声明非被动事件
            );

            // 添加结束事件监听
            document.addEventListener(
                isTouch ? 'touchend' : 'mouseup',
                endHandler,
            );
        };

        // 将 startDrag 函数存储在元素的自定义属性中，以便在 unmounted 时可以移除
        (el as any)._startDrag = startDrag;

        // 绑定鼠标和触摸事件
        el.addEventListener('mousedown', (e) => startDrag(e, false));
        el.addEventListener(
            'touchstart',
            (e) => startDrag(e, true),
            { passive: false }, // 触摸事件也声明为非被动
        );
    },

    /**
     * 指令卸载时调用
     * @param el 指令绑定的元素
     */
    unmounted(el) {
        // 清理事件监听防止内存泄漏
        const startDrag = (el as any)._startDrag;
        if (startDrag) {
            el.removeEventListener('mousedown', startDrag);
            el.removeEventListener('touchstart', startDrag);
        }
    },
};

export default draggable;
