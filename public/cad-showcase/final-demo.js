const demo = {
  currentFloor: "2",
  accepted: new Set(),
  frames: [
    { id: "f2-plan", floor: "二层", space: "全层", title: "二层平面布置图", type: "平面图", confidence: 96 },
    { id: "f2-cab", floor: "二层", space: "厨房/餐厅", title: "二层柜体深化图", type: "家具尺寸图", confidence: 91 },
    { id: "f3-plan", floor: "三层", space: "长辈房/女儿房", title: "三层平面布置图", type: "平面图", confidence: 95 },
    { id: "f4-plan", floor: "四层", space: "主卧/男孩房", title: "四层平面布置图", type: "平面图", confidence: 95 },
  ],
  floors: {
    2: {
      image: "./floor2_marked_cabinets.jpg",
      boxes: [
        { id: "c1", x: 8, y: 12, w: 17, h: 8 },
        { id: "c3", x: 58, y: 31, w: 18, h: 7 },
        { id: "c4", x: 70, y: 58, w: 12, h: 8 },
      ],
    },
    3: {
      image: "./floor3_marked_cabinets.jpg",
      boxes: [
        { id: "c5", x: 12, y: 16, w: 19, h: 8 },
        { id: "c6", x: 43, y: 21, w: 14, h: 8 },
        { id: "c7", x: 61, y: 48, w: 17, h: 8 },
      ],
    },
    4: {
      image: "./floor4_marked_cabinets.jpg",
      boxes: [
        { id: "c8", x: 16, y: 18, w: 26, h: 8 },
        { id: "c9", x: 58, y: 20, w: 15, h: 8 },
        { id: "c10", x: 62, y: 61, w: 16, h: 7 },
      ],
    },
  },
  cabinets: [
    { id: "c1", floorKey: "2", floor: "二层", space: "餐厅", name: "边柜 D350", type: "其他定制柜", depth: 350, length: 4.36, height: 2.4, confidence: 92 },
    { id: "c3", floorKey: "2", floor: "二层", space: "储藏室", name: "储藏室柜子 D350", type: "其他定制柜", depth: 350, length: 2.48, height: 2.4, confidence: 86 },
    { id: "c4", floorKey: "2", floor: "二层", space: "装饰区", name: "装饰柜 D600", type: "装饰柜", depth: 600, length: 1.75, height: 1, confidence: 90 },
    { id: "c5", floorKey: "3", floor: "三层", space: "长辈房一", name: "衣柜 D600", type: "普通衣柜", depth: 600, length: 2.5, height: 2.4, confidence: 93 },
    { id: "c6", floorKey: "3", floor: "三层", space: "长辈房二", name: "衣柜 D600", type: "普通衣柜", depth: 600, length: 2.75, height: 2.4, confidence: 92 },
    { id: "c7", floorKey: "3", floor: "三层", space: "女儿房", name: "衣柜 D600", type: "普通衣柜", depth: 600, length: 2.07, height: 2.4, confidence: 88 },
    { id: "c8", floorKey: "4", floor: "四层", space: "主卧", name: "主卧组合衣柜 D600", type: "普通衣柜", depth: 600, length: 8.23, height: 2.4, confidence: 84 },
    { id: "c9", floorKey: "4", floor: "四层", space: "男孩房", name: "衣柜 D600", type: "普通衣柜", depth: 600, length: 3.16, height: 2.4, confidence: 91 },
    { id: "c10", floorKey: "4", floor: "主卧", space: "主卧", name: "电视条柜", type: "电视柜", depth: 300, length: 2.8, height: 1, confidence: 80 },
  ],
  additions: [
    { category: "图纸推断项", name: "强电线路重走补差", unit: "㎡", qty: 369, status: "待复核", note: "由二层/三层/四层图纸配置推断" },
    { category: "图纸推断项", name: "楼层超高3m以上墙漆费用", unit: "项", qty: 110.7, status: "待复核", note: "按图框楼层和层高说明推断" },
  ],
};

