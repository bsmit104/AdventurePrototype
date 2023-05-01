class Scene1 extends AdventureScene {
    constructor() {
        super("scene1", "The Meadow");
    }
    preload() {
        this.load.path = "./assets/";
        this.load.image('cam', 'cam.png');
        this.load.image('poppy', 'poppy.png');
        this.load.image('back', 'back.png');
        this.load.image('arrow', 'arrow.png');
        this.load.image('butter', 'butterfly.png');
    }

    onEnter() {
    // Create a background image

    this.butterob = this.add.image(
        100,//x
        400,//y
        'butter',//imagename
        )
        this.butterob.setDepth(1)
        this.butterob.setScale(.5) //resize
    .setInteractive()
    .on('pointerover', () => {
        this.showMessage('So fast!');
        this.butterob.setDepth(1)
        this.tweens.add({
            targets: this.butterob,
            x: this.s + (this.h - 2 * this.s) * Math.random(),
            y: this.s + (this.h - 2 * this.s) * Math.random(),
            ease: 'Sine.inOut',
            duration: 500
        });
    })
    .on('pointerdown', () => {
        this.showMessage("Your name shall be Butter.");
        this.gainItem('Butterfly');
        this.tweens.add({
            targets: this.butterob,
            y: `-=${2 * this.s}`,
            alpha: { from: 1, to: 0 },
            duration: 500,
            onComplete: () => this.butterob.destroy()
        });
    })

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
                    targets: this.cam,
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
            const fxadow = this.poppy.preFX.addShadow(0, 0, 0.002, 1, 0x333333, 5); // reduce blur, quality, and distance
        this.add.tween({
            targets: this.poppy,
            //scale: 1.05,
            scale: 1.2,
            duration: 800,
            yoyo: true,
            repeat: -1
        });
        this.add.tween({
            targets: fxadow,
            x: 5,
            y: -5,
            duration: 800,
            yoyo: true,
            repeat: -1
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
                    //this.loseItem("Poppy");
                    this.showMessage("*la la la*");
                    //door.setText("🚪 unlocked door");
                    this.gotoScene('scene2');
                }
            })
            const fxhadow = this.arrow.preFX.addShadow(0, 0, 0.002, 1, 0x333333, 5); // reduce blur, quality, and distance
        this.add.tween({
            targets: this.arrow,
            //scale: 1.05,
            scale: .55,
            duration: 800,
            yoyo: true,
            repeat: -1
        });
        this.add.tween({
            targets: fxhadow,
            x: 5,
            y: -5,
            duration: 800,
            yoyo: true,
            repeat: -1
        })

            const myBackground = this.add.image(0, 0, 'back');
            myBackground.setOrigin(0);
            myBackground.setDepth(0);
            //myBackground.setScale(myImage.width / myBackground.width, myImage.height / myBackground.height);
            this.poppy.background = this.back;
            this.cam.background = this.back;
            this.arrow.background = this.back;
            this.butterob.background = this.back;
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

class Scene2 extends AdventureScene {
    constructor() {
        super("scene2", "The Woods.");
    }
    preload() {
        this.load.path = "./assets/";
        this.load.image('cam', 'cam.png');
        this.load.image('forest', 'forestback.png');
        this.load.image('sign', 'sign.png');
        this.load.image('arrowdown', 'arrowdown.png');
        this.load.image('arrowslant', 'arrowslant.png');
        this.load.image('fly', 'firefly.png');
        //this.load.image('arrow', 'arrow.png');
        // this.load.image('stick', 'stick.png');
    }

    onEnter() {

        this.flyob = this.add.image(
            800,//x
            400,//y
            'fly',//imagename
            )
            this.flyob.setDepth(1)
            this.flyob.setScale(.5) //resize
        .setInteractive()
        // const fxhadow = this.flyob.preFX.addShadow(0, 0, 0.002, 1, 0x333333, 5); // reduce blur, quality, and distance
        // this.add.tween({
        //     targets: this.flyob,
        //     //scale: 1.05,
        //     scale: .55,
        //     duration: 800,
        //     yoyo: true,
        //     repeat: -1
        // });
        // this.add.tween({
        //     targets: fxhadow,
        //     x: 5,
        //     y: -5,
        //     duration: 800,
        //     yoyo: true,
        //     repeat: -1
        // })
        .on('pointerover', () => {
            this.showMessage('*bzzzzzzzzzzzzzzz*');
            this.flyob.setDepth(1)
            this.tweens.add({
                targets: this.flyob,
                x: this.s + (this.h - 2 * this.s) * Math.random(),
                y: this.s + (this.h - 2 * this.s) * Math.random(),
                ease: 'Sine.inOut',
                duration: 500
            });
        })
        .on('pointerdown', () => {
            this.showMessage("My mom used to say fireflies were good luck.");
            this.gainItem('Firefly');
            this.tweens.add({
                targets: this.flyob,
                y: `-=${2 * this.s}`,
                alpha: { from: 1, to: 0 },
                duration: 500,
                onComplete: () => this.flyob.destroy()
            });
        })

        // this.stickob = this.add.image(
        //     600,//x
        //     950,//y
        //     'stick',//imagename
        //     )
        //     this.stickob.setDepth(1)
        //     this.stickob.setScale(1) //resize
        // //.setFontSize(this.s * 2)
        // .setInteractive()
        // .on('pointerover', () => {
        //     this.showMessage("Nice stick.")
        // })
        // .on('pointerdown', () => {
        //     this.showMessage("Love me a good stick.");
        //     this.gainItem('Stick');
        //     this.tweens.add({
        //         targets: this.stickob,
        //         y: `-=${2 * this.s}`,
        //         alpha: { from: 1, to: 0 },
        //         duration: 500,
        //         onComplete: () => this.stickob.destroy()
        //     });
        // })

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
            //const fxShadow = this.signob.preFX.addShadow(0, 0, 0.006, 2, 0x333333, 10);
            .on('pointerover', () => this.showMessage("A sign."))
            .on('pointerdown', () => {
                this.showMessage("One can go right, or one can go left!");
                // this.tweens.add({
                //     targets: this.signob,
                //     x: '+=' + this.s,
                //     repeat: 2,
                //     yoyo: true,
                //     ease: 'Sine.inOut',
                //     duration: 100
                // });
            });
            const fxShadow = this.signob.preFX.addShadow(0, 0, 0.002, 1, 0x333333, 5); // reduce blur, quality, and distance

        this.add.tween({
            targets: this.signob,
            //scale: 1.05,
            scale: .32,
            duration: 800,
            yoyo: true,
            repeat: -1
        });
        this.add.tween({
            targets: fxShadow,
            x: 5,
            y: -5,
            duration: 800,
            yoyo: true,
            repeat: -1
        })

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
                const fxShdow = this.arrowd.preFX.addShadow(0, 0, 0.002, 1, 0x333333, 5); // reduce blur, quality, and distance
        this.add.tween({
            targets: this.arrowd,
            //scale: 1.05,
            scale: .7,
            duration: 800,
            yoyo: true,
            repeat: -1
        });
        this.add.tween({
            targets: fxShdow,
            x: 5,
            y: -5,
            duration: 800,
            yoyo: true,
            repeat: -1
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
                    const fxShow = this.arrows.preFX.addShadow(0, 0, 0.002, 1, 0x333333, 5); // reduce blur, quality, and distance
        this.add.tween({
            targets: this.arrows,
            //scale: 1.05,
            scale: .7,
            duration: 800,
            yoyo: true,
            repeat: -1
        });
        this.add.tween({
            targets: fxShow,
            x: 5,
            y: -5,
            duration: 800,
            yoyo: true,
            repeat: -1
        })

                    const forestb = this.add.image(0, 0, 'forest');
                    forestb.setOrigin(0);
                    forestb.setDepth(0);
                    this.arrowd.background = this.back;
                    this.arrows.background = this.back;
                    this.flyob.background = this.back;
                    
                    // this.stickob.background = this.back;

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
        // let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
        //     .setInteractive()
        //     .on('pointerover', () => {
        //         this.showMessage('*giggles*');
        //         this.tweens.add({
        //             targets: finish,
        //             x: this.s + (this.h - 2 * this.s) * Math.random(),
        //             y: this.s + (this.h - 2 * this.s) * Math.random(),
        //             ease: 'Sine.inOut',
        //             duration: 500
        //         });
        //     })
        //     .on('pointerdown', () => this.gotoScene('outro'));

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
        this.load.image('stick', 'stick.png');
        this.load.image('arrow', 'arrow.png');
    }
    onEnter() {
        this.arrow = this.add.image(
            1000,//x
            700,//y
            'arrow',//imagename
            )
            this.arrow.setDepth(1);
            this.arrow.setScale(.5) //resize
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("I hear frogs.");
            })
            .on('pointerdown', () => {
                    //this.loseItem("Poppy");
                    this.showMessage("I like frogs");
                    //door.setText("🚪 unlocked door");
                    this.gotoScene('scene9');
            })
            const fxShw = this.arrow.preFX.addShadow(0, 0, 0.002, 1, 0x333333, 5); // reduce blur, quality, and distance
        this.add.tween({
            targets: this.arrow,
            //scale: 1.05,
            scale: .6,
            duration: 800,
            yoyo: true,
            repeat: -1
        });
        this.add.tween({
            targets: fxShw,
            x: 5,
            y: -5,
            duration: 800,
            yoyo: true,
            repeat: -1
        })

        this.stickob = this.add.image(
            600,//x
            950,//y
            'stick',//imagename
            )
            this.stickob.setDepth(1)
            this.stickob.setScale(1) //resize
        //.setFontSize(this.s * 2)
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage("Nice stick.")
        })
        .on('pointerdown', () => {
            this.showMessage("Love me a good stick.");
            this.gainItem('Stick');
            this.tweens.add({
                targets: this.stickob,
                y: `-=${2 * this.s}`,
                alpha: { from: 1, to: 0 },
                duration: 500,
                onComplete: () => this.stickob.destroy()
            });
        })
        const fShow = this.stickob.preFX.addShadow(0, 0, 0.002, 1, 0x333333, 5); // reduce blur, quality, and distance
        this.add.tween({
            targets: this.stickob,
            //scale: 1.05,
            scale: 1.1,
            duration: 800,
            yoyo: true,
            repeat: -1
        });
        this.add.tween({
            targets: fShow,
            x: 5,
            y: -5,
            duration: 800,
            yoyo: true,
            repeat: -1
        })


        //let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)'

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
                this.gotoScene('scene2');
            });
            const fSow = this.arrowdo.preFX.addShadow(0, 0, 0.002, 1, 0x333333, 5); // reduce blur, quality, and distance
        this.add.tween({
            targets: this.arrowdo,
            //scale: 1.05,
            scale: .6,
            duration: 800,
            yoyo: true,
            repeat: -1
        });
        this.add.tween({
            targets: fSow,
            x: 5,
            y: -5,
            duration: 800,
            yoyo: true,
            repeat: -1
        })
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
            .on('pointerover', () => this.showMessage("I know what it is like to lose someone."))
            .on('pointerdown', () => this.showMessage("You also really liked flowers.")
                // this.showMessage("Agh!");
                // this.tweens.add({
                //     targets: cam,
                //     x: '+=' + this.s,
                //     repeat: 2,
                //     yoyo: true,
                //     ease: 'Sine.inOut',
                //     duration: 100
                //});
            );


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
                // this.tweens.add({
                //     targets: this.stumpob,
                //     x: '+=' + this.s,
                //     repeat: 2,
                //     yoyo: true,
                //     ease: 'Sine.inOut',
                //     duration: 100
                // });
            });
            const how = this.stumpob.preFX.addShadow(0, 0, 0.002, 1, 0x333333, 5); // reduce blur, quality, and distance
        this.add.tween({
            targets: this.stumpob,
            //scale: 1.05,
            scale: .42,
            duration: 800,
            yoyo: true,
            repeat: -1
        });
        this.add.tween({
            targets: how,
            x: 5,
            y: -5,
            duration: 800,
            yoyo: true,
            repeat: -1
        })


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
            //.on('keydown-L', () => { 
            ///////////////////// Leave flower?////////////////////////////////
            .on('pointerdown', () => {
                this.showMessage("It reads: My love, My flower, my deer, Rest");
                // this.tweens.add({
                //     targets: this.graveob,
                //     x: '+=' + this.s,
                //     repeat: 2,
                //     yoyo: true,
                //     ease: 'Sine.inOut',
                //     duration: 100
                // });
            });
            const fSh = this.graveob.preFX.addShadow(0, 0, 0.002, 1, 0x333333, 5); // reduce blur, quality, and distance
        this.add.tween({
            targets: this.graveob,
            //scale: 1.05,
            scale: 1.07,
            duration: 800,
            yoyo: true,
            repeat: -1
        });
        this.add.tween({
            targets: fSh,
            x: 5,
            y: -5,
            duration: 800,
            yoyo: true,
            repeat: -1
        })

        const forestl = this.add.image(0, 0, 'lefto');
        forestl.setOrigin(0);
        forestl.setDepth(0);
        this.graveob.background = this.back;
        this.arrowdo.background = this.back;
        this.cam.background = this.back;
        this.stickob.background = this.back;
        this.arrow.background = this.back;
    }
}

