import Protocol from "../data_types/Protocol";
import ParsingError from "./ParsingError";
import getProtocolFromString from "../methods/getProtocolFromString";
import getPortByProtocol from "../methods/getPortByProtocol";
import getStringByProtocol from "../methods/getStringFromProtocol";

class HttpUrl {
	readonly domain: string;
	readonly document: string | undefined;
	readonly protocol: Protocol;
	readonly port: number;
	
	static createByUrl(url: string): HttpUrl {
		const parsedUrl: RegExpMatchArray | null = url.match(/^(.{4,5}):\/\/(([a-z0-9-]{1,63}\.?)+(\.[a-z]{2,})?)(:(\d+))?(\/.*)?$/ui);
		if (parsedUrl == null) {
			throw new ParsingError("Url parsing error");
		}
		const protocol: string = parsedUrl[1];
		const domain: string = parsedUrl[2];
		const port: number | undefined = parseInt(parsedUrl[6]);
		const document: string | undefined = parsedUrl[7];
		if (!(protocol && domain)) {
			throw new ParsingError("Url parsing error");
		}
		return new HttpUrl(protocol, domain, port, document);
	}
	
	 constructor(protocol: string, domain: string, port?: number, document?: string) {
		this.protocol = getProtocolFromString(protocol);
		this.domain = domain;
		if (!port) {
			this.port = getPortByProtocol(this.protocol);
		} else {
			this.port = port;
		}
		if (document && document.slice(0, 1) !== "/") {
			document = "/" + document;
		}
		this.document = document
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
		let url: string = getStringByProtocol(this.getProtocol()) + "://" + this.getDomain();
		if (getPortByProtocol(this.getProtocol()) !== this.getPort()) {
			url += ":" + this.getPort()
		}
		return url + (this.getDocument() ? this.getDocument() : "");
	}
}

export default HttpUrl
