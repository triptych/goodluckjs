/**
 * # AudioSource
 *
 * The `AudioSource` component is used to make entities play back audio. The
 * sound data is defined by the [`AudioClip` interface](lib_audio.html).
 */

import {AudioClip} from "../../lib/audio.js";
import {Entity} from "../../lib/world.js";
import {Game} from "../game.js";
import {Has} from "../world.js";

export interface AudioSource {
    /** The panner for 3D sound. */
    Panner?: PannerNode;
    /** The next clip to play. */
    Trigger?: AudioClip;
    /** The clip which was triggered most recently. */
    Current?: AudioClip;
    /** The clip to play by default, in a loop. */
    Idle?: AudioClip;
    /** Elapsed time since the last clip change. */
    Time: number;
}

/**
 * Add `AudioSource` to an entity.
 *
 * @param spatial Does the source produce 3D sound?
 * @param idle The name of the clip to play by default, in a loop.
 */
export function audio_source(spatial: boolean, idle?: AudioClip) {
    return (game: Game, entity: Entity) => {
        let panner = spatial ? game.Audio.createPanner() : undefined;

        game.World.Signature[entity] |= Has.AudioSource;
        game.World.AudioSource[entity] = {
            Panner: panner,
            Idle: idle,
            Time: 0,
        };
    };
}
