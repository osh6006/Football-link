import { create, StateCreator } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

// 스토어를 만들 때 미들웨어를 자동으로 사용하기
export const createStore = <T extends object>(
  initializer: StateCreator<
    T,
    [["zustand/devtools", never], ["zustand/immer", never]]
  >
) =>
  create<T, [["zustand/devtools", never], ["zustand/immer", never]]>(
    devtools(immer(initializer))
  );

/**
 * @template S zustand store 상태
 * @template K selector가 없는 경우 default로 사용할 key
 */
export type SelectorHook<S, K extends keyof S> = {
  <U>(selector: (state: S) => U): U;
  (): S[K];
};