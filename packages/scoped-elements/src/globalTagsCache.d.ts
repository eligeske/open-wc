export function addToGlobalTagsCache(tag: string, klass: typeof HTMLElement): Map<{
    new (): HTMLElement;
    prototype: HTMLElement;
}, string>;
export function getFromGlobalTagsCache(klass: typeof HTMLElement): undefined | string;
