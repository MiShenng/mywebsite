const SVG_NS = "http://www.w3.org/2000/svg";

const serviceItems = [
  { name: "陪问诊", count: 219, core: true },
  { name: "取报告", count: 89, core: true },
  { name: "取药", count: 48, core: true },
  { name: "异地就医规划", count: 28, core: false },
  { name: "排队", count: 24, core: false },
  { name: "挂号", count: 23, core: false },
  { name: "交通协助", count: 23, core: false },
  { name: "检查预约", count: 18, core: false },
  { name: "缴费协助", count: 18, core: false },
  { name: "病历整理", count: 9, core: false },
  { name: "院内导航", count: 5, core: false },
  { name: "记录医嘱", count: 5, core: false },
  { name: "情绪陪伴", count: 4, core: false },
  { name: "餐食协助", count: 1, core: false },
];

const cityPrices = [
  { city: "西安", sample: 3, median: 200, min: 199, max: 200 },
  { city: "福州", sample: 3, median: 99, min: 10, max: 300 },
  { city: "北京", sample: 20, median: 98, min: 9, max: 360 },
  { city: "沈阳", sample: 5, median: 88, min: 50, max: 289 },
  { city: "郑州", sample: 4, median: 85, min: 35, max: 300 },
  { city: "济南", sample: 4, median: 65, min: 29, max: 488 },
  { city: "上海", sample: 16, median: 60, min: 6, max: 500 },
  { city: "长沙", sample: 7, median: 59, min: 9, max: 400 },
  { city: "成都", sample: 24, median: 50, min: 9, max: 130 },
  { city: "广州", sample: 32, median: 50, min: 8, max: 400 },
  { city: "杭州", sample: 22, median: 50, min: 6, max: 300 },
  { city: "昆明", sample: 3, median: 50, min: 50, max: 50 },
  { city: "南京", sample: 10, median: 50, min: 33, max: 372 },
  { city: "重庆", sample: 30, median: 48, min: 9, max: 200 },
  { city: "南昌", sample: 4, median: 42, min: 40, max: 50 },
  { city: "武汉", sample: 6, median: 38, min: 19, max: 158 },
  { city: "合肥", sample: 7, median: 35, min: 9, max: 150 },
  { city: "石家庄", sample: 4, median: 32, min: 13, max: 50 },
];

const salaryRanges = [
  { range: "<6K", count: 10 },
  { range: "6-9K", count: 33 },
  { range: "9-12K", count: 31 },
  { range: "12-15K", count: 8 },
  { range: "15-20K", count: 4 },
  { range: "20K+", count: 4 },
];

const demandScenes = [
  { name: "独自检查", count: 123 },
  { name: "孕产或行动不便", count: 105 },
  { name: "年轻人独自就医焦虑", count: 76 },
  { name: "外地患者", count: 64 },
  { name: "异地子女", count: 64 },
  { name: "独居老人", count: 46 },
  { name: "慢病复诊", count: 44 },
  { name: "术后复查", count: 42 },
];

const demandDifficulties = [
  { name: "流程困难", count: 374 },
  { name: "家庭陪护缺位", count: 325 },
  { name: "体力困难", count: 173 },
  { name: "数字能力困难", count: 102 },
  { name: "时间困难", count: 95 },
  { name: "情绪困难", count: 94 },
  { name: "费用顾虑", count: 78 },
  { name: "沟通困难", count: 65 },
];

