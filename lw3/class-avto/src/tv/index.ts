interface tvState {
	powerState: boolean;
	chanel: number;
}

class TV {
	private powerState: boolean;
	private chanel: number;
	
	constructor(state: tvState) {
		this.powerState = state.powerState;
		this.chanel = 0;
		this.selectChanel(state.chanel);
	}
	
	turnOn(): boolean {
		if (this.powerState === false) {
			this.powerState = true;
			return true
		} else {
			return false
		}
	}
	
	turnOff(): boolean {
		if (this.powerState === true) {
			this.chanel = 0;
			this.powerState = false;
			return true
		} else {
			return false
		}
	}
	
	selectChanel(chanel: number): boolean {
		if (this.powerState === false) return false;
		if (chanel > 0 && chanel < 100) {
			this.chanel = chanel;
			return true
		} else {
			return false
		}
	}
	
	getInfo(): tvState {
		return {
			powerState: this.powerState,
			chanel: this.chanel
		}
	}
}

export {TV, tvState}
