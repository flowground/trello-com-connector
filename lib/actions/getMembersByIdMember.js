/**
 * Auto-generated action file for "Trello" API.
 *
 * Generated at: 2019-05-07T14:44:29.607Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / trello-com-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'getMembersByIdMember'
 * Endpoint Path: '/members/{idMember}'
 * Method: 'get'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "idMember",
    "actions",
    "actions_entities",
    "actions_display",
    "actions_limit",
    "action_fields",
    "action_since",
    "action_before",
    "cards",
    "card_fields",
    "card_members",
    "card_member_fields",
    "card_attachments",
    "card_attachment_fields",
    "card_stickers",
    "boards",
    "board_fields",
    "board_actions",
    "board_actions_entities",
    "board_actions_display",
    "board_actions_format",
    "board_actions_since",
    "board_actions_limit",
    "board_action_fields",
    "board_lists",
    "board_memberships",
    "board_organization",
    "board_organization_fields",
    "boardsInvited",
    "boardsInvited_fields",
    "boardStars",
    "savedSearches",
    "organizations",
    "organization_fields",
    "organization_paid_account",
    "organizationsInvited",
    "organizationsInvited_fields",
    "notifications",
    "notifications_entities",
    "notifications_display",
    "notifications_limit",
    "notification_fields",
    "notification_memberCreator",
    "notification_memberCreator_fields",
    "notification_before",
    "notification_since",
    "tokens",
    "paid_account",
    "boardBackgrounds",
    "customBoardBackgrounds",
    "customStickers",
    "customEmoji",
    "fields",
    "key",
    "token"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "idMember": "idMember",
    "actions": "actions",
    "actions_entities": "actions_entities",
    "actions_display": "actions_display",
    "actions_limit": "actions_limit",
    "action_fields": "action_fields",
    "action_since": "action_since",
    "action_before": "action_before",
    "cards": "cards",
    "card_fields": "card_fields",
    "card_members": "card_members",
    "card_member_fields": "card_member_fields",
    "card_attachments": "card_attachments",
    "card_attachment_fields": "card_attachment_fields",
    "card_stickers": "card_stickers",
    "boards": "boards",
    "board_fields": "board_fields",
    "board_actions": "board_actions",
    "board_actions_entities": "board_actions_entities",
    "board_actions_display": "board_actions_display",
    "board_actions_format": "board_actions_format",
    "board_actions_since": "board_actions_since",
    "board_actions_limit": "board_actions_limit",
    "board_action_fields": "board_action_fields",
    "board_lists": "board_lists",
    "board_memberships": "board_memberships",
    "board_organization": "board_organization",
    "board_organization_fields": "board_organization_fields",
    "boardsInvited": "boardsInvited",
    "boardsInvited_fields": "boardsInvited_fields",
    "boardStars": "boardStars",
    "savedSearches": "savedSearches",
    "organizations": "organizations",
    "organization_fields": "organization_fields",
    "organization_paid_account": "organization_paid_account",
    "organizationsInvited": "organizationsInvited",
    "organizationsInvited_fields": "organizationsInvited_fields",
    "notifications": "notifications",
    "notifications_entities": "notifications_entities",
    "notifications_display": "notifications_display",
    "notifications_limit": "notifications_limit",
    "notification_fields": "notification_fields",
    "notification_memberCreator": "notification_memberCreator",
    "notification_memberCreator_fields": "notification_memberCreator_fields",
    "notification_before": "notification_before",
    "notification_since": "notification_since",
    "tokens": "tokens",
    "paid_account": "paid_account",
    "boardBackgrounds": "boardBackgrounds",
    "customBoardBackgrounds": "customBoardBackgrounds",
    "customStickers": "customStickers",
    "customEmoji": "customEmoji",
    "fields": "fields",
    "key": "key",
    "token": "token"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = undefined;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['api_key'] = cfg['api_key'];
    securities['api_token'] = cfg['api_token'];

    let callParams = {
        spec: spec,
        operationId: 'getMembersByIdMember',
        pathName: '/members/{idMember}',
        method: 'get',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}