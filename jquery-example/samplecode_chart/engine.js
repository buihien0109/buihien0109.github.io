export class LayoutUtil {
    static createGLContainer(
        parent_div_id,
        expand_callback,
        audio_callback
    ) {
        let parent_div = document.getElementById(parent_div_id);
        //buttons at top left
        let button_div = document.createElement("div");
        button_div.setAttribute("id", parent_div_id + "_control_div");
        button_div.style.cssText =
            "display: none; position: absolute; top: 0, left: 0; z-index: 30;";
        // add maximize button
        let expand_button = document.createElement("button");
        expand_button.setAttribute(
            "id",
            parent_div_id + "-max-button"
        );
        expand_button.className = "expand-class";
        expand_button.onclick = function () {
            expand_callback(parent_div_id + "-max-button");
        };
        button_div.appendChild(expand_button);
        // add audio button
        let audio_button = document.createElement("button");
        audio_button.setAttribute(
            "id",
            parent_div_id + "-audio-button"
        );
        audio_button.classList.add("audio");
        audio_button.classList.add("audio-off");
        audio_button.onclick = function () {
            let audio_elements =
                document.getElementsByClassName("audio");
            for (var i = 0; i < audio_elements.length; i++) {
                if (
                    audio_elements.item(i).getAttribute("id") !==
                    this.getAttribute("id")
                ) {
                    audio_elements
                        .item(i)
                        .classList.remove("audio-on");
                    audio_elements.item(i).classList.add("audio-off");
                }
            }
            this.classList.toggle("audio-off");
            this.classList.toggle("audio-on");
            audio_callback(
                parent_div_id,
                this.classList.contains("audio-on")
            );
        };
        button_div.appendChild(audio_button);
        // parent_div.appendChild(button_div);
    }

    static getElementRec(element) {
        let rec = {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
        };

        let computedStyle = getComputedStyle(element);
        rec.width = element.clientWidth;
        rec.width -= parseFloat(computedStyle.paddingLeft);
        rec.width -= parseFloat(computedStyle.paddingRight);
        rec.height = element.clientHeight;
        rec.height -= parseFloat(computedStyle.paddingTop);
        rec.height -= parseFloat(computedStyle.paddingBottom);
        let boundingRect = element.getBoundingClientRect();
        rec.x = boundingRect.left;
        rec.x += parseFloat(computedStyle.paddingLeft);
        rec.x += parseFloat(computedStyle.borderLeft);
        rec.y = boundingRect.top;
        rec.y += parseFloat(computedStyle.paddingTop);
        rec.y += parseFloat(computedStyle.borderTop);

        return rec;
    }

    // make a div draggable
    static enableDrag(div) {
        var isDown = false;
        var offset = [0, 0];
        var mousePosition;

        div.addEventListener(
            "mousedown",
            function (e) {
                isDown = true;
                div.style.cursor = "move";
                offset = [
                    div.offsetLeft - e.clientX,
                    div.offsetTop - e.clientY,
                ];
            },
            true
        );

        document.addEventListener(
            "mouseup",
            function () {
                isDown = false;
            },
            true
        );

        document.addEventListener(
            "mousemove",
            function (event) {
                event.preventDefault();
                if (isDown) {
                    mousePosition = {
                        x: event.clientX,
                        y: event.clientY,
                    };
                    div.style.left =
                        mousePosition.x + offset[0] + "px";
                    div.style.top =
                        mousePosition.y + offset[1] + "px";
                }
            },
            true
        );
    }
}

// general
class Util {
    static hex_2_rgb(hex_val) {
        if (hex_val.length !== 6) {
            throw "Only six-digit hex colors are allowed.";
        }
        var aRgbHex = hex_val.match(/.{1,2}/g);
        var aRgb = [
            parseInt(aRgbHex[0], 16) / 255,
            parseInt(aRgbHex[1], 16) / 255,
            parseInt(aRgbHex[2], 16) / 255,
        ];
        return aRgb;
    }

    static scaleValue(
        value,
        sourceRangeMin,
        sourceRangeMax,
        targetRangeMin,
        targetRangeMax
    ) {
        var targetRange = targetRangeMax - targetRangeMin;
        var sourceRange = sourceRangeMax - sourceRangeMin;
        return (
            ((value - sourceRangeMin) * targetRange) / sourceRange +
            targetRangeMin
        );
    }

