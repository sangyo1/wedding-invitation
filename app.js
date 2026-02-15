const CONFIG = {
  groomName: "백상윤",
  brideName: "이다흰",

  // ✅ 실제 순간(UTC 기준으로도 정확) + 표시는 항상 서울시간으로 표시
  weddingISO: "2026-06-07T16:00:00+09:00",
  venueName: "휘겸재",
  venueAddr: "서울 종로구 북촌로 46-3 가회동 휘겸재",

  // ✅ 마음 전하실 곳 (여러명 가능)
  gift: {
    groom: [
      { label: "신랑", kind: "venmo", value: "@SangYoon-Back" }
    ],
    bride: [
      { label: "신부 어머니", kind: "bank", bank: "국민은행", account: "718202-01-081923", holder: "최윤정" },
      { label: "신부 아버지", kind: "bank", bank: "국민은행", account: "729601-04-155727", holder: "이용식" },
      { label: "신부",       kind: "bank", bank: "신한은행", account: "110-449-407858", holder: "이다흰" }
    ]
  },

  guideKO: `지하철
3호선 안국역 하차, 2번출구에서 420m 직진 후 카페 로우루프 오른쪽에 위치한 대문으로 입장

버스
버스 이용시 종로02 마을버스 "북촌한옥마을입구. 정세권활동터" 하차

자가용
내비게이션 이용시 "휘겸재" 또는 "로우루프"를 입력하세요.
주차는 "현대 계동사옥 주차장(서울 종로구 율곡로 75 현대건설빌딩)"에 가능하나,
주차장이 협소하므로 대중교통을 이용하시는 것이 훨씬 더 편리합니다.

*본식 당일에는 식장 사정으로 화환 출입이 어렵습니다.`,

  guideEN: `Subway
Line 3 Anguk Station → Exit 2. Walk about 420m straight, then enter through the gate on the right side of Cafe Low Roof.

Bus
Take Jongno 02 village bus and get off at "Bukchon Hanok Village Entrance · Jeongse-gwon Activity Site".

Car
In your navigation app, search for "Hwigyeomjae" or "Low Roof".
Parking is available at "Hyundai Gyedong Office Parking (75 Yulgok-ro, Jongno-gu, Seoul)",
but spaces are limited—public transportation is strongly recommended.

*On the wedding day, flower wreath deliveries may be restricted due to venue policy.`
};

// ✅ RSVP + Guestbook 공용 Web App URL
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby-_7sqUq3JEJfn2ve9j4ApI347IyjchsSFhi6Ol8FwS0mcMuylq2YL51UFPQfbK_W8cQ/exec";

