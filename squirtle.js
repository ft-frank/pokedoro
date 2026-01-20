export function Squirtle(){
    // Draw pixel art Squirtle
    const canvas = document.getElementById('Canvas');
    canvas.innerHTML = ""
    const ctx = canvas.getContext('2d');

    // Squirtle pixel art (simplified, cute version)
    const squirtle = [
        [0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
        [0,0,0,0,1,1,2,2,2,2,2,2,2,2,1,1,0,0,0,0],
        [0,0,0,1,2,2,2,2,2,2,2,2,2,2,2,2,1,0,0,0],
        [0,0,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0,0],
        [0,1,2,2,2,3,3,3,2,2,2,2,3,3,3,2,2,2,1,0],
        [0,1,2,2,3,3,4,3,3,2,2,3,3,4,3,3,2,2,1,0],
        [1,2,2,2,3,4,4,4,3,2,2,3,4,4,4,3,2,2,2,1],
        [1,2,2,2,3,3,4,3,3,2,2,3,3,4,3,3,2,2,2,1],
        [1,2,2,2,2,3,3,3,2,2,2,2,3,3,3,2,2,2,2,1],
        [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
        [1,2,2,2,2,2,5,5,5,5,5,5,5,2,2,2,2,2,2,1],
        [1,2,2,2,2,2,2,5,5,5,5,5,2,2,2,2,2,2,2,1],
        [0,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0],
        [0,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0],
        [0,0,1,2,2,2,2,2,2,6,6,2,2,2,2,2,2,1,0,0],
        [0,0,0,1,2,2,2,2,6,6,6,6,2,2,2,2,1,0,0,0],
        [0,0,0,0,1,1,2,2,2,6,6,2,2,2,1,1,0,0,0,0],
        [0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ];

    const colors = {
        0: '#00000000',  // transparent
        1: '#2A5F80',    // dark outline
        2: '#7DD3FC',    // light blue body
        3: '#FFFFFF',    // white eyes
        4: '#1A1A1A',    // black pupils
        5: '#FF6B9D',    // pink mouth
        6: '#5AB9EA'     // shell swirl
    };

    function drawSquirtle() {
        const scale = 4;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        squirtle.forEach((row, y) => {
            row.forEach((pixel, x) => {
                if (pixel !== 0) {
                    ctx.fillStyle = colors[pixel];
                    ctx.fillRect(x * scale, y * scale, scale, scale);
                }
            });
        });
    }

return {draw:drawSquirtle()}

}


