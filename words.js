var FOOTBALLPLAYER_WORDS = [
  'alex',
  'ronaldo',
  'messi',
  'hazard',
  'mbappe',
  'maradona',
  'maldini',
  'gattuso',
  'cafu',
  'pele',
  'zidane',
  'cruyff',
  'hagi',
  'valverde',
  'kaka',
  'klose',
  'ronaldinho',
  'benzema',
  'carlos',
]

function randomWord() {
  return FOOTBALLPLAYER_WORDS[Math.floor(Math.random() * FOOTBALLPLAYER_WORDS.length)]
}

export { randomWord }