const I18N = {
  ko: {
    hero_title: "우리 결혼합니다",
    sec_date_cap: "날짜",
    dday_label: "예식까지",
    btn_add_calendar: "캘린더에 추가",

    sec_invite_cap: "초대",
    sec_couple_cap: "신랑 · 신부",
    sec_location_cap: "오시는 길",

    tab_map: "약도",
    tab_guide: "오시는길",
    btn_toggle_guide_open: "오시는길 열기",
    btn_toggle_guide_close: "오시는길 닫기",

    btn_copy_addr: "주소 복사",

    rsvp_title: "참석 의사 전달",
    rsvp_groom: "신랑측",
    rsvp_bride: "신부측",
    rsvp_name: "이름",
    rsvp_attend: "참석",
    rsvp_attend_yes: "참석",
    rsvp_attend_no: "불참",
    rsvp_submit: "제출",
    rsvp_ok: "제출되었습니다. 감사합니다!",
    rsvp_fail: "제출에 실패했어요. 잠시 후 다시 시도해 주세요.",

    sec_guestbook_cap: "방명록",
    gb_name: "이름",
    gb_pass: "비밀번호",
    gb_msg: "메시지",
    gb_submit: "남기기",
    gb_clear: "지우기",
    gb_name_ph: "예: 홍길동",
    gb_pass_ph: "삭제용 비밀번호",
    gb_msg_ph: "축하 메시지를 남겨주세요 (200자)",
    gb_note: "* 본인이 쓴 글은 “삭제”를 누른 뒤, 작성 시 입력한 비밀번호로 삭제할 수 있어요.",

    // ✅ 마음 전하실 곳
    sec_gift_cap: "마음 전하실 곳",
    gift_message:
      "멀리서도 축하의 마음을 전하고 싶으신 분들을 위해 안내드립니다.\n보내주시는 소중한 마음에 진심으로 감사드리며, 따뜻한 축하 오래 간직하겠습니다.",
    gift_groom_side: "신랑측",
    gift_bride_side: "신부측",
    btn_copy: "복사",
    toast_copied: "복사됐어요 📋",
    gift_note: "* 복사 버튼을 누르면 계좌/아이디가 클립보드에 저장됩니다.",

    invite_message:
      "중학교 시절에 만나 시간이 흘러 \n이렇게 한자리에 서게 되었습니다.\n\n한 치 앞도 알 수 없는 인생이지만\n서로를 향한 한결같은 믿음으로\n앞으로의 시간을 함께하려 합니다.\n\n저희의 새로운 시작을 함께해 주시면\n행복한 마음으로 간직하겠습니다.\n\n건강하고 행복하게\n이 마음 간직하며 살아가겠습니다.\n\n저희의 새로운 시작을 함께 축하해 주세요.",

    weekShort: ["일","월","화","수","목","금","토"],

    toast_copy_addr: "주소가 복사됐어요 📍",
    toast_saved: "방명록이 저장됐어요 ✍️",

    ask_pw: "삭제 비밀번호를 입력해 주세요",
    del_ok: "삭제되었습니다.",
    del_fail: "비밀번호가 일치하지 않아요.",
    empty_gb: "첫 메시지를 남겨주세요 🙂",
    dday_done: "오늘은 결혼식 날입니다 💍",
  },

  en: {
    hero_title: "We Are Getting Married",
    sec_date_cap: "Date",
    dday_label: "Time left",
    btn_add_calendar: "Add to Calendar",

    sec_invite_cap: "Invitation",
    sec_couple_cap: "Couple",
    sec_location_cap: "Location",

    tab_map: "Map",
    tab_guide: "Directions",
    btn_toggle_guide_open: "Show Directions",
    btn_toggle_guide_close: "Hide Directions",

    btn_copy_addr: "Copy Address",

    rsvp_title: "RSVP",
    rsvp_groom: "Groom side",
    rsvp_bride: "Bride side",
    rsvp_name: "Name",
    rsvp_attend: "Attendance",
    rsvp_attend_yes: "Attending",
    rsvp_attend_no: "Not attending",
    rsvp_submit: "Submit",
    rsvp_ok: "Submitted. Thank you!",
    rsvp_fail: "Failed to submit. Please try again.",

    sec_guestbook_cap: "Guestbook",
    gb_name: "Name",
    gb_pass: "Password",
    gb_msg: "Message",
    gb_submit: "Post",
    gb_clear: "Clear",
    gb_name_ph: "e.g. Alex Kim",
    gb_pass_ph: "Password for deletion",
    gb_msg_ph: "Leave your message (max 200 chars)",
    gb_note: "* To delete your post, tap “Delete” and enter the password you used.",

    // ✅ gifts
    sec_gift_cap: "With Love",
    gift_message:
      "For those who would like to send their congratulations from a far, here are the details.\nThank you sincerely for your warm wishes—we will cherish your kindness.",
    gift_groom_side: "Groom side",
    gift_bride_side: "Bride side",
    btn_copy: "Copy",
    toast_copied: "Copied 📋",
    gift_note: "* Tap “Copy” to copy the details to your clipboard.",

    invite_message:
      "We first met in middle school, and over time, our journey has brought us to this moment.\n\nThough life is uncertain,\nwe choose to walk forward together\nwith unwavering trust in one another.\n\nIf you join us for this new beginning,\nwe will cherish it with grateful hearts.\n\nWe will hold on to this love\nand live with health and happiness.\n\nPlease celebrate the beginning of our new chapter with us.",

    weekShort: ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],

    toast_copy_addr: "Address copied 📍",
    toast_saved: "Saved ✍️",

    ask_pw: "Enter password to delete",
    del_ok: "Deleted.",
    del_fail: "Password does not match.",
    empty_gb: "Be the first to leave a message 🙂",
    dday_done: "It’s our wedding day 💍",
  }
};

