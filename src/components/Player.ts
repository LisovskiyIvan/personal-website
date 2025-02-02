import { Texture, type AnimatedSpriteFrames } from "pixi.js";
import { Spritesheet } from "pixi.js";
import { Assets } from "pixi.js";
import { AnimatedSprite, type Application } from "pixi.js";
import playerInfo from "../assets/player.json";

export class Player extends AnimatedSprite {
    private app: Application;
    private player: AnimatedSprite | null = null;
    private keys: { [key: string]: boolean } = {};
    private isMoving: boolean = false;
    private direction: 'left' | 'right' | 'up' | 'down' = 'left';
    private sprites: { [key: string]: AnimatedSprite } = {};
    private currentSprite: AnimatedSprite | null = null;

    constructor(app: Application) {
        super(playerInfo.idle.animations.playerIdle as unknown as AnimatedSpriteFrames);
        this.app = app;
        this.load(playerInfo.idle.meta.image).then((player) => {
            this.setupPlayer(player);
        })
        this.loadSprites();
        
        this.setupControls();
    }

    async load(path: string) {
        await Assets.load(path);
        const spritesheet = new Spritesheet(
            Texture.from(path),
            playerInfo.idle
        );
        await spritesheet.parse();
        const player = new AnimatedSprite(spritesheet.animations.playerIdle);
        return player;
    }

    loadSprites() {
        for (const key in playerInfo) {
            if (Object.prototype.hasOwnProperty.call(playerInfo, key)) {
                const info = playerInfo[key as keyof typeof playerInfo];
                if (info && 'meta' in info && 'image' in info.meta) {
                    this.load(info.meta.image).then((player) => {
                        this.sprites[key] = player;
                    });
                }
            }
        }
    }

    private setupPlayer(player: AnimatedSprite) {
        player.animationSpeed = 0.2;
        player.anchor.set(0.5);
        player.position.set(this.app.screen.width / 2, this.app.screen.height / 2);
        player.scale.set(2.5);
        player.play();
        this.app.stage.addChild(player);
        this.player = player;
    }

    getPlayer(): AnimatedSprite {
        if (!this.player) {
            throw new Error("Player not loaded");
        }
        return this.player;
    }

    updatePlayer() {
        if (!this.player) return;
        
        if (this.keys['ArrowUp'] || this.keys['w'] || this.keys['ц']) this.player.y -= 1;
        if (this.keys['ArrowDown'] || this.keys['s'] || this.keys['ы']) this.player.y += 1;
        if (this.keys['ArrowLeft'] || this.keys['a'] || this.keys['ф']) {
            this.player.x -= 1
            this.direction = 'left';
        };
        if (this.keys['ArrowRight'] || this.keys['d'] || this.keys['в']) {
            this.player.x += 1;
            this.direction = 'right';
        };

        if (this.direction === 'left') {
            this.player.scale.x = -2.5;
        } else if (this.direction === 'right') {
            this.player.scale.x = 2.5;
        }
      }

      
  setupControls() {
    const handleKey = (e: KeyboardEvent, value: boolean) => {
      this.keys[e.key] = value;
    };

    window.addEventListener('keydown', e => handleKey(e, true));
    window.addEventListener('keyup', e => handleKey(e, false));
  }



}