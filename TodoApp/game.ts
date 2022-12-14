import {GameImpl} from "../lib/game.js";
import {WorldImpl} from "../lib/world.js";
import {sys_ui} from "./systems/sys_ui.js";

export class Game extends GameImpl {
    World = new WorldImpl();

    Todos: Array<string> = [];
    Completed: Array<string> = [];

    override FrameUpdate(delta: number) {
        sys_ui(this, delta);
    }
}
