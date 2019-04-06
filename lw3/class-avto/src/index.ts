const readLineSync = require('readline-sync');
import {TV} from './tv'

const state = {
	powerState: false,
	channel: 0
};

const tv = new TV(state.powerState, state.channel);

function turnOnTV(tv: TV) {
	if (tv.turnOn()) console.log('successful turn on');
	else console.log('failure to turn on')
}

function turnOffTV(tv: TV) {
	if (tv.turnOff()) console.log('successful turn off');
	else console.log('failure to turn off')
}

function SelectChanelTV(tv: TV, num: number) {
	if (tv.selectChannel(num)) console.log('successful select channel');
	else console.log('failure to select channel')
}

function InfoTv(tv: TV) {
	const info = tv.getInfo();
	console.log(`powerState: ${info.powerState} channel ${info.channel}`);
}

function talkWithUser(tv: TV) {
	while (true) {
		const action: string = readLineSync.question('>');
		if (action.indexOf('TurnOn') !== -1) {
			turnOnTV(tv);
		} else if (action.indexOf('TurnOff') !== -1) {
			turnOffTV(tv);
		} else if (action.indexOf('SelectChannel') !== -1) {
			const num: number = Number(action.substr('SelectChannel '.length));
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
