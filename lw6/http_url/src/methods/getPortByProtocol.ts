import Protocol from "../data_types/Protocol";

function getPortByProtocol(protocol: Protocol): number {
	if (protocol === Protocol.HTTP) {
		return 80
	} else {
		return 443
	}
}

export default getPortByProtocol
