import Protocol from "../data_types/Protocol";
import ParsingError from "./ParsingError";
import getProtocolFromString from "../methods/validateProtocol";
import getPortByProtocol from "../methods/getPortByProtocol";

class HttpUrl {
	readonly url: string;
	readonly domain: string;
	readonly document: string | undefined;
	readonly protocol: Protocol;
	readonly port: number;
	
	constructor(url: string) {
		const parsedUrl: RegExpMatchArray | null = url.match(/^(.{4,5}):\/\/(([a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.)+[a-zA-Z]{2,})(:(\d+))?(\/.*)?$/ui);
		if (parsedUrl == null) {
			throw new ParsingError("Url parsing error");
		}
		const protocol: string = parsedUrl[1];
		const domain: string = parsedUrl[2];
		const port: number | undefined = parseInt(parsedUrl[5]);
		const document: string | undefined = parsedUrl[6];
		if (!(protocol && domain)) {
			throw new ParsingError("Url parsing error");
		}
		this.url = url;
		this.protocol = getProtocolFromString(protocol);
		this.domain = domain;
		if (!port) {
			this.port = getPortByProtocol(this.protocol);
		} else {
			this.port = port;
		}
		this.document = document;
		// console.log(this.domain, this.protocol, this.port, this.document)
	}
	
	getProtocol(): Protocol {
		return this.protocol
	}
	
	getDomain(): string {
		return this.domain
	}
	
	getPort(): number {
		return this.port
	}
	
	getDocument(): string | undefined {
		return this.document
	}
	
	getUrl(): string {
		return this.url
	}
}

export default HttpUrl
