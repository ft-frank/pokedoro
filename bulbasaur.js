export function Bulbasaur() {
    
        const canvas = document.getElementById('Canvas');
        canvas.innerHTML = ""
        const ctx = canvas.getContext('2d');

        // Bulbasaur pixel art
        const bulbasaur = [
            [0,0,0,0,0,0,0,0,6,6,6,6,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,6,6,7,7,7,7,6,6,0,0,0,0,0,0],
            [0,0,0,0,0,6,7,7,7,6,6,7,7,7,6,0,0,0,0,0],
            [0,0,0,1,1,6,7,7,6,6,6,6,7,7,6,1,1,0,0,0],
            [0,0,1,2,2,6,6,6,6,6,6,6,6,6,6,2,2,1,0,0],
            [0,0,1,2,2,3,3,3,2,2,2,2,3,3,3,2,2,1,0,0],
            [0,1,2,2,3,3,4,3,3,2,2,3,3,4,3,3,2,2,1,0],
            [0,1,2,2,3,4,4,4,3,2,2,3,4,4,4,3,2,2,1,0],
            [0,1,2,2,3,3,4,3,3,2,2,3,3,4,3,3,2,2,1,0],
            [0,1,2,2,2,3,3,3,2,2,2,2,3,3,3,2,2,2,1,0],
            [0,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0],
            [0,1,2,2,2,2,5,5,5,5,5,5,5,2,2,2,2,2,1,0],
            [0,1,2,2,2,2,2,5,5,5,5,5,2,2,2,2,2,2,1,0],
            [0,0,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0,0],
            [0,0,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,0,0],
            [0,0,0,1,2,2,2,2,2,2,2,2,2,2,2,2,1,0,0,0],
            [0,0,0,0,1,1,2,2,2,2,2,2,2,2,1,1,0,0,0,0],
            [0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        ];

        const colors = {
            0: '#00000000',  // transparent
            1: '#1D5A30',    // dark outline
            2: '#7DD87C',    // light green body
            3: '#FFFFFF',    // white eyes
            4: '#1A1A1A',    // black pupils
            5: '#A8E6CF',    // light belly
            6: '#3FA55C',    // dark green bulb
            7: '#6FD68F'     // light green bulb spots
        };

        function drawBulbasaur() {
            const scale = 4;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            bulbasaur.forEach((row, y) => {
                row.forEach((pixel, x) => {
                    if (pixel !== 0) {
                        ctx.fillStyle = colors[pixel];
                        ctx.fillRect(x * scale, y * scale, scale, scale);
                    }
                });
            });
        }

        return drawBulbasaur();
}

// Draw pixel art Bulbasaur
        