    static findClosestPoint(xLoc, width, numPoints) {
        let distance = width / numPoints;
        for (let i = 0; i < numPoints - 1; ++i) {
            const x1 = i * distance;
            const x2 = x1 + distance;
            if (x2 >= xLoc && x1 <= xLoc) {
                const choseLeftPoint = x2 - xLoc > xLoc - x1;
                if (choseLeftPoint) {
                    return i;
                } else {
                    return i + 1;
                }
            }
        }
    }

    static genGrid(width, height, xPoints) {
        let res = [];
        const baseSize = width / xPoints;
        // rows generation
        let startRow = 0;
        let numRows = 0;
        while (startRow <= height) {
            res.push(0, startRow, width, startRow); //x, y
            startRow += baseSize;
            numRows += 1;
        }

        // columns generation
        let startColumn = 0;
        let numCols = 0;
        while (startColumn <= width) {
            res.push(startColumn, 0, startColumn, height);
            startColumn += baseSize;
            numCols += 1;
        }
        return [res, numRows, numCols];
    }

    static createShader(gl, shaderType, shaderSrc) {
        if (
            !(shaderType === gl.VERTEX_SHADER) &&
            !(shaderType === gl.FRAGMENT_SHADER)
        ) {
            console.log("Shader type:", shaderType, " not supported");
            return false;
        }
        var shader = gl.createShader(shaderType);
        gl.shaderSource(shader, shaderSrc);
        gl.compileShader(shader);
        var compileOk = gl.getShaderParameter(
            shader,
            gl.COMPILE_STATUS
        );
        if (!compileOk) {
            console.error("Error in creating shader\n", shaderSrc);
            console.log(gl.getShaderInfoLog(shader));
            return false;
        }
        return shader;
    }

    static createProgram(gl, v_shader_src, f_shader_src) {
        let vShader = Util.createShader(
            gl,
            gl.VERTEX_SHADER,
            v_shader_src
        );
        let fShader = Util.createShader(
            gl,
            gl.FRAGMENT_SHADER,
            f_shader_src
        );
        let program = gl.createProgram();
        gl.attachShader(program, vShader);
        gl.attachShader(program, fShader);
        gl.linkProgram(program);
        let linkOk = gl.getProgramParameter(program, gl.LINK_STATUS);
        if (!linkOk) {
            console.error("Link program:");
            return false;
        }
        return program;
    }
}

class GLWrapper {
    gl; // webgl context
    vBuffer;
    program;

    static v_shader_src = `
        uniform float numPoints; 
        uniform float maxVal;
        uniform float minVal;   
        attribute vec2 point;   
        uniform vec3 rgb;
        varying mediump vec4 f_color;   
            
        void main(void) {
            if (point[1] <= numPoints) {
                float y = 2.0 * (point[0] - minVal) / (maxVal - minVal) - 1.0;
                float x = 2.0 * point[1] / (numPoints-1.0) - 1.0; 
                gl_Position = vec4(x, y, 0.0, 1.0); 
                f_color = vec4(rgb, 0.0);                
            }
            else {
                if (point[1] > numPoints + 2.5)  {
                    float x = point[1] - numPoints - 4.0; 
                    float y = 2.0 * (point[0] - minVal) / (maxVal - minVal) - 1.0;
                    gl_PointSize = 4.2;
                    gl_Position = vec4(x, y, 0.0, 1.0);
                    f_color = vec4(1.0, 1.0, 1.0, 1.);
                }
                else {
                    float x = point[1] - numPoints - 1.1; 
                    gl_Position = vec4(x, point[0], 0.0, 1.0); 
                    f_color = vec4(0.0, 0.0, 0.0, 0.1);
                }
            } 
        }`;

    static f_shader_src = `   
        varying mediump vec4 f_color;

        void main(void) {
            gl_FragColor = f_color;               
        }`;

