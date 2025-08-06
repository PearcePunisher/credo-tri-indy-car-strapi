"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    rest: {
        defaultLimit: 25,
        maxLimit: 100,
        withCount: true,
    },
    // Configure datetime handling to avoid timezone conversion
    responses: {
        privateAttributes: ['createdAt', 'updatedAt'],
    },
};
