"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TV = /** @class */ (function () {
    function TV(powerState, channel) {
        this.powerState = powerState;
        this.channel = 0;
        this.selectChannel(channel);
    }
    TV.prototype.turnOn = function () {
        if (this.powerState === false) {
            this.powerState = true;
            return true;
        }
        else {
            return false;
        }
    };
    TV.prototype.turnOff = function () {
        if (this.powerState === true) {
            this.powerState = false;
            return true;
        }
        else {
            return false;
        }
    };
    TV.prototype.selectChannel = function (channel) {
        if (this.powerState === false)
            return false;
        if (channel > 0 && channel < 100) {
            this.channel = channel;
            return true;
        }
        else {
            return false;
        }
    };
    TV.prototype.getInfo = function () {
        return {
            powerState: this.powerState,
            channel: this.powerState === false ? 0 : this.channel
        };
    };
    return TV;
}());
exports.TV = TV;