    constructor(gl, rgb) {
        this.gl = gl;
        // vertex buffers
        this.vBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vBuffer);
        this.program = Util.createProgram(
            gl,
            GLWrapper.v_shader_src,
            GLWrapper.f_shader_src
        );
        if (!this.program) {
            console.log("Error creating program");
            return false;
        }
        this.maxValLoc = gl.getUniformLocation(
            this.program,
            "maxVal"
        );
        this.minValLoc = gl.getUniformLocation(
            this.program,
            "minVal"
        );
        this.numPointsLoc = gl.getUniformLocation(
            this.program,
            "numPoints"
        );
        this.pointLoc = gl.getAttribLocation(this.program, "point");
        this.color = this.gl.getUniformLocation(this.program, "rgb");
        gl.useProgram(this.program);
        gl.uniform3fv(this.color, rgb);
        gl.vertexAttribPointer(
            this.pointLoc,
            2,
            gl.FLOAT,
            false,
            0,
            0
        );
        gl.enableVertexAttribArray(this.pointLoc);
        gl.viewport(
            0,
            0,
            gl.drawingBufferWidth,
            gl.drawingBufferHeight
        );
        gl.clear(gl.COLOR_BUFFER_BIT);
    }

    setUniform(uniform, val) {
        this.gl.uniform1f(uniform, val);
    }

    draw(data, scanBarPos, scanBarLength, cursorX, cursorY) {
        let lengthNorm = scanBarLength / this.gl.drawingBufferWidth;
        let rectData = [
            -1,
            scanBarPos,
            1,
            scanBarPos,
            1,
            scanBarPos + lengthNorm,
            -1,
            scanBarPos,
            1,
            scanBarPos + lengthNorm,
            -1,
            scanBarPos + lengthNorm,
        ];
        let indexArr = Array.from(Array(data.length).keys());
        let drawingData = data.reduce(function (arr, v, i) {
            return arr.concat(v, indexArr[i]);
        }, []);
        drawingData = drawingData
            .concat(rectData)
            .concat([cursorY, cursorX]);
        this.gl.bufferData(
            this.gl.ARRAY_BUFFER,
            new Float32Array(drawingData),
            this.gl.STATIC_DRAW
        );
        this.gl.drawArrays(this.gl.LINE_STRIP, 0, data.length);
        this.gl.drawArrays(this.gl.TRIANGLES, data.length, 6);
        this.gl.drawArrays(this.gl.POINT, data.length + 6, 1);
    }
}

export class IndicatorRenderer {
    gl;
    context;
    scanBarPos = 0;
    // for playing sound
    soundInterval = 1000;
    soundPlayer;
    soundHandler;
    //for zoom functionality
    mousedown = false;
    canvasX;
    canvasY;
    mouseX = 0;
    mouseY = 0;
    startX = 0;
    startY = 0;
    windowWidth; // for calculating point index
    zoomFn;
    //states
    START = false;
    STOP = false;
    prevTimeFr; // previous time frame
    driftTimeDraw;
    startTimeDraw;
    timeoutId;

