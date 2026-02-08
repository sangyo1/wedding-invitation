// app.js — 스크롤 진행률에 따라 타자기처럼 글자가 찍히는 오프닝

const CONFIG = {
  metaLeft: "wedding.2026",
  metaRight: "hanji typewriter",
  text: `저희는

한옥의 고요한 결처럼
서로의 하루에 조용히 스며들었습니다.

그리고
2026년 5월 16일,
부부가 됩니다.

따뜻한 마음으로
함께해 주시면 감사하겠습니다.
`,
};

const $stage = document.getElementById("typeStage");
const $text = document.getElementById("typeText");
const $cursor = document.getElementById("cursor");
const $progress = document.getElementById("progress");

document.getElementById("metaLeft").textContent = CONFIG.metaLeft;
document.getElementById("metaRight").textContent = CONFIG.metaRight;

let lastLen = -1;

function clamp(n, a, b){ return Math.max(a, Math.min(b, n)); }

function getStageProgress(){
  const rect = $stage.getBoundingClientRect();
  const vh = window.innerHeight;

  const start = vh * 0.15;
  const end = vh * 0.85;

  const total = rect.height - (end - start);
  const passed = (start - rect.top);
  const p = passed / total;

  return clamp(p, 0, 1);
}

function render(){
  const p = getStageProgress();
  if($progress) $progress.style.width = `${Math.round(p * 100)}%`;

  const targetLen = Math.floor(CONFIG.text.length * p);

  if(targetLen !== lastLen){
    $text.textContent = CONFIG.text.slice(0, targetLen);
    lastLen = targetLen;

    if(targetLen >= CONFIG.text.length){
      $cursor.style.opacity = "0";
    }else{
      $cursor.style.opacity = "1";
    }
  }

  requestAnimationFrame(render);
}

render();
