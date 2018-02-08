import { renderComponent, expect } from '../test_helper';
import SkillCard from '../../src/components/SkillCard';

describe('SkillCard', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(SkillCard);
  });

  it('exists', () => {
    expect(component).to.exist;
  });

  it('has the class name skill-card', () => {
    expect(component).to.have.class('skill-card');
  });

  it('contains an h3 tag', () => {
    expect(component.find('h3')).to.exist;
  });

  it('contains two divs', () => {
    expect(component.find('div').length).to.equal(2);
  })

  it('contains an image tag', () => {
    expect(component.find('img')).to.exist;
  })
})
