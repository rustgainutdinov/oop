function checkIdForCorrectness(name: string): boolean {
	const regexpResult: any = name.match(/[a-z_](\w)*/ig);
	return ((regexpResult !== null) && (regexpResult[0] === name))
}

export {checkIdForCorrectness}
