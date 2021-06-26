import { useState } from 'react';
import Draggable from 'react-draggable';
import './Spline.scss';

const Spline = () => {
    const [start, startSet] = useState({x: 100, y: 200})
    const [end, endSet] = useState({x: 200, y: 250})
    const bezierCurve = (a: any, b: any, cp1x: any, cp1y: any, cp2x: any, cp2y: any, x: any, y: any) => {
        return `M${a},${b} C${cp1x},${cp1y} ${cp2x},${cp2y} ${x},${y}`;
    }
    const distance = (a: number[], b: number[]) => {
        return Math.sqrt((b[0] - a[0]) ** 2 + (b[1] - a[1]) ** 2);
    }
    const dist = distance([start.x, start.y], [end.x, end.y]);
    const pathString = bezierCurve(
      start.x, // start x
      start.y, // start y
      start.x + dist * (false ? 0.7 : 0.18), // cp1 x
      start.y - dist * (false ? 0.9 : 0), // cp1 y
      end.x - dist * (false ? 0.7 : 0.35), // cp2 x
      end.y - dist * (true ? 0.9 : 0), // cp2 y
      end.x, // end x
      end.y
    );

    const handleStart = (e: any, ui:any) => {
      startSet({...start,
        x: start.x + ui.deltaX,
        y: start.y + ui.deltaY,
      });
    }
    const handleEnd = (e: any, ui:any) => {
      endSet({...end,
        x: end.x + ui.deltaX,
        y: end.y + ui.deltaY,
      });
    }
    return (
        <div className={"spline"}>
            <Draggable onDrag={handleStart}>
                <div style={{position: "absolute", marginLeft: start.x + "px", marginTop: start.y + "px"}}>x: {start.x.toFixed(0)}, y: {start.y.toFixed(0)}</div>
            </Draggable>
            <Draggable onDrag={handleEnd}>
                <div style={{position: "absolute", marginLeft: end.x + "px", marginTop: end.y + "px"}}>x: {end.x.toFixed(0)}, y: {end.y.toFixed(0)}</div>
            </Draggable>
            <svg>
                <g>
                  <path className="connector" d={pathString} />
                </g>
            </svg>
        </div>
    )
}

export default Spline;
