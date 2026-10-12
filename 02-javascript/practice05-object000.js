const player = {
  choice: null,
  setChoice(choice) {
    this.choice = choice;
  },
};
console.log(player.choice);

const computer = {
  choice: null,
  setChoice() {
    const option = ["가위", "바위", "보"];
    this.choice = option[Math.floor(Math.random() * option.length)];
  },
};
console.log(computer.choice);

const game = {
  win: 0,
  draw: 0,
  lose: 0,
  judge(computer, player) {
    const result = { 가위: "보", 바위: "가위", 보: "바위" };
  },
};
