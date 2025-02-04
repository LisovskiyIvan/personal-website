import { Texture, type AnimatedSpriteFrames, Spritesheet, Assets, AnimatedSprite, type Application } from "pixi.js";
import playerInfo from "../assets/player.json";

export class Player extends AnimatedSprite {
    private app: Application;
    private player: AnimatedSprite | null = null;
    private keys: Map<string, boolean> = new Map();
    private isMoving: boolean = false;
    private direction: 'left' | 'right' | 'up' | 'down' = 'left';
    private sprites: Map<string, AnimatedSprite> = new Map();
    private readonly playerSpeed: number = 1;
    private readonly playerScale: number = 2.5;
    private readonly playerAnimationSpeed: number = 0.2;
    private isAttacking: boolean = false;
    private isDead: boolean = false;

    constructor(app: Application) {
        super(playerInfo.idle.animations.idle as unknown as AnimatedSpriteFrames);
        this.app = app;
        this.initialize();
    }

    private async initialize(): Promise<void> {
        const player = await this.loadInit(playerInfo.idle.meta.image);
        this.setupPlayer(player);
        await this.loadSprites();
        this.setupControls();
    }

    private async loadInit(path: string): Promise<AnimatedSprite> {
        await Assets.load(path);
        const spritesheet = new Spritesheet(
            Texture.from(path),
            playerInfo.idle
        );
        await spritesheet.parse();
        return new AnimatedSprite(spritesheet.animations.idle);
    }

    private async load(path: string, data: any, name: string): Promise<AnimatedSprite> {
        await Assets.load(path);
        const spritesheet = new Spritesheet(
            Texture.from(path),
            data
        );
        await spritesheet.parse();
        return new AnimatedSprite(spritesheet.animations[name]);
    }

    private async loadSprites(): Promise<void> {
        const loadPromises = Object.entries(playerInfo).map(async ([key, info]) => {
            if (info && 'meta' in info && 'image' in info.meta) {
                const sprite = await this.load(info.meta.image, info, key);
                this.sprites.set(key, sprite);
            }
        });
        await Promise.all(loadPromises);
    }

    private setupPlayer(player: AnimatedSprite): void {
        player.animationSpeed = this.animationSpeed;
        player.anchor.set(0.5);
        player.position.set(this.app.screen.width / 2, this.app.screen.height / 2);
        player.scale.set(this.playerScale);
        player.play();
        this.app.stage.addChild(player);
        this.player = player;
    }

    public getPlayer(): AnimatedSprite {
        if (!this.player) {
            throw new Error("Player not loaded");
        }
        return this.player;
    }

    public updatePlayer(): void {
        if (!this.player || this.isDead) return;
        
        this.checkIsMoving();
        this.checkIsAttacking();
        this.updateAnimation();
        this.updatePosition();
        this.updateDirection();
    }

    private updateAnimation(): void {
        if (!this.player || this.isDead) return;

        const runSprite = this.sprites.get('run');
        const idleSprite = this.sprites.get('idle');
        const attackSprite = this.sprites.get('attack');
        const deathSprite = this.sprites.get('death');

        if (this.isDead && deathSprite && this.player.textures !== deathSprite.textures) {
            this.die();
            return;
        }

        if (this.isMoving && runSprite && this.player.textures !== runSprite.textures && !this.isAttacking) {
            this.run();
        } else if (!this.isMoving && idleSprite && this.player.textures !== idleSprite.textures && !this.isAttacking) {
            this.idle();
        }



        if (this.isAttacking && attackSprite && this.player.textures !== attackSprite.textures && !this.isDead) {
            this.attack();
            this.player.onComplete = () => {
                this.isAttacking = false;
                this.idle();
            };
        }
    }

    private updatePosition(): void {
        if (!this.player) return;

        if (this.keys.get('ArrowUp') || this.keys.get('w') || this.keys.get('ц')) {
            this.player.y -= this.playerSpeed;
        }
        if (this.keys.get('ArrowDown') || this.keys.get('s') || this.keys.get('ы')) {
            this.player.y += this.playerSpeed;
        }
        if (this.keys.get('ArrowLeft') || this.keys.get('a') || this.keys.get('ф')) {
            this.player.x -= this.playerSpeed;
            this.direction = 'left';
        }
        if (this.keys.get('ArrowRight') || this.keys.get('d') || this.keys.get('в')) {
            this.player.x += this.playerSpeed;
            this.direction = 'right';
        }
    }

    private updateDirection(): void {
        if (!this.player) return;
        this.player.scale.x = this.direction === 'left' ? -this.playerScale : this.playerScale;
    }

    private checkIsAttacking(): void {
        if (this.keys.get(' ') && !this.isAttacking) {
            this.isAttacking = true;
        }
    }

    private checkIsMoving(): void {
        this.isMoving = ['ArrowUp', 'w', 'ц', 'ArrowDown', 's', 'ы', 'ArrowLeft', 'a', 'ф', 'ArrowRight', 'd', 'в']
            .some(key => this.keys.get(key));
    }

    private run(): void {
        const runSprite = this.sprites.get('run');
        if (this.player && runSprite) {
            this.player.textures = runSprite.textures;
            this.player.animationSpeed = this.playerAnimationSpeed;
            this.player.loop = true;
            this.player.play();
        }
    }

    private idle(): void {
        const idleSprite = this.sprites.get('idle');
        if (this.player && idleSprite) {
            this.player.textures = idleSprite.textures;
            this.player.animationSpeed = this.playerAnimationSpeed;
            this.player.loop = true;
            this.player.play();
        }
    }

    private attack(): void {
        const attackSprite = this.sprites.get('attack');
        if (this.player && attackSprite) {
            this.player.textures = attackSprite.textures;
            this.player.animationSpeed = this.playerAnimationSpeed * 1.5;
            this.player.loop = false;
            this.player.play();
        }
    }

    private die(): void {
        const deathSprite = this.sprites.get('death');
        if (this.player && deathSprite) {
            this.player.textures = deathSprite.textures;
            this.player.animationSpeed = this.playerAnimationSpeed;
            this.player.loop = false;
            this.player.play();
            this.player.onComplete = () => {
                if (this.player) {
                    this.player.stop();
                }
            };
        }
    }

    public kill(): void {
        this.isDead = true;
        this.die();
    }

    public resetPlayer(): void {
        if (this.player) {
            this.isDead = false;
            this.isAttacking = false;
            this.isMoving = false;
            this.direction = 'left';
            this.player.position.set(this.app.screen.width / 2, this.app.screen.height / 2);
            this.idle();
        }
    }

    private setupControls(): void {
        const handleKey = (e: KeyboardEvent, value: boolean) => {
            this.keys.set(e.key, value);
        };

        window.addEventListener('keydown', e => handleKey(e, true));
        window.addEventListener('keyup', e => handleKey(e, false));
    }
}