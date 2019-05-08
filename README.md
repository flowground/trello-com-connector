# ![LOGO](logo.png) Trello **flow**ground Connector

## Description

A generated **flow**ground connector for the Trello API (version 1.0).

Generated from: https://api.apis.guru/v2/specs/trello.com/1.0/swagger.json<br/>
Generated at: 2019-05-07T17:44:29+03:00

## API Description

This document describes the REST API of Trello as published by Trello.com.
 - <a href='https://trello.com/docs/index.html' target='_blank'>Official Documentation</a>
 - <a href='https://trello.com/docs/api' target='_blank'>The HTML pages that were scraped in order to generate this specification.</a>

## Authorization

Supported authorization schemes:
- API Key- API Key
## Actions

### deleteActionsByIdAction()

*Tags:* `action`

#### Input Parameters
* `idAction` - _required_ - idAction
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getActionsByIdAction()

*Tags:* `action`

#### Input Parameters
* `idAction` - _required_ - idAction
* `display` - _optional_ -  true or false
* `entities` - _optional_ -  true or false
* `fields` - _optional_ - all or a comma-separated list of: data, date, idMemberCreator or type
* `member` - _optional_ -  true or false
* `member_fields` - _optional_ - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* `memberCreator` - _optional_ -  true or false
* `memberCreator_fields` - _optional_ - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateActionsByIdAction()

*Tags:* `action`

#### Input Parameters
* `idAction` - _required_ - idAction
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getActionsBoardByIdAction()

*Tags:* `action`

#### Input Parameters
* `idAction` - _required_ - idAction
* `fields` - _optional_ - all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getActionsBoardByIdActionByField()

*Tags:* `action`

#### Input Parameters
* `idAction` - _required_ - idAction
* `field` - _required_ - field
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getActionsCardByIdAction()

*Tags:* `action`

#### Input Parameters
* `idAction` - _required_ - idAction
* `fields` - _optional_ - all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getActionsCardByIdActionByField()

*Tags:* `action`

#### Input Parameters
* `idAction` - _required_ - idAction
* `field` - _required_ - field
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getActionsDisplayByIdAction()

*Tags:* `action`

#### Input Parameters
* `idAction` - _required_ - idAction
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getActionsEntitiesByIdAction()

*Tags:* `action`

#### Input Parameters
* `idAction` - _required_ - idAction
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getActionsListByIdAction()

*Tags:* `action`

#### Input Parameters
* `idAction` - _required_ - idAction
* `fields` - _optional_ - all or a comma-separated list of: closed, idBoard, name, pos or subscribed
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getActionsListByIdActionByField()

*Tags:* `action`

#### Input Parameters
* `idAction` - _required_ - idAction
* `field` - _required_ - field
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getActionsMemberByIdAction()

*Tags:* `action`

#### Input Parameters
* `idAction` - _required_ - idAction
* `fields` - _optional_ - all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getActionsMemberByIdActionByField()

*Tags:* `action`

#### Input Parameters
* `idAction` - _required_ - idAction
* `field` - _required_ - field
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getActionsMemberCreatorByIdAction()

*Tags:* `action`

#### Input Parameters
* `idAction` - _required_ - idAction
* `fields` - _optional_ - all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getActionsMemberCreatorByIdActionByField()

*Tags:* `action`

#### Input Parameters
* `idAction` - _required_ - idAction
* `field` - _required_ - field
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getActionsOrganizationByIdAction()

*Tags:* `action`

#### Input Parameters
* `idAction` - _required_ - idAction
* `fields` - _optional_ - all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getActionsOrganizationByIdActionByField()

*Tags:* `action`

#### Input Parameters
* `idAction` - _required_ - idAction
* `field` - _required_ - field
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateActionsTextByIdAction()

*Tags:* `action`

#### Input Parameters
* `idAction` - _required_ - idAction
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getActionsByIdActionByField()

*Tags:* `action`

#### Input Parameters
* `idAction` - _required_ - idAction
* `field` - _required_ - field
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getBatch()

*Tags:* `batch`

#### Input Parameters
* `urls` - _required_ - list of API v1 GET routes, not including the version prefix
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addBoards()

*Tags:* `board`

