/**
 * Registers a new element with an automatically generated unique name.
 * Helps to make a test fully isolated.
 *
 * @example
 * const tag = defineCE(class extends MyMixin(HTMLElement) {
 *   // define custom element class body
 * });
 * const el = fixture(`<${tag}></${tag}>`);
 * // test el
 *
 * @template {HTMLElement} T
 * @param {import("@open-wc/dedupe-mixin").Constructor<T>} klass Class which extends HTMLElement
 * @returns {string} Tag name of the registered element
 */
export function defineCE<T extends HTMLElement>(klass: import("@open-wc/dedupe-mixin").Constructor<T>): string;
/**
 * Indicates that this is Internet Explorer.
 *
 * @returns {boolean}
 */
export function isIE(): boolean;
/**
 * Resolves after provided amount of miliseconds.
 *
 * @example
 * await aTimeout(100);
 *
 * @param {number} ms Miliseconds.
 * @returns {Promise<void>} Promise to await until time is up
 */
export function aTimeout(ms: number): Promise<void>;
/**
 * Resolves after requestAnimationFrame.
 *
 * @example
 * await nextFrame();
 *
 * @returns {Promise<void>} Promise that resolved after requestAnimationFrame
 */
export function nextFrame(): Promise<void>;
/**
 * Blurs the provided element and await time before and after it on IE.
 *
 * @example
 * const el = await fixture('<input type="text" autofocus />');
 * await triggerBlurFor(el);
 * // el is no longer focused
 *
 * @param {HTMLElement} element Element/Node to blur
 * @returns {Promise<void>} Promise to await until blur is done (for IE)
 */
export function triggerBlurFor(element: HTMLElement): Promise<void>;
/**
 * Focuses the provided element and await time before and after it on IE.
 *
 * Background info:
 * Adding an event and immediately trigger it fails in IE.
 * Also before checking the effects of a trigger IE needs some time.
 *
 * @example
 * const el = await fixture('<input type="text" />');
 * await triggerFocusFor(el);
 * // el is now focused
 *
 * @param {HTMLElement} element Element/Node to focus
 * @returns {Promise<void>} Promise to await until focus is done (for IE)
 */
export function triggerFocusFor(element: HTMLElement): Promise<void>;
/**
 * Listens for one event and resolves with this event object after it was fired.
 *
 * @example
 * setTimeout(() => el.fireDone());
 * await oneEvent(el, 'done');
 * expect(el.done).to.be.true;
 *
 * @param {EventTarget} eventTarget Target of the event, usually an Element
 * @param {string} eventName Name of the event
 * @returns {Promise<CustomEvent>} Promise to await until the event has been fired
 */
export function oneEvent(eventTarget: EventTarget, eventName: string): Promise<CustomEvent>;
/**
 * Waits until the given predicate returns a truthy value. Calls and awaits the predicate
 * function at the given interval time. Can be used to poll until a certain condition is true.
 *
 * @example
 * ```js
 * import { fixture, waitUntil } from '@open-wc/testing-helpers';
 *
 * const element = await fixture(html`<my-element></my-element>`);
 *
 * await waitUntil(() => element.someAsyncProperty, 'element should become ready');
 * ```
 *
 * @param {() => boolean | Promise<boolean>} predicate - predicate function which is called each poll interval.
 *   The predicate is awaited, so it can return a promise.
 * @param {string} [message] an optional message to display when the condition timed out
 * @param {{ interval?: number, timeout?: number }} [options] timeout and polling interval
 */
export function waitUntil(predicate: () => boolean | Promise<boolean>, message?: string, options?: {
    interval?: number;
    timeout?: number;
}): Promise<any>;
