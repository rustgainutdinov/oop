"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readLineSync = require('readline-sync');
var tv_1 = require("./tv");
var state = {
    powerState: false,
    chanel: 0
};
var tv = new tv_1.TV(state);
function turnOnTV(tv) {
    if (tv.turnOn())
        console.log('successful turn on');
    else
        console.log('failure to turn on');
}
function turnOffTV(tv) {
    if (tv.turnOff())
        console.log('successful turn off');
    else
        console.log('failure to turn off');
}
function SelectChanelTV(tv, num) {
    if (tv.selectChanel(num))
        console.log('successful select chanel');
    else
        console.log('failure to select chanel');
}
function InfoTv(tv) {
    var info = tv.getInfo();
    console.log("powerState: " + info.powerState + " chanel " + info.chanel);
}
function talkWithUser(tv) {
    while (true) {
        var action = readLineSync.question('>');
        if (action.indexOf('TurnOn') !== -1) {
            turnOnTV(tv);
        }
        else if (action.indexOf('TurnOff') !== -1) {
            turnOffTV(tv);
        }
        else if (action.indexOf('SelectChanel') !== -1) {
            var num = Number(action.substr('SelectChanel '.length));
            if (!num)
                console.log('error');
            SelectChanelTV(tv, num);
        }
        else if (action.indexOf('Info') !== -1) {
            InfoTv(tv);
        }
        else if (action === 'exit') {
            break;
        }
        else {
            console.log('action not recognized');
        }
    }
}
talkWithUser(tv);