#### Input Parameters
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getBoardsByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `actions` - _optional_ - all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
* `actions_entities` - _optional_ -  true or false
* `actions_display` - _optional_ -  true or false
* `actions_format` - _optional_ - One of: count, list or minimal
* `actions_since` - _optional_ - A date, null or lastView
* `actions_limit` - _optional_ - a number from 0 to 1000
* `action_fields` - _optional_ - all or a comma-separated list of: data, date, idMemberCreator or type
* `action_member` - _optional_ -  true or false
* `action_member_fields` - _optional_ - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* `action_memberCreator` - _optional_ -  true or false
* `action_memberCreator_fields` - _optional_ - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* `cards` - _optional_ - One of: all, closed, none, open or visible
* `card_fields` - _optional_ - all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url
* `card_attachments` - _optional_ - A boolean value or &quot;cover&quot; for only card cover attachments
* `card_attachment_fields` - _optional_ - all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url
* `card_checklists` - _optional_ - One of: all or none
* `card_stickers` - _optional_ -  true or false
* `boardStars` - _optional_ - One of: mine or none
* `labels` - _optional_ - One of: all or none
* `label_fields` - _optional_ - all or a comma-separated list of: color, idBoard, name or uses
* `labels_limit` - _optional_ - a number from 0 to 1000
* `lists` - _optional_ - One of: all, closed, none or open
* `list_fields` - _optional_ - all or a comma-separated list of: closed, idBoard, name, pos or subscribed
* `memberships` - _optional_ - all or a comma-separated list of: active, admin, deactivated, me or normal
* `memberships_member` - _optional_ -  true or false
* `memberships_member_fields` - _optional_ - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* `members` - _optional_ - One of: admins, all, none, normal or owners
* `member_fields` - _optional_ - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* `membersInvited` - _optional_ - One of: admins, all, none, normal or owners
* `membersInvited_fields` - _optional_ - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* `checklists` - _optional_ - One of: all or none
* `checklist_fields` - _optional_ - all or a comma-separated list of: idBoard, idCard, name or pos
* `organization` - _optional_ -  true or false
* `organization_fields` - _optional_ - all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website
* `organization_memberships` - _optional_ - all or a comma-separated list of: active, admin, deactivated, me or normal
* `myPrefs` - _optional_ -  true or false
* `fields` - _optional_ - all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getBoardsActionsByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `entities` - _optional_ -  true or false
* `display` - _optional_ -  true or false
* `filter` - _optional_ - all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
* `fields` - _optional_ - all or a comma-separated list of: data, date, idMemberCreator or type
* `limit` - _optional_ - a number from 0 to 1000
* `format` - _optional_ - One of: count, list or minimal
* `since` - _optional_ - A date, null or lastView
* `before` - _optional_ - A date, or null
* `page` - _optional_ - Page * limit must be less than 1000
* `idModels` - _optional_ - Only return actions related to these model ids
* `member` - _optional_ -  true or false
* `member_fields` - _optional_ - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* `memberCreator` - _optional_ -  true or false
* `memberCreator_fields` - _optional_ - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getBoardsBoardStarsByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `filter` - _optional_ - One of: mine or none
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addBoardsCalendarKeyGenerateByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getBoardsCardsByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `actions` - _optional_ - all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
* `attachments` - _optional_ - A boolean value or &quot;cover&quot; for only card cover attachments
* `attachment_fields` - _optional_ - all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url
* `stickers` - _optional_ -  true or false
* `members` - _optional_ -  true or false
* `member_fields` - _optional_ - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* `checkItemStates` - _optional_ -  true or false
* `checklists` - _optional_ - One of: all or none
* `limit` - _optional_ - a number from 1 to 1000
* `since` - _optional_ - A date, or null
* `before` - _optional_ - A date, or null
* `filter` - _optional_ - One of: all, closed, none, open or visible
* `fields` - _optional_ - all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getBoardsCardsByIdBoardByFilter()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `filter` - _required_ - filter
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getBoardsCardsByIdBoardByIdCard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `idCard` - _required_ - idCard
* `attachments` - _optional_ - A boolean value or &quot;cover&quot; for only card cover attachments
* `attachment_fields` - _optional_ - all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url
* `actions` - _optional_ - all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
* `actions_entities` - _optional_ -  true or false
* `actions_display` - _optional_ -  true or false
* `actions_limit` - _optional_ - a number from 0 to 1000
* `action_fields` - _optional_ - all or a comma-separated list of: data, date, idMemberCreator or type
* `action_memberCreator_fields` - _optional_ - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* `members` - _optional_ -  true or false
* `member_fields` - _optional_ - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* `checkItemStates` - _optional_ -  true or false
* `checkItemState_fields` - _optional_ - all or a comma-separated list of: idCheckItem or state
* `labels` - _optional_ -  true or false
* `checklists` - _optional_ - One of: all or none
* `checklist_fields` - _optional_ - all or a comma-separated list of: idBoard, idCard, name or pos
* `fields` - _optional_ - all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getBoardsChecklistsByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `cards` - _optional_ - One of: all, closed, none, open or visible
* `card_fields` - _optional_ - all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url
* `checkItems` - _optional_ - One of: all or none
* `checkItem_fields` - _optional_ - all or a comma-separated list of: name, nameData, pos, state or type
* `filter` - _optional_ - One of: all or none
* `fields` - _optional_ - all or a comma-separated list of: idBoard, idCard, name or pos
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addBoardsChecklistsByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsClosedByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getBoardsDeltasByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `tags` - _required_ - A valid tag for subscribing
* `ixLastUpdate` - _required_ - a number from -1 to Infinity
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsDescByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addBoardsEmailKeyGenerateByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsIdOrganizationByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsLabelNamesBlueByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsLabelNamesGreenByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsLabelNamesOrangeByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsLabelNamesPurpleByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsLabelNamesRedByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsLabelNamesYellowByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getBoardsLabelsByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `fields` - _optional_ - all or a comma-separated list of: color, idBoard, name or uses
* `limit` - _optional_ - a number from 0 to 1000
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addBoardsLabelsByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getBoardsLabelsByIdBoardByIdLabel()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `idLabel` - _required_ - idLabel
* `fields` - _optional_ - all or a comma-separated list of: color, idBoard, name or uses
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getBoardsListsByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `cards` - _optional_ - One of: all, closed, none, open or visible
* `card_fields` - _optional_ - all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url
* `filter` - _optional_ - One of: all, closed, none or open
* `fields` - _optional_ - all or a comma-separated list of: closed, idBoard, name, pos or subscribed
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addBoardsListsByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getBoardsListsByIdBoardByFilter()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `filter` - _required_ - filter
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addBoardsMarkAsViewedByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getBoardsMembersByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `filter` - _optional_ - One of: admins, all, none, normal or owners
* `fields` - _optional_ - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* `activity` - _optional_ - true or false ; works for premium organizations only.
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsMembersByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getBoardsMembersByIdBoardByFilter()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `filter` - _required_ - filter
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteBoardsMembersByIdBoardByIdMember()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `idMember` - _required_ - idMember
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsMembersByIdBoardByIdMember()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `idMember` - _required_ - idMember
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getBoardsMembersCardsByIdBoardByIdMember()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `idMember` - _required_ - idMember
* `actions` - _optional_ - all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
* `attachments` - _optional_ - A boolean value or &quot;cover&quot; for only card cover attachments
* `attachment_fields` - _optional_ - all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url
* `members` - _optional_ -  true or false
* `member_fields` - _optional_ - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* `checkItemStates` - _optional_ -  true or false
* `checklists` - _optional_ - One of: all or none
* `board` - _optional_ -  true or false
* `board_fields` - _optional_ - all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
* `list` - _optional_ -  true or false
* `list_fields` - _optional_ - all or a comma-separated list of: closed, idBoard, name, pos or subscribed
* `filter` - _optional_ - One of: all, closed, none, open or visible
* `fields` - _optional_ - all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getBoardsMembersInvitedByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `fields` - _optional_ - all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getBoardsMembersInvitedByIdBoardByField()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `field` - _required_ - field
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getBoardsMembershipsByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `filter` - _optional_ - all or a comma-separated list of: active, admin, deactivated, me or normal
* `member` - _optional_ -  true or false
* `member_fields` - _optional_ - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getBoardsMembershipsByIdBoardByIdMembership()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `idMembership` - _required_ - idMembership
* `member` - _optional_ -  true or false
* `member_fields` - _optional_ - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsMembershipsByIdBoardByIdMembership()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `idMembership` - _required_ - idMembership
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getBoardsMyPrefsByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsMyPrefsEmailPositionByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsMyPrefsIdEmailListByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsMyPrefsShowListGuideByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsMyPrefsShowSidebarByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsMyPrefsShowSidebarActivityByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsMyPrefsShowSidebarBoardActionsByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsMyPrefsShowSidebarMembersByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsNameByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getBoardsOrganizationByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `fields` - _optional_ - all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getBoardsOrganizationByIdBoardByField()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `field` - _required_ - field
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addBoardsPowerUpsByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteBoardsPowerUpsByIdBoardByPowerUp()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `powerUp` - _required_ - powerUp
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsPrefsBackgroundByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsPrefsCalendarFeedEnabledByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsPrefsCardAgingByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsPrefsCardCoversByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsPrefsCommentsByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsPrefsInvitationsByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsPrefsPermissionLevelByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsPrefsSelfJoinByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsPrefsVotingByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateBoardsSubscribedByIdBoard()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getBoardsByIdBoardByField()

*Tags:* `board`

#### Input Parameters
* `idBoard` - _required_ - board_id
* `field` - _required_ - field
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addCards()

*Tags:* `card`

#### Input Parameters
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteCardsByIdCard()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getCardsByIdCard()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `actions` - _optional_ - all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
* `actions_entities` - _optional_ -  true or false
* `actions_display` - _optional_ -  true or false
* `actions_limit` - _optional_ - a number from 0 to 1000
* `action_fields` - _optional_ - all or a comma-separated list of: data, date, idMemberCreator or type
* `action_memberCreator_fields` - _optional_ - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* `attachments` - _optional_ - A boolean value or &quot;cover&quot; for only card cover attachments
* `attachment_fields` - _optional_ - all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url
* `members` - _optional_ -  true or false
* `member_fields` - _optional_ - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* `membersVoted` - _optional_ -  true or false
* `memberVoted_fields` - _optional_ - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* `checkItemStates` - _optional_ -  true or false
* `checkItemState_fields` - _optional_ - all or a comma-separated list of: idCheckItem or state
* `checklists` - _optional_ - One of: all or none
* `checklist_fields` - _optional_ - all or a comma-separated list of: idBoard, idCard, name or pos
* `board` - _optional_ -  true or false
* `board_fields` - _optional_ - all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
* `list` - _optional_ -  true or false
* `list_fields` - _optional_ - all or a comma-separated list of: closed, idBoard, name, pos or subscribed
* `stickers` - _optional_ -  true or false
* `sticker_fields` - _optional_ - all or a comma-separated list of: image, imageScaled, imageUrl, left, rotate, top or zIndex
* `fields` - _optional_ - all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateCardsByIdCard()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getCardsActionsByIdCard()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `entities` - _optional_ -  true or false
* `display` - _optional_ -  true or false
* `filter` - _optional_ - all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
* `fields` - _optional_ - all or a comma-separated list of: data, date, idMemberCreator or type
* `limit` - _optional_ - a number from 0 to 1000
* `format` - _optional_ - One of: count, list or minimal
* `since` - _optional_ - A date, null or lastView
* `before` - _optional_ - A date, or null
* `page` - _optional_ - Page * limit must be less than 1000
* `idModels` - _optional_ - Only return actions related to these model ids
* `member` - _optional_ -  true or false
* `member_fields` - _optional_ - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* `memberCreator` - _optional_ -  true or false
* `memberCreator_fields` - _optional_ - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addCardsActionsCommentsByIdCard()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteCardsActionsCommentsByIdCardByIdAction()

