export default class GameScene extends Phaser.Scene {
  constructor() {
    super("Game");
  }

  create(): void {
    this.add
      .text(400, 300, "Game Scene (ESC for menu)", { fontSize: "20px", color: "#ffffff" })
      .setOrigin(0.5);

    // FIXED: safe check with optional chaining
    this.input.keyboard?.once("keydown-ESC", () => {
      this.scene.start("Menu");
    });
  }
}
