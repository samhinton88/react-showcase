import { renderComponent, expect } from '../test_helper';
import Dashboard from '../../src/components/Dashboard';
import { colorSpec } from '../spec_data/style';

describe('Dashboard', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Dashboard);
  })

  it('exists', () => {
    expect(component).to.exist;
  })

  it('has the class dashboard', () => {
    expect(component).to.have.class('dashboard')
  })

  it('has on-brand colours', () => {
    expect(component).to.have.css('background-color', colorSpec.secondaryColor)
  })

  it('is a css grid', () => {
    expect(component).to.have.css('display', 'grid');
  });

  it('contains three cards', () => {
    expect(component.find('.card').length).to.equal(3)
  })
})
