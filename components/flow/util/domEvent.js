/**
 * domcument event prehandler
 */
import { validFunc } from './validate';

// stop event propagation
export const stopPropagation = (handler, ...args) => (
  (e) => {
    e.stopPropagation();
    return validFunc(handler, ...args);
  }
);

export const saftyEventListener = {
  handlers: {},
  add(el, event, handler) {
    el && el.addEventListener(event, handler);
    this.handlers[handler] = el;
  },
  remove(event, handler) {
    const el = this.handlers[handler];
    if (!el) return;
    el.removeEventListener(event, handler);
    delete this.handlers[handler];
  }
};
