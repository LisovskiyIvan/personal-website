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
    private speed: number = 1;

    constructor(app: Application) {
        super(playerInfo.idle.animations.idle as unknown as AnimatedSpriteFrames);
        this.app = app;
        this.loadInit(playerInfo.idle.meta.image).then((player) => {
            this.setupPlayer(player);
        })
        this.loadSprites();
        
        this.setupControls();
    }

    async loadInit(path: string) {
        await Assets.load(path);
        const spritesheet = new Spritesheet(
            Texture.from(path),
            playerInfo.idle
        );
        await spritesheet.parse();
        const player = new AnimatedSprite(spritesheet.animations.idle);
        return player;
    }

    async load(path: string, data: any, name: string) {
        await Assets.load(path);
        const spritesheet = new Spritesheet(
            Texture.from(path),
            data
        );
        await spritesheet.parse();
        const player = new AnimatedSprite(spritesheet.animations[name]);
        return player;


    }



    loadSprites() {
        for (const key in playerInfo) {
            if (Object.prototype.hasOwnProperty.call(playerInfo, key)) {
                const info = playerInfo[key as keyof typeof playerInfo];
                if (info && 'meta' in info && 'image' in info.meta) {
                    this.load(info.meta.image, info, key).then((player) => {

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
        this.checkIsMoving();

        if (this.isMoving && this.player.textures !== this.sprites['run'].textures) {
            this.run();
        } else if (!this.isMoving && this.player.textures !== this.sprites['idle'].textures) {
            this.idle();
        }

        
        if (this.keys['ArrowUp'] || this.keys['w'] || this.keys['ц']) this.player.y -= this.speed;
        if (this.keys['ArrowDown'] || this.keys['s'] || this.keys['ы']) this.player.y += this.speed;

        if (this.keys['ArrowLeft'] || this.keys['a'] || this.keys['ф']) {
            this.player.x -= this.speed;
            this.direction = 'left';
        };
        if (this.keys['ArrowRight'] || this.keys['d'] || this.keys['в']) {
            this.player.x += this.speed;
            this.direction = 'right';
        };

        if (this.direction === 'left') {
            this.player.scale.x = -2.5;
        } else if (this.direction === 'right') {
            this.player.scale.x = 2.5;
        }


 
      }

    
    private checkIsMoving() {
        if (this.keys['ArrowUp'] || this.keys['w'] || this.keys['ц'] || this.keys['ArrowDown'] || this.keys['s'] || this.keys['ы'] || this.keys['ArrowLeft'] || this.keys['a'] || this.keys['ф'] || this.keys['ArrowRight'] || this.keys['d'] || this.keys['в']) {
            this.isMoving = true;
        } else {
            this.isMoving = false;
        }
    }

    private run() {
        if (this.player && this.sprites['run']) {
            this.player.textures = this.sprites['run'].textures;
            this.player.animationSpeed = 0.2;
            this.player.play();
        }
    }

    private idle() {
        if (this.player && this.sprites['idle']) {
            this.player.textures = this.sprites['idle'].textures;
            this.player.animationSpeed = 0.2;
            this.player.play();
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