class Scene9 extends AdventureScene {
    constructor() {
        super("scene9", "Pond");
    }
    preload() {
        this.load.path = "./assets/";
        this.load.image('cam', 'cam.png');
        this.load.image('pond', 'pond.png');
        this.load.image('ducky', 'ducky.png');
        this.load.image('frog', 'frog.png');
        // this.load.spritesheet('frog', 'frog.png', {
        //     frameWidth: 30,
        //     frameHeight: 30
        // });
    }
    onEnter() {
        this.frog = this.add.image(
            900,//x
            900,//y
            'frog',//imagename
            )
            this.frog.setDepth(1)
            this.frog.setScale(1) //resize
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("riiiiiibbit.\nF: to feed frog firefly\nB: to feed frog butterfly.");
            })
            .on('pointerdown', () => {
                    //this.loseItem("Poppy");
                    this.showMessage("*dramatically*\nriiiiiiiiiiiiiiii\niiiiiiiiiibbbbbbiiiiii\niiiitttttttt");
                    //door.setText("🚪 unlocked door");
            })
            this.input.keyboard.on('keydown-F', () => {
                if (this.hasItem("Firefly")) {
                    this.loseItem("Firefly");
                    this.showMessage("*he gobbles it up*\nGood froggy!");
                    //door.setText("🚪 unlocked door");
                }
                else {
                    this.showMessage("I don't have a firefly.");
                    this.tweens.add({
                        targets: this.frog,
                        x: '+=' + this.s,
                        repeat: 2,
                        yoyo: true,
                        ease: 'Sine.inOut',
                        duration: 100
                    });
                    //rock throwing animation?
                }
            })
            this.input.keyboard.on('keydown-B', () => {
                if (this.hasItem("Butterfly")) {
                    this.loseItem("Butterfly");
                    this.showMessage("Sorry Butter.\n*The frog thoroughly enjoys devouring Butter.");
                    //door.setText("🚪 unlocked door");
                }
                else {
                    this.showMessage("I don't have a butterfly.");
                    this.tweens.add({
                        targets: this.frog,
                        x: '+=' + this.s,
                        repeat: 2,
                        yoyo: true,
                        ease: 'Sine.inOut',
                        duration: 100
                    });
                }
            })
            const ow = this.frog.preFX.addShadow(0, 0, 0.002, 1, 0x333333, 5); // reduce blur, quality, and distance
        this.add.tween({
            targets: this.frog,
            //scale: 1.05,
            scale: 1.1,
            duration: 800,
            yoyo: true,
            repeat: -1
        });
        this.add.tween({
            targets: ow,
            x: 5,
            y: -5,
            duration: 800,
            yoyo: true,
            repeat: -1
        })
        // this.imageObject2 = this.add.sprite(
        //     1000,//x
        //     900,//y
        //     'frog',//imagename
        // );
        // //console.log(this.imageObject2);
        // this.imageObject2.setScale(1); //resize
        // //this.imageObject2.setDepth(1);
        // this.anims.create({
        //     key: 'frog',
        //     frames: this.anims.generateFrameNumbers('frog', {
        //         start: 0,
        //         end: 18
        //     }),
        //     frameRate: 10,
        //     repeat: 0
        // });
        // this.imageObject2.anims.play('frog', true);


        this.duckob = this.add.image(
            500,//x
            1000,//y
            'ducky',//imagename
            )
            this.duckob.setDepth(1)
            this.duckob.setScale(1) //resize
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Quack.");
            })
            .on('pointerdown', () => {
                    //this.loseItem("Poppy");
                    this.showMessage("Honk, honk.");
                    //door.setText("🚪 unlocked door");
            })
            const w = this.duckob.preFX.addShadow(0, 0, 0.002, 1, 0x333333, 5); // reduce blur, quality, and distance
        this.add.tween({
            targets: this.duckob,
            //scale: 1.05,
            scale: 1.1,
            duration: 800,
            yoyo: true,
            repeat: -1
        });
        this.add.tween({
            targets: w,
            x: 5,
            y: -5,
            duration: 800,
            yoyo: true,
            repeat: -1
        })


        this.cam = this.add.image(
            300,//x
            800,//y
            'cam',//imagename
            )
            this.cam.setDepth(1)
            this.cam.setScale(2) //resize
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("We used to catch frogs before you passed. I wonder if there are frogs where you are now.");
            })
            .on('pointerdown', () => {
                    //this.loseItem("Poppy");
                    this.showMessage("I like frogs");
                    //door.setText("🚪 unlocked door");
            })

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
                this.gotoScene('scene2');
            });
            const o = this.arrowdo.preFX.addShadow(0, 0, 0.002, 1, 0x333333, 5); // reduce blur, quality, and distance
        this.add.tween({
            targets: this.arrowdo,
            //scale: 1.05,
            scale: .55,
            duration: 800,
            yoyo: true,
            repeat: -1
        });
        this.add.tween({
            targets: o,
            x: 5,
            y: -5,
            duration: 800,
            yoyo: true,
            repeat: -1
        })


        const pondo = this.add.image(0, 0, 'pond');
        pondo.setOrigin(0);
        pondo.setDepth(0);
        this.cam.background = this.back;
        this.arrowdo.background = this.back;
        this.frog.background = this.back;
    }
}