> This can only be done by the original author of the comment, or someone with higher permissions than the original author.

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `idAction` - _required_ - idAction
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateCardsActionsCommentsByIdCardByIdAction()

> This can only be done by the original author of the comment.

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `idAction` - _required_ - idAction
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getCardsAttachmentsByIdCard()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `fields` - _optional_ - all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url
* `filter` - _optional_ - A boolean value or &quot;cover&quot; for only card cover attachments
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addCardsAttachmentsByIdCard()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteCardsAttachmentsByIdCardByIdAttachment()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `idAttachment` - _required_ - idAttachment
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getCardsAttachmentsByIdCardByIdAttachment()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `idAttachment` - _required_ - idAttachment
* `fields` - _optional_ - all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getCardsBoardByIdCard()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `fields` - _optional_ - all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getCardsBoardByIdCardByField()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `field` - _required_ - field
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getCardsCheckItemStatesByIdCard()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `fields` - _optional_ - all or a comma-separated list of: idCheckItem or state
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateCardsChecklistCheckItemByIdCardByIdChecklistCurrentByIdCheckItem()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `idChecklistCurrent` - _required_ - idChecklistCurrent
* `idCheckItem` - _required_ - idCheckItem
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addCardsChecklistCheckItemByIdCardByIdChecklist()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `idChecklist` - _required_ - idChecklist
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteCardsChecklistCheckItemByIdCardByIdChecklistByIdCheckItem()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `idChecklist` - _required_ - idChecklist
* `idCheckItem` - _required_ - idCheckItem
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addCardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItem()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `idChecklist` - _required_ - idChecklist
* `idCheckItem` - _required_ - idCheckItem
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateCardsChecklistCheckItemNameByIdCardByIdChecklistByIdCheckItem()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `idChecklist` - _required_ - idChecklist
* `idCheckItem` - _required_ - idCheckItem
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateCardsChecklistCheckItemPosByIdCardByIdChecklistByIdCheckItem()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `idChecklist` - _required_ - idChecklist
* `idCheckItem` - _required_ - idCheckItem
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateCardsChecklistCheckItemStateByIdCardByIdChecklistByIdCheckItem()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `idChecklist` - _required_ - idChecklist
* `idCheckItem` - _required_ - idCheckItem
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getCardsChecklistsByIdCard()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `cards` - _optional_ - One of: all, closed, none, open or visible
* `card_fields` - _optional_ - all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url
* `checkItems` - _optional_ - One of: all or none
* `checkItem_fields` - _optional_ - all or a comma-separated list of: name, nameData, pos, state or type
* `filter` - _optional_ - One of: all or none
* `fields` - _optional_ - all or a comma-separated list of: idBoard, idCard, name or pos
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addCardsChecklistsByIdCard()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteCardsChecklistsByIdCardByIdChecklist()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `idChecklist` - _required_ - idChecklist
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateCardsClosedByIdCard()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateCardsDescByIdCard()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateCardsDueByIdCard()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateCardsIdAttachmentCoverByIdCard()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateCardsIdBoardByIdCard()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addCardsIdLabelsByIdCard()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteCardsIdLabelsByIdCardByIdLabel()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `idLabel` - _required_ - idLabel
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateCardsIdListByIdCard()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addCardsIdMembersByIdCard()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateCardsIdMembersByIdCard()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteCardsIdMembersByIdCardByIdMember()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `idMember` - _required_ - idMember
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addCardsLabelsByIdCard()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateCardsLabelsByIdCard()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteCardsLabelsByIdCardByColor()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `color` - _required_ - color
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getCardsListByIdCard()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `fields` - _optional_ - all or a comma-separated list of: closed, idBoard, name, pos or subscribed
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getCardsListByIdCardByField()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `field` - _required_ - field
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addCardsMarkAssociatedNotificationsReadByIdCard()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getCardsMembersByIdCard()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `fields` - _optional_ - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getCardsMembersVotedByIdCard()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `fields` - _optional_ - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addCardsMembersVotedByIdCard()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteCardsMembersVotedByIdCardByIdMember()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `idMember` - _required_ - idMember
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateCardsNameByIdCard()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateCardsPosByIdCard()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getCardsStickersByIdCard()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `fields` - _optional_ - all or a comma-separated list of: image, imageScaled, imageUrl, left, rotate, top or zIndex
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addCardsStickersByIdCard()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteCardsStickersByIdCardByIdSticker()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `idSticker` - _required_ - idSticker
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getCardsStickersByIdCardByIdSticker()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `idSticker` - _required_ - idSticker
* `fields` - _optional_ - all or a comma-separated list of: image, imageScaled, imageUrl, left, rotate, top or zIndex
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateCardsStickersByIdCardByIdSticker()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `idSticker` - _required_ - idSticker
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateCardsSubscribedByIdCard()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getCardsByIdCardByField()

*Tags:* `card`

#### Input Parameters
* `idCard` - _required_ - card id or shortlink
* `field` - _required_ - field
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addChecklists()

*Tags:* `checklist`

#### Input Parameters
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteChecklistsByIdChecklist()

*Tags:* `checklist`

#### Input Parameters
* `idChecklist` - _required_ - idChecklist
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getChecklistsByIdChecklist()

*Tags:* `checklist`

#### Input Parameters
* `idChecklist` - _required_ - idChecklist
* `cards` - _optional_ - One of: all, closed, none, open or visible
* `card_fields` - _optional_ - all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url
* `checkItems` - _optional_ - One of: all or none
* `checkItem_fields` - _optional_ - all or a comma-separated list of: name, nameData, pos, state or type
* `fields` - _optional_ - all or a comma-separated list of: idBoard, idCard, name or pos
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateChecklistsByIdChecklist()

*Tags:* `checklist`

#### Input Parameters
* `idChecklist` - _required_ - idChecklist
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getChecklistsBoardByIdChecklist()

*Tags:* `checklist`

#### Input Parameters
* `idChecklist` - _required_ - idChecklist
* `fields` - _optional_ - all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getChecklistsBoardByIdChecklistByField()

*Tags:* `checklist`

#### Input Parameters
* `idChecklist` - _required_ - idChecklist
* `field` - _required_ - field
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getChecklistsCardsByIdChecklist()

*Tags:* `checklist`

#### Input Parameters
* `idChecklist` - _required_ - idChecklist
* `actions` - _optional_ - all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
* `attachments` - _optional_ - A boolean value or &quot;cover&quot; for only card cover attachments
* `attachment_fields` - _optional_ - all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url
* `stickers` - _optional_ -  true or false
* `members` - _optional_ -  true or false
* `member_fields` - _optional_ - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* `checkItemStates` - _optional_ -  true or false
* `checklists` - _optional_ - One of: all or none
* `limit` - _optional_ - a number from 1 to 1000
* `since` - _optional_ - A date, or null
* `before` - _optional_ - A date, or null
* `filter` - _optional_ - One of: all, closed, none or open
* `fields` - _optional_ - all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getChecklistsCardsByIdChecklistByFilter()

