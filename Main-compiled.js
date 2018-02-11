//初始化整个游戏的精灵，作为整个游戏的入口
import { ResourceLoader } from "./js/base/ResourceLoader.js";
export class Main {
    constructor() {
        /*   this.canvas=document.getElementById('game_canvas');
           this.ctx=this.canvas.getContext('2d');*/
        var canvas = wx.createCanvas();
        var context = canvas.getContext('2d');
        const loader = ResourceLoader.create();
        loader.onLoad(map => this.onResourceFirstLoaded(map));
    }
    onResourceFirstLoaded(map) {
        "use strict";

        console.log(map);
    }

}

//# sourceMappingURL=Main-compiled.js.map