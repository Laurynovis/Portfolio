export function startSnowfall() {
  const canvas = document.getElementById('snowCanvas') as HTMLCanvasElement;
  if (!canvas) return;

  const ctx = canvas.getContext('2d')!;
  let width: number, height: number, snowflakes: any[] = [];

  const updateSize = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  };

  const createFlakes = () => {
    snowflakes = Array.from({ length: 150 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2 + 1,
      d: Math.random() * 0.5 + 0.3,
      w: Math.random() * 0.4 - 0.2,
      o: Math.random() * 0.5 + 0.2
    }));
  };

  const draw = () => {
    if (!document.getElementById('snowCanvas')) return; // Para a execução se o canvas sumir
    ctx.clearRect(0, 0, width, height);
    snowflakes.forEach(f => {
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(220, 220, 220, ${f.o})`;
      ctx.fill();
      f.y += f.d;
      f.x += f.w;
      if (f.y > height) f.y = -10;
      if (f.x > width) f.x = 0;
      if (f.x < 0) f.x = width;
    });
    requestAnimationFrame(draw);
  };

  window.addEventListener('resize', updateSize);
  updateSize();
  createFlakes();
  draw();
}