    constructor(parentDiv, visualParam) {
        // let parentDiv = document.getElementById(divId);
        // if (!parentDiv) {
        //   throw "container not found!";
        // }
        const divId = parentDiv.getAttribute("id");
        this.id = divId;
        this.context = visualParam;
        if (visualParam.soundInterval)
            this.soundInterval = visualParam.soundInterval;
        if (visualParam.soundPlayer)
            this.soundPlayer = visualParam.soundPlayer;
        // set value range
        if (!visualParam.maxVal) {
            this.context.maxVal = 300;
            this.context.minVal = 10;
        }
        if (!visualParam.INTERVAL) this.context.INTERVAL = 20;
        if (!visualParam.STEP) this.context.STEP = 8;
        var gl_canvas = document.createElement("canvas");
        gl_canvas.setAttribute("id", divId + "_canvas");
        gl_canvas.width = parentDiv.offsetWidth;
        gl_canvas.height = parentDiv.offsetHeight;
        gl_canvas.style.zIndex = "2";
        this.canvasX =
            gl_canvas.getBoundingClientRect().left +
            LayoutUtil.getElementRec(parentDiv).x;
        this.canvasY =
            gl_canvas.getBoundingClientRect().top +
            LayoutUtil.getElementRec(parentDiv).y;
        this.windowWidth = parentDiv.offsetWidth;
        parentDiv.appendChild(gl_canvas);
        // text canvas
        var text_canvas = document.createElement("canvas");
        text_canvas.setAttribute("id", divId + "text_canvas");
        text_canvas.width = parentDiv.offsetWidth;
        text_canvas.height = parentDiv.offsetHeight;
        text_canvas.style.cssText =
            "position: absolute; top: 0; left: 0; z-index: 10; background-color: transparent;";
        parentDiv.appendChild(text_canvas);
        // add events handler
        let ctx = text_canvas.getContext("2d");
        text_canvas.addEventListener("mousedown", (e) => {
            e.preventDefault();
            this.startX = parseInt(e.clientX - this.canvasX);
            this.startY = parseInt(e.clientY - this.canvasY);
            this.mousedown = true;
        });
        text_canvas.addEventListener("mouseup", (e) => {
            e.preventDefault();
            this.mouseX = parseInt(e.clientX - this.canvasX);
            this.mouseY = parseInt(e.clientY - this.canvasY);
            if (this.mousedown && this.mouseX - this.startX > 10) {
                ctx.clearRect(
                    0,
                    0,
                    text_canvas.width,
                    text_canvas.height
                );
                let startIdx = Util.findClosestPoint(
                    this.startX,
                    this.windowWidth,
                    this.context.WINDOW_POINTS
                );
                let endIdx = Util.findClosestPoint(
                    this.mouseX,
                    this.windowWidth,
                    this.context.WINDOW_POINTS
                );
                let zoomData = this.drawingData.slice(
                    startIdx,
                    endIdx
                );
                this.zoomFn(
                    zoomData,
                    this.context.WINDOW_POINTS,
                    this.context.minVal,
                    this.context.maxVal,
                    startIdx,
                    endIdx
                );
                this.mousedown = false;
            }
            //this.resetMouseEvent();
        });
        text_canvas.addEventListener("mousemove", (e) => {
            e.preventDefault();
            this.mouseX = parseInt(e.clientX - this.canvasX);
            this.mouseY = parseInt(e.clientY - this.canvasY);
            var text_canvas = document.getElementById(
                divId + "text_canvas"
            );
            if (this.mousedown) {
                ctx.clearRect(
                    0,
                    0,
                    text_canvas.width,
                    text_canvas.height
                ); //clear canvas
                ctx.beginPath();
                ctx.setLineDash([5, 15]);
                ctx.rect(
                    this.startX,
                    this.startY,
                    this.mouseX - this.startX,
                    this.mouseY - this.startY
                );
                ctx.strokeStyle = "white";
                ctx.lineWidth = 2;
                ctx.stroke();
            }
        });
        // let button_div = document.getElementById(divId + "_control_div");
        // parentDiv.addEventListener("mouseover", (e) => {
        //   e.preventDefault();
        //   button_div.style.display = "block";
        // });
        // parentDiv.addEventListener("mouseout", (e) => {
        //   e.preventDefault();
        //   button_div.style.display = "none";
        // });

        //gl context
        this.gl = new GLWrapper(
            gl_canvas.getContext("webgl", {
                alpha: false,
                antialias: false,
            }),
            Util.hex_2_rgb(this.context.color)
        );
    }

    registerZoomFn(zoomFn) {
        this.zoomFn = zoomFn;
    }

    playAudio() {
        var self = this;
        if (this.soundPlayer) {
            this.soundHandler = setInterval(function () {
                self.soundPlayer.play();
            }, this.soundInterval);
        }
    }

    stopAudio() {
        if (this.soundHandler) clearInterval(this.soundHandler);
    }

    init() {
        if (!this.START) {
            this.drawingData = [];
            this.gl.setUniform(
                this.gl.maxValLoc,
                this.context.maxVal
            );
            this.gl.setUniform(
                this.gl.minValLoc,
                this.context.minVal
            );
            this.gl.setUniform(
                this.gl.numPointsLoc,
                this.context.WINDOW_POINTS
            );
            this.START = true;
        }
    }

    stop() {
        this.STOP = true;
        this.START = false;
        this.stopAudio();
    }

    render(buffer) {
        if (!this.START) this.init();
        this.draw(buffer);
    }

