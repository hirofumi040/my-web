const demoButton = document.querySelector("#demoButton");
const log = document.querySelector("#log");
const status = document.querySelector("#status");

const steps = [
  "发现项目素材文件夹",
  "识别现场图、意向图和平面图资料",
  "按照素材数量匹配页面版式",
  "生成可编辑 PowerPoint 文件",
  "输出检查预览，等待设计师复核",
];

demoButton.addEventListener("click", () => {
  demoButton.disabled = true;
  status.textContent = "正在生成";
  log.innerHTML = "";

  steps.forEach((step, index) => {
    window.setTimeout(() => {
      const line = document.createElement("p");
      line.textContent = step;
      log.appendChild(line);

      if (index === steps.length - 1) {
        status.textContent = "演示完成";
        demoButton.disabled = false;
      }
    }, 520 * (index + 1));
  });
});
