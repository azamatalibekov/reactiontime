export class World {
    constructor() {
        this.words = ["python", "class", "constructor", "loop", "function"];
    }

    word = () => {
        this.words.push(new Mobs(Math.random() * window.innerWidth, Math.random() * window.innerHeight, this.player.x, this.player.y))
    };

    move = (keys) => {
        // Для каждого ключа в объекте
        Object.keys(keys).map((key) => {
            // Если нажата кнопка
            if (keys[key]) {
                // Взависимости от того какая кнопка
                switch (key) {
                    case "space":
                        this.player.go_left();
                        break;
                }
            }
        });

    };

}