let LANG = "ko";
let RSVP_SIDE = "groom";
const SEOUL_TZ = "Asia/Seoul";

const $ = (id)=>document.getElementById(id);
const $$ = (sel)=>document.querySelectorAll(sel);

/* ---------- helpers ---------- */
function escText(s){
  return String(s)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

function toast(msg){
  let t = document.getElementById("toast");
  if(!t){
    t = document.createElement("div");
    t.id = "toast";
    t.style.position = "fixed";
    t.style.left = "50%";
    t.style.bottom = "22px";
    t.style.transform = "translateX(-50%)";
    t.style.background = "rgba(0,0,0,.82)";
    t.style.color = "#fff";
    t.style.padding = "10px 14px";
    t.style.borderRadius = "999px";
    t.style.fontWeight = "400";
    t.style.fontSize = "13px";
    t.style.zIndex = "9999";
    t.style.opacity = "0";
    t.style.transition = "opacity .18s ease";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.opacity = "1";
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(()=>{ t.style.opacity = "0"; }, 1300);
}

/* ✅ 오시는길: 제목만 초록으로 보이게 HTML로 변환 */
function formatGuide(text){
  const esc = (s) =>
    s.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");

  const lines = esc(text).split("\n");
  return lines.map(line=>{
    const t = line.trim();
    if (t === "지하철" || t === "버스" || t === "자가용" || t === "Subway" || t === "Bus" || t === "Car"){
      return `<div class="guide-head">${t}</div>`;
    }
    if(t === "") return `<div class="guide-gap"></div>`;
    return `<div class="guide-line">${line}</div>`;
  }).join("");
}

/* ✅ 서울(Asia/Seoul) 기준으로 날짜/시간을 무조건 표시 */
function formatWeddingMeta(){
  const d = new Date(CONFIG.weddingISO);

  if(LANG === "ko"){
    const weekday = new Intl.DateTimeFormat("ko-KR", { timeZone: SEOUL_TZ, weekday: "long" }).format(d);
    const y = new Intl.DateTimeFormat("ko-KR", { timeZone: SEOUL_TZ, year: "numeric" }).format(d);
    const m = new Intl.DateTimeFormat("ko-KR", { timeZone: SEOUL_TZ, month: "numeric" }).format(d);
    const da = new Intl.DateTimeFormat("ko-KR", { timeZone: SEOUL_TZ, day: "numeric" }).format(d);
    const time = new Intl.DateTimeFormat("ko-KR", { timeZone: SEOUL_TZ, hour: "numeric", minute: "2-digit", hour12: true }).format(d);
    return `${y} ${m} ${da} ${weekday} ${time} · ${CONFIG.venueName}`;
  }else{
    const date = new Intl.DateTimeFormat("en-US", { timeZone: SEOUL_TZ, year:"numeric", month:"2-digit", day:"2-digit" }).format(d);
    const weekday = new Intl.DateTimeFormat("en-US", { timeZone: SEOUL_TZ, weekday:"long" }).format(d);
    const time = new Intl.DateTimeFormat("en-US", { timeZone: SEOUL_TZ, hour:"numeric", minute:"2-digit", hour12:true }).format(d);
    return `${date} (${weekday}) ${time} KST · ${CONFIG.venueName}`;
  }
}

/* ✅ 캘린더: 월/일을 서울 기준으로 가져오기 */
function getSeoulParts(){
  const d = new Date(CONFIG.weddingISO);
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: SEOUL_TZ,
    year: "numeric", month: "2-digit", day: "2-digit"
  }).formatToParts(d);

  const get = (type) => parts.find(p => p.type === type)?.value;
  const y = Number(get("year"));
  const m = Number(get("month"));
  const da = Number(get("day"));
  return { y, m, da };
}

