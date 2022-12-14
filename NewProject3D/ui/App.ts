import {html} from "../../lib/html.js";
import {Game} from "../game.js";
import {Fullscreen} from "./Fullscreen.js";
import {Score} from "./Score.js";

export function App(game: Game) {
    return html`<div>${Fullscreen()} ${Score(game)}</div>`;
}
