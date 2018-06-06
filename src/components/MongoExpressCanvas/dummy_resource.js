export default [
{
  resourceIndex: 0,
  name: 'user',
  size: 100,
  canvasPos: [200, 150],
  colour: {r: 48, g: 205, b: 201},
  properties: {
    createdAt: {type: 'Date', onSave: true},
    local: {
      password: {type: 'String', required: true},
      email: {type: 'String', required: true}
    },
    profile: {

      firstName: {type: 'String', required: true},
      lastName: {type: 'String', required: true},
      gameStats: {
        played: {type: 'Number'}
      }
    }
}

},
// {
//   resourceIndex: 1,
//   name: 'untitled',
//   size: 100,
//   canvasPos: [300, 150],
//   colour: {r: 10, g: 10, b: 100},
//   properties: {
//   local: {
//     password: {type: 'String', required: true},
//     email: {type: 'String', required: true}
//   },
//   profile: {
//     firstName: {type: 'String', required: true},
//     lastName: {type: 'String', required: true},
//     gameStats: {
//       played: {type: 'Number'}
//     }
//   }
// }
// }
]
