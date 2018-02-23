import { writeLine } from '../../src/components/BulbScreen/map_helper';
import assert from 'assert';

describe('BulbScreen Helpers',() => {

  describe('writeLine', () => {
    it('should return a horizontal line of coords', () => {


      const start = [1,0];
      const finish = [7,0];

      assert(String(writeLine(start, finish)) ===

            String([[1,0], [2,0], [3,0], [4,0], [5,0], [6,0], [7,0]]))
    })

    it.only('should render a diagonal line', () => {
      const start = [0,0];
      const finish = [8,8];
      assert(String(writeLine(start, finish)) ===

            String([[0,0], [1,1], [2,2], [3,3], [4,4], [5,5], [6,6], [7,7], [8,8] ]))
    })
  })



})
