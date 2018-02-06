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

  it('contains my name and the word React', () => {
    expect(component).to.contain('Sam Hinton');
    expect(component).to.contain('React');
  })

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  })

  it('has a navbar', () => {
    expect(component.find('nav')).to.exist;
  })

  it('has a navbar which contains the word "React"', () => {
    expect(component.find('nav')).to.contain('React');
  })
})
