const canvas = document.createElement("canvas");
canvas.id = "particles";
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");
resize();
window.onresize = resize;

let dots = Array.from({length:80},()=>({
    x:Math.random()*innerWidth,
    y:Math.random()*innerHeight,
    vx:(Math.random()-.5)*.3,
    vy:(Math.random()-.5)*.3
}));

function resize(){
    canvas.width = innerWidth;
    canvas.height = innerHeight;
}

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    dots.forEach(d=>{
        d.x+=d.vx; d.y+=d.vy;
        if(d.x<0||d.x>canvas.width) d.vx*=-1;
        if(d.y<0||d.y>canvas.height) d.vy*=-1;

        dots.forEach(o=>{
            let dist=Math.hypot(d.x-o.x,d.y-o.y);
            if(dist<120){
                ctx.strokeStyle="rgba(212,175,55,0.08)";
                ctx.beginPath();
                ctx.moveTo(d.x,d.y);
                ctx.lineTo(o.x,o.y);
                ctx.stroke();
            }
        });
    });
    requestAnimationFrame(draw);
}
draw();
