import { action, task } from '../actionTypes'

export const INCREMENT = 'COUNTER_INCREMENT'
export function increment() {
  return action(INCREMENT)
}

export const DECREMENT = 'COUNTER_DECREMENT'
export function decrement() {
  return action(DECREMENT)
}

export const INCIFODD = 'COUNTER_INCIFODD'
export function incIfOdd() {
  return task(INCIFODD)
}

export const INCASYNC = 'COUNTER_INCASYNC'
export function incAsync(delay) {
  return task(INCASYNC, delay)
}
