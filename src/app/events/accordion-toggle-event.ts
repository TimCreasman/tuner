export class AccordionToggleEvent extends Event {
    detailsElement: HTMLDetailsElement;

    constructor(details: HTMLDetailsElement) {
        super('accordion-toggle', { bubbles: true, composed: true });
        this.detailsElement = details;
    }
}

