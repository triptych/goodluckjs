import {WorldImpl} from "../lib/world.js";
import {Camera} from "./components/com_camera.js";
import {Children} from "./components/com_children.js";
import {Light} from "./components/com_light.js";
import {Render} from "./components/com_render_instanced.js";
import {Transform} from "./components/com_transform.js";

const enum Component {
    Camera,
    Children,
    Dirty,
    Light,
    Render,
    Transform,
}

export const enum Has {
    None = 0,
    Camera = 1 << Component.Camera,
    Children = 1 << Component.Children,
    Dirty = 1 << Component.Dirty,
    Light = 1 << Component.Light,
    Render = 1 << Component.Render,
    Transform = 1 << Component.Transform,
}

export class World extends WorldImpl {
    Camera: Array<Camera> = [];
    Children: Array<Children> = [];
    Light: Array<Light> = [];
    Render: Array<Render> = [];
    Transform: Array<Transform> = [];
}
