/**
 * Wraps the template inside a scopedElements component
 *
 * @param {import('./litFixture').LitHTMLRenderable} template
 * @param {ScopedElementsMap} scopedElements
 * @returns {TemplateResult}
 */
export function getScopedElementsTemplate(template: import('./litFixture').LitHTMLRenderable, scopedElements: ScopedElementsMap): TemplateResult;
export type ScopedElementsMap = {
    [key: string]: {
        new (): HTMLElement;
        prototype: HTMLElement;
    };
};
import { TemplateResult } from "lit-element";
