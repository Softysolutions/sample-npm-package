import { Hello } from "./hello"
/**
 * This is a function.
 *
 * @param {string} n - A string param
 * @param {string} [o] - A optional string param
 * @param {string} [d=DefaultValue] - A optional string param
 * @return {string} A good string
 *
 * @example
 *
 *     foo('hello')
 */

export function foo(n: string, o: string, d: string): string {
  Hello("World!");
  return n
}