const demandCross = [
  ["孕产或行动不便", "体力困难", 97],
  ["异地子女", "家庭陪护缺位", 63],
  ["独自检查", "流程困难", 61],
  ["外地患者", "家庭陪护缺位", 55],
  ["年轻人独自就医焦虑", "家庭陪护缺位", 54],
  ["独自检查", "家庭陪护缺位", 43],
  ["独居老人", "家庭陪护缺位", 41],
  ["年轻人独自就医焦虑", "流程困难", 38],
  ["慢病复诊", "家庭陪护缺位", 34],
  ["术后复查", "体力困难", 30],
  ["独自检查", "情绪困难", 30],
  ["术后复查", "家庭陪护缺位", 30],
  ["外地患者", "流程困难", 24],
  ["年轻人独自就医焦虑", "情绪困难", 22],
  ["独自检查", "体力困难", 22],
  ["外地患者", "费用顾虑", 19],
  ["孕产或行动不便", "家庭陪护缺位", 18],
  ["异地子女", "流程困难", 16],
  ["异地子女", "费用顾虑", 16],
  ["独自检查", "费用顾虑", 16],
  ["独居老人", "情绪困难", 14],
  ["独居老人", "流程困难", 11],
  ["独自检查", "时间困难", 11],
  ["术后复查", "流程困难", 10],
  ["年轻人独自就医焦虑", "体力困难", 9],
  ["慢病复诊", "体力困难", 9],
  ["独居老人", "数字能力困难", 8],
  ["独自检查", "沟通困难", 8],
  ["慢病复诊", "流程困难", 8],
  ["年轻人独自就医焦虑", "时间困难", 7],
  ["术后复查", "情绪困难", 6],
  ["异地子女", "情绪困难", 5],
  ["异地子女", "时间困难", 5],
  ["年轻人独自就医焦虑", "数字能力困难", 5],
  ["慢病复诊", "情绪困难", 5],
  ["慢病复诊", "费用顾虑", 5],
  ["外地患者", "数字能力困难", 4],
  ["外地患者", "情绪困难", 4],
  ["异地子女", "数字能力困难", 4],
  ["年轻人独自就医焦虑", "费用顾虑", 4],
  ["外地患者", "时间困难", 4],
  ["孕产或行动不便", "情绪困难", 4],
  ["独自检查", "数字能力困难", 4],
  ["独居老人", "体力困难", 4],
  ["孕产或行动不便", "流程困难", 4],
  ["术后复查", "费用顾虑", 3],
  ["术后复查", "数字能力困难", 3],
  ["独居老人", "时间困难", 3],
  ["异地子女", "体力困难", 3],
  ["外地患者", "体力困难", 3],
  ["孕产或行动不便", "数字能力困难", 3],
];

document.addEventListener("DOMContentLoaded", () => {
  initServiceBubbleChart();
  initCityPriceChart();
  initSalaryChart();
});

function createSvgElement(tag, attributes = {}) {
  const element = document.createElementNS(SVG_NS, tag);
  Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
  return element;
}

function initServiceBubbleChart() {
  const figure = document.querySelector("[data-service-chart]");
  const canvas = figure?.querySelector("[data-chart-canvas]");
  if (!figure || !canvas) return;

  const width = 760;
  const height = 560;
  const sampleSize = 357;
  const nodes = packBubbles(serviceItems, width, height);
  const svg = createSvgElement("svg", {
    viewBox: `0 0 ${width} ${height}`,
    role: "img",
    "aria-labelledby": "service-chart-title",
  });

  nodes.forEach((node, index) => {
    const group = createSvgElement("g", {
      class: `bubble-node${node.core ? " bubble-node--core" : ""}`,
      transform: `translate(${node.x.toFixed(1)} ${node.y.toFixed(1)})`,
      tabindex: "0",
      role: "button",
      "aria-label": `${node.name}：${node.count}条服务帖提及，占样本${formatRate(node.count, sampleSize)}`,
      "data-core": String(node.core),
    });
    group.style.setProperty("--chart-delay", `${index * 45}ms`);

    const circle = createSvgElement("circle", { r: node.r.toFixed(1) });
    group.append(circle);

    const label = createSvgElement("text", {
      class: "bubble-node__label",
      "text-anchor": "middle",
      "aria-hidden": "true",
    });
    const labelLines = splitBubbleLabel(node.name, node.r);
    labelLines.forEach((line, lineIndex) => {
      const textLine = createSvgElement("tspan", {
        x: "0",
        y: String((lineIndex - (labelLines.length - 1) / 2) * 18 - 6),
      });
      textLine.textContent = line;
      label.append(textLine);
    });

    const value = createSvgElement("tspan", {
      class: "bubble-node__value",
      x: "0",
      y: String((labelLines.length / 2) * 18 + 12),
    });
    value.textContent = formatRate(node.count, sampleSize);
    label.append(value);
    group.append(label);

    bindTooltip(group, figure, () => ({
      title: node.name,
      detail: `${node.count}条，样本提及率${formatRate(node.count, sampleSize)}`,
    }));
    svg.append(group);
  });

  canvas.append(svg);
  figure.querySelectorAll("[data-service-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.serviceFilter;
      figure.querySelectorAll("[data-service-filter]").forEach((candidate) => {
        candidate.setAttribute("aria-pressed", String(candidate === button));
      });
      svg.querySelectorAll(".bubble-node").forEach((node) => {
        const filtered = filter === "core" && node.dataset.core !== "true";
        node.classList.toggle("is-filtered", filtered);
        node.setAttribute("tabindex", filtered ? "-1" : "0");
      });
    });
  });
  observeChart(figure);
}

