import bikeu from './bikeu.json'
import nextbike from './nextbike.json'
import romet from './romet.json'

export default [
  ...bikeu.cities.map(b => ({ ...b, company: 'BikeU' })),
  ...nextbike.cities.map(b => ({ ...b, company: 'Nextbike' })),
  ...romet.cities.map(b => ({ ...b, company: 'Romet Rental Systems' }))
]