    draw(buffer) {
        var self = this;

        let points = buffer.splice(0, this.context.STEP);
        if (points.length > 0) {
            if (
                self.drawingData.length <=
                this.context.WINDOW_POINTS - this.context.STEP
            ) {
                self.drawingData = self.drawingData.concat(points);
                this.scanBarPos =
                    (this.scanBarPos + points.length) %
                    this.context.WINDOW_POINTS;
            } else {
                for (let p of points) {
                    self.drawingData[this.scanBarPos] = p;
                    this.scanBarPos =
                        (this.scanBarPos + 1) %
                        this.context.WINDOW_POINTS;
                }
            }
            let barPos =
                this.scanBarPos > this.context.STEP
                    ? this.scanBarPos - this.context.STEP
                    : this.scanBarPos;
            let posNorm = Util.scaleValue(
                barPos,
                0,
                this.context.WINDOW_POINTS,
                -1,
                1
            );
            this.gl.draw(
                self.drawingData,
                posNorm + this.context.WINDOW_POINTS + 1.1,
                this.context.scanBarLength,
                posNorm + this.context.WINDOW_POINTS + 4.0,
                points[points.length - 1]
            );
        }
        if (!this.STOP || buffer.length > 0) {
            // self.timeoutId = setTimeout(function () {
            //   const current = Date.now();
            //   if (!self.startTimeDraw) self.startTimeDraw = current;
            //   const elapsed = current - self.startTimeDraw;
            //   self.driftTimeDraw = elapsed % self.context.INTERVAL;
            //   self.draw(buffer);
            // }, self.context.INTERVAL - self.driftTimeDraw);
            self.timeoutId = requestAnimationFrame((timestamp) => {
                if (!self.prevTimeFr) self.prevTimeFr = timestamp;
                const elapsed = timestamp - self.prevTimeFr;
                const fpsInterval = Math.floor(
                    self.context.duration / self.context.WINDOW_POINTS
                );
                if (elapsed >= fpsInterval) {
                    self.prevTimeFr =
                        timestamp - (elapsed % fpsInterval);
                    self.context.STEP = Math.floor(
                        (elapsed *
                            (buffer.length >=
                            self.context.WINDOW_POINTS
                                ? buffer.length
                                : self.context.WINDOW_POINTS)) /
                            self.context.duration
                    );
                } else {
                    self.context.STEP = 0;
                }
                self.draw(buffer);
            });
        } else {
            if (this.STOP) {
                console.log("Finished drawing this buffer:", this.id);
            }
            cancelAnimationFrame(self.timeoutId);
        }
    }
}

//Sound
export class BeepWrapper {
    audio;

    constructor() {
        this.audio = new Audio(
            "data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU="
        );
        this.audio.muted = true;
    }

    play() {
        return this.audio.play();
    }

    resetAudio() {
        this.audio.pause();
        this.audio.currentTime = 0;
        this.audio.muted = false;
        this.audio.volume = 0.5;
    }
}

// for handling zoom
export class ZoomHandler {
    data;
    numPoints;
    startIdx;
    endIdx;
    gl;
    width;
    height;
    vBuffer;
    minVal;
    maxVal;
    headerHeight = 20;
    detailHeight = 80;
    yAxisWidth = 55;

    vGridShaderSrc = `            
        attribute vec2 gridPoint;             
        uniform vec2 resolution;
        varying mediump vec4 f_color; 
        uniform vec4 rgb;

        void main(void) {               
            float x = 2.0 * gridPoint[0] / resolution[0] - 1.0; 
            float y = 2.0 * gridPoint[1] / resolution[1] - 1.0;
            gl_Position = vec4(x, y, 0.0, 1.0);
            gl_PointSize = 10.0;
            f_color = rgb;
        }`;

    fGridShaderSrc = `  
        varying mediump vec4 f_color; 
        void main(void) {           
            gl_FragColor = f_color;      
        }`;

    v_shader_src = `
        uniform float numPoints; 
        uniform float maxVal;
        uniform float minVal;   
        attribute vec2 point;   
          
        void main(void) {           
            float y = 2.0 * (point[0] - minVal) / (maxVal - minVal) - 1.0;
            float x = 2.0 * point[1] / (numPoints-1.0) - 1.0; 
            gl_Position = vec4(x, y, 0.0, 1.0);  
            gl_PointSize = 4.0;          
        }`;

    f_shader_src = `  
        void main(void) {             
            gl_FragColor = vec4(0.0, 0.0,0.0,1.0);               
        }`;

