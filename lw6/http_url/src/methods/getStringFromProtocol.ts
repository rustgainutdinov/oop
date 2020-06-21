import Protocol from "../data_types/Protocol";

function getStringByProtocol(protocol: Protocol) {
	if (protocol === Protocol.HTTP) {
		return "http"
	}
	return "https"
}

export default getStringByProtocol