/* ---------- i18n ---------- */
function setI18n(lang){
  LANG = lang;

  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    const val = I18N[LANG][key];
    if(typeof val === "string") el.textContent = val;
  });

  $("inviteMessage").textContent = I18N[LANG].invite_message;
  $("gbName").placeholder = I18N[LANG].gb_name_ph || "";
  $("gbPass").placeholder = I18N[LANG].gb_pass_ph || "";
  $("gbMsg").placeholder = I18N[LANG].gb_msg_ph || "";

  // guide는 innerHTML
  $("guideText").innerHTML = formatGuide((LANG === "ko") ? CONFIG.guideKO : CONFIG.guideEN);
  updateGuideToggleLabel();

  // 부모님 표기(요소가 있을 때만)
  const coupleParentsEl = $("coupleParents");
  if(coupleParentsEl){
    coupleParentsEl.textContent = (LANG==="ko") ? CONFIG.coupleParentsKO : CONFIG.coupleParentsEN;
  }

  updateHeroMeta();
  buildMonthCalendar();

  // ✅ gift 리렌더
  renderGiftList("giftGroomList", CONFIG.gift?.groom || []);
  renderGiftList("giftBrideList", CONFIG.gift?.bride || []);

  // ✅ 방명록 언어 변경 시 재렌더
  guestbookLoadAndRender().catch(()=>{});
}

/* ---------- UI updates ---------- */
function updateHeroMeta(){
  $("heroMeta").textContent = formatWeddingMeta();

  const { y, m, da } = getSeoulParts();

  $("calMonthYear").textContent = `${y}. ${m}`;
  $("calTimeLine").textContent = (LANG==="ko")
    ? `${y}년 ${m}월 ${da}일 ${new Intl.DateTimeFormat("ko-KR",{timeZone:SEOUL_TZ, weekday:"long"}).format(new Date(CONFIG.weddingISO))} ${new Intl.DateTimeFormat("ko-KR",{timeZone:SEOUL_TZ, hour:"numeric", minute:"2-digit", hour12:true}).format(new Date(CONFIG.weddingISO))}`
    : `${String(m).padStart(2,"0")}/${String(da).padStart(2,"0")}/${y} ${new Intl.DateTimeFormat("en-US",{timeZone:SEOUL_TZ, weekday:"long"}).format(new Date(CONFIG.weddingISO))} ${new Intl.DateTimeFormat("en-US",{timeZone:SEOUL_TZ, hour:"numeric", minute:"2-digit", hour12:true}).format(new Date(CONFIG.weddingISO))} KST`;

  $("focusText").textContent = (LANG==="ko")
    ? `${CONFIG.groomName} ${CONFIG.brideName} 결혼식`
    : `${CONFIG.groomName} & ${CONFIG.brideName} Wedding`;
}

function buildMonthCalendar(){
  const d = new Date(CONFIG.weddingISO);
  const { y, m, da: targetDay } = getSeoulParts();

  // month-1 because JS month index
  const first = new Date(y, m-1, 1);
  const last = new Date(y, m, 0);

  const daysInMonth = last.getDate();
  const startDow = first.getDay();

  const grid = $("calGrid");
  grid.innerHTML = "";

  const dow = I18N[LANG].weekShort;
  for(let i=0;i<7;i++){
    const cell = document.createElement("div");
    cell.className = "cal-cell cal-dow";
    cell.textContent = dow[i];
    grid.appendChild(cell);
  }

  for(let i=0;i<startDow;i++){
    const cell = document.createElement("div");
    cell.className = "cal-cell is-empty";
    grid.appendChild(cell);
  }

  for(let day=1; day<=daysInMonth; day++){
    const cell = document.createElement("div");
    cell.className = "cal-cell is-day";
    cell.textContent = String(day);
    if(day === targetDay) cell.classList.add("is-target");
    grid.appendChild(cell);
  }
}

