import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/App';

describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  })

  it('exists', () => {
    expect(component).to.exist;
  })

  it('contains my name', () => {
    expect(component).to.contain('Sam Hinton');
  })

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  })
})
