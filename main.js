const element1 = document.querySelector("#text-show");
const element2 = document.querySelector("#text-show-2");
const showTextFinal = document.querySelector("#text-show-final");

const textFinal =
  "Suy cho cùng thì em vẫn là 1 đứa luỵ tình, làm đủ trò ảnh hưởng tình cảm của nhiều người khác nhau để gây sự chú ý, không chấp nhận được việc mình đặt nặng tình cảm với 1 lời hứa. Thời gian không chị kế bên, e quen nhiều người 1 lúc, và điều gì cũng là để gây chú ý, lúc nào cũng tỏ ra là 1 badboy. Và lúc chấp nhận được việc mình bị tình cảm đánh bại rồi thì đã trả mọi thứ về đúng vị trí ban đầu. Cố gắng mọi thứ để cuộc sống 2 đứa mình tốt lên, và em đã làm được 1 nửa, đồng thời mất đi tất cả. Những lúc say mèm là lúc e khóc vì muốn được ôm chị và muốn chia sẻ những áp lực, những khổ tâm không thể chia sẻ cho ai khác mình. Điều đầu tiên em muốn ở năm 2023 cũng như những năm trước đó, Anh yêu em";
showTextFinal.textContent = textFinal;


const text1 = "Gửi chị Quỳnh...";
const text2 =
  "Chúc chị có một năm mới vui vẻ, hạnh phúc, thành công hơn, sức khỏe tốt và sớm đạt được những mục tiêu của bản thân. Đôi lúc vì công việc, cuộc sống mà bản thân sẽ bị áp lực, căng thẳng là điều khó tránh khỏi. Khi đó chị cứ nhớ đến bản thân mình đã nỗ lực, đã cố gắng và đã đi xa như nào và hãy tự tin lên, tốt nhất là tự tin hơn cả lúc mình làm được, rồi mọi chuyện sẽ tốt lên, cứ thế dần dần trải qua các thử thách rồi chị cũng sẽ sớm trở thành 1 super QC hoy! 🌟🌟🌟";
  
  let i = 0;

function fadeIn(el) {
  el.style.opacity = 0;

  var tick = function() {
    el.style.opacity = +el.style.opacity + 0.05;

    if (+el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16 )
    }
  };

  tick();
}



const canvas = document.getElementById('fireworks');
const ctx = canvas.getContext('2d');

let particles = [];

function createParticle() {
  let particle = {
    x: Math.random() * canvas.width,
    y: canvas.height + 10,
    vx: Math.random() * 4 - 2,
    vy: Math.random() * -5 - 1,
    color: 'hsl(' + Math.random() * 360 + ', 100%, 50%)'
  };
  particles.push(particle);
}

function updateParticle(particle) {
  particle.x += particle.vx;
  particle.y += particle.vy;
}

function drawParticle(particle) {
// small stars 5 
    ctx.beginPath();
    ctx.fillStyle = particle.color;
    ctx.arc(particle.x, particle.y, 4 , 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < particles.length; i++) {
    updateParticle(particles[i]);
    drawParticle(particles[i]);
  }

  requestAnimationFrame(animate);
}

setInterval(createParticle, 100);

function typeText() {
    if (i < text1.length) {
      element1.textContent += text1.charAt(i);
      fadeIn(element1);
      i++;
      setTimeout(typeText, 200);
    } else {
      i = 0;
      // element1.textContent = "";
      element2.textContent = text2;
      fadeIn(element2);
      setTimeout(() => {
        document.body.style.backgroundImage = "url('bggif.gif')";
        setTimeout(() => {
            animate();
        }, 0);
        // Change background to bggif.gif
      }, 6000);
    }
  }
  
  typeText();