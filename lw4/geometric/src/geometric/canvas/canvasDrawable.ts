import {ICanvas} from "./ICanvas";

interface CanvasDrawable {
	draw(canvas: ICanvas): any;
}

export {CanvasDrawable}