*Tags:* `checklist`

#### Input Parameters
* `idChecklist` - _required_ - idChecklist
* `filter` - _required_ - filter
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getChecklistsCheckItemsByIdChecklist()

*Tags:* `checklist`

#### Input Parameters
* `idChecklist` - _required_ - idChecklist
* `filter` - _optional_ - One of: all or none
* `fields` - _optional_ - all or a comma-separated list of: name, nameData, pos, state or type
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addChecklistsCheckItemsByIdChecklist()

*Tags:* `checklist`

#### Input Parameters
* `idChecklist` - _required_ - idChecklist
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteChecklistsCheckItemsByIdChecklistByIdCheckItem()

*Tags:* `checklist`

#### Input Parameters
* `idChecklist` - _required_ - idChecklist
* `idCheckItem` - _required_ - idCheckItem
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getChecklistsCheckItemsByIdChecklistByIdCheckItem()

*Tags:* `checklist`

#### Input Parameters
* `idChecklist` - _required_ - idChecklist
* `idCheckItem` - _required_ - idCheckItem
* `fields` - _optional_ - all or a comma-separated list of: name, nameData, pos, state or type
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateChecklistsIdCardByIdChecklist()

*Tags:* `checklist`

#### Input Parameters
* `idChecklist` - _required_ - idChecklist
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateChecklistsNameByIdChecklist()

*Tags:* `checklist`

#### Input Parameters
* `idChecklist` - _required_ - idChecklist
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateChecklistsPosByIdChecklist()

*Tags:* `checklist`

#### Input Parameters
* `idChecklist` - _required_ - idChecklist
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getChecklistsByIdChecklistByField()

*Tags:* `checklist`

#### Input Parameters
* `idChecklist` - _required_ - idChecklist
* `field` - _required_ - field
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addLabels()

*Tags:* `label`

#### Input Parameters
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteLabelsByIdLabel()

*Tags:* `label`

#### Input Parameters
* `idLabel` - _required_ - idLabel
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getLabelsByIdLabel()

*Tags:* `label`

#### Input Parameters
* `idLabel` - _required_ - idLabel
* `fields` - _optional_ - all or a comma-separated list of: color, idBoard, name or uses
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateLabelsByIdLabel()

*Tags:* `label`

#### Input Parameters
* `idLabel` - _required_ - idLabel
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getLabelsBoardByIdLabel()

*Tags:* `label`

#### Input Parameters
* `idLabel` - _required_ - idLabel
* `fields` - _optional_ - all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getLabelsBoardByIdLabelByField()

*Tags:* `label`

#### Input Parameters
* `idLabel` - _required_ - idLabel
* `field` - _required_ - field
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateLabelsColorByIdLabel()

*Tags:* `label`

#### Input Parameters
* `idLabel` - _required_ - idLabel
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateLabelsNameByIdLabel()

*Tags:* `label`

#### Input Parameters
* `idLabel` - _required_ - idLabel
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addLists()

*Tags:* `list`

#### Input Parameters
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getListsByIdList()

*Tags:* `list`

#### Input Parameters
* `idList` - _required_ - idList
* `cards` - _optional_ - One of: all, closed, none or open
* `card_fields` - _optional_ - all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url
* `board` - _optional_ -  true or false
* `board_fields` - _optional_ - all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
* `fields` - _optional_ - all or a comma-separated list of: closed, idBoard, name, pos or subscribed
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateListsByIdList()

*Tags:* `list`

#### Input Parameters
* `idList` - _required_ - idList
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getListsActionsByIdList()

*Tags:* `list`

#### Input Parameters
* `idList` - _required_ - idList
* `entities` - _optional_ -  true or false
* `display` - _optional_ -  true or false
* `filter` - _optional_ - all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
* `fields` - _optional_ - all or a comma-separated list of: data, date, idMemberCreator or type
* `limit` - _optional_ - a number from 0 to 1000
* `format` - _optional_ - One of: count, list or minimal
* `since` - _optional_ - A date, null or lastView
* `before` - _optional_ - A date, or null
* `page` - _optional_ - Page * limit must be less than 1000
* `idModels` - _optional_ - Only return actions related to these model ids
* `member` - _optional_ -  true or false
* `member_fields` - _optional_ - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* `memberCreator` - _optional_ -  true or false
* `memberCreator_fields` - _optional_ - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addListsArchiveAllCardsByIdList()

*Tags:* `list`

#### Input Parameters
* `idList` - _required_ - idList
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getListsBoardByIdList()

*Tags:* `list`

#### Input Parameters
* `idList` - _required_ - idList
* `fields` - _optional_ - all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getListsBoardByIdListByField()

*Tags:* `list`

#### Input Parameters
* `idList` - _required_ - idList
* `field` - _required_ - field
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getListsCardsByIdList()

*Tags:* `list`

#### Input Parameters
* `idList` - _required_ - idList
* `actions` - _optional_ - all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
* `attachments` - _optional_ - A boolean value or &quot;cover&quot; for only card cover attachments
* `attachment_fields` - _optional_ - all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url
* `stickers` - _optional_ -  true or false
* `members` - _optional_ -  true or false
* `member_fields` - _optional_ - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* `checkItemStates` - _optional_ -  true or false
* `checklists` - _optional_ - One of: all or none
* `limit` - _optional_ - a number from 1 to 1000
* `since` - _optional_ - A date, or null
* `before` - _optional_ - A date, or null
* `filter` - _optional_ - One of: all, closed, none or open
* `fields` - _optional_ - all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addListsCardsByIdList()

*Tags:* `list`

#### Input Parameters
* `idList` - _required_ - idList
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getListsCardsByIdListByFilter()

*Tags:* `list`

#### Input Parameters
* `idList` - _required_ - idList
* `filter` - _required_ - filter
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateListsClosedByIdList()

*Tags:* `list`

#### Input Parameters
* `idList` - _required_ - idList
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateListsIdBoardByIdList()

*Tags:* `list`

#### Input Parameters
* `idList` - _required_ - idList
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addListsMoveAllCardsByIdList()

*Tags:* `list`

#### Input Parameters
* `idList` - _required_ - idList
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateListsNameByIdList()

*Tags:* `list`

#### Input Parameters
* `idList` - _required_ - idList
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateListsPosByIdList()

*Tags:* `list`

#### Input Parameters
* `idList` - _required_ - idList
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateListsSubscribedByIdList()

*Tags:* `list`

#### Input Parameters
* `idList` - _required_ - idList
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getListsByIdListByField()

*Tags:* `list`

#### Input Parameters
* `idList` - _required_ - idList
* `field` - _required_ - field
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersByIdMember()

