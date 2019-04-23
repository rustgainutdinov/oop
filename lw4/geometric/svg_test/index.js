import {Canvas} from "../src/geometric/canvas/canvas";

// get your svg as string
fs.writeFileSync('test.svg', canvas.node.outerHTML);