function initCityPriceChart() {
  const figure = document.querySelector("[data-price-chart]");
  const canvas = figure?.querySelector("[data-chart-canvas]");
  if (!figure || !canvas) return;

  const width = 920;
  const height = 760;
  const margin = { top: 56, right: 54, bottom: 48, left: 88 };
  const plotWidth = width - margin.left - margin.right;
  const rowHeight = (height - margin.top - margin.bottom) / cityPrices.length;
  const scaleX = (value) => margin.left + (value / 500) * plotWidth;
  const svg = createSvgElement("svg", {
    viewBox: `0 0 ${width} ${height}`,
    role: "img",
    "aria-labelledby": "price-chart-title",
  });

  [0, 100, 200, 300, 400, 500].forEach((tick) => {
    const x = scaleX(tick);
    svg.append(createSvgElement("line", {
      class: "price-chart__grid",
      x1: x,
      x2: x,
      y1: margin.top - 22,
      y2: height - margin.bottom + 8,
    }));
    const tickLabel = createSvgElement("text", {
      class: "price-chart__tick",
      x,
      y: margin.top - 30,
      "text-anchor": "middle",
    });
    tickLabel.textContent = tick === 0 ? "0元" : `${tick}`;
    svg.append(tickLabel);
  });

  cityPrices.forEach((item, index) => {
    const y = margin.top + index * rowHeight + rowHeight / 2;
    const group = createSvgElement("g", {
      class: "price-row",
      tabindex: "0",
      role: "button",
      "aria-label": `${item.city}：样本${item.sample}条，最低${item.min}元，中位数${item.median}元，最高${item.max}元`,
    });
    group.style.setProperty("--chart-delay", `${index * 35}ms`);

    group.append(createSvgElement("rect", {
      class: "price-row__hit",
      x: "0",
      y: y - rowHeight / 2,
      width,
      height: rowHeight,
    }));

    const city = createSvgElement("text", {
      class: "price-row__city",
      x: margin.left - 18,
      y: y + 5,
      "text-anchor": "end",
    });
    city.textContent = item.city;
    group.append(city);

    group.append(createSvgElement("line", {
      class: "price-row__range",
      x1: scaleX(item.min),
      x2: scaleX(item.max),
      y1: y,
      y2: y,
      pathLength: "1",
    }));
    group.append(createSvgElement("circle", {
      class: "price-row__median",
      cx: scaleX(item.median),
      cy: y,
      r: "7",
    }));

    const medianLabel = createSvgElement("text", {
      class: "price-row__value",
      x: Math.min(scaleX(item.median) + 13, width - margin.right - 22),
      y: y + 5,
    });
    medianLabel.textContent = item.median;
    group.append(medianLabel);

    bindTooltip(group, figure, () => ({
      title: `${item.city} · 中位数${item.median}元`,
      detail: `样本${item.sample}条；最低${item.min}元；最高${item.max}元`,
    }));
    svg.append(group);
  });

  canvas.append(svg);
  observeChart(figure);
}

