/**
 * Auto-generated action file for "Trello" API.
 *
 * Generated at: 2019-05-07T14:44:29.565Z
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
 * Operation: 'getBoardsByIdBoard'
 * Endpoint Path: '/boards/{idBoard}'
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
    "idBoard",
    "actions",
    "actions_entities",
    "actions_display",
    "actions_format",
    "actions_since",
    "actions_limit",
    "action_fields",
    "action_member",
    "action_member_fields",
    "action_memberCreator",
    "action_memberCreator_fields",
    "cards",
    "card_fields",
    "card_attachments",
    "card_attachment_fields",
    "card_checklists",
    "card_stickers",
    "boardStars",
    "labels",
    "label_fields",
    "labels_limit",
    "lists",
    "list_fields",
    "memberships",
    "memberships_member",
    "memberships_member_fields",
    "members",
    "member_fields",
    "membersInvited",
    "membersInvited_fields",
    "checklists",
    "checklist_fields",
    "organization",
    "organization_fields",
    "organization_memberships",
    "myPrefs",
    "fields",
    "key",
    "token"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "idBoard": "idBoard",
    "actions": "actions",
    "actions_entities": "actions_entities",
    "actions_display": "actions_display",
    "actions_format": "actions_format",
    "actions_since": "actions_since",
    "actions_limit": "actions_limit",
    "action_fields": "action_fields",
    "action_member": "action_member",
    "action_member_fields": "action_member_fields",
    "action_memberCreator": "action_memberCreator",
    "action_memberCreator_fields": "action_memberCreator_fields",
    "cards": "cards",
    "card_fields": "card_fields",
    "card_attachments": "card_attachments",
    "card_attachment_fields": "card_attachment_fields",
    "card_checklists": "card_checklists",
    "card_stickers": "card_stickers",
    "boardStars": "boardStars",
    "labels": "labels",
    "label_fields": "label_fields",
    "labels_limit": "labels_limit",
    "lists": "lists",
    "list_fields": "list_fields",
    "memberships": "memberships",
    "memberships_member": "memberships_member",
    "memberships_member_fields": "memberships_member_fields",
    "members": "members",
    "member_fields": "member_fields",
    "membersInvited": "membersInvited",
    "membersInvited_fields": "membersInvited_fields",
    "checklists": "checklists",
    "checklist_fields": "checklist_fields",
    "organization": "organization",
    "organization_fields": "organization_fields",
    "organization_memberships": "organization_memberships",
    "myPrefs": "myPrefs",
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
        operationId: 'getBoardsByIdBoard',
        pathName: '/boards/{idBoard}',
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