class Scene4 extends AdventureScene {
    constructor() {
        super("scene4", "Deeper Forest");
    }
    preload() {
        this.load.path = "./assets/";
        this.load.image('cam', 'cam.png');
        this.load.image('deerman', 'dearthedeer.png');
        this.load.image('righto', 'deepforest.png');
        this.load.image('arrowdown', 'arrowdown.png');
    }
    onEnter() {
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
                this.gotoScene('scene2');
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
            .on('pointerover', () => this.showMessage("I am scared."))
            .on('pointerdown', () => {
                this.showMessage("*heart beat*");
                this.tweens.add({
                    targets: this.cam,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            });

        this.deermanob = this.add.image(
            900,//x
            700,//y
            'deerman',//imagename
            )
            this.deermanob.setDepth(1)
            this.deermanob.setScale(4) //resize
            //let clip = this.add.text(this.w * 0.3, this.w * 0.3, "📎 paperclip")
            //let cam = this.add.image("cam")
            //.setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessagered("A monster.")) 
            .on('pointerdown', () => {
                this.showMessagered("He is full of animosity.\nA: to attack\nG: to give flower");
                this.tweens.add({
                    targets: this.deermanob,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            });
            this.input.keyboard.on('keydown-A', () => {
                if (this.hasItem("Stick")) {
                    this.loseItem("Stick");
                    this.showMessagered("Die vermin!");
                    //door.setText("🚪 unlocked door");
                    this.gotoScene('scene5');
                }
                else {
                    this.showMessage("I don't have a weapon.");
                    this.tweens.add({
                        targets: this.deermanob,
                        x: '+=' + this.s,
                        repeat: 2,
                        yoyo: true,
                        ease: 'Sine.inOut',
                        duration: 100
                    });
                    //rock throwing animation?
                }
            })
            this.input.keyboard.on('keydown-G', () => {
                if (this.hasItem("Poppy")) {
                    this.loseItem("Poppy");
                    this.showMessage("I know it hurts, but someday you will see your flower again.");
                    //door.setText("🚪 unlocked door");
                    this.gotoScene('scene6');
                }
                else {
                    this.showMessage("I don't have a flower.");
                    this.tweens.add({
                        targets: this.deermanob,
                        x: '+=' + this.s,
                        repeat: 2,
                        yoyo: true,
                        ease: 'Sine.inOut',
                        duration: 100
                    });
                }
            })
            const dob = this.deermanob.preFX.addShadow(0, 0, 0.002, 1, 0x333333, 5); // reduce blur, quality, and distance
        this.add.tween({
            targets: this.deermanob,
            //scale: 1.05,
            scale: 4.1,
            duration: 800,
            yoyo: true,
            repeat: -1
        });
        this.add.tween({
            targets: dob,
            x: 5,
            y: -5,
            duration: 800,
            yoyo: true,
            repeat: -1
        })

        const forest2 = this.add.image(0, 0, 'righto');
        forest2.setOrigin(0);
        forest2.setDepth(0);
        // this.graveob.background = this.back;
        this.deermanob.background = this.back;
        this.cam.background = this.back;
        this.arrowdo.background = this.back;
    }
}


class Scene5 extends AdventureScene {
    constructor() {
        super("scene5", "Cemetery");
    }
    preload() {
        this.load.path = "./assets/";
        this.load.image('cemback', 'cemback.png');
        this.load.image('grave1', 'grave1.png');
        this.load.image('grave2', 'grave2.png');
        this.load.image('lefto', 'left.png');
    }
    onEnter() {
        this.graveob1 = this.add.image(
            450,//x
            700,//y
            'grave1',//imagename
            )
            this.graveob1.setDepth(1)
            this.graveob1.setScale(1.3) //resize

            .setInteractive()
            .on('pointerover', () => this.showMessage("A tombstone."))
            //.on('keydown-L', () => { 
            ///////////////////// Leave flower?////////////////////////////////
            .on('pointerdown', () => {
                this.showMessage("It reads: My love, My flower, my deer, Rest. I will miss you every day.");
            });
            const newwrd = this.graveob1.preFX.addShadow(0, 0, 0.002, 1, 0x333333, 5); // reduce blur, quality, and distance
        this.add.tween({
            targets: this.graveob1,
            //scale: 1.05,
            scale: 1.35,
            duration: 800,
            yoyo: true,
            repeat: -1
        });
        this.add.tween({
            targets: newwrd,
            x: 5,
            y: -5,
            duration: 800,
            yoyo: true,
            repeat: -1
        })

        this.graveob2 = this.add.image(
            750,//x
            700,//y
            'grave2',//imagename
            )
            this.graveob2.setDepth(1)
            this.graveob2.setScale(1.3) //resize

            .setInteractive()
            .on('pointerover', () => this.showMessage("A tombstone with a note."))
            //.on('keydown-L', () => { 
            ///////////////////// Leave flower?////////////////////////////////
            .on('pointerdown', () => {
                // or you humans are all alike
                this.showMessagelong("The note reads: Forgive me stranger, I thought you were the hunter that killed my flower. I was forced into self defense, but you still did not deserve death. Neither did my wife.\nI am so sorry.");
            });
            const newwod = this.graveob2.preFX.addShadow(0, 0, 0.002, 1, 0x333333, 5); // reduce blur, quality, and distance
        this.add.tween({
            targets: this.graveob2,
            //scale: 1.05,
            scale: 1.35,
            duration: 800,
            yoyo: true,
            repeat: -1
        });
        this.add.tween({
            targets: newwod,
            x: 5,
            y: -5,
            duration: 800,
            yoyo: true,
            repeat: -1
        })

            this.add.text(300, 1000, "finish the game", {fontSize: '40px'})
            //let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
                .setDepth(1)
                .setInteractive()
                .on('pointerover', () => {
                    this.showMessage('*end game?*');
                })
                .on('pointerdown', () => this.gotoScene('outro'));

        const forest3 = this.add.image(0, 0, 'lefto');
        forest3.setOrigin(0);
        forest3.setDepth(0);
        // this.graveob1.background = this.back;
        // this.graveob2.background = this.back;
        // this.deermanob.background = this.back;
    }
}

class Scene6 extends AdventureScene {
    constructor() {
        super("scene6", "Deeper Forest");
    }
    preload() {
        this.load.path = "./assets/";
        this.load.image('righto', 'deepforest.png');
        this.load.image('cam', 'cam.png');
        this.load.image('deer', 'deer.png');
    }
    onEnter() {
        this.deerob = this.add.image(
            900,//x
            750,//y
            'deer',//imagename
            )
            this.deerob.setScale(1, -1);
            this.deerob.setDepth(1)
            this.deerob.setScale(.4) //resize
            //let clip = this.add.text(this.w * 0.3, this.w * 0.3, "📎 paperclip")
            //let cam = this.add.image("cam")
            //.setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessagelong("Thank you. I am sorry you saw that. I am ashamed to face you for I judged you so harshly and you only brought comfort. I just lost someone dear to me. This flower makes me feel closer to her again."))
            .on('pointerdown', () => {
                this.showMessage("I miss her.");
                // this.tweens.add({
                //     targets: this.cam,
                //     x: '+=' + this.s,
                //     repeat: 2,
                //     yoyo: true,
                //     ease: 'Sine.inOut',
                //     duration: 100
                // });
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

            // .setInteractive()
            // .on('pointerover', () => this.showMessage("I feel like there is a mouse on me."))
            // .on('pointerdown', () => {
            //     this.showMessage("Agh!");
            //     this.tweens.add({
            //         targets: this.cam,
            //         x: '+=' + this.s,
            //         repeat: 2,
            //         yoyo: true,
            //         ease: 'Sine.inOut',
            //         duration: 100
            //     });
            // });


        // Add finish game text to outro
        this.add.text(900, 1000, "finish the game", {fontSize: '40px'})
        //let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
            .setDepth(1)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('*end game?*');
            })
            .on('pointerdown', () => this.gotoScene('outro'));
        
        const forest2 = this.add.image(0, 0, 'righto');
        forest2.setOrigin(0);
        forest2.setDepth(0);
        //add deer
        //add cam

        // this.graveob.background = this.back;
        // this.deermanob.background = this.back;
        this.cam.background = this.back;
        this.deerob.background = this.back;
        //this.finish.background = this.back;
        // this.deermanob.background = this.back;
    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro');
    }
    preload(){
        this.load.path = "./assets/";
        this.load.audio('logosound', 'logosound.wav');
        this.load.spritesheet('logonah', 'logonah.png', {
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
            'logonah',//imagename
        );
        this.imageObject2.setScale(6); //resize
        this.anims.create({
            key: 'logonah',
            frames: this.anims.generateFrameNumbers('logonah', {
                start: 0,
                end: 16
            }),
            frameRate: 10,
            repeat: 0
        });
        this.imageObject2.anims.play('logonah', true);
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
        this.input.on('pointerdown', () => this.scene.start('title'));
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

class Title extends Phaser.Scene {
    constructor() {
        super('title')
    }
    preload() {
        this.load.path = "./assets/";
        this.load.image('title', 'flowertitle.png');
        this.load.image('poppy', 'poppy.png');
        this.load.spritesheet('cammy', 'cammerz.png', {
            frameWidth: 128,
            frameHeight: 128
        });
    }
    create() {
        this.cameras.main.setBackgroundColor('0x1f2c39');

        this.imageObject = this.add.sprite(
            1500,//x
            700,//y
            'cammy',//imagename
        );
        this.imageObject.setScale(5); //resize
        this.anims.create({
            key: 'cammy',
            frames: this.anims.generateFrameNumbers('cammy', {
                start: 0,
                end: 22
            }),
            frameRate: 10,
            repeat: -1
        });
        this.imageObject.anims.play('cammy', true);

        this.pop = this.add.image(
            800,//x
            900,//y
            'poppy',//imagename
            )
            //this.title.setDepth(1)
            this.pop.setScale(4) //resize

        //this.image.add()
        this.titleob = this.add.image(
            920,//x
            250,//y
            'title',//imagename
            )
            //this.title.setDepth(1)
            this.titleob.setScale(4) //resize
        //this.add.text(50,50, "Adventure awaits!").setFontSize(50);
        //this.add.text(50,100, "Click anywhere to begin.").setFontSize(20);
        const playText = this.add.text(300, 600, 'PLAY', { fontSize: '100px', fill: '#fff' });
        playText.setInteractive();
        playText.on('pointerover', () => {
            playText.setStyle({ fill: '#ff0' });
        });
        playText.on('pointerout', () => {
            playText.setStyle({ fill: '#fff' });
        });
        playText.on('pointerdown', () => {
            this.scene.start('scene1');
        });

        // this.input.on('pointerdown', () => {
        //     this.cameras.main.fade(1000, 0,0,0);
        //     this.time.delayedCall(1000, () => this.scene.start('demo1'));
        // });
    }
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
    preload() {
        this.load.image('poppy', 'poppy.png');
    }
    create() {
        this.pop = this.add.image(
            1000,//x
            900,//y
            'poppy',//imagename
            )
            //this.title.setDepth(1)
            this.pop.setScale(4) //resize

        this.cameras.main.setBackgroundColor('0x1f2c39');
        this.add.text(100, 50, "Thanks for playing\nCredit:\nArt, story, game.js - Brayden Smith\nadventure.js - Adam Smith").setFontSize(50);
        this.add.text(100, 900, "Click anywhere to restart.").setFontSize(20);
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
    scene: [S0, Intro, Title, Scene1, Scene2, Scene3, Scene4, Scene9, Scene5, Scene6, Outro],
    title: "Adventure Game",
});

