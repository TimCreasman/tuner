import {TunerComponent} from '../tuner.component.js';
import {spy} from 'sinon';
import {expect, fixture} from '@open-wc/testing';
import {html} from 'lit/static-html.js';
import {assert} from 'chai';

describe('TunerComponent', function () {

    test('is defined', () => {
        const el = document.createElement('tn-tuner');
        assert.instanceOf(el, TunerComponent);
    });

    let component: TunerComponent;

    beforeEach(async () => {
        component = await fixture<TunerComponent>(html`
            <tn-tuner></tn-tuner>`);
    });

    it('should equal snapshot', async () => {
        expect(component).dom.to.equalSnapshot();
        debugger;
    });

    describe('tuner body', function () {

        let tunerBody: HTMLElement;

        beforeEach(async () => {
            tunerBody = component.shadowRoot?.querySelector('[data-test-id="tuner.body"]') as HTMLElement;
        });

        it('should exist', async () => {
            expect(tunerBody).to.exist;
        });

        it('should resume audio context when clicked', async () => {
            console.log(tunerBody);
            debugger;
            tunerBody.click();
            const resumeContextSpy = spy(component['pitchDetectorService'].audioSource.audioContext, 'resume');

            expect(resumeContextSpy.called).to.be.true;
        });
    });
});
