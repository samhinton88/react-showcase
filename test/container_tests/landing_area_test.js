import { renderComponent, expect } from '../test_helper';
import LandingArea from '../../src/containers/LandingArea';

describe('Landing Area', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(LandingArea);
  });

  it('exists', () => {
    expect(component).to.exist;
  });

  it('has a landing-area class', () => {
    expect(component).to.have.class('landing-area');
  })

  it('has some SEO', () => {

  })
})
