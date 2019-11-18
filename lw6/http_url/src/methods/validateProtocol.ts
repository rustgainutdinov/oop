import ValidateError from "../classes/ValidateError";
import Protocol from "../data_types/Protocol";

function getProtocolFromString(protocol: string): Protocol {
	const parsedProtocol: RegExpMatchArray | null = protocol.match(/^https?$/ui);
	if (!parsedProtocol) {
		throw new ValidateError("Protocol is incorrect")
	}
	if (parsedProtocol[0].length === 4) {
		return Protocol.HTTP
	}
	return Protocol.HTTPS
}

export default getProtocolFromString