> If you specify 'me' as the username, this call will respond as if you had supplied the username associated with the supplied token

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `actions` - _optional_ - all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
* `actions_entities` - _optional_ -  true or false
* `actions_display` - _optional_ -  true or false
* `actions_limit` - _optional_ - a number from 0 to 1000
* `action_fields` - _optional_ - all or a comma-separated list of: data, date, idMemberCreator or type
* `action_since` - _optional_ - A date, null or lastView
* `action_before` - _optional_ - A date, or null
* `cards` - _optional_ - One of: all, closed, none, open or visible
* `card_fields` - _optional_ - all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url
* `card_members` - _optional_ -  true or false
* `card_member_fields` - _optional_ - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* `card_attachments` - _optional_ - A boolean value or &quot;cover&quot; for only card cover attachments
* `card_attachment_fields` - _optional_ - all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url
* `card_stickers` - _optional_ -  true or false
* `boards` - _optional_ - all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned
* `board_fields` - _optional_ - all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
* `board_actions` - _optional_ - all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
* `board_actions_entities` - _optional_ -  true or false
* `board_actions_display` - _optional_ -  true or false
* `board_actions_format` - _optional_ - One of: count, list or minimal
* `board_actions_since` - _optional_ - A date, null or lastView
* `board_actions_limit` - _optional_ - a number from 0 to 1000
* `board_action_fields` - _optional_ - all or a comma-separated list of: data, date, idMemberCreator or type
* `board_lists` - _optional_ - One of: all, closed, none or open
* `board_memberships` - _optional_ - all or a comma-separated list of: active, admin, deactivated, me or normal
* `board_organization` - _optional_ -  true or false
* `board_organization_fields` - _optional_ - all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website
* `boardsInvited` - _optional_ - all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned
* `boardsInvited_fields` - _optional_ - all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
* `boardStars` - _optional_ -  true or false
* `savedSearches` - _optional_ -  true or false
* `organizations` - _optional_ - One of: all, members, none or public
* `organization_fields` - _optional_ - all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website
* `organization_paid_account` - _optional_ -  true or false
* `organizationsInvited` - _optional_ - One of: all, members, none or public
* `organizationsInvited_fields` - _optional_ - all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website
* `notifications` - _optional_ - all or a comma-separated list of: addAdminToBoard, addAdminToOrganization, addedAttachmentToCard, addedMemberToCard, addedToBoard, addedToCard, addedToOrganization, cardDueSoon, changeCard, closeBoard, commentCard, createdCard, declinedInvitationToBoard, declinedInvitationToOrganization, invitedToBoard, invitedToOrganization, makeAdminOfBoard, makeAdminOfOrganization, memberJoinedTrello, mentionedOnCard, removedFromBoard, removedFromCard, removedFromOrganization, removedMemberFromCard, unconfirmedInvitedToBoard, unconfirmedInvitedToOrganization or updateCheckItemStateOnCard
* `notifications_entities` - _optional_ -  true or false
* `notifications_display` - _optional_ -  true or false
* `notifications_limit` - _optional_ - a number from 1 to 1000
* `notification_fields` - _optional_ - all or a comma-separated list of: data, date, idMemberCreator, type or unread
* `notification_memberCreator` - _optional_ -  true or false
* `notification_memberCreator_fields` - _optional_ - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* `notification_before` - _optional_ - An id, or null
* `notification_since` - _optional_ - An id, or null
* `tokens` - _optional_ - One of: all or none
* `paid_account` - _optional_ -  true or false
* `boardBackgrounds` - _optional_ - One of: all, custom, default, none or premium
* `customBoardBackgrounds` - _optional_ - One of: all or none
* `customStickers` - _optional_ - One of: all or none
* `customEmoji` - _optional_ - One of: all or none
* `fields` - _optional_ - all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateMembersByIdMember()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersActionsByIdMember()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `entities` - _optional_ -  true or false
* `display` - _optional_ -  true or false
* `filter` - _optional_ - all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
* `fields` - _optional_ - all or a comma-separated list of: data, date, idMemberCreator or type
* `limit` - _optional_ - a number from 0 to 1000
* `format` - _optional_ - One of: count, list or minimal
* `since` - _optional_ - A date, null or lastView
* `before` - _optional_ - A date, or null
* `page` - _optional_ - Page * limit must be less than 1000
* `idModels` - _optional_ - Only return actions related to these model ids
* `member` - _optional_ -  true or false
* `member_fields` - _optional_ - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* `memberCreator` - _optional_ -  true or false
* `memberCreator_fields` - _optional_ - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addMembersAvatarByIdMember()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateMembersAvatarSourceByIdMember()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateMembersBioByIdMember()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersBoardBackgroundsByIdMember()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `filter` - _optional_ - One of: all, custom, default, none or premium
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addMembersBoardBackgroundsByIdMember()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteMembersBoardBackgroundsByIdMemberByIdBoardBackground()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `idBoardBackground` - _required_ - idBoardBackground
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersBoardBackgroundsByIdMemberByIdBoardBackground()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `idBoardBackground` - _required_ - idBoardBackground
* `fields` - _optional_ - all or a comma-separated list of: brightness, fullSizeUrl, scaled or tile
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateMembersBoardBackgroundsByIdMemberByIdBoardBackground()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `idBoardBackground` - _required_ - idBoardBackground
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersBoardStarsByIdMember()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addMembersBoardStarsByIdMember()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteMembersBoardStarsByIdMemberByIdBoardStar()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `idBoardStar` - _required_ - idBoardStar
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersBoardStarsByIdMemberByIdBoardStar()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `idBoardStar` - _required_ - idBoardStar
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateMembersBoardStarsByIdMemberByIdBoardStar()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `idBoardStar` - _required_ - idBoardStar
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateMembersBoardStarsIdBoardByIdMemberByIdBoardStar()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `idBoardStar` - _required_ - idBoardStar
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateMembersBoardStarsPosByIdMemberByIdBoardStar()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `idBoardStar` - _required_ - idBoardStar
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersBoardsByIdMember()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `filter` - _optional_ - all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned
* `fields` - _optional_ - all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
* `actions` - _optional_ - all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
* `actions_entities` - _optional_ -  true or false
* `actions_limit` - _optional_ - a number from 0 to 1000
* `actions_format` - _optional_ - One of: count, list or minimal
* `actions_since` - _optional_ - A date, null or lastView
* `action_fields` - _optional_ - all or a comma-separated list of: data, date, idMemberCreator or type
* `memberships` - _optional_ - all or a comma-separated list of: active, admin, deactivated, me or normal
* `organization` - _optional_ -  true or false
* `organization_fields` - _optional_ - all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website
* `lists` - _optional_ - One of: all, closed, none or open
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersBoardsByIdMemberByFilter()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `filter` - _required_ - filter
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersBoardsInvitedByIdMember()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `fields` - _optional_ - all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersBoardsInvitedByIdMemberByField()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `field` - _required_ - field
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersCardsByIdMember()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `actions` - _optional_ - all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
* `attachments` - _optional_ - A boolean value or &quot;cover&quot; for only card cover attachments
* `attachment_fields` - _optional_ - all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url
* `stickers` - _optional_ -  true or false
* `members` - _optional_ -  true or false
* `member_fields` - _optional_ - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* `checkItemStates` - _optional_ -  true or false
* `checklists` - _optional_ - One of: all or none
* `limit` - _optional_ - a number from 1 to 1000
* `since` - _optional_ - A date, or null
* `before` - _optional_ - A date, or null
* `filter` - _optional_ - One of: all, closed, none, open or visible
* `fields` - _optional_ - all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersCardsByIdMemberByFilter()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `filter` - _required_ - filter
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersCustomBoardBackgroundsByIdMember()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `filter` - _optional_ - One of: all or none
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addMembersCustomBoardBackgroundsByIdMember()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `idBoardBackground` - _required_ - idBoardBackground
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `idBoardBackground` - _required_ - idBoardBackground
* `fields` - _optional_ - all or a comma-separated list of: brightness, fullSizeUrl, scaled or tile
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `idBoardBackground` - _required_ - idBoardBackground
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersCustomEmojiByIdMember()

> This gets the list of all of the user's uploaded emoji

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `filter` - _optional_ - One of: all or none
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addMembersCustomEmojiByIdMember()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersCustomEmojiByIdMemberByIdCustomEmoji()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `idCustomEmoji` - _required_ - idCustomEmoji
* `fields` - _optional_ - all or a comma-separated list of: name or url
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersCustomStickersByIdMember()

