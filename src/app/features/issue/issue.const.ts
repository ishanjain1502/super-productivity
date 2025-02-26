import {
  ConfigFormConfig,
  GenericConfigFormSection,
} from '../config/global-config.model';
import { DEFAULT_JIRA_CFG, JIRA_CONFIG_FORM_SECTION } from './providers/jira/jira.const';
import { IssueProviderKey } from './issue.model';
import {
  DEFAULT_GITHUB_CFG,
  GITHUB_CONFIG_FORM_SECTION,
} from './providers/github/github.const';
import {
  DEFAULT_GITLAB_CFG,
  GITLAB_CONFIG_FORM_SECTION,
} from './providers/gitlab/gitlab.const';
import {
  CALDAV_CONFIG_FORM_SECTION,
  DEFAULT_CALDAV_CFG,
} from './providers/caldav/caldav.const';
import {
  DEFAULT_OPEN_PROJECT_CFG,
  OPEN_PROJECT_CONFIG_FORM_SECTION,
} from './providers/open-project/open-project.const';
import { T } from '../../t.const';

export const GITLAB_TYPE: IssueProviderKey = 'GITLAB';
export const GITHUB_TYPE: IssueProviderKey = 'GITHUB';
export const JIRA_TYPE: IssueProviderKey = 'JIRA';
export const CALDAV_TYPE: IssueProviderKey = 'CALDAV';
export const OPEN_PROJECT_TYPE: IssueProviderKey = 'OPEN_PROJECT';

export const ISSUE_PROVIDER_TYPES: IssueProviderKey[] = [
  GITLAB_TYPE,
  GITHUB_TYPE,
  JIRA_TYPE,
  CALDAV_TYPE,
  OPEN_PROJECT_TYPE,
];

export const ISSUE_PROVIDER_ICON_MAP = {
  [JIRA_TYPE]: 'jira',
  [GITHUB_TYPE]: 'github',
  [GITLAB_TYPE]: 'gitlab',
  [CALDAV_TYPE]: 'caldav',
  [OPEN_PROJECT_TYPE]: 'open_project',
};

export const ISSUE_PROVIDER_HUMANIZED = {
  [JIRA_TYPE]: 'Jira',
  [GITHUB_TYPE]: 'GitHub',
  [GITLAB_TYPE]: 'GitLab',
  [CALDAV_TYPE]: 'CalDAV',
  [OPEN_PROJECT_TYPE]: 'OpenProject',
};

export const DEFAULT_ISSUE_PROVIDER_CFGS = {
  [JIRA_TYPE]: DEFAULT_JIRA_CFG,
  [GITHUB_TYPE]: DEFAULT_GITHUB_CFG,
  [GITLAB_TYPE]: DEFAULT_GITLAB_CFG,
  [CALDAV_TYPE]: DEFAULT_CALDAV_CFG,
  [OPEN_PROJECT_TYPE]: DEFAULT_OPEN_PROJECT_CFG,
};

export const ISSUE_PROVIDER_FORM_CFGS: ConfigFormConfig = [
  GITLAB_CONFIG_FORM_SECTION as GenericConfigFormSection,
  GITHUB_CONFIG_FORM_SECTION as GenericConfigFormSection,
  JIRA_CONFIG_FORM_SECTION as GenericConfigFormSection,
  CALDAV_CONFIG_FORM_SECTION as GenericConfigFormSection,
  OPEN_PROJECT_CONFIG_FORM_SECTION as GenericConfigFormSection,
].map((providerCfg) => ({
  ...providerCfg,
  items: providerCfg.items && [
    {
      key: 'isEnabled',
      type: 'toggle',
      templateOptions: {
        label: T.G.ENABLED,
      },
    },
    ...providerCfg.items,
  ],
}));

const DEFAULT_ISSUE_STRS: { ISSUE_STR: string; ISSUES_STR: string } = {
  ISSUE_STR: T.F.ISSUE.DEFAULT.ISSUE_STR,
  ISSUES_STR: T.F.ISSUE.DEFAULT.ISSUES_STR,
};

export const ISSUE_STR_MAP: { [key: string]: { ISSUE_STR: string; ISSUES_STR: string } } =
  {
    [JIRA_TYPE]: DEFAULT_ISSUE_STRS,
    [GITHUB_TYPE]: DEFAULT_ISSUE_STRS,
    [GITLAB_TYPE]: DEFAULT_ISSUE_STRS,
    [CALDAV_TYPE]: DEFAULT_ISSUE_STRS,
    [OPEN_PROJECT_TYPE]: {
      ISSUE_STR: T.F.OPEN_PROJECT.ISSUE_STRINGS.ISSUE_STR,
      ISSUES_STR: T.F.OPEN_PROJECT.ISSUE_STRINGS.ISSUES_STR,
    },
  };
