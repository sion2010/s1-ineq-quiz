const SET_NAME = "簡易不等式教學建議";
const SET_PASS = "246810";
const STORE = "ineq_eq_set_2026_v2";
const ROSTER = [
  ["3B1","陳嘉普","5813"],["3B2","陳祇燞","2749"],["3B3","鄭亦迅","9360"],["3B4","張嘉顯","4182"],
  ["3B5","張雍柔","7604"],["3B6","趙仕賢","1528"],["3B7","蔡俊燊","3947"],["3B8","周芷晴","8206"],
  ["3B9","鍾熙桐","6471"],["3B10","何普彤","2095"],["3B11","洪其灎","5738"],["3B12","林傲兒","8614"],
  ["3B13","林尹莉","4309"],["3B14","林彥彤","7925"],["3B15","劉曉柔","3160"],["3B16","羅榮城","9542"],
  ["3B17","李棹朗","1876"],["3B18","李洛睿","6283"],["3B19","梁宗穎","7401"],["3B20","黎港馨","2957"],
  ["3B21","林東陽","5036"],["3B22","劉羽","8194"],["3B23","文子政","3672"],["3B24","吳子瑜","9418"],
  ["3B25","余俊錦","2580"],["3B26","石普語","6743"],["3B27","鄧瑋樂","1029"],["3B28","曾灎","4865"],
  ["3B29","謝熙諾","7308"],["3B30","黃靖雯","2156"],["3B31","黃皓隽","8690"],["3B32","汪朗毅","5472"],
  ["3B33","曾貴好","3914"]
].map(([id,name,pin])=>({id,name,pin}));

function nl(center, closed, dir, label) {
  const min = center - 4, max = center + 4;
  const w = 520, h = 78, y = 40;
  const x = v => 30 + (v - min) / (max - min) * (w - 60);
  let ticks = "";
  for (let i = Math.ceil(min); i <= Math.floor(max); i++) {
    ticks += `<line x1="${x(i)}" y1="${y-7}" x2="${x(i)}" y2="${y+7}" stroke="#1c2430"/>
      <text x="${x(i)}" y="${y+24}" text-anchor="middle" font-size="12">${i}</text>`;
  }
  const cx = x(center);
  const arrow = dir === "right"
    ? `<line x1="${cx}" y1="${y}" x2="${w-18}" y2="${y}" stroke="#0f6d6a" stroke-width="3"/><polygon points="${w-18},${y-7} ${w-4},${y} ${w-18},${y+7}" fill="#0f6d6a"/>`
    : `<line x1="18" y1="${y}" x2="${cx}" y2="${y}" stroke="#0f6d6a" stroke-width="3"/><polygon points="18,${y-7} 4,${y} 18,${y+7}" fill="#0f6d6a"/>`;
  const dot = closed
    ? `<circle cx="${cx}" cy="${y}" r="7" fill="#0f6d6a"/>`
    : `<circle cx="${cx}" cy="${y}" r="7" fill="#fff" stroke="#0f6d6a" stroke-width="3"/>`;
  return `<div class="nl"><svg viewBox="0 0 ${w} ${h}" width="100%" height="78">
    <line x1="10" y1="${y}" x2="${w-10}" y2="${y}" stroke="#1c2430" stroke-width="2"/>
    ${ticks}${arrow}${dot}
    <text x="${cx}" y="16" text-anchor="middle" font-size="13" fill="#0b524f">${label}</text>
  </svg></div>`;
}
function intQ(id, html, answer, label) {
  const pats = [];
  if (answer < 0) {
    pats.push(new RegExp("(^|[^0-9])" + answer + "([^0-9.]|$)"));
    pats.push(new RegExp("負\\s*" + (-answer)));
  } else if (answer === 0) {
    pats.push(/(^|[^0-9-])0([^0-9.]|$)/); pats.push(/零/);
  } else {
    pats.push(new RegExp("(^|[^0-9-])" + answer + "([^0-9.]|$)"));
  }
  return { id, part:"甲", max:2, type:"int", html, answer, keys:[{id:"A", marks:2, label, pat:pats}] };
}