> This gets a list of all of the user's uploaded stickers

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `filter` - _optional_ - One of: all or none
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addMembersCustomStickersByIdMember()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteMembersCustomStickersByIdMemberByIdCustomSticker()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `idCustomSticker` - _required_ - idCustomSticker
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersCustomStickersByIdMemberByIdCustomSticker()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `idCustomSticker` - _required_ - idCustomSticker
* `fields` - _optional_ - all or a comma-separated list of: scaled or url
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersDeltasByIdMember()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `tags` - _required_ - A valid tag for subscribing
* `ixLastUpdate` - _required_ - a number from -1 to Infinity
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateMembersFullNameByIdMember()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateMembersInitialsByIdMember()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersNotificationsByIdMember()

> You can only read the notifications for the member associated with the supplied token

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `entities` - _optional_ -  true or false
* `display` - _optional_ -  true or false
* `filter` - _optional_ - all or a comma-separated list of: addAdminToBoard, addAdminToOrganization, addedAttachmentToCard, addedMemberToCard, addedToBoard, addedToCard, addedToOrganization, cardDueSoon, changeCard, closeBoard, commentCard, createdCard, declinedInvitationToBoard, declinedInvitationToOrganization, invitedToBoard, invitedToOrganization, makeAdminOfBoard, makeAdminOfOrganization, memberJoinedTrello, mentionedOnCard, removedFromBoard, removedFromCard, removedFromOrganization, removedMemberFromCard, unconfirmedInvitedToBoard, unconfirmedInvitedToOrganization or updateCheckItemStateOnCard
* `read_filter` - _optional_ - One of: all, read or unread
* `fields` - _optional_ - all or a comma-separated list of: data, date, idMemberCreator, type or unread
* `limit` - _optional_ - a number from 1 to 1000
* `page` - _optional_ - a number from 0 to 100
* `before` - _optional_ - An id, or null
* `since` - _optional_ - An id, or null
* `memberCreator` - _optional_ -  true or false
* `memberCreator_fields` - _optional_ - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersNotificationsByIdMemberByFilter()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `filter` - _required_ - filter
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addMembersOneTimeMessagesDismissedByIdMember()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersOrganizationsByIdMember()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `filter` - _optional_ - One of: all, members, none or public
* `fields` - _optional_ - all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website
* `paid_account` - _optional_ -  true or false
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersOrganizationsByIdMemberByFilter()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `filter` - _required_ - filter
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersOrganizationsInvitedByIdMember()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `fields` - _optional_ - all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersOrganizationsInvitedByIdMemberByField()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `field` - _required_ - field
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateMembersPrefsColorBlindByIdMember()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateMembersPrefsLocaleByIdMember()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateMembersPrefsMinutesBetweenSummariesByIdMember()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersSavedSearchesByIdMember()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addMembersSavedSearchesByIdMember()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteMembersSavedSearchesByIdMemberByIdSavedSearch()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `idSavedSearch` - _required_ - idSavedSearch
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersSavedSearchesByIdMemberByIdSavedSearch()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `idSavedSearch` - _required_ - idSavedSearch
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateMembersSavedSearchesByIdMemberByIdSavedSearch()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `idSavedSearch` - _required_ - idSavedSearch
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateMembersSavedSearchesNameByIdMemberByIdSavedSearch()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `idSavedSearch` - _required_ - idSavedSearch
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateMembersSavedSearchesPosByIdMemberByIdSavedSearch()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `idSavedSearch` - _required_ - idSavedSearch
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateMembersSavedSearchesQueryByIdMemberByIdSavedSearch()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `idSavedSearch` - _required_ - idSavedSearch
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersTokensByIdMember()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `filter` - _optional_ - One of: all or none
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateMembersUsernameByIdMember()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getMembersByIdMemberByField()

*Tags:* `member`

#### Input Parameters
* `idMember` - _required_ - idMember or username
* `field` - _required_ - field
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addNotificationsAllRead()

*Tags:* `notification`

#### Input Parameters
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getNotificationsByIdNotification()

*Tags:* `notification`

#### Input Parameters
* `idNotification` - _required_ - idNotification
* `display` - _optional_ -  true or false
* `entities` - _optional_ -  true or false
* `fields` - _optional_ - all or a comma-separated list of: data, date, idMemberCreator, type or unread
* `memberCreator` - _optional_ -  true or false
* `memberCreator_fields` - _optional_ - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* `board` - _optional_ -  true or false
* `board_fields` - _optional_ - all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
* `list` - _optional_ -  true or false
* `card` - _optional_ -  true or false
* `card_fields` - _optional_ - all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url
* `organization` - _optional_ -  true or false
* `organization_fields` - _optional_ - all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website
* `member` - _optional_ -  true or false
* `member_fields` - _optional_ - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateNotificationsByIdNotification()

*Tags:* `notification`

#### Input Parameters
* `idNotification` - _required_ - idNotification
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getNotificationsBoardByIdNotification()

*Tags:* `notification`

#### Input Parameters
* `idNotification` - _required_ - idNotification
* `fields` - _optional_ - all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getNotificationsBoardByIdNotificationByField()

*Tags:* `notification`

#### Input Parameters
* `idNotification` - _required_ - idNotification
* `field` - _required_ - field
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getNotificationsCardByIdNotification()

*Tags:* `notification`

#### Input Parameters
* `idNotification` - _required_ - idNotification
* `fields` - _optional_ - all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getNotificationsCardByIdNotificationByField()

*Tags:* `notification`

#### Input Parameters
* `idNotification` - _required_ - idNotification
* `field` - _required_ - field
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getNotificationsDisplayByIdNotification()

*Tags:* `notification`

#### Input Parameters
* `idNotification` - _required_ - idNotification
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getNotificationsEntitiesByIdNotification()

*Tags:* `notification`

#### Input Parameters
* `idNotification` - _required_ - idNotification
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getNotificationsListByIdNotification()

*Tags:* `notification`

#### Input Parameters
* `idNotification` - _required_ - idNotification
* `fields` - _optional_ - all or a comma-separated list of: closed, idBoard, name, pos or subscribed
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getNotificationsListByIdNotificationByField()

*Tags:* `notification`

#### Input Parameters
* `idNotification` - _required_ - idNotification
* `field` - _required_ - field
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getNotificationsMemberByIdNotification()

*Tags:* `notification`

#### Input Parameters
* `idNotification` - _required_ - idNotification
* `fields` - _optional_ - all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getNotificationsMemberByIdNotificationByField()

*Tags:* `notification`

#### Input Parameters
* `idNotification` - _required_ - idNotification
* `field` - _required_ - field
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getNotificationsMemberCreatorByIdNotification()

*Tags:* `notification`

#### Input Parameters
* `idNotification` - _required_ - idNotification
* `fields` - _optional_ - all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getNotificationsMemberCreatorByIdNotificationByField()

*Tags:* `notification`

#### Input Parameters
* `idNotification` - _required_ - idNotification
* `field` - _required_ - field
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getNotificationsOrganizationByIdNotification()

*Tags:* `notification`

#### Input Parameters
* `idNotification` - _required_ - idNotification
* `fields` - _optional_ - all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getNotificationsOrganizationByIdNotificationByField()

*Tags:* `notification`

#### Input Parameters
* `idNotification` - _required_ - idNotification
* `field` - _required_ - field
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateNotificationsUnreadByIdNotification()

*Tags:* `notification`

#### Input Parameters
* `idNotification` - _required_ - idNotification
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getNotificationsByIdNotificationByField()

*Tags:* `notification`

#### Input Parameters
* `idNotification` - _required_ - idNotification
* `field` - _required_ - field
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addOrganizations()

*Tags:* `organization`

#### Input Parameters
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteOrganizationsByIdOrg()

*Tags:* `organization`

#### Input Parameters
* `idOrg` - _required_ - idOrg or name
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getOrganizationsByIdOrg()

*Tags:* `organization`

