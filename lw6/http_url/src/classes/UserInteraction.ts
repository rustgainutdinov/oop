import readlineSync from 'readline-sync';
import HttpUrl from "./HttpUrl";
import getStringByProtocol from "../methods/getStringFromProtocol";
import ValidateError from "./ValidateError";
import ParsingError from "./ParsingError";

class UserInteraction {
	private isEnd: boolean = false;
	
	run() {
		while (true) {
			const url: string = this.askUser();
			if (this.isEnd) {
				return
			}
			let httpUrl: HttpUrl;
			try {
				httpUrl = HttpUrl.createByUrl(url);
			} catch (e) {
				if (e instanceof ValidateError) {
					console.log("Ошибка валидации: ", e.message)
				} else if (e instanceof ParsingError) {
					console.log("Ошибка парсинга: ", e.message)
				}
				continue;
			}
			console.log(`Protocol: ${getStringByProtocol(httpUrl.getProtocol())}`);
			console.log(`Domain: ${httpUrl.getDomain()}`);
			console.log(`Port: ${httpUrl.getPort()}`);
			console.log(`Document: ${httpUrl.getDocument()}`);
		}
	}
	
	private askUser(): string {
		const url: string = readlineSync.question("url: ");
		if (url === "") {
			this.isEnd = true;
		}
		return url
	}
}

export default UserInteraction
