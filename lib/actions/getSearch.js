/**
 * Auto-generated action file for "Trello" API.
 *
 * Generated at: 2019-05-07T14:44:29.634Z
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
 * Operation: 'getSearch'
 * Endpoint Path: '/search'
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
    "query",
    "idBoards",
    "idOrganizations",
    "idCards",
    "modelTypes",
    "board_fields",
    "boards_limit",
    "card_fields",
    "cards_limit",
    "cards_page",
    "card_board",
    "card_list",
    "card_members",
    "card_stickers",
    "card_attachments",
    "organization_fields",
    "organizations_limit",
    "member_fields",
    "members_limit",
    "partial",
    "key",
    "token"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "query": "query",
    "idBoards": "idBoards",
    "idOrganizations": "idOrganizations",
    "idCards": "idCards",
    "modelTypes": "modelTypes",
    "board_fields": "board_fields",
    "boards_limit": "boards_limit",
    "card_fields": "card_fields",
    "cards_limit": "cards_limit",
    "cards_page": "cards_page",
    "card_board": "card_board",
    "card_list": "card_list",
    "card_members": "card_members",
    "card_stickers": "card_stickers",
    "card_attachments": "card_attachments",
    "organization_fields": "organization_fields",
    "organizations_limit": "organizations_limit",
    "member_fields": "member_fields",
    "members_limit": "members_limit",
    "partial": "partial",
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

    let callParams = {
        spec: spec,
        operationId: 'getSearch',
        pathName: '/search',
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