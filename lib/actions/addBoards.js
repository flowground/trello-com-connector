/**
 * Auto-generated action file for "Trello" API.
 *
 * Generated at: 2019-05-07T14:44:29.564Z
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
 * Operation: 'addBoards'
 * Endpoint Path: '/boards'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "key",
    "token"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "key": "key",
    "token": "token",
    "closed": "closed",
    "desc": "desc",
    "idBoardSource": "idBoardSource",
    "idOrganization": "idOrganization",
    "keepFromSource": "keepFromSource",
    "labelNames_blue": "labelNames/blue",
    "labelNames_green": "labelNames/green",
    "labelNames_orange": "labelNames/orange",
    "labelNames_purple": "labelNames/purple",
    "labelNames_red": "labelNames/red",
    "labelNames_yellow": "labelNames/yellow",
    "name": "name",
    "powerUps": "powerUps",
    "prefs_background": "prefs_background",
    "prefs_calendarFeedEnabled": "prefs/calendarFeedEnabled",
    "prefs_cardAging": "prefs_cardAging",
    "prefs_cardCovers": "prefs_cardCovers",
    "prefs_comments": "prefs_comments",
    "prefs_invitations": "prefs_invitations",
    "prefs_permissionLevel": "prefs_permissionLevel",
    "prefs_selfJoin": "prefs_selfJoin",
    "prefs_voting": "prefs_voting",
    "subscribed": "subscribed",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

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
        operationId: 'addBoards',
        pathName: '/boards',
        method: 'post',
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