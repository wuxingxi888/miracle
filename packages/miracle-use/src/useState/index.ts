import type { Ref } from 'vue';
import { ref } from 'vue';
import { isFunction } from '@miracle-web/utils';

export type BasicStateAction<S> = ((state: S) => S) | S;

export type Dispatch<A> = (action: A) => void;

/**
 * 模拟 Vue 的 useState 钩子功能
 *
 * @param initialState 初始状态，可以是一个值或一个返回值的函数
 * @returns 一个包含当前状态和更新状态函数的元组
 *
 * 使用方法：
 * 1. 如果 initialState 是一个值，直接使用该值作为初始状态
 * 2. 如果 initialState 是一个函数，调用该函数获取初始状态
 * 3. 返回的 [reactiveState, dispatchAction] 可以用于读取和更新状态
 *
 * @example
 * const [count, setCount] = useState(0);
 * setCount(count + 1); // 更新状态
 */
export function useState<S>(
    initialState?: (() => S) | S,
): [Ref<S>, Dispatch<BasicStateAction<S>>] {
    let state: S;

    if (isFunction(initialState)) {
        try {
            state = initialState();
        } catch (error) {
            console.error('Error initializing state:', error);
            state = undefined as unknown as S; // 提供一个默认值或抛出异常
        }
    } else if (initialState !== undefined && initialState !== null) {
        state = initialState;
    } else {
        state = undefined as unknown as S; // 提供一个默认值或抛出异常
    }

    const reactiveState = ref(state) as Ref<S>;

    const dispatchAction = (actionOrState: ((prevState: S) => S) | S) => {
        if (isFunction(actionOrState)) {
            try {
                reactiveState.value = actionOrState(reactiveState.value);
            } catch (error) {
                console.error('Error dispatching action:', error);
            }
        } else {
            reactiveState.value = actionOrState;
        }
    };

    return [reactiveState, dispatchAction];
}
