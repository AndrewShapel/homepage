import uniqueId from 'lodash/uniqueId';

import anchors from '../../constants/anchors';
import icons from '../../constants/icons';

/**
 * @const
 * @type {Array}
 */
export const HEADER_IMAGE_NAVIGATION_LINKS = [{
  id: anchors.HOME.id,
  title: 'headerImage.titles.home',
  href: anchors.HOME.href,
}, {
  id: anchors.ABOUT_ME.id,
  title: 'headerImage.titles.aboutMe',
  href: anchors.ABOUT_ME.href,
}, {
  id: anchors.EXPERIENCE.id,
  title: 'headerImage.titles.experience',
  href: anchors.EXPERIENCE.href,
}, {
  id: anchors.CONTACT_ME.id,
  title: 'headerImage.titles.contact',
  href: anchors.CONTACT_ME.href,
}];

/**
 * @const
 * @type {Array}
 */
export const HEADER_IMAGE_SOCIAL_NETWORKS = [{
  id: uniqueId(),
  icon: icons.LINKED_IN,
  href: 'https://www.linkedin.com/in/andrew-shapel-351243145',
}, {
  id: uniqueId(),
  icon: icons.GITHUB,
  href: 'https://github.com/AndrewShapel',
}];
