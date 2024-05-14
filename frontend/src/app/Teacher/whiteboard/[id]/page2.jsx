'use client';
import React, { useEffect, useRef, useState } from "react";
import rough from "roughjs/bundled/rough.esm";
import {
    createElement,
    adjustElementCoordinates,
    cursorForPosition,
    resizedCoordinates,
    midPointBtw,
    getElementAtPosition,
} from "@/components/element";
import Swatch from "@/components/Swatch";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";

function Whiteboard() {

    const { id } = useParams();

    const canvasRef = useRef();

    const [points, setPoints] = useState([]);
    const [path, setPath] = useState([]);
    const [isDrawing, setIsDrawing] = useState(false);
    const [elements, setElements] = useState([]);
    const [action, setAction] = useState("none");
    const [toolType, setToolType] = useState("pencil");
    const [selectedElement, setSelectedElement] = useState(null);
    const [colorWidth, setColorWidth] = useState({
        hex: "#000",
        hsv: {},
        rgb: {},
    });
    const [width, setWidth] = useState(1);
    const [shapeWidth, setShapeWidth] = useState(1);
    const [popped, setPopped] = useState(false);

    useEffect(() => {
        const canvas = document.getElementById("canvas");
        const context = canvas.getContext("2d");
        context.lineCap = "round";
        context.lineJoin = "round";

        context.save();

        const drawpath = () => {
            path.forEach((stroke, index) => {
                context.beginPath();

                stroke.forEach((point, i) => {
                    context.strokeStyle = point.newColour;
                    context.lineWidth = point.newLinewidth;

                    var midPoint = midPointBtw(point.clientX, point.clientY);

                    context.quadraticCurveTo(
                        point.clientX,
                        point.clientY,
                        midPoint.x,
                        midPoint.y
                    );
                    context.lineTo(point.clientX, point.clientY);
                    context.stroke();
                });
                context.closePath();
                context.save();
            });
        };

        if (toolType === "eraser" && popped === true) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            setPopped(false);
        }

        const roughCanvas = rough.canvas(canvas);

        if (path !== undefined) drawpath();

        context.lineWidth = shapeWidth;

        elements.forEach(({ roughElement }) => {
            context.globalAlpha = "1";
            //console.log(roughElement);
            context.strokeStyle = roughElement.options.stroke;
            roughCanvas.draw(roughElement);
        });

        return () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
        };
    }, [popped, elements, path, width]);

    const updateElement = (
        index,
        x1,
        y1,
        x2,
        y2,
        toolType,
        strokeWidth,
        strokeColor
    ) => {
        const updatedElement = createElement(
            index,
            x1,
            y1,
            x2,
            y2,
            toolType,
            strokeWidth,
            strokeColor
        );
        const elementsCopy = [...elements];
        elementsCopy[index] = updatedElement;
        setElements(elementsCopy);
    };

    const checkPresent = (clientX, clientY) => {
        if (path === undefined) return;
        var newPath = path;
        path.forEach((stroke, index) => {
            stroke.forEach((point, i) => {
                if (
                    clientY < point.clientY + 10 &&
                    clientY > point.clientY - 10 &&
                    clientX < point.clientX + 10 &&
                    clientX > point.clientX - 10
                ) {
                    //console.log("Popped");
                    newPath.splice(index, 1);
                    setPopped(true);
                    setPath(newPath);
                    return;
                }
            });
        });
        const newElements = elements;
        newElements.forEach((ele, index) => {
            if (
                clientX >= ele.x1 &&
                clientX <= ele.x2 &&
                clientY >= ele.y1 &&
                clientY <= ele.y2
            ) {
                console.log("Popped....");
                newElements.splice(index, 1);
                setPopped(true);
                setElements(newElements);
            }
        });
    };

    const handleMouseDown = (e) => {
        const { clientX, clientY } = e;
        const canvas = document.getElementById("canvas");
        const context = canvas.getContext("2d");

        if (toolType === "selection") {
            const element = getElementAtPosition(clientX, clientY, elements);
            if (element) {
                // const offsetX = clientX - element.x1;
                // const offsetY = clientY - element.y1;
                const offsetX = clientX;
                const offsetY = clientY;
                setSelectedElement({ ...element, offsetX, offsetY });
                if (element.position === "inside") {
                    setAction("moving");
                } else {
                    setAction("resize");
                }
            }
        } else if (toolType === "eraser") {
            setAction("erasing");

            checkPresent(clientX, clientY);
        } else {
            const id = elements.length;
            if (toolType === "pencil" || toolType === "brush") {
                setAction("sketching");
                setIsDrawing(true);

                const newColour = colorWidth.hex;
                const newLinewidth = width;
                const transparency = toolType === "brush" ? "0.1" : "1.0";
                const newEle = {
                    clientX,
                    clientY,
                    newColour,
                    newLinewidth,
                    transparency,
                };
                setPoints((state) => [...state, newEle]);

                context.strokeStyle = newColour;
                context.lineWidth = newLinewidth;
                context.lineCap = 5;
                context.moveTo(clientX, clientY);
                context.beginPath();
            } else {
                setAction("drawing");
                const newColour = colorWidth.hex;
                const newWidth = shapeWidth;
                const element = createElement(
                    id,
                    clientX,
                    clientY,
                    clientX,
                    clientY,
                    toolType,
                    newWidth,
                    newColour
                );

                setElements((prevState) => [...prevState, element]);
                setSelectedElement(element);
            }
        }
    };

    const handleMouseMove = (e) => {
        const canvas = document.getElementById("canvas");
        const context = canvas.getContext("2d");
        
        const rect = canvas.getBoundingClientRect(); // get the bounding rectangle of the canvas
        const { clientX, clientY } = e;
        const x = clientX  // adjust for the canvas's left offset
        const y = clientY  // adjust for the canvas's top offset
        

        if (toolType === "selection") {
            const element = getElementAtPosition(x, y, elements);
            e.target.style.cursor = element
                ? cursorForPosition(element.position)
                : "default";
        }
        if (action === "erasing") {
            checkPresent(x, y);
        }
        if (action === "sketching") {
            if (!isDrawing) return;
            const colour = points[points.length - 1].newColour;
            const linewidth = points[points.length - 1].newLinewidth;
            const transparency = points[points.length - 1].transparency;
            const newEle = { x, y, colour, linewidth, transparency };

            setPoints((state) => [...state, newEle]);
            var midPoint = midPointBtw(x, y);
            context.quadraticCurveTo(x, y, midPoint.x, midPoint.y);
            context.lineTo(x, y);
            context.stroke();
        } else if (action === "drawing") {
            const index = elements.length - 1;
            const { x1, y1 } = elements[index];
            elements[index].strokeColor = colorWidth.hex;
            elements[index].strokeWidth = shapeWidth;
            updateElement(
                index,
                x1,
                y1,
                x,
                y,
                toolType,
                shapeWidth,
                colorWidth.hex
            );
        } else if (action === "moving") {
            const {
                id,
                x1,
                x2,
                y1,
                y2,
                type,
                offsetX,
                offsetY,
                shapeWidth,
                strokeColor,
            } = selectedElement;
            const offsetWidth = x2 - x1;
            const offsetHeight = y2 - y1;
            const newX = x - offsetX;
            const newY = y - offsetY;
            updateElement(
                id,
                newX,
                newY,
                newX + offsetWidth,
                newY + offsetHeight,
                type,
                shapeWidth,
                strokeColor
            );
        } else if (action === "resize") {
            const { id, type, position, ...coordinates } = selectedElement;
            const { x1, y1, x2, y2 } = resizedCoordinates(
                x,
                y,
                position,
                coordinates
            );
            updateElement(id, x1, y1, x2, y2, type, shapeWidth, colorWidth.hex);
        }
    };
    const handleMouseUp = () => {
        if (action === "resize") {
            const index = selectedElement.id;
            const { id, type, strokeWidth, strokeColor } = elements[index];
            const { x1, y1, x2, y2 } = adjustElementCoordinates(elements[index]);
            updateElement(id, x1, y1, x2, y2, type, strokeWidth, strokeColor);
        } else if (action === "drawing") {
            const index = selectedElement.id;
            const { id, type, strokeWidth } = elements[index];
            const { x1, y1, x2, y2 } = adjustElementCoordinates(elements[index]);
            updateElement(id, x1, y1, x2, y2, type, strokeWidth, colorWidth.hex);
        } else if (action === "sketching") {
            const canvas = document.getElementById("canvas");
            const context = canvas.getContext("2d");
            context.closePath();
            const element = points;
            setPoints([]);
            setPath((prevState) => [...prevState, element]); //tuple
            setIsDrawing(false);
        }
        setAction("none");
    };

    const fetchCanvas = () => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/lecture/getbyid/${id}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if (data.canvas) {
                    setCanvasDataUrl(data.canvas);
                }
            });
    }

    useEffect(() => {
        fetchCanvas();
    }, [])


    const getCanvasDataURL = () => {
        const canvas = canvasRef.current;
        if (canvas) {
            const dataURL = canvas.toDataURL();
            //   console.log(dataURL);
            return dataURL;
        }
    };

    const storeCanvas = () => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/lecture/update/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                canvas: getCanvasDataURL()
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                console.log(response.status);
                if (response.status === 200) {
                    toast.success('Canvas saved successfully');
                }
                return response.json();
            }).catch((err) => {
                console.log(err);
            });
    }

    const setCanvasDataUrl = (dataUrl) => {
        const canvas = canvasRef.current;
        if (canvas) {
            const context = canvas.getContext('2d');
            const img = new Image();
            img.onload = function () {
                context.drawImage(img, 0, 0);
            };
            img.src = dataUrl;
        }
    };
    

    return (
        <div className="bg-white">
            
            <button onClick={storeCanvas}>Save</button>
            <div className="grid grid-cols-12">
                <div className="col-span-3">

                    <Swatch
                        toolType={toolType}
                        setToolType={setToolType}
                        width={width}
                        setWidth={setWidth}
                        setElements={setElements}
                        setColorWidth={setColorWidth}
                        setPath={setPath}
                        colorWidth={colorWidth}
                        setShapeWidth={setShapeWidth}
                    />
                </div>
                <div className="col-span-9">
                    <canvas
                        ref={canvasRef}
                        id="canvas"
                        className="App"
                        width={window.innerWidth}
                        height={window.innerHeight}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onTouchStart={(e) => {
                            var touch = e.touches[0];
                            handleMouseDown({ clientX: touch.clientX, clientY: touch.clientY });
                        }}
                        onTouchMove={(e) => {
                            var touch = e.touches[0];
                            handleMouseMove({ clientX: touch.clientX, clientY: touch.clientY });
                        }}
                        onTouchEnd={handleMouseUp}
                    >
                        Canvas
                    </canvas>
                </div>
            </div>
        </div>
        
    );
}

export default Whiteboard;