function startCountdown(){
  const wedding = new Date(CONFIG.weddingISO); // 실제 순간
  const pill = $("ddayPill");
  const text = $("ddayText");

  function tick(){
    const now = new Date();
    const diff = wedding - now;

    if(diff <= 0){
      pill.textContent = "D-day";
      text.textContent = I18N[LANG].dday_done;
      return;
    }

    const total = Math.floor(diff/1000);
    const days = Math.floor(total / (3600*24));
    const hours = Math.floor((total % (3600*24)) / 3600);
    const mins = Math.floor((total % 3600) / 60);
    const secs = total % 60;

    pill.textContent = `D-${days}`;
    text.textContent = `${days}일 ${String(hours).padStart(2,"0")}:${String(mins).padStart(2,"0")}:${String(secs).padStart(2,"0")}`;
  }

  tick();
  setInterval(tick, 1000);
}

function updateGuideToggleLabel(){
  const btn = $("btnToggleGuide");
  if(!btn) return;
  const expanded = btn.getAttribute("aria-expanded") === "true";
  btn.textContent = expanded
    ? (I18N[LANG].btn_toggle_guide_close || "Hide Directions")
    : (I18N[LANG].btn_toggle_guide_open || "Show Directions");
}

function setupGuideToggle(){
  const btn = $("btnToggleGuide");
  const panel = $("panel-guide");
  if(!btn || !panel) return;

  btn.addEventListener("click", ()=>{
    const expanded = btn.getAttribute("aria-expanded") === "true";
    const next = !expanded;
    btn.setAttribute("aria-expanded", String(next));
    panel.classList.toggle("show", next);
    updateGuideToggleLabel();
  });
}

/* ---------- Gift render ---------- */
function renderGiftList(containerId, items){
  const box = document.getElementById(containerId);
  if(!box) return;

  const html = (items || []).map((it)=>{
    let copyText = "";
    let mainText = "";
    let subText = "";

    if(it.kind === "venmo"){
      mainText = `Venmo: ${it.value}`;
      copyText = `${it.value}`;
    }else{
      mainText = `${it.bank} ${it.account}`;
      copyText = `${it.bank} ${it.account} (${it.holder})`;
      subText = it.holder ? `예금주: ${it.holder}` : "";
    }

    return `
      <div class="acct">
        <div class="acct-top">
          <div class="acct-title">${escText(it.label || "")}</div>
          <button class="btn ghost acct-copy" type="button" data-copy="${escText(copyText)}">
            ${escText(I18N[LANG].btn_copy || "Copy")}
          </button>
        </div>
        <div class="acct-main">${escText(mainText)}</div>
        ${subText ? `<div class="acct-sub">${escText(subText)}</div>` : ""}
      </div>
    `;
  }).join("");

  box.innerHTML = html;

  box.querySelectorAll(".acct-copy").forEach(btn=>{
    btn.addEventListener("click", async ()=>{
      const text = btn.getAttribute("data-copy") || "";
      try{
        await navigator.clipboard.writeText(text);
        toast(I18N[LANG].toast_copied || "Copied");
      }catch{
        alert(LANG==="ko" ? "복사에 실패했어요." : "Failed to copy.");
      }
    });
  });
}

/* ---------- actions ---------- */
function setupActions(){
  $("groomName").textContent = CONFIG.groomName;
  $("brideName").textContent = CONFIG.brideName;

  $("venueName").textContent = CONFIG.venueName;
  $("venueAddr").textContent = CONFIG.venueAddr || "";

  $("btnCopyAddr").addEventListener("click", async ()=>{
    try{
      await navigator.clipboard.writeText(`${CONFIG.venueName} ${CONFIG.venueAddr}`.trim());
      toast(I18N[LANG].toast_copy_addr);
    }catch{ alert(LANG==="ko" ? "복사에 실패했어요." : "Failed to copy."); }
  });

  $("btnAddCalendar").addEventListener("click", downloadICS);

  setupGuideToggle();
  setupRsvp();

  // gift 최초 렌더
  renderGiftList("giftGroomList", CONFIG.gift?.groom || []);
  renderGiftList("giftBrideList", CONFIG.gift?.bride || []);
}

