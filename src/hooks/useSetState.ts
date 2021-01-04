import { Reducer, useReducer } from 'react'

/**
 * Old setState-like hook.
 */
export function useSetState<T>(initialState: T): [T, React.Dispatch<T>] {
  const [state, setState] = useReducer<Reducer<T, T>>(
    (state, newState) => ({ ...state, ...newState }),
    initialState
  )

  return [state, setState]
}
