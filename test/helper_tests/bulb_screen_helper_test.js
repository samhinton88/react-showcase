import { writeLine } from '../../src/components/BulbScreen/map_helper';
import assert from 'assert';

describe('BulbScreen Helpers',() => {

  describe('writeLine', () => {
    it.only('should return a horizontal line of coords', () => {


      const start = [1,0];
      const finish = [7,0];



      assert(writeLine(start, finish) ==

            [[1,0], [2,0], [3,0], [4,0], [5,0], [6,0], [7,0]])
    })
  })

})
