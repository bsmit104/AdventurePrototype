class Demo1 extends AdventureScene {
    constructor() {
        super("demo1", "Garden");
    }
    preload() {
        this.load.path = "./assets/";
        this.load.image('cam', 'cam.png');
        this.load.image('poppy', 'poppy.png');
    }

    onEnter() {
        this.imageObject = this.add.image(
            400,//x
            800,//y
            'cam',//imagename
            )
            this.imageObject.setScale(1.5) //resize
        //let clip = this.add.text(this.w * 0.3, this.w * 0.3, "📎 paperclip")
        //let cam = this.add.image("cam")
            //.setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("I feel as though I am being touched by forces beyond this world. Creepy."))
            .on('pointerdown', () => {
                this.showMessage("Cut it out!");
                this.tweens.add({
                    targets: cam,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            });

            //let key = this.add.text(this.w * 0.5, this.w * 0.1, "🔑 key")
            this.poppy = this.add.image(
                600,//x
                880,//y
                'poppy',//imagename
                )
                this.poppy.setScale(1) //resize
            //.setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("This is a pretty flower.")
            })
            .on('pointerdown', () => {
                this.showMessage("I think I'll hold onto it for a while.");
                this.gainItem('Poppy');
                this.tweens.add({
                    targets: this.poppy,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => this.poppy.destroy()
                });
            })

        // let key = this.add.text(this.w * 0.5, this.w * 0.1, "🔑 key")
        //     .setFontSize(this.s * 2)
        //     .setInteractive()
        //     .on('pointerover', () => {
        //         this.showMessage("It's a nice key.")
        //     })
        //     .on('pointerdown', () => {
        //         this.showMessage("You pick up the key.");
        //         this.gainItem('key');
        //         this.tweens.add({
        //             targets: key,
        //             y: `-=${2 * this.s}`,
        //             alpha: { from: 1, to: 0 },
        //             duration: 500,
        //             onComplete: () => key.destroy()
        //         });
        //     })



        let door = this.add.text(this.w * 0.1, this.w * 0.15, "🚪 locked door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("key")) {
                    this.showMessage("You've got the key for this door.");
                } else {
                    this.showMessage("It's locked. Can you find a key?");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("key")) {
                    this.loseItem("key");
                    this.showMessage("*squeak*");
                    door.setText("🚪 unlocked door");
                    this.gotoScene('demo2');
                }
            })
        // let door = this.add.text(this.w * 0.1, this.w * 0.15, "🚪 locked door")
        //     .setFontSize(this.s * 2)
        //     .setInteractive()
        //     .on('pointerover', () => {
        //         if (this.hasItem("key")) {
        //             this.showMessage("You've got the key for this door.");
        //         } else {
        //             this.showMessage("It's locked. Can you find a key?");
        //         }
        //     })
        //     .on('pointerdown', () => {
        //         if (this.hasItem("key")) {
        //             this.loseItem("key");
        //             this.showMessage("*squeak*");
        //             door.setText("🚪 unlocked door");
        //             this.gotoScene('demo2');
        //         }
        //     })

    }
}

class Demo2 extends AdventureScene {
    constructor() {
        super("demo2", "The second room has a long name (it truly does).");
    }
    onEnter() {
        this.add.text(this.w * 0.3, this.w * 0.4, "just go back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("You've got no other choice, really.");
            })
            .on('pointerdown', () => {
                this.gotoScene('demo1');
            });

        let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('*giggles*');
                this.tweens.add({
                    targets: finish,
                    x: this.s + (this.h - 2 * this.s) * Math.random(),
                    y: this.s + (this.h - 2 * this.s) * Math.random(),
                    ease: 'Sine.inOut',
                    duration: 500
                });
            })
            .on('pointerdown', () => this.gotoScene('outro'));
    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro');
    }
    preload(){
        this.load.path = "./assets/";
        this.load.audio('logosound', 'logosound.wav');
        this.load.spritesheet('logosmall', 'logosmall.png', {
            frameWidth: 100,
            frameHeight: 100
        });
    }
    create() {
        this.cameras.main.setBackgroundColor('#ffffff');
        const backgroundMusic = this.sound.add('logosound', { loop: false });
        backgroundMusic.play();
    /////////////////animated///////////////////
        this.imageObject2 = this.add.sprite(
            900,//x
            500,//y
            'logosmall',//imagename
        );
        this.imageObject2.setScale(10); //resize
        this.anims.create({
            key: 'logosmall',
            frames: this.anims.generateFrameNumbers('logosmall', {
                start: 0,
                end: 16
            }),
            frameRate: 10,
            repeat: 0
        });
        this.imageObject2.anims.play('logosmall', true);
        this.time.delayedCall(2000, () => {
            this.tweens.add({
                targets: this.imageObject2,
                alpha:0,
                duration: 2000,
                repeat: 0,
                onComplete: () => {
                    this.textObject8 = this.add.text(
                        850, //x
                        420,//y
                        "tap", //text
                        {
                            font: "60px Impact",
                            color: "#00000",
                            align: "center"
                        } //style
                    );
                    this.tweens.add({
                        targets: this.textObject8,
                        alpha:0,
                        duration: 2000,
                        repeat: -1,
                    });
                }
            });
        }, null, this);
        this.input.on('pointerdown', () => this.scene.start('demo1'));
    }
    // constructor() {
    //     super('intro')
    // }
    // create() {
    //     this.add.text(50,50, "Adventure awaits!").setFontSize(50);
    //     this.add.text(50,100, "Click anywhere to begin.").setFontSize(20);
    //     this.input.on('pointerdown', () => {
    //         this.cameras.main.fade(1000, 0,0,0);
    //         this.time.delayedCall(1000, () => this.scene.start('demo1'));
    //     });
    // }
}

class S0 extends Phaser.Scene {
    constructor() {
        super('s0');
    }
    create() {
    this.cameras.main.setBackgroundColor('#000000');

    this.textObject0 = this.add.text(
            600, //x
            350,//y
            "tap to progress", //text
            {
                font: "100px Impact",
                color: "#FFFFFF",
                align: "center"
            } //style
        );
    //textObject0.setAlpha(1);
    this.tweens.add({
        targets: this.textObject0,
        alpha:0,
        duration: 2000,
        repeat: -1,
    });
    //textObject0.setAlpha(1);
    this.tweens.add({
        targets: this.textObject8,
        alpha:0,
        duration: 2000,
        repeat: -1,
    });

    this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        this.add.text(50, 50, "That's all!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [S0, Intro, Demo1, Demo2, Outro],
    title: "Adventure Game",
});

