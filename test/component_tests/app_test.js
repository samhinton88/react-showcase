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

  it('shows a dashboard', () => {
    expect(component.find('dashboard')).to.exist;
  })

  it('shows a button', () => {
    expect(component.find('button')).to.exist;
  })
  it('has a navbar', () => {
    expect(component.find('nav')).to.exist;
  })

  it('has a navbar which contains the word "React"', () => {
    expect(component.find('nav')).to.contain('React');
  })

  describe('button', () => {
    it('has a class of nav-theme-toggle', () => {
      expect(component.find('button')).to.have.class('nav-theme-toggle')
    })

    it('changes the theme of the navbar', () => {
      component.find('.nav-theme-toggle').simulate('click');
      expect(component.find('nav')).to.have.class('navbar-inverse')
    })

    it('changes the theme of the navbar back when clicked again', () => {
      component.find('.nav-theme-toggle').simulate('click');
      component.find('.nav-theme-toggle').simulate('click');
      expect(component.find('nav')).to.have.class('navbar-default')
    })
  })


})
