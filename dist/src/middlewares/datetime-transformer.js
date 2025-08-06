"use strict";
/**
 * Middleware to transform datetime fields by removing timezone information
 * This ensures all datetime fields return as naive datetimes without timezone data
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (config, { strapi }) => {
    return async (ctx, next) => {
        await next();
        // Only process successful responses with JSON data
        // Skip admin routes to prevent breaking the admin panel
        const isAdminRoute = ctx.request.url.startsWith('/admin') || ctx.request.url.startsWith('/_admin');
        const isApiRoute = ctx.request.url.startsWith('/api');
        if (ctx.status >= 200 && ctx.status < 300 && ctx.body && isApiRoute && !isAdminRoute) {
            ctx.body = transformDatetimeFields(ctx.body);
        }
    };
};
/**
 * Recursively transforms datetime fields in the response data
 * Removes timezone information and returns naive datetime strings
 */
function transformDatetimeFields(data) {
    if (!data)
        return data;
    if (Array.isArray(data)) {
        return data.map(item => transformDatetimeFields(item));
    }
    if (typeof data === 'object') {
        const transformed = { ...data };
        for (const [key, value] of Object.entries(data)) {
            if (typeof value === 'string' && isDatetimeString(value)) {
                // Remove timezone information by extracting just the datetime part
                transformed[key] = removeDatetimeTimezone(value);
            }
            else if (typeof value === 'object') {
                transformed[key] = transformDatetimeFields(value);
            }
        }
        return transformed;
    }
    return data;
}
/**
 * Checks if a string appears to be a datetime with timezone information
 */
function isDatetimeString(str) {
    // Match ISO 8601 datetime strings with timezone info
    const datetimeRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?([+-]\d{2}:\d{2}|Z)$/;
    return datetimeRegex.test(str);
}
/**
 * Removes timezone information from a datetime string
 * Converts "2024-01-15T10:30:00.000Z" to "2024-01-15T10:30:00.000"
 * Converts "2024-01-15T10:30:00+05:00" to "2024-01-15T10:30:00"
 */
function removeDatetimeTimezone(datetimeStr) {
    // Remove timezone indicators (Z, +HH:MM, -HH:MM)
    return datetimeStr.replace(/([+-]\d{2}:\d{2}|Z)$/, '');
}