#### Input Parameters
* `idOrg` - _required_ - idOrg or name
* `actions` - _optional_ - all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
* `actions_entities` - _optional_ -  true or false
* `actions_display` - _optional_ -  true or false
* `actions_limit` - _optional_ - a number from 0 to 1000
* `action_fields` - _optional_ - all or a comma-separated list of: data, date, idMemberCreator or type
* `memberships` - _optional_ - all or a comma-separated list of: active, admin, deactivated, me or normal
* `memberships_member` - _optional_ -  true or false
* `memberships_member_fields` - _optional_ - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* `members` - _optional_ - One of: admins, all, none, normal or owners
* `member_fields` - _optional_ - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* `member_activity` - _optional_ - true or false ; works for premium organizations only.
* `membersInvited` - _optional_ - One of: admins, all, none, normal or owners
* `membersInvited_fields` - _optional_ - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* `boards` - _optional_ - all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned
* `board_fields` - _optional_ - all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
* `board_actions` - _optional_ - all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
* `board_actions_entities` - _optional_ -  true or false
* `board_actions_display` - _optional_ -  true or false
* `board_actions_format` - _optional_ - One of: count, list or minimal
* `board_actions_since` - _optional_ - A date, null or lastView
* `board_actions_limit` - _optional_ - a number from 0 to 1000
* `board_action_fields` - _optional_ - all or a comma-separated list of: data, date, idMemberCreator or type
* `board_lists` - _optional_ - One of: all, closed, none or open
* `paid_account` - _optional_ -  true or false
* `fields` - _optional_ - all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateOrganizationsByIdOrg()

*Tags:* `organization`

#### Input Parameters
* `idOrg` - _required_ - idOrg or name
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getOrganizationsActionsByIdOrg()

*Tags:* `organization`

#### Input Parameters
* `idOrg` - _required_ - idOrg or name
* `entities` - _optional_ -  true or false
* `display` - _optional_ -  true or false
* `filter` - _optional_ - all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
* `fields` - _optional_ - all or a comma-separated list of: data, date, idMemberCreator or type
* `limit` - _optional_ - a number from 0 to 1000
* `format` - _optional_ - One of: count, list or minimal
* `since` - _optional_ - A date, null or lastView
* `before` - _optional_ - A date, or null
* `page` - _optional_ - Page * limit must be less than 1000
* `idModels` - _optional_ - Only return actions related to these model ids
* `member` - _optional_ -  true or false
* `member_fields` - _optional_ - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* `memberCreator` - _optional_ -  true or false
* `memberCreator_fields` - _optional_ - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getOrganizationsBoardsByIdOrg()

*Tags:* `organization`

#### Input Parameters
* `idOrg` - _required_ - idOrg or name
* `filter` - _optional_ - all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned
* `fields` - _optional_ - all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
* `actions` - _optional_ - all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
* `actions_entities` - _optional_ -  true or false
* `actions_limit` - _optional_ - a number from 0 to 1000
* `actions_format` - _optional_ - One of: count, list or minimal
* `actions_since` - _optional_ - A date, null or lastView
* `action_fields` - _optional_ - all or a comma-separated list of: data, date, idMemberCreator or type
* `memberships` - _optional_ - all or a comma-separated list of: active, admin, deactivated, me or normal
* `organization` - _optional_ -  true or false
* `organization_fields` - _optional_ - all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website
* `lists` - _optional_ - One of: all, closed, none or open
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getOrganizationsBoardsByIdOrgByFilter()

*Tags:* `organization`

#### Input Parameters
* `idOrg` - _required_ - idOrg or name
* `filter` - _required_ - filter
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getOrganizationsDeltasByIdOrg()

*Tags:* `organization`

#### Input Parameters
* `idOrg` - _required_ - idOrg or name
* `tags` - _required_ - A valid tag for subscribing
* `ixLastUpdate` - _required_ - a number from -1 to Infinity
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateOrganizationsDescByIdOrg()

*Tags:* `organization`

#### Input Parameters
* `idOrg` - _required_ - idOrg or name
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateOrganizationsDisplayNameByIdOrg()

*Tags:* `organization`

#### Input Parameters
* `idOrg` - _required_ - idOrg or name
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteOrganizationsLogoByIdOrg()

*Tags:* `organization`

#### Input Parameters
* `idOrg` - _required_ - idOrg or name
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addOrganizationsLogoByIdOrg()

*Tags:* `organization`

#### Input Parameters
* `idOrg` - _required_ - idOrg or name
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getOrganizationsMembersByIdOrg()

*Tags:* `organization`

#### Input Parameters
* `idOrg` - _required_ - idOrg or name
* `filter` - _optional_ - One of: admins, all, none, normal or owners
* `fields` - _optional_ - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* `activity` - _optional_ - true or false ; works for premium organizations only.
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateOrganizationsMembersByIdOrg()

*Tags:* `organization`

#### Input Parameters
* `idOrg` - _required_ - idOrg or name
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getOrganizationsMembersByIdOrgByFilter()

*Tags:* `organization`

#### Input Parameters
* `idOrg` - _required_ - idOrg or name
* `filter` - _required_ - filter
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteOrganizationsMembersByIdOrgByIdMember()

*Tags:* `organization`

#### Input Parameters
* `idOrg` - _required_ - idOrg or name
* `idMember` - _required_ - idMember
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateOrganizationsMembersByIdOrgByIdMember()

*Tags:* `organization`

#### Input Parameters
* `idOrg` - _required_ - idOrg or name
* `idMember` - _required_ - idMember
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteOrganizationsMembersAllByIdOrgByIdMember()

*Tags:* `organization`

#### Input Parameters
* `idOrg` - _required_ - idOrg or name
* `idMember` - _required_ - idMember
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getOrganizationsMembersCardsByIdOrgByIdMember()

*Tags:* `organization`

#### Input Parameters
* `idOrg` - _required_ - idOrg or name
* `idMember` - _required_ - idMember
* `actions` - _optional_ - all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization
* `attachments` - _optional_ - A boolean value or &quot;cover&quot; for only card cover attachments
* `attachment_fields` - _optional_ - all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url
* `members` - _optional_ -  true or false
* `member_fields` - _optional_ - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* `checkItemStates` - _optional_ -  true or false
* `checklists` - _optional_ - One of: all or none
* `board` - _optional_ -  true or false
* `board_fields` - _optional_ - all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
* `list` - _optional_ -  true or false
* `list_fields` - _optional_ - all or a comma-separated list of: closed, idBoard, name, pos or subscribed
* `filter` - _optional_ - One of: all, closed, none, open or visible
* `fields` - _optional_ - all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateOrganizationsMembersDeactivatedByIdOrgByIdMember()

*Tags:* `organization`

#### Input Parameters
* `idOrg` - _required_ - idOrg or name
* `idMember` - _required_ - idMember
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getOrganizationsMembersInvitedByIdOrg()

*Tags:* `organization`

#### Input Parameters
* `idOrg` - _required_ - idOrg or name
* `fields` - _optional_ - all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getOrganizationsMembersInvitedByIdOrgByField()

*Tags:* `organization`

#### Input Parameters
* `idOrg` - _required_ - idOrg or name
* `field` - _required_ - field
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getOrganizationsMembershipsByIdOrg()

*Tags:* `organization`

#### Input Parameters
* `idOrg` - _required_ - idOrg or name
* `filter` - _optional_ - all or a comma-separated list of: active, admin, deactivated, me or normal
* `member` - _optional_ -  true or false
* `member_fields` - _optional_ - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getOrganizationsMembershipsByIdOrgByIdMembership()

*Tags:* `organization`

#### Input Parameters
* `idOrg` - _required_ - idOrg or name
* `idMembership` - _required_ - idMembership
* `member` - _optional_ -  true or false
* `member_fields` - _optional_ - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateOrganizationsMembershipsByIdOrgByIdMembership()