const els = {
  runDemoBtn: document.querySelector("#runDemoBtn"),
  exportDemoBtn: document.querySelector("#exportDemoBtn"),
  frameList: document.querySelector("#frameList"),
  floorImage: document.querySelector("#floorImage"),
  cadOverlay: document.querySelector("#cadOverlay"),
  cabinetRows: document.querySelector("#cabinetRows"),
  budgetRows: document.querySelector("#budgetRows"),
  frameCount: document.querySelector("#frameCount"),
  cabinetCount: document.querySelector("#cabinetCount"),
  reviewCount: document.querySelector("#reviewCount"),
  areaTotal: document.querySelector("#areaTotal"),
  grandTotal: document.querySelector("#grandTotal"),
  baseTotal: document.querySelector("#baseTotal"),
  cabinetTotal: document.querySelector("#cabinetTotal"),
  additionTotal: document.querySelector("#additionTotal"),
  demoArea: document.querySelector("#demoArea"),
  demoBasePrice: document.querySelector("#demoBasePrice"),
  demoHeight: document.querySelector("#demoHeight"),
  acceptAllBtn: document.querySelector("#acceptAllBtn"),
  workbenchStatus: document.querySelector("#workbenchStatus"),
};

function round2(value) {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

function n(value) {
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function areaOf(item) {
  return round2((item.length || 0) * (item.height || 0));
}

function visibleCabinets() {
  return demo.cabinets.filter((item) => item.floorKey === demo.currentFloor);
}

function acceptedCabinets() {
  return demo.cabinets.filter((item) => demo.accepted.has(item.id));
}

function renderFrames(activeId = "f2-plan") {
  els.frameList.innerHTML = demo.frames
    .map(
      (frame) => `
        <button class="frame-card ${frame.id === activeId ? "active" : ""}" data-frame-id="${frame.id}" type="button">
          <strong>${frame.title}</strong>
          <span>${frame.floor} / ${frame.space} / ${frame.type}</span>
          <span>标题栏置信度 ${frame.confidence}%</span>
        </button>
      `,
    )
    .join("");
}

function renderFloor() {
  const floor = demo.floors[demo.currentFloor];
  els.floorImage.src = floor.image;
  els.cadOverlay.innerHTML = floor.boxes
    .map((box) => {
      const item = demo.cabinets.find((cabinet) => cabinet.id === box.id);
      const acceptedClass = demo.accepted.has(box.id) ? "accepted" : "";
      return `<div class="overlay-box ${acceptedClass}" style="left:${box.x}%;top:${box.y}%;width:${box.w}%;height:${box.h}%">${item?.name || "柜体"}</div>`;
    })
    .join("");
}

function renderCabinetRows() {
  const rows = visibleCabinets();
  els.cabinetRows.innerHTML = rows
    .map((item) => {
      const accepted = demo.accepted.has(item.id);
      return `
        <tr>
          <td><span class="status-pill ${accepted ? "ok" : ""}">${accepted ? "已入清单" : "待复核"}</span></td>
          <td>${item.floor}</td>
          <td>${item.space}</td>
          <td>${item.name}</td>
          <td class="number">${item.depth}mm</td>
          <td class="number">${item.length}m</td>
          <td class="number">${item.height}m</td>
          <td class="number">${areaOf(item)}㎡</td>
          <td><button class="tiny-button" data-action="toggle" data-id="${item.id}" type="button">${accepted ? "移出" : "加入"}</button></td>
        </tr>
      `;
    })
    .join("");
}

function budgetData() {
  const base = {
    category: "基础数据",
    name: "全屋计价面积",
    unit: "㎡",
    qty: n(els.demoArea.value),
    status: "已读取",
    note: "用于后续清单模型",
  };

  const cabinets = acceptedCabinets().map((item) => ({
    category: "柜体识别",
    name: item.name,
    unit: "㎡",
    qty: areaOf(item),
    status: demo.accepted.has(item.id) ? "已复核" : "待复核",
    note: `${item.floor}/${item.space}；深度 ${item.depth}mm；CAD 图框和家具尺寸图识别，置信度 ${item.confidence}%`,
  }));

  const additions = demo.additions.map((item) => ({
    ...item,
  }));

  return [base, ...cabinets, ...additions];
}

function renderBudget() {
  const rows = budgetData();
  const reviewed = acceptedCabinets().length;
  const progress = demo.cabinets.length ? Math.round((reviewed / demo.cabinets.length) * 100) : 0;

  els.baseTotal.textContent = `${demo.frames.length}`;
  els.cabinetTotal.textContent = `${demo.cabinets.length}`;
  els.additionTotal.textContent = `${reviewed}/${demo.cabinets.length}`;
  els.grandTotal.textContent = `${progress}%`;

  els.budgetRows.innerHTML = rows
    .map(
      (row) => `
        <tr>
          <td>${row.category}</td>
          <td>${row.name}</td>
          <td class="number">${row.qty}${row.unit || ""}</td>
          <td>${row.status || "待复核"}</td>
        </tr>
      `,
    )
    .join("");
}

function renderMetrics() {
  const visible = visibleCabinets();
  const reviewed = acceptedCabinets();
  const totalArea = reviewed.reduce((sum, item) => sum + areaOf(item), 0);
  els.frameCount.textContent = demo.frames.length;
  els.cabinetCount.textContent = visible.length;
  els.reviewCount.textContent = demo.cabinets.length - reviewed.length;
  els.areaTotal.textContent = `${round2(totalArea)}㎡`;
}

function renderAll() {
  renderFrames(demo.currentFloor === "2" ? "f2-plan" : demo.currentFloor === "3" ? "f3-plan" : "f4-plan");
  renderFloor();
  renderCabinetRows();
  renderMetrics();
  renderBudget();
}

function acceptVisibleCabinets() {
  visibleCabinets().forEach((item) => demo.accepted.add(item.id));
  els.workbenchStatus.textContent = `已将${demo.currentFloor}层识别柜体加入成果清单，可继续切换楼层复核。`;
  renderAll();
}

function runDemo() {
  demo.accepted = new Set(["c1", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10"]);
  els.workbenchStatus.textContent = "最终识别结果已展示：图框、空间、深度和柜体成果清单已生成。";
  renderAll();
}

function exportDemoExcel() {
  const rows = budgetData().map((row) => ({
    类别: row.category,
    项目名称: row.name,
    单位: row.unit,
    数量: row.qty,
    状态: row.status,
    备注: row.note,
  }));
  const cabinetRows = acceptedCabinets().map((item) => ({
    楼层: item.floor,
    空间: item.space,
    柜体名称: item.name,
    柜体类型: item.type,
    深度mm: item.depth,
    长度m: item.length,
    高度m: item.height,
    "投影面积㎡": areaOf(item),
    "状态": "已复核",
    "识别置信度": `${item.confidence}%`,
  }));

  if (window.XLSX) {
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(rows), "识别成果");
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(cabinetRows), "柜体清单");
    XLSX.writeFile(wb, `CAD智能识图成果_${new Date().toISOString().slice(0, 10)}.xlsx`);
    return;
  }

  const csv = rows.map((row) => Object.values(row).join(",")).join("\n");
  const blob = new Blob([`\ufeff${csv}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "CAD智能识图成果.csv";
  a.click();
  URL.revokeObjectURL(url);
}

document.querySelectorAll(".segmented button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".segmented button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    demo.currentFloor = button.dataset.floor;
    els.workbenchStatus.textContent = `正在查看${button.textContent}图框和柜体识别结果。`;
    renderAll();
  });
});

els.frameList.addEventListener("click", (event) => {
  const card = event.target.closest(".frame-card");
  if (!card) return;
  const frame = demo.frames.find((item) => item.id === card.dataset.frameId);
  if (!frame) return;
  els.workbenchStatus.textContent = `${frame.title}：已读取楼层、空间、图纸类型和标题栏置信度。`;
  renderFrames(frame.id);
});

els.cabinetRows.addEventListener("click", (event) => {
  if (event.target.dataset.action !== "toggle") return;
  const id = event.target.dataset.id;
  if (demo.accepted.has(id)) demo.accepted.delete(id);
  else demo.accepted.add(id);
  renderAll();
});

[els.demoArea, els.demoBasePrice, els.demoHeight].forEach((input) => {
  input.addEventListener("input", () => {
    const height = n(els.demoHeight.value) || 2.4;
    demo.cabinets.forEach((item) => {
      if (item.type !== "洗衣柜" && item.type !== "电视柜") item.height = height;
    });
    renderAll();
  });
});

els.acceptAllBtn.addEventListener("click", acceptVisibleCabinets);
els.runDemoBtn.addEventListener("click", runDemo);
els.exportDemoBtn.addEventListener("click", exportDemoExcel);

renderAll();
