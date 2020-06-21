import Protocol from "../data_types/Protocol";

function getPortByProtocol(protocol: Protocol): number {
	if (protocol === Protocol.HTTP) {
		return 80
	}
	return 443
	
	// switch (protocol) {
	// 	case 'http':
	// 		return 80;
	// 	case 'https':
	// 		return 443;
	// 	default:
	// 		checkNever()
	// }
}

export default getPortByProtocol
