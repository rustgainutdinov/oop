import {Shape} from "../index";

interface SolidShape extends Shape {
	getFillColor(): number;
}

export {SolidShape}
