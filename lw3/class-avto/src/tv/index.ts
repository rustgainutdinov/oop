class TV {
	private powerState: boolean;
	private channel: number;
	
	constructor(powerState: boolean, channel: number) {
		this.powerState = powerState;
		this.channel = 0;
		this.selectChannel(channel);
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
			this.powerState = false;
			return true
		} else {
			return false
		}
	}
	
	selectChannel(channel: number): boolean {
		if (this.powerState === false) return false;
		if (channel > 0 && channel < 100) {
			this.channel = channel;
			return true
		} else {
			return false
		}
	}
	
	getInfo() {
		return {
			powerState: this.powerState,
			channel: this.powerState === false ? 0 : this.channel
		}
	}
}

export {TV};
