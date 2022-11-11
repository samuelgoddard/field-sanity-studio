import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import singletonHome from './singletonHome'
import singletonContact from './singletonContact'
import singletonMission from './singletonMission'
import singletonPrivacyPolicy from './singletonPrivacyPolicy'
import singletonTeam from './singletonTeam'

import team from './team'
import careers from './careers'
import departments from './departments'
import locations from './locations'
import status from './status'
import storage from './storage'
import country from './country'
import projects from './projects'

import seo from './common/seo'

import pictorgram from './blocks/pictorgram'
import bar from './blocks/bar'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    singletonHome,
    singletonContact,
    singletonMission,
    singletonTeam,
    singletonPrivacyPolicy,
    team,
    careers,
    departments,
    locations,
    storage,
    country,
    status,
    projects,
    seo,
    bar,
    pictorgram
  ]),
})
