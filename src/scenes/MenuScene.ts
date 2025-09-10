export default class MenuScene extends Phaser.Scene {
  constructor() {
    super("Menu");
  }

  create(): void {
    this.add
      .text(400, 220, "Maze Runner (TS)", { fontSize: "40px", color: "#ffffff" })
      .setOrigin(0.5);

    this.add
      .text(400, 320, "Press SPACE to Start", { fontSize: "18px", color: "#bbbbbb" })
      .setOrigin(0.5);

    // FIXED: use optional chaining so TS knows it won't crash
    this.input.keyboard?.once("keydown-SPACE", () => {
      this.scene.start("Game");
    });
  }
}
