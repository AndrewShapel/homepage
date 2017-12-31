import uniqueId from 'lodash/uniqueId';

import companies from '../../constants/companies';

/**
 * @const
 * @type {Object}
 */
export const EXPERIENCE_TABLE_HEADER_COLUMNS_IDS = {
  FULL_TIME: 'FULL_TIME',
  PART_TIME: 'PART_TIME',
};

/**
 * @const
 * @type {Object}
 */
export const EXPERIENCE_TABLE = {
  HEADER_COLUMNS: [{
    id: EXPERIENCE_TABLE_HEADER_COLUMNS_IDS.FULL_TIME,
    title: 'groups.experience.table.header.columns.fullTime.title',
  }, {
    id: EXPERIENCE_TABLE_HEADER_COLUMNS_IDS.PART_TIME,
    title: 'groups.experience.table.header.columns.partTime.title',
  }],
  CONTENT_COLUMNS: {
    [EXPERIENCE_TABLE_HEADER_COLUMNS_IDS.FULL_TIME]: [{
      id: uniqueId(),
      link: {
        href: companies.EPAM.homepage,
        title: companies.EPAM.title,
      },
      text: [
        'groups.experience.table.content.columns.fullTime.epam.first.position',
        'groups.experience.table.content.columns.fullTime.epam.first.project',
        'groups.experience.table.content.columns.fullTime.epam.first.timePeriod',
      ],
    }, {
      id: uniqueId(),
      text: [
        'groups.experience.table.content.columns.fullTime.epam.second.position',
        'groups.experience.table.content.columns.fullTime.epam.second.project',
        'groups.experience.table.content.columns.fullTime.epam.second.timePeriod',
      ],
    }, {
      id: uniqueId(),
      link: {
        href: companies.INSTINCTOOLS.homepage,
        title: companies.INSTINCTOOLS.title,
      },
      text: [
        'groups.experience.table.content.columns.fullTime.instinctools.position',
        'groups.experience.table.content.columns.fullTime.instinctools.project',
        'groups.experience.table.content.columns.fullTime.instinctools.timePeriod',
      ],
    }, {
      id: uniqueId(),
      link: {
        href: companies.CACTUS_SOFT.homepage,
        title: companies.CACTUS_SOFT.title,
      },
      text: [
        'groups.experience.table.content.columns.fullTime.cactusSoft.position',
        'groups.experience.table.content.columns.fullTime.cactusSoft.project',
        'groups.experience.table.content.columns.fullTime.cactusSoft.timePeriod',
      ],
    }, {
      id: uniqueId(),
      link: {
        href: companies.SMART_VISION_TECHNOLOGIES.homepage,
        title: companies.SMART_VISION_TECHNOLOGIES.title,
      },
      text: [
        'groups.experience.table.content.columns.fullTime.smartVisionTechnologies.position',
        'groups.experience.table.content.columns.fullTime.smartVisionTechnologies.project',
        'groups.experience.table.content.columns.fullTime.smartVisionTechnologies.timePeriod',
      ],
    }],
    [EXPERIENCE_TABLE_HEADER_COLUMNS_IDS.PART_TIME]: [{
      id: uniqueId(),
      link: {
        href: companies.AXAMIT.homepage,
        title: companies.AXAMIT.title
      },
      text: [
        'groups.experience.table.content.columns.partTime.axamit.position',
        'groups.experience.table.content.columns.partTime.axamit.project',
        'groups.experience.table.content.columns.partTime.axamit.timePeriod',
      ],
    }, {
      id: uniqueId(),
      link: {
        href: companies.LIVE_REACH.homepage,
        title: companies.LIVE_REACH.title,
      },
      text: [
        'groups.experience.table.content.columns.partTime.liveReach.position',
        'groups.experience.table.content.columns.partTime.liveReach.project',
        'groups.experience.table.content.columns.partTime.liveReach.timePeriod',
      ],
    }],
  },
};