    // for drawing dashed lines
    vsDashedSrc = `
        precision mediump float;

        attribute vec2 a_position;
        attribute vec2 a_posStart;
        attribute float a_lineSofar;

        uniform float maxVal;
        uniform float minVal;  

        uniform vec2 u_resolution;

        const vec4 dashArray = vec4(10.0, 10.0, 10.0, 10.0);

        varying vec2 v_start;
        varying vec4 v_gaps;
        varying float v_gapLen;
        varying float v_lineSofar;

        void main() {             
            float x = 2.0 * a_position[0] / u_resolution[0] - 1.0; 
            float y = 2.0 * (a_position[1] - minVal) / (maxVal - minVal) - 1.0; 
            gl_Position = vec4(x,y, 0, 1);
            v_start = a_posStart;
            v_lineSofar = a_lineSofar;
            v_gapLen = dashArray.x+dashArray.y+dashArray.z+dashArray.w;
            v_gaps = vec4(dashArray.x+1.0,dashArray.x+dashArray.y,dashArray.x+dashArray.y+dashArray.z+1.0,v_gapLen);
        }
    `;

    fsDashedSrc = `   
        precision mediump float;

        uniform vec4 u_color;

        varying vec2 v_start;
        varying vec4 v_gaps;
        varying float v_gapLen;
        varying float v_lineSofar;

        float line( in vec2 a, in vec2 b, in vec2 p )
        {
            vec2 pa = p - a;
            vec2 ba = b - a;
            float h = clamp( dot(pa,ba)/dot(ba,ba), 0.0, 1.0 );
            return length( pa - ba*h );
        }

        void main(){
            vec2 uv = gl_FragCoord.xy;
            float lineSofar = v_lineSofar+length(uv-v_start);
            float dist = mod(lineSofar,v_gapLen);
            if((dist>=v_gaps.x&&dist<=v_gaps.y)||(dist>=v_gaps.z&&dist<=v_gaps.w)){
                discard;
            }
            gl_FragColor = u_color;
        }
    `;

    constructor(parent, data) {
        this.data = data;
        // let parent = document.getElementById(divId);
        // if (!parent) {
        //   throw "container not found!";
        // }
        //y axis canvas
        const canvasContainer = document.createElement("div");
        canvasContainer.setAttribute("id", "zoomCanvasContainer");
        canvasContainer.classList.add("flex");

        let ycanvas = document.createElement("canvas");
        ycanvas.setAttribute("id", "zoom-canvas-yaxis");
        ycanvas.width = this.yAxisWidth;
        ycanvas.height = parent.offsetHeight;
        ycanvas.style.float = "left";
        // ycanvas.style.backgroundColor = "lightgray";
        ycanvas.classList.add("bg-neutral-100/90");

        //main canvas
        this.width = parent.offsetWidth - this.yAxisWidth;
        this.height = parent.offsetHeight - this.detailHeight;
        let canvas = document.createElement("canvas");
        canvas.setAttribute("id", "zoom-canvas");
        canvas.width = this.width - this.yAxisWidth;
        canvas.height = this.height - this.headerHeight;
        canvasContainer.append(ycanvas, canvas);
        parent.appendChild(canvasContainer);
        // append
        this.gl = canvas.getContext("webgl");
        if (this.gl === null) {
            throw "Cannot initialize WebGL context";
        }
        this.vBuffer = this.gl.createBuffer();
        // detail div
        // let zoom_detail = document.createElement("div");
        // zoom_detail.setAttribute("id", "zoom-detail");
        // zoom_detail.style.width = this.width + this.yAxisWidth;
        // zoom_detail.style.height = this.detailHeight;
        // // zoom_detail.style.backgroundColor = "lightgray";
        // zoom_detail.innerHTML = "<h3>Zoom details</h3>";
        // parent.appendChild(zoom_detail);
    }

