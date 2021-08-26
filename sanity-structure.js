import S from "@sanity/desk-tool/structure-builder";
import IframePreview from './preview/IFramePreview'

import {
  FiHome,
  FiUsers,
  FiBatteryCharging,
  FiMail,
  FiSun,
  FiSmile,
  FiBriefcase
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
      S.listItem().title('Home').child(S.editor().id('home').schemaType('home').documentId('singleton-home').views(getPreview('home'))).icon(FiHome),
      S.divider(),
      S.listItem().title('Mission').child(S.editor().id('mission').schemaType('mission').documentId('singleton-mission').views(getPreview('mission'))).icon(FiBatteryCharging),
      S.divider(),
      S.listItem().title('Team (Landing Page)').child(S.editor().id('teamLanding').schemaType('teamLanding').documentId('singleton-teamLanding').views(getPreview('teamLanding'))).icon(FiSun),
      S.divider(),
      S.listItem().title('Team (Members)').child(S.documentTypeList('team').title('Team')).icon(FiUsers),
      S.divider(),
      S.listItem().title('Careers').child(S.documentTypeList('careers').title('Careers')).icon(FiSmile),
      S.divider(),
      S.listItem().title('Contact').child(S.editor().id('contact').schemaType('contact').documentId('singleton-contact')).icon(FiMail),
      S.divider(),
      S.listItem().title('Privacy Policy').child(S.editor().id('privacy').schemaType('privacy').documentId('singleton-privacy')).icon(FiBriefcase),
    ]);