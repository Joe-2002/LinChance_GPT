"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var globalConfig = require("../_utils/global-config.js");
var avatar = require("./avatar.js");
var avatarGroup = require("./avatar-group.js");
const Avatar = Object.assign(avatar, {
  Group: avatarGroup,
  install: (app, options) => {
    globalConfig.setGlobalConfig(app, options);
    const componentPrefix = globalConfig.getComponentPrefix(options);
    app.component(componentPrefix + avatar.name, avatar);
    app.component(componentPrefix + avatarGroup.name, avatarGroup);
  }
});
exports.AvatarGroup = avatarGroup;
exports["default"] = Avatar;