    drawDashedLines() {
        let program = Util.createProgram(
            this.gl,
            this.vsDashedSrc,
            this.fsDashedSrc
        );
        if (!program) {
            console.log("Dashed program not available");
            return;
        }

        let yPos = [this.minVal, this.maxVal];
        let color = [
            [1, 1, 0, 1],
            [0, 0, 1, 1.0],
        ];

        const a_position = this.gl.getAttribLocation(
            program,
            "a_position"
        );
        const a_posStart = this.gl.getAttribLocation(
            program,
            "a_posStart"
        );
        const a_lineSofar = this.gl.getAttribLocation(
            program,
            "a_lineSofar"
        );
        const u_color = this.gl.getUniformLocation(
            program,
            "u_color"
        );
        const u_resolution = this.gl.getUniformLocation(
            program,
            "u_resolution"
        );
        const maxValLoc = this.gl.getUniformLocation(
            program,
            "maxVal"
        );
        const minValLoc = this.gl.getUniformLocation(
            program,
            "minVal"
        );
        this.gl.useProgram(program);
        this.gl.uniform2fv(u_resolution, [this.width, this.height]);
        this.gl.enableVertexAttribArray(a_position);
        this.gl.enableVertexAttribArray(a_lineSofar);
        this.gl.enableVertexAttribArray(a_posStart);

        this.gl.uniform1f(maxValLoc, this.maxVal + 50);
        this.gl.uniform1f(minValLoc, this.minVal - 50);

        for (let i = 0; i < yPos.length; i++) {
            const positions = [];
            let lineSoFar = 0;
            positions.push(0, yPos[i], lineSoFar, 0, yPos[i]);
            lineSoFar += Math.sqrt(
                this.gl.canvas.width * this.gl.canvas.width,
                0
            );
            positions.push(
                this.gl.canvas.width,
                yPos[i],
                lineSoFar,
                0,
                yPos[i]
            );
            this.gl.uniform4fv(u_color, new Float32Array(color[i]));
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vBuffer);
            this.gl.bufferData(
                this.gl.ARRAY_BUFFER,
                new Float32Array(positions),
                this.gl.DYNAMIC_DRAW
            );
            this.gl.vertexAttribPointer(
                a_position,
                2,
                this.gl.FLOAT,
                false,
                Float32Array.BYTES_PER_ELEMENT * 5,
                0
            );
            this.gl.vertexAttribPointer(
                a_lineSofar,
                1,
                this.gl.FLOAT,
                false,
                Float32Array.BYTES_PER_ELEMENT * 5,
                Float32Array.BYTES_PER_ELEMENT * 2
            );
            this.gl.vertexAttribPointer(
                a_posStart,
                2,
                this.gl.FLOAT,
                false,
                Float32Array.BYTES_PER_ELEMENT * 5,
                Float32Array.BYTES_PER_ELEMENT * 3
            );
            this.gl.drawArrays(
                this.gl.LINES,
                0,
                positions.length / 5
            );
        }

