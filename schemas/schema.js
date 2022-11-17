import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import singletonHome from './singletonHome'
import singletonContact from './singletonContact'
import singletonMission from './singletonMission'
import singletonPrivacyPolicy from './singletonPrivacyPolicy'
import singletonTeam from './singletonTeam'
import singletonCareers from './singletonCareers'

import team from './team'
import careers from './careers'
import departments from './departments'
import categories from './categories'
import locations from './locations'
import status from './status'
import storage from './storage'
import country from './country'
import projects from './projects'
import views from './views'

import seo from './common/seo'
import defaultImage from './common/defaultImage'
import modularImageBlock from './common/modularImageBlock'
import modularQuoteBlock from './common/modularQuoteBlock'
import modularTextBlock from './common/modularTextBlock'

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
    singletonCareers,
    team,
    careers,
    departments,
    locations,
    storage,
    country,
    categories,
    status,
    projects,
    views,
    seo,
    defaultImage,
    modularImageBlock,
    modularQuoteBlock,
    modularTextBlock,
    bar,
    pictorgram
  ]),
})
