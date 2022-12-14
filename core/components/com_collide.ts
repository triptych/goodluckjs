/**
 * # Collide
 *
 * The `Collide` component allows detecting AABB collisions between entities.
 *
 * When used together with [`RigidBody`](com_rigid_body.html), collisions are
 * processed by [`sys_physics_resolve`](sys_physics_resolve.html) to respond to
 * the physics simulation.
 *
 * When used together with [`Trigger`](com_trigger.html), collisions can trigger
 * arbitrary logic through `Actions`.
 */

import {AABB} from "../../lib/aabb.js";
import {Vec3} from "../../lib/math.js";
import {Entity} from "../../lib/world.js";
import {Game, Layer} from "../game.js";
import {Has} from "../world.js";

export interface Collide extends AABB {
    EntityId: Entity;
    New: boolean;
    Dynamic: boolean;
    Layers: Layer;
    Mask: Layer;
    Collisions: Array<Collision>;
}

/**
 * Add the Collide component.
 *
 * @param dynamic Dynamic colliders collider with all colliders. Static
 * colliders collide only with dynamic colliders.
 * @param layers Bit field with layers this collider is on.
 * @param mask Bit mask with layers visible to this collider.
 * @param size Size of the collider relative to the entity's transform.
 */
export function collide(dynamic: boolean, layers: Layer, mask: Layer, size: Vec3 = [1, 1, 1]) {
    return (game: Game, entity: Entity) => {
        game.World.Signature[entity] |= Has.Collide;
        game.World.Collide[entity] = {
            EntityId: entity,
            New: true,
            Dynamic: dynamic,
            Layers: layers,
            Mask: mask,
            Size: size,
            Min: [0, 0, 0],
            Max: [0, 0, 0],
            Center: [0, 0, 0],
            Half: [0, 0, 0],
            Collisions: [],
        };
    };
}

export interface Collision {
    /** The other entity in the collision. */
    Other: Entity;
    /** The direction and magnitude of the hit into this collider. */
    Hit: Vec3;
}
