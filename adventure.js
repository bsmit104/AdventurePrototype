class AdventureScene extends Phaser.Scene {

    init(data) {
        this.inventory = data.inventory || [];
    }

    constructor(key, name) {
        super(key);
        this.name = name;
    }

    create() {
        this.transitionDuration = 1000;

        this.w = this.game.config.width;
        this.h = this.game.config.height;
        this.s = this.game.config.width * 0.01;

        this.cameras.main.setBackgroundColor('#444');
        this.cameras.main.fadeIn(this.transitionDuration, 0, 0, 0);

        this.add.rectangle(this.w * 0.75, 0, this.w * 0.25, this.h).setOrigin(0, 0).setFillStyle(0);
        this.add.text(this.w * 0.75 + this.s, this.s)
            .setText(this.name)
            .setStyle({ fontSize: `${3 * this.s}px` })
            .setWordWrapWidth(this.w * 0.25 - 2 * this.s);
        
        this.messageBox = this.add.text(this.w * 0.75 + this.s, this.h * 0.33)
            .setStyle({ fontSize: `${2 * this.s}px`, color: '#eea' })
            .setWordWrapWidth(this.w * 0.25 - 2 * this.s);

        this.inventoryBanner = this.add.text(this.w * 0.75 + this.s, this.h * 0.66)
            .setStyle({ fontSize: `${2 * this.s}px` })
            .setText("Inventory")
            .setAlpha(0);

        this.inventoryTexts = [];
        this.updateInventory();

        this.add.text(this.w-3*this.s, this.h-3*this.s, "📺")
            .setStyle({ fontSize: `${2 * this.s}px` })
            .setInteractive({useHandCursor: true})
            .on('pointerover', () => this.showMessage('Fullscreen?'))
            .on('pointerdown', () => {
                if (this.scale.isFullscreen) {
                    this.scale.stopFullscreen();
                } else {
                    this.scale.startFullscreen();
                }
            });

        this.onEnter();

    }

    showMessage(message) {
        this.messageBox.setText(message);
        this.tweens.add({
            targets: this.messageBox,
            alpha: { from: 1, to: 0 },
            easing: 'Quintic.in',
            duration: 4 * this.transitionDuration
        });
    }

    // showMessagelong(message) {
    //     this.messageBox.setText(message);
    //     this.tweens.add({
    //         targets: this.messageBox,
    //         alpha: { from: 1, to: 0 },
    //         easing: 'Quintic.in',
    //         duration: 20 * this.transitionDuration,
    //         onComplete: () => {
    //             this.tweens.add({
    //                 targets: this.inventoryBanner,
    //                 alpha: 1,
    //                 duration: this.transitionDuration
    //             });
    //         }
    //     });
    // }
    showMessagered(message) {
        this.messageBox.setText(message);
        this.messageBox.setTint(0xff0000); // set the tint to red
        this.tweens.add({
            targets: this.messageBox,
            alpha: { from: 1, to: 0 },
            easing: 'Quintic.in',
            duration: 4 * this.transitionDuration
        });
    }

    showMessagelong(message) {
        this.messageBox.setText(message);
        this.messageBox.setStyle({ fontSize: '25px' });
        this.tweens.add({
            targets: this.messageBox,
            alpha: { from: 1, to: 0 },
            easing: 'Quintic.in',
            duration: 15 * this.transitionDuration
        });
    }

    updateInventory() {
        if (this.inventory.length > 0) {
            this.tweens.add({
                targets: this.inventoryBanner,
                alpha: 1,
                duration: this.transitionDuration
            });
        } else {
            this.tweens.add({
                targets: this.inventoryBanner,
                alpha: 0,
                duration: this.transitionDuration
            });
        }
        if (this.inventoryTexts) {
            this.inventoryTexts.forEach((t) => t.destroy());
        }
        this.inventoryTexts = [];
        let h = this.h * 0.66 + 3 * this.s;
        this.inventory.forEach((e, i) => {
            let text = this.add.text(this.w * 0.75 + 2 * this.s, h, e)
                .setStyle({ fontSize: `${1.5 * this.s}px` })
                .setWordWrapWidth(this.w * 0.75 + 4 * this.s);
            h += text.height + this.s;
            this.inventoryTexts.push(text);
        });
    }

    hasItem(item) {
        return this.inventory.includes(item);
    }

    gainItem(item) {
        if (this.inventory.includes(item)) {
            console.warn('gaining item already held:', item);
            return;
        }
        this.inventory.push(item);
        this.updateInventory();
        for (let text of this.inventoryTexts) {
            if (text.text == item) {
                this.tweens.add({
                    targets: text,
                    x: { from: text.x - 20, to: text.x },
                    alpha: { from: 0, to: 1 },
                    ease: 'Cubic.out',
                    duration: this.transitionDuration
                });
            }
        }
    }

    loseItem(item) {
        if (!this.inventory.includes(item)) {
            console.warn('losing item not held:', item);
            return;
        }
        for (let text of this.inventoryTexts) {
            if (text.text == item) {
                this.tweens.add({
                    targets: text,
                    x: { from: text.x, to: text.x + 20 },
                    alpha: { from: 1, to: 0 },
                    ease: 'Cubic.in',
                    duration: this.transitionDuration
                });
            }
        }
        this.time.delayedCall(500, () => {
            this.inventory = this.inventory.filter((e) => e != item);
            this.updateInventory();
        });
    }

    gotoScene(key) {
        this.cameras.main.fade(this.transitionDuration, 0, 0, 0);
        this.time.delayedCall(this.transitionDuration, () => {
            this.scene.start(key, { inventory: this.inventory });
        });
    }

    // gotoScenePan(key) {
    //     // Pan the camera while shaking and fading out the old scene
    //     this.cameras.main.pan(this.cameras.main.centerX + 1000, this.transitionDuration, 'Linear');
    //     this.cameras.main.shake(this.transitionDuration / 2, 0.02);
      
    //     // Start the new scene and pan in while shaking the camera
    //     this.time.delayedCall(this.transitionDuration, () => {
    //       this.scene.start(key, { inventory: this.inventory });
    //       this.cameras.main.pan(this.cameras.main.centerX, this.transitionDuration, 'Linear');
    //       this.cameras.main.shake(this.transitionDuration / 2, 0.02);
    //       this.cameras.main.resetFX();
    //     });
        // this.cameras.main.fade(this.transitionDuration, 0, 0, 0);
        // this.time.delayedCall(this.transitionDuration, () => {
        //     this.scene.start(key, { inventory: this.inventory });
        // });
        // this.cameras.main.fadeOut(this.transitionDuration, 0, 0, 0, (camera, progress) => {
        //     camera.scrollX = progress * this.cameras.main.width;
        // });
        
        // this.time.delayedCall(this.transitionDuration, () => {
        //     this.scene.start(key, { inventory: this.inventory });
        // });
    //}

    onEnter() {
        console.warn('This AdventureScene did not implement onEnter():', this.constructor.name);
    }
/////////////mine////////////////
    goBack() {
        const previousScene = this.scene.getPreviousScene();
        if (previousScene) {
          this.scene.stop(this.scene.key); // Stop the current scene
          this.scene.run(previousScene.scene.key); // Run the previous scene
        }
      }
}