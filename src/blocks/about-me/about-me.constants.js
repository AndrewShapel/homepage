import uniqueId from 'lodash/uniqueId';

import icons from '../../constants/icons';

/**
 * @const
 * @type {Object}
 */
export const ABOUT_ME_COLUMNS = [{
  id: uniqueId(),
  title: 'groups.aboutMe.columns.frontendDevelopment.title',
  description: 'groups.aboutMe.columns.frontendDevelopment.description',
  icon: icons.BROWSER,
}, {
  id: uniqueId(),
  title: 'groups.aboutMe.columns.backendDevelopment.title',
  description: 'groups.aboutMe.columns.backendDevelopment.description',
  icon: icons.SERVER,
}, {
  id: uniqueId(),
  title: 'groups.aboutMe.columns.desktopDevelopment.title',
  description: 'groups.aboutMe.columns.desktopDevelopment.description',
  icon: icons.DISPLAY,
}, {
  id: uniqueId(),
  title: 'groups.aboutMe.columns.management.title',
  description: 'groups.aboutMe.columns.management.description',
  icon: icons.MANAGEMENT,
}];
