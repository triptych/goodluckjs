/**
 * # Move
 *
 * The `Move` component allows the entity to move.
 */

import {Quat, Vec3} from "../../lib/math.js";
import {Entity} from "../../lib/world.js";
import {Game} from "../game.js";
import {Has} from "../world.js";

export interface Move {
    /** Movement speed, in units per second. */
    MoveSpeed: number;
    /** Rotation speed, in radians per second. */
    RotationSpeed: number;
    /** Movement in self space, normalized. */
    Direction: Vec3;
    /** Rotation applied in the local space (pre-multiplied). */
    LocalRotation: Quat;
    /** Rotation applied in the self space (post-multiplied). */
    SelfRotation: Quat;
}

/**
 * Add `Move` to an entity.
 *
 * @param move_speed - Movement speed in units per second. asdasdasd
 * @param rotation_speed - Rotation speed, in radians per second.
 */
export function move(move_speed: number, rotation_speed: number) {
    return (game: Game, entity: Entity) => {
        game.World.Signature[entity] |= Has.Move;
        game.World.Move[entity] = {
            MoveSpeed: move_speed,
            RotationSpeed: rotation_speed,
            Direction: [0, 0, 0],
            LocalRotation: [0, 0, 0, 1],
            SelfRotation: [0, 0, 0, 1],
        };
    };
}
