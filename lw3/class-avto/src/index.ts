const readLineSync = require('readline-sync');
import {TV, tvState} from './tv'

const state: tvState = {
	powerState: false,
	chanel: 0
};

const tv = new TV(state);

function turnOnTV(tv: TV) {
	if (tv.turnOn()) console.log('successful turn on');
	else console.log('failure to turn on')
}

function turnOffTV(tv: TV) {
	if (tv.turnOff()) console.log('successful turn off');
	else console.log('failure to turn off')
}

function SelectChanelTV(tv: TV, num: number) {
	if (tv.selectChanel(num)) console.log('successful select chanel');
	else console.log('failure to select chanel')
}

function InfoTv(tv: TV) {
	const info: tvState = tv.getInfo();
	console.log(`powerState: ${info.powerState} chanel ${info.chanel}`);
}

function talkWithUser(tv: TV) {
	while (true) {
		const action: string = readLineSync.question('>');
			if (action.indexOf('TurnOn') !== -1) {
			turnOnTV(tv);
		} else if (action.indexOf('TurnOff') !== -1) {
			turnOffTV(tv);
		} else if (action.indexOf('SelectChanel') !== -1) {
			const num: number = Number(action.substr('SelectChanel '.length));
			if (!num) console.log('error');
			SelectChanelTV(tv, num);
		} else if (action.indexOf('Info') !== -1) {
			InfoTv(tv);
		} else if (action === 'exit') {
			break;
		} else {
			console.log('action not recognized');
		}
	}
}

talkWithUser(tv);