function initSalaryChart() {
  const figure = document.querySelector("[data-salary-chart]");
  const canvas = figure?.querySelector("[data-chart-canvas]");
  if (!figure || !canvas) return;

  const width = 760;
  const height = 500;
  const margin = { top: 46, right: 30, bottom: 72, left: 56 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;
  const bandWidth = plotWidth / salaryRanges.length;
  const maxValue = 35;
  const scaleY = (value) => margin.top + plotHeight - (value / maxValue) * plotHeight;
  const svg = createSvgElement("svg", {
    viewBox: `0 0 ${width} ${height}`,
    role: "img",
    "aria-labelledby": "salary-chart-title",
  });

  [0, 10, 20, 30].forEach((tick) => {
    const y = scaleY(tick);
    svg.append(createSvgElement("line", {
      class: "salary-chart__grid",
      x1: margin.left,
      x2: width - margin.right,
      y1: y,
      y2: y,
    }));
    const label = createSvgElement("text", {
      class: "salary-chart__tick",
      x: margin.left - 12,
      y: y + 5,
      "text-anchor": "end",
    });
    label.textContent = tick;
    svg.append(label);
  });

  salaryRanges.forEach((item, index) => {
    const barWidth = bandWidth * 0.58;
    const x = margin.left + index * bandWidth + (bandWidth - barWidth) / 2;
    const y = scaleY(item.count);
    const group = createSvgElement("g", {
      class: "salary-bar",
      tabindex: "0",
      role: "button",
      "aria-label": `${item.range}：${item.count}条招聘信息`,
    });
    group.style.setProperty("--chart-delay", `${index * 90}ms`);
    group.append(createSvgElement("rect", {
      class: "salary-bar__hit",
      x: margin.left + index * bandWidth,
      y: margin.top,
      width: bandWidth,
      height: plotHeight + 42,
    }));
    group.append(createSvgElement("rect", {
      class: "salary-bar__column",
      x,
      y,
      width: barWidth,
      height: margin.top + plotHeight - y,
    }));

    const count = createSvgElement("text", {
      class: "salary-bar__value",
      x: x + barWidth / 2,
      y: y - 12,
      "text-anchor": "middle",
    });
    count.textContent = item.count;
    group.append(count);

    const range = createSvgElement("text", {
      class: "salary-bar__label",
      x: x + barWidth / 2,
      y: height - margin.bottom + 34,
      "text-anchor": "middle",
    });
    range.textContent = item.range;
    group.append(range);

    bindTooltip(group, figure, () => ({
      title: item.range,
      detail: `${item.count}条招聘信息`,
    }));
    svg.append(group);
  });

  canvas.append(svg);
  observeChart(figure);
}

function packBubbles(data, width, height) {
  const maxValue = Math.max(...data.map((item) => item.count));
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  const nodes = data.map((item, index) => {
    const angle = index * goldenAngle;
    const distance = 34 * Math.sqrt(index);
    return {
      ...item,
      r: 22 + Math.sqrt(item.count / maxValue) * 101,
      x: width / 2 + Math.cos(angle) * distance,
      y: height / 2 + Math.sin(angle) * distance,
    };
  });

  for (let iteration = 0; iteration < 420; iteration += 1) {
    nodes.forEach((node) => {
      node.x += (width / 2 - node.x) * 0.006;
      node.y += (height / 2 - node.y) * 0.006;
    });

    for (let first = 0; first < nodes.length; first += 1) {
      for (let second = first + 1; second < nodes.length; second += 1) {
        const a = nodes[first];
        const b = nodes[second];
        let dx = b.x - a.x;
        let dy = b.y - a.y;
        let distance = Math.hypot(dx, dy);
        const minimum = a.r + b.r + 7;
        if (distance >= minimum) continue;
        if (distance === 0) {
          dx = 0.01;
          dy = 0.01;
          distance = Math.hypot(dx, dy);
        }
        const shift = (minimum - distance) / 2;
        const unitX = dx / distance;
        const unitY = dy / distance;
        a.x -= unitX * shift;
        a.y -= unitY * shift;
        b.x += unitX * shift;
        b.y += unitY * shift;
      }
    }

    nodes.forEach((node) => {
      node.x = Math.min(Math.max(node.x, node.r + 8), width - node.r - 8);
      node.y = Math.min(Math.max(node.y, node.r + 8), height - node.r - 8);
    });
  }
  return nodes;
}

function splitBubbleLabel(label, radius) {
  if (radius < 31) return [label.slice(0, 2)];
  if (label.length <= 5) return [label];
  const middle = Math.ceil(label.length / 2);
  return [label.slice(0, middle), label.slice(middle)];
}

function formatRate(count, sampleSize) {
  return `${((count / sampleSize) * 100).toFixed(1)}%`;
}

function bindTooltip(target, figure, getContent) {
  const tooltip = figure.querySelector("[data-chart-tooltip]");
  if (!tooltip) return;

  const show = (event) => {
    const content = getContent();
    tooltip.innerHTML = `<strong>${content.title}</strong><span>${content.detail}</span>`;
    tooltip.hidden = false;
    target.parentElement?.querySelectorAll("[role='button']").forEach((candidate) => {
      candidate.classList.toggle("is-muted", candidate !== target);
    });
    positionTooltip(figure, tooltip, event);
  };
  const hide = () => {
    tooltip.hidden = true;
    target.parentElement?.querySelectorAll("[role='button']").forEach((candidate) => {
      candidate.classList.remove("is-muted");
    });
  };

  target.addEventListener("pointerenter", show);
  target.addEventListener("pointermove", (event) => positionTooltip(figure, tooltip, event));
  target.addEventListener("pointerleave", hide);
  target.addEventListener("focus", show);
  target.addEventListener("blur", hide);
}

function positionTooltip(figure, tooltip, event) {
  const bounds = figure.getBoundingClientRect();
  const keyboardEvent = typeof event?.clientX !== "number" || event.clientX === 0;
  const preferredX = keyboardEvent ? bounds.width / 2 : event.clientX - bounds.left;
  const preferredY = keyboardEvent ? bounds.height / 2 : event.clientY - bounds.top;
  const tooltipWidth = Math.min(260, bounds.width - 24);
  const left = Math.min(Math.max(preferredX + 14, 12), bounds.width - tooltipWidth - 12);
  const top = Math.max(preferredY - 82, 12);
  tooltip.style.width = `${tooltipWidth}px`;
  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top}px`;
}

function observeChart(figure) {
  if (!("IntersectionObserver" in window)) {
    figure.classList.add("is-chart-visible");
    return;
  }
  const observer = new IntersectionObserver(
    ([entry], currentObserver) => {
      if (!entry.isIntersecting) return;
      figure.classList.add("is-chart-visible");
      currentObserver.unobserve(figure);
    },
    { threshold: 0.18 },
  );
  observer.observe(figure);
}
