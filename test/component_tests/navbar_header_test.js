import { renderComponent, expect } from '../test_helper';
import NavbarHeader from '../../src/components/NavbarHeader';

describe('NavbarHeader', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(NavbarHeader);
  })

  it('exists', () => {
    expect(component).to.exist;
  })
})
