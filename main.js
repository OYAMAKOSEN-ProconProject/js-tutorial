//ゲームエリアの管理
const MainCanvas = document.getElementById("MainCanvas");
const MainContext = MainCanvas.getContext("2d");
const GameArea = new CanvasManager(new Vector2(1280, 720), MainCanvas);
const keyInput = new keyInputManager();
GameArea.refresh();

//回り続ける小山高専
let oyamaLogo = new CanvasComponents({
  ctx: MainContext,
  img: "./assets/Oyama_logo.png",
  position: new Vector2(GameArea.x / 2, GameArea.y / 4),
});
oyamaLogo.update = function () {
<<<<<<< HEAD
  this.rotate += 77;
  this.position.x += 25
  this.position.y += this.motion.y
  this.motion.y += 3
=======
  this.rotate -= 10;
  this.position.x += 6;
  this.motion.y += 1;
  this.position.y += this.motion.y;
>>>>>>> upstream/main
};

function update() {
  // your code goes here
}

//ゲームループの定義・開始
const GameLoop = new GameLoopManager(() => {
  update();
  MainContext.clearRect(0, 0, GameArea.x, GameArea.y);
  oyamaLogo.render();
  oyamaLogo.update();
}, 30);
GameLoop.start();
