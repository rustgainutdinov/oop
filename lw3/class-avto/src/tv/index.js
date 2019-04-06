"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TV = /** @class */ (function () {
    function TV(state) {
        this.powerState = state.powerState;
        this.chanel = 0;
        this.selectChanel(state.chanel);
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
            this.chanel = 0;
            this.powerState = false;
            return true;
        }
        else {
            return false;
        }
    };
    TV.prototype.selectChanel = function (chanel) {
        if (this.powerState === false)
            return false;
        if (chanel > 0 && chanel < 100) {
            this.chanel = chanel;
            return true;
        }
        else {
            return false;
        }
    };
    TV.prototype.getInfo = function () {
        return {
            powerState: this.powerState,
            chanel: this.chanel
        };
    };
    return TV;
}());
exports.TV = TV;
