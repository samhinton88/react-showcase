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

  it('is a grid', () => {
    expect(component).to.have.class('grid');
  });

  it('contains cards', () => {
    console.log(component.find('div'))
  })
})