/* ---------- RSVP ---------- */
function setupRsvp(){
  $$(".seg").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      $$(".seg").forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      RSVP_SIDE = btn.dataset.side;
      $("rsvpStatus").textContent = "";
    });
  });

  $("rsvpForm").addEventListener("submit", async (e)=>{
    e.preventDefault();

    if(!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL.includes("PASTE_YOUR")){
      $("rsvpStatus").textContent = "⚠️ app.js에서 GOOGLE_SCRIPT_URL을 설정해 주세요.";
      return;
    }

    const payload = {
      type: "rsvp",
      side: RSVP_SIDE,
      name: $("rsvpName").value.trim(),
      attend: $("rsvpAttend").value,
      ts: new Date().toISOString(),
      page: location.href
    };

    const btn = $("btnRsvpSubmit");
    btn.disabled = true;
    $("rsvpStatus").textContent = (LANG==="ko") ? "전송 중…" : "Sending…";

    try{
      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type":"text/plain;charset=utf-8" },
        body: JSON.stringify(payload)
      });
      if(!res.ok) throw new Error("bad status");

      $("rsvpStatus").textContent = I18N[LANG].rsvp_ok;
      $("rsvpName").value = "";
      $("rsvpAttend").value = "attend";
    }catch{
      $("rsvpStatus").textContent = I18N[LANG].rsvp_fail;
    }finally{
      btn.disabled = false;
    }
  });
}

/* =========================
   Guestbook: Google Sheet 버전
========================= */
async function sha256(text){
  const enc = new TextEncoder().encode(text);
  const buf = await crypto.subtle.digest("SHA-256", enc);
  return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,"0")).join("");
}
function escHtml(s){
  return String(s)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

async function guestbookApi(action, payload = {}){
  if(!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL.includes("PASTE_YOUR")){
    throw new Error("GOOGLE_SCRIPT_URL not set");
  }

  const body = { type: "guestbook", action, ...payload };

  const res = await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type":"text/plain;charset=utf-8" },
    body: JSON.stringify(body)
  });

  if(!res.ok) throw new Error("network");
  return res.json();
}

async function guestbookLoadAndRender(){
  const box = $("gbList");
  if(!box) return;

  box.innerHTML = `<p class="footnote">${LANG==="ko" ? "불러오는 중…" : "Loading…"}</p>`;

  const data = await guestbookApi("list");
  const items = data.items || [];

  if(!items.length){
    box.innerHTML = `<p class="footnote">${escHtml(I18N[LANG].empty_gb)}</p>`;
    return;
  }

  const delText = (LANG === "ko") ? "삭제" : "Delete";

  box.innerHTML = items.map(item=>{
    const dt = new Date(item.createdAt);
    const when = isNaN(dt.getTime()) ? "" : dt.toLocaleString();
    return `
      <div class="gb-item" data-id="${escHtml(item.id)}">
        <div class="gb-meta">
          <span>${escHtml(item.name)} · ${escHtml(when)}</span>
          <button class="gb-del" type="button">${delText}</button>
        </div>
        <div class="gb-msg">${escHtml(item.message)}</div>
      </div>
    `;
  }).join("");

  box.querySelectorAll(".gb-item").forEach(card=>{
    const id = card.dataset.id;

    card.querySelector(".gb-del").addEventListener("click", async ()=>{
      const pw = prompt(I18N[LANG].ask_pw);
      if(pw === null) return;

      try{
        const passHash = await sha256(pw);
        const r = await guestbookApi("delete", { id, passHash });

        if(!r.ok){
          alert(I18N[LANG].del_fail);
          return;
        }

        toast(I18N[LANG].del_ok);
        await guestbookLoadAndRender();
      }catch{
        alert(LANG==="ko" ? "삭제에 실패했어요. 다시 시도해 주세요." : "Failed to delete. Please try again.");
      }
    });
  });
}

