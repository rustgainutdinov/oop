import {CanvasInterface} from "./canvasInterface";

interface CanvasDrawable {
	draw(canvas: CanvasInterface): void;
}

export {CanvasDrawable}
