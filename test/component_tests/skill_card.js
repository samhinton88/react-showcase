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
  })
})
