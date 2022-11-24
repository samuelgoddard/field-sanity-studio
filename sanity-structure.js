import S from "@sanity/desk-tool/structure-builder";
import IframePreview from './preview/IFramePreview'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

import {
  FiHome,
  FiUsers,
  FiBatteryCharging,
  FiMail,
  FiSun,
  FiSmile,
  FiBriefcase,
  FiMapPin,
  FiShare2,
  FiFileText,
  FiFilter
} from 'react-icons/fi'

import { getGlobalSlug, previewURL } from './utils/resolveProductionUrl'

export const getDefaultDocumentNode = ({ schemaType }) => S.document().views(getPreview(schemaType))

const getPreview = (schemaType) => {
  const globalSlug = getGlobalSlug(schemaType)
  if (globalSlug) {
    return [
      S.view.form(),
      S.view
        .component(IframePreview)
        .title('Web preview')
        .options({ previewURL, isMobile: false, globalSlug }),
      S.view
        .component(IframePreview)
        .title('Mobile preview')
        .options({ previewURL, isMobile: true, globalSlug })
    ]
  }
  return [S.view.form()]
}

export default () =>
  S.list()
    .title("Content")
    .items([
      // S.listItem().title('Home [LEGACY]').child(S.editor().id('home').schemaType('home').documentId('singleton-home').views(getPreview('home'))).icon(FiHome),
      // S.divider(),
      S.listItem().title('Home').child(S.editor().id('homeNew').schemaType('homeNew').documentId('singleton-homeNew').views(getPreview('homeNew'))).icon(FiHome),
      S.divider(),
      // S.listItem().title('Mission [LEGACY]').child(S.editor().id('mission').schemaType('mission').documentId('singleton-mission').views(getPreview('mission'))).icon(FiBatteryCharging),
      // S.divider(),
      S.listItem().title('Mission').child(S.editor().id('missionNew').schemaType('missionNew').documentId('singleton-missionNew').views(getPreview('missionNew'))).icon(FiBatteryCharging),
      S.divider(),
      S.listItem()
        .title('Projects')
        .child(
          S.list()
            .title('Projects')
            .items([
              S.listItem().title('Projects (Landing Page)').child(S.editor().id('projectsLanding').schemaType('projectsLanding').documentId('singleton-projectsLanding').views(getPreview('projectsLanding'))).icon(FiSun),
              S.divider(),
              orderableDocumentListDeskItem({
                type: 'projects',
                title: 'Projects',
                icon: FiUsers
              }),
              S.divider(),
              S.listItem().title('Project Countries').child(S.documentTypeList('country').title('Project Countries')).icon(FiMapPin),
              S.divider(),
              S.listItem().title('Project Statuses').child(S.documentTypeList('status').title('Project Statuses')).icon(FiShare2),
              S.divider(),
              S.listItem().title('Project Storages').child(S.documentTypeList('storage').title('Project Storages')).icon(FiShare2),
              ,
            ])),
      S.divider(),
      S.listItem().title('Development').child(S.editor().id('development').schemaType('development').documentId('singleton-development').views(getPreview('development'))).icon(FiBatteryCharging),
      S.divider(),
      S.listItem()
        .title('Team')
        .child(
          S.list()
            .title('Team')
            .items([
              // S.listItem().title('Team (Landing Page)[LEGACY]').child(S.editor().id('teamLanding').schemaType('teamLanding').documentId('singleton-teamLanding').views(getPreview('teamLanding'))).icon(FiSun),
              // S.divider(),
              S.listItem().title('Team (Landing Page)').child(S.editor().id('teamLandingNew').schemaType('teamLandingNew').documentId('singleton-teamLandingNew').views(getPreview('teamLandingNew'))).icon(FiSun),
              S.divider(),
              orderableDocumentListDeskItem({
                type: 'team',
                title: 'Team (Members)',
                icon: FiUsers
              }),
              S.divider(),
              S.listItem().title('Team Locations').child(S.documentTypeList('locations').title('Team Locations')).icon(FiMapPin),
              S.divider(),
              S.listItem().title('Team Departments').child(S.documentTypeList('departments').title('Team Departments')).icon(FiShare2),
              ,
            ])),
      S.divider(),
      S.listItem().title('Careers').child(S.editor().id('careersLanding').schemaType('careersLanding').documentId('singleton-careersLanding').views(getPreview('careersLanding'))).icon(FiSun),
      // S.listItem()
      //   .title('Careers')
      //   .child(
      //     S.list()
      //       .title('Careers')
      //       .items([
      //         S.listItem().title('Careers (Landing Page)').child(S.editor().id('careersLanding').schemaType('careersLanding').documentId('singleton-careersLanding').views(getPreview('careersLanding'))).icon(FiSun),
      //         ,
      //         S.divider(),
      //         S.listItem().title('Careers Listings (LEGACY)').child(S.documentTypeList('careers').title('Careers Listings (LEGACY)')).icon(FiFileText),
      //       ])),
      S.divider(),
      S.listItem()
        .title('Views')
        .child(
          S.list()
            .title('Views')
            .items([
              S.listItem().title('Views (Landing Page)').child(S.editor().id('viewsLanding').schemaType('viewsLanding').documentId('singleton-viewsLanding').views(getPreview('viewsLanding'))).icon(FiSun),
              ,
              S.divider(),
              S.listItem().title('Articles').child(S.documentTypeList('views').title('Articles')).icon(FiFileText),
              S.divider(),
              S.listItem().title('Categories').child(S.documentTypeList('categories').title('Categories')).icon(FiFilter),
              ,
            ])),
      S.divider(),
      S.listItem().title('Contact').child(S.editor().id('contact').schemaType('contact').documentId('singleton-contact')).icon(FiMail),
      S.divider(),
      S.listItem().title('Privacy Policy').child(S.editor().id('privacy').schemaType('privacy').documentId('singleton-privacy')).icon(FiBriefcase),
    ]);