function setupGuestbook(){
  $("gbClear").addEventListener("click", ()=>{
    $("gbName").value = "";
    $("gbPass").value = "";
    $("gbMsg").value = "";
  });

  guestbookLoadAndRender().catch(()=>{
    $("gbList").innerHTML = `<p class="footnote">불러오기 실패 (웹앱 URL/배포 권한 확인)</p>`;
  });

  $("gbForm").addEventListener("submit", async (e)=>{
    e.preventDefault();

    const name = $("gbName").value.trim();
    const pass = $("gbPass").value.trim();
    const msg  = $("gbMsg").value.trim();
    if(!name || !pass || !msg) return;

    try{
      const passHash = await sha256(pass);
      const r = await guestbookApi("add", { name, message: msg, passHash });

      if(!r.ok) throw new Error("add fail");

      $("gbName").value = "";
      $("gbPass").value = "";
      $("gbMsg").value = "";

      toast(I18N[LANG].toast_saved);
      await guestbookLoadAndRender();
    }catch{
      alert(LANG==="ko" ? "저장에 실패했어요. 웹앱 URL/배포 권한을 확인해 주세요." : "Failed to save. Check web app settings.");
    }
  });
}

/* ---------- ICS download ---------- */
async function downloadICS(){
  const start = new Date(CONFIG.weddingISO);
  const end = new Date(start.getTime() + 2 * 60 * 60 * 1000);

  const dt = (d) => d.toISOString().replace(/[-:]/g, "").replace(".000", "");

  const title = `${CONFIG.groomName} ♥ ${CONFIG.brideName} Wedding`;
  const desc = (LANG==="ko")
    ? `결혼식에 초대합니다.\n장소: ${CONFIG.venueName}\n주소: ${CONFIG.venueAddr}`
    : `Wedding Invitation\nPlace: ${CONFIG.venueName}\nAddress: ${CONFIG.venueAddr}`;
  const loc = `${CONFIG.venueName} ${CONFIG.venueAddr}`.trim();

  const ics =
`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Wedding Invite//KR//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:${crypto.randomUUID()}
DTSTAMP:${dt(new Date())}
DTSTART:${dt(start)}
DTEND:${dt(end)}
SUMMARY:${escapeICS(title)}
DESCRIPTION:${escapeICS(desc)}
LOCATION:${escapeICS(loc)}
END:VEVENT
END:VCALENDAR`;

  const fileName = "wedding.ics";
  const blob = new Blob([ics], {type: "text/calendar;charset=utf-8"});
  const ua = navigator.userAgent || "";
  const isIOS = /iPhone|iPad|iPod/i.test(ua);

  // iOS: .ics 파일을 직접 열어 Apple Calendar로 연결
  if(isIOS){
    const iosUrl = URL.createObjectURL(blob);
    window.location.href = iosUrl;
    setTimeout(()=>URL.revokeObjectURL(iosUrl), 15000);
    return;
  }

  const file = (typeof File !== "undefined")
    ? new File([blob], fileName, { type: "text/calendar;charset=utf-8" })
    : null;

  // 모바일 사파리/크롬에서 다운로드가 불안정할 수 있어, 지원 시 공유 시트를 우선 사용
  if(file && navigator.share && navigator.canShare){
    try{
      if(navigator.canShare({ files: [file] })){
        await navigator.share({
          title,
          text: (LANG==="ko") ? "캘린더에 추가해 주세요." : "Please add this to your calendar.",
          files: [file]
        });
        return;
      }
    }catch{
      // 사용자가 공유를 취소하거나 공유 앱이 없으면 아래 폴백 진행
    }
  }

  // 1차 폴백: 일반 파일 다운로드
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(()=>URL.revokeObjectURL(url), 1000);
}

function escapeICS(s){
  return String(s).replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;");
}

/* ---------- boot ---------- */
document.addEventListener("DOMContentLoaded", ()=>{
  setupActions();
  setupGuestbook();

  $$(".lang-btn").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      $$(".lang-btn").forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      setI18n(btn.dataset.lang);
    });
  });

  setI18n("ko");
  startCountdown();
});