*Tags:* `organization`

#### Input Parameters
* `idOrg` - _required_ - idOrg or name
* `idMembership` - _required_ - idMembership
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateOrganizationsNameByIdOrg()

*Tags:* `organization`

#### Input Parameters
* `idOrg` - _required_ - idOrg or name
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteOrganizationsPrefsAssociatedDomainByIdOrg()

*Tags:* `organization`

#### Input Parameters
* `idOrg` - _required_ - idOrg or name
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateOrganizationsPrefsAssociatedDomainByIdOrg()

*Tags:* `organization`

#### Input Parameters
* `idOrg` - _required_ - idOrg or name
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateOrganizationsPrefsBoardVisibilityRestrictOrgByIdOrg()

*Tags:* `organization`

#### Input Parameters
* `idOrg` - _required_ - idOrg or name
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateOrganizationsPrefsBoardVisibilityRestrictPrivateByIdOrg()

*Tags:* `organization`

#### Input Parameters
* `idOrg` - _required_ - idOrg or name
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateOrganizationsPrefsBoardVisibilityRestrictPublicByIdOrg()

*Tags:* `organization`

#### Input Parameters
* `idOrg` - _required_ - idOrg or name
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateOrganizationsPrefsExternalMembersDisabledByIdOrg()

*Tags:* `organization`

#### Input Parameters
* `idOrg` - _required_ - idOrg or name
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateOrganizationsPrefsGoogleAppsVersionByIdOrg()

*Tags:* `organization`

#### Input Parameters
* `idOrg` - _required_ - idOrg or name
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteOrganizationsPrefsOrgInviteRestrictByIdOrg()

*Tags:* `organization`

#### Input Parameters
* `idOrg` - _required_ - idOrg or name
* `value` - _required_ - An email address with optional expansion tokens
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateOrganizationsPrefsOrgInviteRestrictByIdOrg()

*Tags:* `organization`

#### Input Parameters
* `idOrg` - _required_ - idOrg or name
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateOrganizationsPrefsPermissionLevelByIdOrg()

*Tags:* `organization`

#### Input Parameters
* `idOrg` - _required_ - idOrg or name
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateOrganizationsWebsiteByIdOrg()

*Tags:* `organization`

#### Input Parameters
* `idOrg` - _required_ - idOrg or name
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getOrganizationsByIdOrgByField()

*Tags:* `organization`

#### Input Parameters
* `idOrg` - _required_ - idOrg or name
* `field` - _required_ - field
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getSearch()

*Tags:* `search`

#### Input Parameters
* `query` - _required_ - a string with a length from 1 to 16384
* `idBoards` - _optional_ - A comma-separated list of objectIds, 24-character hex strings
* `idOrganizations` - _required_ - A comma-separated list of objectIds, 24-character hex strings
* `idCards` - _optional_ - A comma-separated list of objectIds, 24-character hex strings
* `modelTypes` - _optional_ - all or a comma-separated list of: actions, boards, cards, members or organizations
* `board_fields` - _optional_ - all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url
* `boards_limit` - _optional_ - a number from 1 to 1000
* `card_fields` - _optional_ - all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url
* `cards_limit` - _optional_ - a number from 1 to 1000
* `cards_page` - _optional_ - a number from 0 to 100
* `card_board` - _optional_ -  true or false
* `card_list` - _optional_ -  true or false
* `card_members` - _optional_ -  true or false
* `card_stickers` - _optional_ -  true or false
* `card_attachments` - _optional_ - A boolean value or &quot;cover&quot; for only card cover attachments
* `organization_fields` - _optional_ - all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website
* `organizations_limit` - _optional_ - a number from 1 to 1000
* `member_fields` - _optional_ - all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username
* `members_limit` - _optional_ - a number from 1 to 1000
* `partial` - _optional_ -  true or false
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getSearchMembers()

*Tags:* `search`

#### Input Parameters
* `query` - _required_ - a string with a length from 1 to 16384
* `limit` - _optional_ - a number from 1 to 20
* `idBoard` - _optional_ - An id, or null
* `idOrganization` - _optional_ - An id, or null
* `onlyOrgMembers` - _optional_ - A boolean
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addSessions()

*Tags:* `session`

#### Input Parameters
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getSessionsSocket()

> This is the route for WebSocket requests.  See the socket API reference for a description of WebSocket usage.

*Tags:* `session`

#### Input Parameters
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateSessionsByIdSession()

*Tags:* `session`

#### Input Parameters
* `idSession` - _required_ - idSession
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateSessionsStatusByIdSession()

*Tags:* `session`

#### Input Parameters
* `idSession` - _required_ - idSession
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteTokensByToken()

*Tags:* `token`

#### Input Parameters
* `token` - _required_ - token
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getTokensByToken()

*Tags:* `token`

#### Input Parameters
* `token` - _required_ - token
* `fields` - _optional_ - all or a comma-separated list of: dateCreated, dateExpires, idMember, identifier or permissions
* `webhooks` - _optional_ -  true or false
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getTokensMemberByToken()

*Tags:* `token`

#### Input Parameters
* `token` - _required_ - token
* `fields` - _optional_ - all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getTokensMemberByTokenByField()

*Tags:* `token`

#### Input Parameters
* `token` - _required_ - token
* `field` - _required_ - field
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getTokensWebhooksByToken()

*Tags:* `token`

#### Input Parameters
* `token` - _required_ - token
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addTokensWebhooksByToken()

*Tags:* `token`

#### Input Parameters
* `token` - _required_ - token
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateTokensWebhooksByToken()

*Tags:* `token`

#### Input Parameters
* `token` - _required_ - token
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteTokensWebhooksByTokenByIdWebhook()

*Tags:* `token`

#### Input Parameters
* `token` - _required_ - token
* `idWebhook` - _required_ - idWebhook
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getTokensWebhooksByTokenByIdWebhook()

*Tags:* `token`

#### Input Parameters
* `token` - _required_ - token
* `idWebhook` - _required_ - idWebhook
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getTokensByTokenByField()

*Tags:* `token`

#### Input Parameters
* `token` - _required_ - token
* `field` - _required_ - field
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getTypesById()

*Tags:* `type`

#### Input Parameters
* `id` - _required_ - id
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### addWebhooks()

*Tags:* `webhook`

#### Input Parameters
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateWebhooks()

*Tags:* `webhook`

#### Input Parameters
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### deleteWebhooksByIdWebhook()

*Tags:* `webhook`

#### Input Parameters
* `idWebhook` - _required_ - idWebhook
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getWebhooksByIdWebhook()

*Tags:* `webhook`

#### Input Parameters
* `idWebhook` - _required_ - idWebhook
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateWebhooksByIdWebhook()

*Tags:* `webhook`

#### Input Parameters
* `idWebhook` - _required_ - idWebhook
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateWebhooksActiveByIdWebhook()

*Tags:* `webhook`

#### Input Parameters
* `idWebhook` - _required_ - idWebhook
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateWebhooksCallbackURLByIdWebhook()

*Tags:* `webhook`

#### Input Parameters
* `idWebhook` - _required_ - idWebhook
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateWebhooksDescriptionByIdWebhook()

*Tags:* `webhook`

#### Input Parameters
* `idWebhook` - _required_ - idWebhook
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### updateWebhooksIdModelByIdWebhook()

*Tags:* `webhook`

#### Input Parameters
* `idWebhook` - _required_ - idWebhook
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

### getWebhooksByIdWebhookByField()

*Tags:* `webhook`

#### Input Parameters
* `idWebhook` - _required_ - idWebhook
* `field` - _required_ - field
* `key` - _required_ - <a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>
* `token` - _required_ - <a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>

## License

**flow**ground :- Telekom iPaaS / trello-com-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
