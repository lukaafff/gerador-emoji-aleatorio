const emoji = ["🙂", "😄", "😂", "😇", "😊", "🥳", "🥰", "🤩", "😍", "😜", "🤑", "🤗", "😑", "😮‍💨", "🙄", "😴", "😪", "🥵", "🥶", "😮", "😭", "😱", "😩", "😈", "👺", "🤡", "💩", "👽", "👾", "💘", "❣", "💔", "💜", "👋", "🖕", "🐱", "🧠", "🐷", "🦜", "🍀", "🍄", "🌎", "🌈", "🎈"];

const btnGerar = document.getElementById('btn');
document.getElementById("emoji-container").textContent = emoji[[Math.floor(Math.random() * emoji.length)]];
btnGerar.addEventListener('click' , () => {
    let saida = emoji[Math.floor(Math.random() * emoji.length)];
    document.getElementById("emoji-container").textContent = saida;
})