        //yAxis update
        let maxPosRel = Util.scaleValue(
            this.maxVal,
            this.minVal - 50,
            this.maxVal + 50,
            0,
            this.height - this.headerHeight
        );
        let minPosRel = Util.scaleValue(
            this.minVal,
            this.minVal - 50,
            this.maxVal + 50,
            0,
            this.height - this.headerHeight
        );
        var ctx = document
            .getElementById("zoom-canvas-yaxis")
            .getContext("2d");
        ctx.font = "20px Arial";
        ctx.fillStyle = "#1a475f";
        const upperTextPosY =
            Math.round(this.height - maxPosRel) + this.headerHeight;
        const lowerTextPosY =
            Math.round(this.height - minPosRel) + this.headerHeight;
        ctx.fillText("Max:", 5, upperTextPosY - 24);
        ctx.fillText(`${this.maxVal}`, 5, upperTextPosY);
        ctx.fillStyle = "#825711";
        if (upperTextPosY === lowerTextPosY) {
            ctx.fillText("Min:", 5, lowerTextPosY + 24);
            ctx.fillText(`${this.minVal}`, 5, lowerTextPosY + 48);
        } else {
            ctx.fillText("Min:", 5, lowerTextPosY - 24);
            ctx.fillText(`${this.minVal}`, 5, lowerTextPosY);
        }
    }

    drawGrids() {
        // draw grid
        let gridPoints = Util.genGrid(
            this.width,
            this.height - this.headerHeight,
            60
        )[0];
        let anotherGridPoints = Util.genGrid(
            this.width,
            this.height - this.headerHeight,
            12
        )[0];
        var program = Util.createProgram(
            this.gl,
            this.vGridShaderSrc,
            this.fGridShaderSrc
        );
        if (!program) {
            console.error("Link grid program:");
            return;
        }
        this.gl.useProgram(program);
        // set uniform
        var resolutionLoc = this.gl.getUniformLocation(
            program,
            "resolution"
        );
        var rgbLoc = this.gl.getUniformLocation(program, "rgb");
        this.gl.uniform2f(
            resolutionLoc,
            this.width,
            this.height - this.headerHeight
        );
        this.gl.uniform4fv(rgbLoc, [0.8, 0.2, 0.5, 0.6]);

        //attribute
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vBuffer);
        this.gl.bufferData(
            this.gl.ARRAY_BUFFER,
            new Float32Array(gridPoints),
            this.gl.STATIC_DRAW
        );
        var gridPointLoc = this.gl.getAttribLocation(
            program,
            "gridPoint"
        );
        this.gl.vertexAttribPointer(
            gridPointLoc,
            2,
            this.gl.FLOAT,
            false,
            0,
            0
        );
        this.gl.enableVertexAttribArray(gridPointLoc);
        this.gl.drawArrays(this.gl.LINES, 0, gridPoints.length / 2);
        // this.gl.bindBuffer(this.gl.ARRAY_BUFFER, vBuffer);
        this.gl.uniform4fv(rgbLoc, [1.0, 0.2, 0.4, 0.9]);
        this.gl.bufferData(
            this.gl.ARRAY_BUFFER,
            new Float32Array(anotherGridPoints),
            this.gl.STATIC_DRAW
        );
        this.gl.drawArrays(
            this.gl.LINES,
            0,
            anotherGridPoints.length / 2
        );
    }

    drawLine() {
        const program = Util.createProgram(
            this.gl,
            this.v_shader_src,
            this.f_shader_src
        );
        if (!program) {
            console.error("Link chart program:");
            return;
        }
        var maxValLoc = this.gl.getUniformLocation(program, "maxVal");
        var minValLoc = this.gl.getUniformLocation(program, "minVal");
        var numPointsLoc = this.gl.getUniformLocation(
            program,
            "numPoints"
        );
        var pointLoc = this.gl.getAttribLocation(program, "point");
        this.gl.useProgram(program);
        this.gl.uniform1f(numPointsLoc, this.data.length);
        this.gl.uniform1f(maxValLoc, this.maxVal + 50);
        this.gl.uniform1f(minValLoc, this.minVal - 50);
        this.gl.vertexAttribPointer(
            pointLoc,
            2,
            this.gl.FLOAT,
            false,
            0,
            0
        );
        this.gl.enableVertexAttribArray(pointLoc);
        let indexArr = [];
        for (var i = this.startIdx; i < this.endIdx; i++) {
            indexArr.push(i - this.startIdx);
        }
        let drawingData = this.data.reduce(function (arr, v, i) {
            return arr.concat(v, indexArr[i]);
        }, []);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vBuffer);
        this.gl.bufferData(
            this.gl.ARRAY_BUFFER,
            new Float32Array(drawingData),
            this.gl.STATIC_DRAW
        );
        this.gl.drawArrays(this.gl.LINE_STRIP, 0, this.data.length);
    }

    render() {
        this.gl.clearColor(211 / 255, 211 / 255, 211 / 255, 1.0);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        this.maxVal = this.data.reduce(
            (a, b) => Math.max(a, b),
            -Infinity
        );
        this.minVal = this.data.reduce(
            (a, b) => Math.min(a, b),
            Infinity
        );
        this.drawGrids();
        this.drawLine();
        this.drawDashedLines();
    }

    cleanup() {
        console.log("Cleanup resources");
        this.gl.canvas.width = 1;
        this.gl.canvas.height = 1;
        // const modelContent = document.getElementById("model-content");
        // if (!modelContent) {
        //     console.log("can not find element model-content");
        //     return;
        // }

        // modelContent.removeChild(
        //     document.getElementById("zoom-canvas")
        // );
        // modelContent.removeChild(
        //     document.getElementById("zoom-detail")
        // );
        // modelContent.removeChild(
        //     document.getElementById("zoom-canvas-yaxis")
        // );
        // modelContent.removeChild(
        //     document.getElementById("zoomCanvasContainer")
        // );
    }
}
