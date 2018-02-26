import * as funcs from '../../src/helpers/react_eye_helpers';
import assert from 'assert';

describe('ReactEyeAnimation', () => {
  const { stepTowards, trackTowards } = funcs.default;
   let position, destination, component;

    beforeEach(() => {
     position = { x: 0, y: 0 };
     destination = { x: 100, y:50 };
     component = {
       position,
       stepTowards,
       trackTowards,
       track: []
     }
   })

  describe('stepTowards', () => {

    it('marginally increments a pair of coordinates', () => {
      component.stepTowards({ x: 10, y: 10 });
      assert(component.position.x === 0.1);
      assert(component.position.y === 0.1);
    })

    it('marignally increments a pair of coordinates towards a given destination', () => {
      component.stepTowards(destination);
      assert(component.position.x === 1);
      assert(component.position.y === 0.5);

    })
  })

  describe('trackTowards', () => {

    it.only('describes a path towards a destination', () => {
      console.log(component)
      component.trackTowards(destination);

    })
  })
})
