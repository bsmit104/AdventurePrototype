class Demo1 extends AdventureScene {
    constructor() {
        super("demo1", "The Meadow");
    }
    preload() {
        this.load.path = "./assets/";
        this.load.image('cam', 'cam.png');
        this.load.image('poppy', 'poppy.png');
        this.load.image('back', 'back.png');
        this.load.image('arrow', 'arrow.png');
    }

    onEnter() {
    // Create a background image

        this.cam = this.add.image(
            400,//x
            860,//y
            'cam',//imagename
            )
            this.cam.setDepth(1)
            this.cam.setScale(1.5) //resize
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
                950,//y
                'poppy',//imagename
                )
                this.poppy.setDepth(1)
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

        this.arrow = this.add.image(
            1200,//x
            900,//y
            'arrow',//imagename
            )
            this.arrow.setDepth(1);
            this.arrow.setScale(.5) //resize
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("Poppy")) {
                    this.showMessage("Maybe there are more flowers in the woods.");
                } else {
                    this.showMessage("Maybe I should pick a flower before I go since they are so beautiful.");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("Poppy")) {
                    this.loseItem("Poppy");
                    this.showMessage("*la la la*");
                    //door.setText("🚪 unlocked door");
                    this.gotoScene('demo2');
                }
            })

            const myBackground = this.add.image(0, 0, 'back');
            myBackground.setOrigin(0);
            myBackground.setDepth(0);
            //myBackground.setScale(myImage.width / myBackground.width, myImage.height / myBackground.height);
            this.poppy.background = this.back;
            this.cam.background = this.back;
            this.arrow.background = this.back;
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
        super("demo2", "The Woods.");
    }
    preload() {
        this.load.path = "./assets/";
        this.load.image('cam', 'cam.png');
        this.load.image('forest', 'forestback.png');
        this.load.image('sign', 'sign.png');
        this.load.image('arrowdown', 'arrowdown.png');
        this.load.image('arrowslant', 'arrowslant.png');
    }

    onEnter() {
        this.signob = this.add.image(
            800,//x
            820,//y
            'sign',//imagename
            )
            this.signob.setDepth(1)
            this.signob.setScale(.3) //resize
            //let clip = this.add.text(this.w * 0.3, this.w * 0.3, "📎 paperclip")
            //let cam = this.add.image("cam")
            //.setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("A sign."))
            .on('pointerdown', () => {
                this.showMessage("One can go right, or one can go left!");
                this.tweens.add({
                    targets: this.signob,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            });

        this.cam = this.add.image(
            400,//x
            800,//y
            'cam',//imagename
            )
            this.cam.setDepth(1)
            this.cam.setScale(1.5) //resize
            //let clip = this.add.text(this.w * 0.3, this.w * 0.3, "📎 paperclip")
            //let cam = this.add.image("cam")
            //.setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("I feel like there is a mouse on me."))
            .on('pointerdown', () => {
                this.showMessage("Agh!");
                this.tweens.add({
                    targets: this.cam,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            });


            this.arrowd = this.add.image(
                770,//x
                1000,//y
                'arrowdown',//imagename
                )
                this.arrowd.setDepth(1);
                this.arrowd.setScale(.5) //resize
                .setInteractive()
                .on('pointerover', () => {
                    this.showMessage("Right.");
                    // if (this.hasItem("Poppy")) {
                    //     this.showMessage("Maybe there are more flowers in the woods.");
                    // } else {
                    //     this.showMessage("Maybe I should pick a flower before I go since they are so beautiful.");
                    // }
                })
                .on('pointerdown', () => {
                    // if (this.hasItem("Poppy")) {
                    //     this.loseItem("Poppy");
                        this.showMessage("Kinda creepy..");
                        //door.setText("🚪 unlocked door");
                        this.gotoScene('scene4');
                    //}
                })

                this.arrows = this.add.image(
                    1200,//x
                    880,//y
                    'arrowslant',//imagename
                    )
                    this.arrows.setDepth(1);
                    this.arrows.angle = 20;
                    this.arrows.setScale(.5) //resize
                    .setInteractive()
                    .on('pointerover', () => {
                        this.showMessage("Left.");
                        // if (this.hasItem("Poppy")) {
                        //     this.showMessage("Maybe there are more flowers in the woods.");
                        // } else {
                        //     this.showMessage("Maybe I should pick a flower before I go since they are so beautiful.");
                        // }
                    })
                    .on('pointerdown', () => {
                        // if (this.hasItem("Poppy")) {
                        //     this.loseItem("Poppy");
                            this.showMessage("It is getting chilly.");
                            //door.setText("🚪 unlocked door");
                            this.gotoScene('scene3');
                        //}
                    })
                    const forestb = this.add.image(0, 0, 'forest');
                    forestb.setOrigin(0);
                    forestb.setDepth(0);
                    this.arrowd.background = this.back;
                    this.arrows.background = this.back;

        // this.add.text(this.w * 0.3, this.w * 0.4, "just go back")
        //     .setFontSize(this.s * 2)
        //     .setInteractive()
        //     .on('pointerover', () => {
        //         this.showMessage("You've got no other choice, really.");
        //     })
        //     .on('pointerdown', () => {
        //         this.gotoScene('demo1');
        //     });


        //make firefly
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

            // const forest = this.add.image(0, 0, 'forestback');
            // forest.setOrigin(0);
            // forest.setDepth(0);
            //forest.setScale(myImage.width / forest.width, myImage.height / myBackground.height);
    }
}


class Scene3 extends AdventureScene {
    constructor() {
        super("scene3", "The Cemetery.");
    }
    preload() {
        this.load.path = "./assets/";
        this.load.image('cam', 'cam.png');
        this.load.image('lefto', 'left.png');
        this.load.image('grave1', 'grave1.png');
        this.load.image('stump', 'stump.png');
        this.load.image('arrowdown', 'arrowdown.png');
    }
    onEnter() {
        let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage('*giggles*');
            this.finish.setDepth(1)
            this.tweens.add({
                targets: finish,
                x: this.s + (this.h - 2 * this.s) * Math.random(),
                y: this.s + (this.h - 2 * this.s) * Math.random(),
                ease: 'Sine.inOut',
                duration: 500
            });
        })
        .on('pointerdown', () => this.gotoScene('outro'));

        this.arrowdo = this.add.image(
            100,//x
            1000,//y
            'arrowdown',//imagename
            )
            this.arrowdo.setDepth(1)
            this.arrowdo.setScale(.5) //resize
            //this.arrows.angle = -90
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Go back.");
                // if (this.hasItem("Poppy")) {
                //     this.showMessage("Maybe there are more flowers in the woods.");
                // } else {
                //     this.showMessage("Maybe I should pick a flower before I go since they are so beautiful.");
                // }
            })
            .on('pointerdown', () => {
                console.log("Clicked on the arrow to go back.");
                this.gotoScene('demo2');
            });
            ////////////////////////fix me////////////////////////////
            //.on('pointerdown', () => this.gotoScene('demo2'));




            //arrowdo.on('pointerdown', this.goback, this);
            // .on('pointerdown', () => {
            //     this.gotoScene('demo2');
            // });
       
        
        this.cam = this.add.image(
            300,//x
            800,//y
            'cam',//imagename
            )
            this.cam.setDepth(1)
            this.cam.setScale(2) //resize
            //let clip = this.add.text(this.w * 0.3, this.w * 0.3, "📎 paperclip")
            //let cam = this.add.image("cam")
            //.setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("I feel like there is a mouse on me."))
            .on('pointerdown', () => {
                this.showMessage("Agh!");
                this.tweens.add({
                    targets: cam,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            });


        this.stumpob = this.add.image(
            800,//x
            1000,//y
            'stump',//imagename
            )
            this.stumpob.setDepth(1)
            this.stumpob.setScale(.4) //resize
            //let clip = this.add.text(this.w * 0.3, this.w * 0.3, "📎 paperclip")
            //let cam = this.add.image("cam")
            //.setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Something must have been angry."))
            .on('pointerdown', () => {
                this.showMessage("If I was only a dryad, then I would fix it.");
                this.tweens.add({
                    targets: stumpob,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            });


        this.graveob = this.add.image(
            500,//x
            700,//y
            'grave1',//imagename
            )
            this.graveob.setDepth(1)
            this.graveob.setScale(1) //resize
            //let clip = this.add.text(this.w * 0.3, this.w * 0.3, "📎 paperclip")
            //let cam = this.add.image("cam")
            //.setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("A tombstone."))
            .on('pointerdown', () => {
                this.showMessage("My love, My flower, Rest");
                this.tweens.add({
                    targets: graveob,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            });

        const forestl = this.add.image(0, 0, 'lefto');
        forestl.setOrigin(0);
        forestl.setDepth(0);
        this.graveob.background = this.back;
        this.arrowdo.background = this.back;
        this.cam.background = this.back;
    }
}

class Scene4 extends AdventureScene {
    constructor() {
        super("scene4", "Deeper Forest");
    }
    preload() {
        this.load.path = "./assets/";
        this.load.image('cam', 'cam.png');
    }
    onEnter() {
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
    scene: [S0, Intro, Demo1, Demo2, Scene3, Scene4, Outro],
    title: "Adventure Game",
});

