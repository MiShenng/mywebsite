const agingTrend = [
  [2012, 19437, 14.3], [2013, 20372, 14.9], [2014, 21335, 15.5],
  [2015, 22340, 16.1], [2016, 23252, 16.7], [2017, 24222, 17.3],
  [2018, 25087, 17.9], [2019, 25570, 18.51], [2020, 26402, 18.7],
  [2021, 26736, 18.9], [2022, 28004, 19.8], [2023, 29697, 21.1],
  [2024, 31031, 22.0],
];

const doctorsByProvince = [
  ["北京", 5.79, "高于"], ["天津", 4.46, "高于"], ["河北", 4.22, "高于"],
  ["内蒙古", 4.21, "高于"], ["吉林", 4.21, "高于"], ["浙江", 4.2, "高于"],
  ["青海", 4.07, "高于"], ["山东", 3.99, "高于"], ["山西", 3.8, "高于"],
  ["上海", 3.8, "高于"], ["江苏", 3.75, "高于"], ["河南", 3.71, "高于"],
  ["西藏", 3.68, "高于"], ["甘肃", 3.67, "高于"], ["辽宁", 3.64, "高于"],
  ["黑龙江", 3.6, "低于"], ["陕西", 3.57, "低于"], ["宁夏", 3.52, "低于"],
  ["四川", 3.49, "低于"], ["云南", 3.44, "低于"], ["湖南", 3.43, "低于"],
  ["重庆", 3.41, "低于"], ["贵州", 3.41, "低于"], ["湖北", 3.35, "低于"],
  ["安徽", 3.34, "低于"], ["江西", 3.24, "低于"], ["海南", 3.21, "低于"],
  ["新疆", 3.21, "低于"], ["福建", 3.11, "低于"], ["广西", 3.07, "低于"],
  ["广东", 2.94, "低于"],
];

const dailyVisits = [
  ["上海", 11.8], ["浙江", 9.2], ["广东", 9.0], ["北京", 8.5], ["天津", 8.2],
  ["江苏", 8.1], ["福建", 7.5], ["宁夏", 7.5], ["四川", 7.2], ["重庆", 6.7],
  ["云南", 6.7], ["海南", 6.5], ["湖北", 6.4], ["广西", 6.4], ["新疆", 6.4],
  ["安徽", 5.9], ["辽宁", 5.8], ["山东", 5.8], ["陕西", 5.8], ["江西", 5.7],
  ["河南", 5.6], ["吉林", 5.5], ["贵州", 5.4], ["甘肃", 5.4], ["内蒙古", 5.3],
  ["河北", 5.2], ["黑龙江", 5.1], ["山西", 5.0], ["西藏", 4.9], ["湖南", 4.8],
  ["青海", 4.4],
];

const provinceTiles = {
  新疆: [0, 2], 西藏: [1, 4], 青海: [2, 3], 甘肃: [3, 3], 内蒙古: [4, 1],
  宁夏: [4, 3], 四川: [4, 4], 云南: [4, 5], 陕西: [5, 3], 重庆: [5, 4],
  贵州: [5, 5], 山西: [6, 2], 河南: [6, 3], 湖北: [6, 4], 湖南: [6, 5],
  广西: [6, 6], 北京: [7, 1], 河北: [7, 2], 安徽: [7, 4], 江西: [7, 5],
  广东: [7, 6], 天津: [8, 1], 山东: [8, 2], 江苏: [8, 4], 福建: [8, 5],
  海南: [7, 7], 辽宁: [9, 1], 吉林: [10, 1], 浙江: [9, 4], 上海: [9, 3],
  黑龙江: [11, 0],
};

const doctorsInternational = [
  ["德国", 4.5], ["OECD平均", 3.7], ["英国", 3.3], ["法国", 3.2],
  ["美国", 2.7], ["日本", 2.7], ["韩国", 2.6], ["中国", 2.4],
];

const visitsInternational = [
  ["韩国", 14.7], ["日本", 11.1], ["德国", 9.9], ["中国", 7.2],
  ["OECD平均", 6.5], ["法国", 6.4], ["英国", 5.0], ["美国", 4.0],
];

const citySupply = [
  ["成都", 43, 44], ["北京", 50, 31], ["上海", 39, 31], ["深圳", 18, 36],
  ["武汉", 41, 6], ["广州", 34, 5], ["重庆", 30, 0], ["杭州", 22, 0],
  ["洛阳", 14, 0], ["南京", 10, 0], ["合肥", 7, 0], ["长沙", 7, 0],
  ["沈阳", 5, 0], ["济南", 4, 0],
];

const registrations = [
  [2014, 23, ""], [2015, 27, ""], [2016, 61, ""], [2017, 47, ""],
  [2018, 44, ""], [2019, 40, ""], [2020, 14, ""], [2021, 18, ""],
  [2022, 241, ""], [2023, 385, ""], [2024, 148, "截至10月"], [2025, 82, "截至4月"],
];

const industryTimeline = [
  ["2015", "行业", "全国陪诊机构约31家"], ["2018", "行业", "淘宝上线亲情账号"],
  ["2021", "行业", "美团陪诊商户两年增8倍"], ["2022", "行业", "陪诊企业注册量暴增1239%"],
  ["2023", "行业", "企业注册385家创峰值"], ["2025-01", "政策", "上海9区助医陪诊试点"],
  ["2025-05", "行业", "悦伴陪诊上线一周5000人入驻"], ["2025-06", "政策", "陪诊服务人员培育管理规范公示"],
  ["2025-11", "政策", "江苏陪同就医服务联盟成立"], ["2026-01", "政策", "民政部等八部门支持陪诊机构"],
  ["2026-03", "政策", "国标社会化陪同就医服务审查"],
];

const riskCases = [
  ["违法行为", "代挂号与号贩行为", "陪诊从业者提供代挂号服务，按医生职级标价", "科室主任268元、副主任168元"],
  ["违法行为", "专家号分级加价", "挂教授副教授号与知名专家号按级别加价", "教授副教授400元、知名专家500元"],
  ["违法行为", "扣留患者资料", "故意扣留患者就诊卡和检查报告以强行留住客户", ""],
  ["诈骗欺诈", "培训诈骗与虚假承诺", "橙医陪诊收费培训并承诺“学完就有单子”，学员反馈交费后几个月一分未挣且不退费", "培训费2980元"],
  ["违法行为", "非法代购院内制剂", "代购北京医院院内制剂(复方氯化铵甘草口服液、多维元素片等)并在朋友圈售卖", ""],
  ["服务越界", "越界推销", "代办理财、保险、基金贷款，推销保健品与体检产品", ""],
  ["诈骗欺诈", "虚假宣传与退款纠纷", "陪诊及预付费服务普遍存在虚假宣传、未消费不退款等投诉（平台类目级，非陪诊专项统计）", ""],
  ["隐私风险", "隐私与个人信息泄露", "陪诊过程接触患者身份证、医保卡、病历、检查报告；未经授权泄露或公开病历须承担侵权责任", ""],
];

const priceComparison = [
  ["个人散单（平台）", 50, 50, "中位 50 元/次", "闲鱼/58同城平台标价，2026-06采集"],
  ["机构报价", 250, 498, "250-498 元/次起", "头部机构官网价目页。"],
  ["政府/公共项目", 168, 298, "168-298 元", "《上海市老年人助医陪诊服务试点方案》"],
  ["政府/公共项目", 140, 280, "140-280 元", "免陪照护服务(医疗服务价格立项)"],
  ["政府/公共项目", 250, 350, "250-350 元", "市场公开报价(非官方试点)"],
  ["政府/公共项目", 50, 100, "50-100 元", "行业普遍计价"],
];

document.addEventListener("DOMContentLoaded", () => {
  initDemandSankeyChart();
  initAgingChart();
  initDoctorsRankChart();
  initVisitsTileMap();
  initInternationalChart();
  initCitySupplyChart();
  initRegistrationsChart();
  initTimelineChart();
  initRiskCasesChart();
  initPriceComparisonChart();
});

function initDemandSankeyChart() {
  const figure = document.querySelector("[data-demand-chart]");
  const canvas = figure?.querySelector("[data-chart-canvas]");
  if (!figure || !canvas) return;
  canvas.replaceChildren();

  const width = 1180;
  const height = 760;
  const top = 44;
  const bottom = 44;
  const gap = 12;
  const nodeWidth = 18;
  const leftX = 220;
  const rightX = width - 220;
  const sourceTotals = new Map(demandScenes.map(({ name }) => [name, 0]));
  const targetTotals = new Map(demandDifficulties.map(({ name }) => [name, 0]));
  demandCross.forEach(([scene, difficulty, count]) => {
    sourceTotals.set(scene, sourceTotals.get(scene) + count);
    targetTotals.set(difficulty, targetTotals.get(difficulty) + count);
  });
  const total = demandCross.reduce((sum, [, , count]) => sum + count, 0);
  const scale = (height - top - bottom - gap * 7) / total;
  const makeNodes = (items, totals, x) => {
    let cursor = top;
    return items.map(({ name }) => {
      const value = totals.get(name);
      const node = { name, value, x, y: cursor, height: value * scale, offset: 0 };
      cursor += node.height + gap;
      return node;
    });
  };
  const sources = makeNodes(demandScenes, sourceTotals, leftX);
  const targets = makeNodes(demandDifficulties, targetTotals, rightX);
  const sourceMap = new Map(sources.map((node) => [node.name, node]));
  const targetMap = new Map(targets.map((node) => [node.name, node]));
  const svg = createSvgElement("svg", {
    viewBox: `0 0 ${width} ${height}`,
    role: "img",
    "aria-labelledby": "demand-chart-title",
  });

  demandCross.forEach(([scene, difficulty, count], index) => {
    const source = sourceMap.get(scene);
    const target = targetMap.get(difficulty);
    const thickness = count * scale;
    const sy0 = source.y + source.offset;
    const sy1 = sy0 + thickness;
    const ty0 = target.y + target.offset;
    const ty1 = ty0 + thickness;
    source.offset += thickness;
    target.offset += thickness;
    const mid = (leftX + nodeWidth + rightX) / 2;
    const path = createSvgElement("path", {
      class: "sankey-link",
      d: `M ${leftX + nodeWidth} ${sy0} C ${mid} ${sy0}, ${mid} ${ty0}, ${rightX} ${ty0} L ${rightX} ${ty1} C ${mid} ${ty1}, ${mid} ${sy1}, ${leftX + nodeWidth} ${sy1} Z`,
      tabindex: "0",
      role: "button",
      "aria-label": `${scene}与${difficulty}共现${count}次`,
    });
    path.style.setProperty("--chart-delay", `${index * 12}ms`);
    bindTooltip(path, figure, () => ({ title: `${scene} × ${difficulty}`, detail: `共现${count}次` }));
    svg.append(path);
  });

  sources.forEach((node) => appendSankeyNode(svg, node, nodeWidth, "source"));
  targets.forEach((node) => appendSankeyNode(svg, node, nodeWidth, "target"));
  canvas.append(svg);
  observeChart(figure);
}

function appendSankeyNode(svg, node, width, side) {
  svg.append(createSvgElement("rect", {
    class: `sankey-node sankey-node--${side}`,
    x: node.x,
    y: node.y,
    width,
    height: Math.max(node.height, 2),
  }));
  const label = createSvgElement("text", {
    class: "sankey-node__label",
    x: side === "source" ? node.x - 14 : node.x + width + 14,
    y: node.y + node.height / 2 + 5,
    "text-anchor": side === "source" ? "end" : "start",
  });
  label.textContent = node.name;
  svg.append(label);
}

function initAgingChart() {
  const figure = document.querySelector("[data-aging-chart]");
  const canvas = figure?.querySelector("[data-chart-canvas]");
  if (!figure || !canvas) return;
  const width = 980;
  const height = 560;
  const margin = { top: 48, right: 76, bottom: 60, left: 84 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;
  const x = (index) => margin.left + (index / (agingTrend.length - 1)) * plotWidth;
  const yPopulation = (value) => margin.top + plotHeight - ((value - 18000) / 14000) * plotHeight;
  const yRate = (value) => margin.top + plotHeight - ((value - 13) / 10) * plotHeight;
  const svg = createSvgElement("svg", { viewBox: `0 0 ${width} ${height}`, role: "img", "aria-labelledby": "aging-chart-title" });
  [18000, 22000, 26000, 30000].forEach((tick) => appendGridTick(svg, margin, width, yPopulation(tick), `${(tick / 10000).toFixed(1)}万`));
  const populationPoints = agingTrend.map(([, population], index) => [x(index), yPopulation(population)]);
  const ratePoints = agingTrend.map(([, , rate], index) => [x(index), yRate(rate)]);
  const area = createSvgElement("path", {
    class: "aging-chart__area",
    d: `${linePath(populationPoints)} L ${x(agingTrend.length - 1)} ${margin.top + plotHeight} L ${x(0)} ${margin.top + plotHeight} Z`,
  });
  svg.append(area);
  svg.append(createSvgElement("path", { class: "aging-chart__line aging-chart__line--population", d: linePath(populationPoints), pathLength: "1" }));
  svg.append(createSvgElement("path", { class: "aging-chart__line aging-chart__line--rate", d: linePath(ratePoints), pathLength: "1" }));
  agingTrend.forEach(([year, population, rate], index) => {
    const group = createSvgElement("g", { class: "aging-point", tabindex: "0", role: "button", "aria-label": `${year}年，60岁以上人口${population}万人，占比${rate}%` });
    group.style.setProperty("--chart-delay", `${300 + index * 110}ms`);
    group.append(createSvgElement("circle", { class: "aging-point__population", cx: x(index), cy: yPopulation(population), r: "6" }));
    group.append(createSvgElement("circle", { class: "aging-point__rate", cx: x(index), cy: yRate(rate), r: "5" }));
    if (index % 2 === 0 || index === agingTrend.length - 1) {
      const yearLabel = createSvgElement("text", { class: "chart-axis-label", x: x(index), y: height - 24, "text-anchor": "middle" });
      yearLabel.textContent = year;
      group.append(yearLabel);
    }
    bindTooltip(group, figure, () => ({ title: `${year}年`, detail: `60岁以上人口${population}万人；占总人口${rate}%` }));
    svg.append(group);
  });
  appendRightAxis(svg, width - margin.right + 12, margin.top, plotHeight, [14, 16, 18, 20, 22], yRate, "%");
  canvas.append(svg);
  observeChart(figure);
}

function initDoctorsRankChart() {
  const figure = document.querySelector("[data-doctors-chart]");
  const canvas = figure?.querySelector("[data-chart-canvas]");
  if (!figure || !canvas) return;
  const width = 900;
  const height = 530;
  const left = 64;
  const right = 56;
  const axisY = 430;
  const scale = (value) => left + ((value - 2.8) / 3.2) * (width - left - right);
  const svg = createSvgElement("svg", { viewBox: `0 0 ${width} ${height}`, role: "img", "aria-labelledby": "doctors-chart-title" });
  [3, 3.5, 4, 4.5, 5, 5.5, 6].forEach((tick) => {
    const x = scale(tick);
    svg.append(createSvgElement("line", { class: "beeswarm-grid", x1: x, x2: x, y1: 42, y2: axisY }));
    const label = createSvgElement("text", { class: "chart-axis-label", x, y: axisY + 34, "text-anchor": "middle" });
    label.textContent = tick;
    svg.append(label);
  });
  const averageX = scale(3.61);
  svg.append(createSvgElement("line", { class: "beeswarm-average", x1: averageX, x2: averageX, y1: 34, y2: axisY + 6 }));
  const averageLabel = createSvgElement("text", { class: "beeswarm-average__label", x: averageX + 8, y: 30 });
  averageLabel.textContent = "全国均值";
  svg.append(averageLabel);
  const nodes = layoutBeeswarm(doctorsByProvince, scale, 238, 36);
  nodes.forEach(({ province, value, status, x, y }, index) => {
    const group = createSvgElement("g", { class: `beeswarm-node beeswarm-node--${status === "高于" ? "high" : "low"}`, transform: `translate(${x} ${y})`, tabindex: "0", role: "button", "aria-label": `${province}每千人医师数${value}人，${status}全国均值` });
    group.style.setProperty("--chart-delay", `${index * 22}ms`);
    group.append(createSvgElement("circle", { r: "17" }));
    const name = createSvgElement("text", { class: "beeswarm-node__label", x: "0", y: "4", "text-anchor": "middle", "aria-hidden": "true" });
    name.textContent = province;
    group.append(name);
    bindTooltip(group, figure, () => ({ title: province, detail: `每千人医师数${value}人；${status}全国均值` }));
    svg.append(group);
  });
  canvas.append(svg);
  observeChart(figure);
}

function initVisitsTileMap() {
  const figure = document.querySelector("[data-visits-map]");
  const canvas = figure?.querySelector("[data-chart-canvas]");
  if (!figure || !canvas) return;
  const width = 960;
  const height = 540;
  const tileWidth = 68;
  const tileHeight = 50;
  const startX = 58;
  const startY = 46;
  const values = new Map(dailyVisits);
  const svg = createSvgElement("svg", { viewBox: `0 0 ${width} ${height}`, role: "img", "aria-labelledby": "visits-map-title" });
  Object.entries(provinceTiles).forEach(([province, [column, row]], index) => {
    const value = values.get(province);
    const x = startX + column * (tileWidth + 5);
    const y = startY + row * (tileHeight + 5);
    const group = createSvgElement("g", { class: "map-tile", tabindex: "0", role: "button", "aria-label": `${province}医师日均担负门诊${value}人次` });
    group.style.setProperty("--tile-color", visitColor(value));
    group.style.setProperty("--chart-delay", `${index * 26}ms`);
    group.append(createSvgElement("rect", { x, y, width: tileWidth, height: tileHeight, rx: "3" }));
    const name = createSvgElement("text", { class: "map-tile__name", x: x + tileWidth / 2, y: y + 22, "text-anchor": "middle" });
    name.textContent = province;
    group.append(name);
    const number = createSvgElement("text", { class: "map-tile__value", x: x + tileWidth / 2, y: y + 40, "text-anchor": "middle" });
    number.textContent = value;
    group.append(number);
    bindTooltip(group, figure, () => ({ title: province, detail: `医师日均担负门诊${value}人次` }));
    svg.append(group);
  });
  canvas.append(svg);
  observeChart(figure);
}

function initInternationalChart() {
  const figure = document.querySelector("[data-international-chart]");
  const canvas = figure?.querySelector("[data-chart-canvas]");
  if (!figure || !canvas) return;
  const width = 900;
  const height = 530;
  const margin = { top: 44, right: 56, bottom: 72, left: 84 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;
  const doctorMap = new Map(doctorsInternational);
  const visitMap = new Map(visitsInternational);
  const countries = doctorsInternational.map(([name]) => name);
  const x = (value) => margin.left + ((value - 2) / 3) * plotWidth;
  const y = (value) => margin.top + plotHeight - ((value - 3) / 13) * plotHeight;
  const svg = createSvgElement("svg", { viewBox: `0 0 ${width} ${height}`, role: "img", "aria-labelledby": "international-chart-title" });
  [2, 3, 4, 5].forEach((tick) => {
    const tickX = x(tick);
    svg.append(createSvgElement("line", { class: "scatter-grid", x1: tickX, x2: tickX, y1: margin.top, y2: height - margin.bottom }));
    const label = createSvgElement("text", { class: "chart-axis-label", x: tickX, y: height - 38, "text-anchor": "middle" });
    label.textContent = tick;
    svg.append(label);
  });
  [4, 8, 12, 16].forEach((tick) => {
    const tickY = y(tick);
    svg.append(createSvgElement("line", { class: "scatter-grid", x1: margin.left, x2: width - margin.right, y1: tickY, y2: tickY }));
    const label = createSvgElement("text", { class: "chart-axis-label", x: margin.left - 14, y: tickY + 5, "text-anchor": "end" });
    label.textContent = tick;
    svg.append(label);
  });
  svg.append(createSvgElement("line", { class: "scatter-reference", x1: x(3.7), x2: x(3.7), y1: margin.top, y2: height - margin.bottom }));
  svg.append(createSvgElement("line", { class: "scatter-reference", x1: margin.left, x2: width - margin.right, y1: y(6.5), y2: y(6.5) }));
  const xTitle = createSvgElement("text", { class: "scatter-axis-title", x: margin.left + plotWidth / 2, y: height - 8, "text-anchor": "middle" });
  xTitle.textContent = "每千人执业医师数";
  svg.append(xTitle);
  const yTitle = createSvgElement("text", { class: "scatter-axis-title", x: 18, y: margin.top + plotHeight / 2, transform: `rotate(-90 18 ${margin.top + plotHeight / 2})`, "text-anchor": "middle" });
  yTitle.textContent = "年人均就诊次数";
  svg.append(yTitle);
  countries.forEach((country, index) => {
    const doctors = doctorMap.get(country);
    const visits = visitMap.get(country);
    const featured = country === "中国" || country === "OECD平均";
    const group = createSvgElement("g", { class: `country-point${featured ? " country-point--featured" : ""}${country === "中国" ? " country-point--china" : ""}`, transform: `translate(${x(doctors)} ${y(visits)})`, tabindex: "0", role: "button", "aria-label": `${country}每千人执业医师${doctors}人，年人均就诊${visits}次` });
    group.style.setProperty("--chart-delay", `${index * 70}ms`);
    group.append(createSvgElement("circle", { r: featured ? "13" : "9" }));
    const label = createSvgElement("text", { class: "country-point__label", x: "14", y: index % 2 ? "18" : "-12" });
    label.textContent = country;
    group.append(label);
    bindTooltip(group, figure, () => ({ title: country, detail: `每千人执业医师${doctors}人；年人均就诊${visits}次` }));
    svg.append(group);
  });
  canvas.append(svg);
  observeChart(figure);
}

function initCitySupplyChart() {
  const figure = document.querySelector("[data-city-supply-chart]");
  const canvas = figure?.querySelector("[data-chart-canvas]");
  if (!figure || !canvas) return;
  const width = 800;
  const height = 530;
  const margin = { top: 42, right: 54, bottom: 78, left: 70 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;
  const x = (value) => margin.left + (value / 55) * plotWidth;
  const y = (value) => margin.top + plotHeight - (value / 50) * plotHeight;
  const svg = createSvgElement("svg", { viewBox: `0 0 ${width} ${height}`, role: "img", "aria-labelledby": "city-supply-chart-title" });
  [0, 10, 20, 30, 40, 50].forEach((tick) => {
    const tickX = x(tick);
    const tickY = y(tick);
    svg.append(createSvgElement("line", { class: "scatter-grid", x1: tickX, x2: tickX, y1: margin.top, y2: height - margin.bottom }));
    svg.append(createSvgElement("line", { class: "scatter-grid", x1: margin.left, x2: width - margin.right, y1: tickY, y2: tickY }));
    const xLabel = createSvgElement("text", { class: "chart-axis-label", x: tickX, y: height - 38, "text-anchor": "middle" });
    xLabel.textContent = tick;
    svg.append(xLabel);
    const yLabel = createSvgElement("text", { class: "chart-axis-label", x: margin.left - 14, y: tickY + 5, "text-anchor": "end" });
    yLabel.textContent = tick;
    svg.append(yLabel);
  });
  const xTitle = createSvgElement("text", { class: "scatter-axis-title", x: margin.left + plotWidth / 2, y: height - 8, "text-anchor": "middle" });
  xTitle.textContent = "平台服务帖数";
  svg.append(xTitle);
  const yTitle = createSvgElement("text", { class: "scatter-axis-title", x: 18, y: margin.top + plotHeight / 2, transform: `rotate(-90 18 ${margin.top + plotHeight / 2})`, "text-anchor": "middle" });
  yTitle.textContent = "招聘岗位数";
  svg.append(yTitle);
  let zeroJobsIndex = 0;
  citySupply.forEach(([city, supply, jobs], index) => {
    const duplicateNudge = city === "合肥" ? -8 : city === "长沙" ? 8 : 0;
    const hasNoJobs = jobs === 0;
    const group = createSvgElement("g", { class: `city-point${hasNoJobs ? " city-point--zero" : ""}`, transform: `translate(${x(supply) + duplicateNudge} ${y(jobs)})`, tabindex: "0", role: "button", "aria-label": `${city}平台服务帖${supply}条，招聘岗位${jobs}条` });
    group.style.setProperty("--chart-delay", `${index * 55}ms`);
    group.append(createSvgElement("circle", { r: String(8 + Math.sqrt(supply + jobs) * 0.75) }));
    const labelY = hasNoJobs ? -12 - (zeroJobsIndex % 2) * 10 : index % 2 ? 16 : -10;
    const label = createSvgElement("text", {
      class: "city-point__label",
      x: "12",
      y: String(labelY),
      ...(hasNoJobs ? { transform: `rotate(-42 12 ${labelY})` } : {}),
    });
    label.textContent = city;
    group.append(label);
    if (hasNoJobs) zeroJobsIndex += 1;
    bindTooltip(group, figure, () => ({ title: city, detail: `平台服务帖${supply}条；招聘岗位${jobs}条` }));
    svg.append(group);
  });
  canvas.append(svg);
  observeChart(figure);
}

function initRegistrationsChart() {
  const figure = document.querySelector("[data-registrations-chart]");
  const canvas = figure?.querySelector("[data-chart-canvas]");
  if (!figure || !canvas) return;
  const width = 760;
  const height = 410;
  const margin = { top: 34, right: 32, bottom: 54, left: 58 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;
  const x = (index) => margin.left + (index / (registrations.length - 1)) * plotWidth;
  const y = (value) => margin.top + plotHeight - (value / 400) * plotHeight;
  const svg = createSvgElement("svg", { viewBox: `0 0 ${width} ${height}`, role: "img", "aria-labelledby": "registrations-chart-title" });
  [0, 100, 200, 300, 400].forEach((tick) => appendGridTick(svg, margin, width, y(tick), tick));
  const fullPoints = registrations.slice(0, 10).map(([, value], index) => [x(index), y(value)]);
  const partialPoints = registrations.slice(9).map(([, value], index) => [x(index + 9), y(value)]);
  svg.append(createSvgElement("path", { class: "registration-line", d: linePath(fullPoints), pathLength: "1" }));
  svg.append(createSvgElement("path", { class: "registration-line registration-line--partial", d: linePath(partialPoints), pathLength: "1" }));
  registrations.forEach(([year, value, note], index) => {
    const group = createSvgElement("g", { class: `registration-point${note ? " registration-point--partial" : ""}`, tabindex: "0", role: "button", "aria-label": `${year}年新注册企业${value}家${note ? `，${note}` : ""}` });
    group.style.setProperty("--chart-delay", `${index * 55}ms`);
    group.append(createSvgElement("circle", { cx: x(index), cy: y(value), r: note ? "7" : "6" }));
    const yearLabel = createSvgElement("text", { class: "chart-axis-label", x: x(index), y: height - 28, "text-anchor": "middle" });
    yearLabel.textContent = String(year).slice(2);
    group.append(yearLabel);
    bindTooltip(group, figure, () => ({ title: `${year}年`, detail: `新注册企业${value}家${note ? `；${note}` : ""}` }));
    svg.append(group);
  });
  canvas.append(svg);
  observeChart(figure);
}

function initTimelineChart() {
  const figure = document.querySelector("[data-timeline-chart]");
  const canvas = figure?.querySelector("[data-chart-canvas]");
  if (!figure || !canvas) return;
  const width = 1240;
  const height = 520;
  const axisY = 260;
  const startX = 66;
  const endX = width - 66;
  const svg = createSvgElement("svg", { viewBox: `0 0 ${width} ${height}`, role: "img", "aria-labelledby": "timeline-chart-title" });
  svg.append(createSvgElement("line", { class: "timeline-axis", x1: startX, x2: endX, y1: axisY, y2: axisY, pathLength: "1" }));
  let industryIndex = 0;
  let policyIndex = 0;
  industryTimeline.forEach(([time, type, event], index) => {
    const x = startX + (index / (industryTimeline.length - 1)) * (endX - startX);
    const laneIndex = type === "行业" ? industryIndex++ : policyIndex++;
    const tier = laneIndex % 2;
    const labelY = type === "行业" ? axisY - 82 - tier * 94 : axisY + 92 + tier * 94;
    const group = createSvgElement("g", { class: `timeline-event timeline-event--${type}`, tabindex: "0", role: "button", "aria-label": `${time}，${type}，${event}` });
    group.style.setProperty("--chart-delay", `${index * 55}ms`);
    group.append(createSvgElement("line", { class: "timeline-event__connector", x1: x, x2: x, y1: axisY, y2: type === "行业" ? labelY + 26 : labelY - 26, pathLength: "1" }));
    group.append(createSvgElement("circle", { class: "timeline-event__dot", cx: x, cy: axisY, r: "7" }));
    const timeLabel = createSvgElement("text", { class: "timeline-event__time", x, y: type === "行业" ? labelY - 26 : labelY + 58, "text-anchor": "middle" });
    timeLabel.textContent = time;
    group.append(timeLabel);
    const typeLabel = createSvgElement("text", { class: "timeline-event__type", x, y: type === "行业" ? labelY - 8 : labelY - 10, "text-anchor": "middle" });
    typeLabel.textContent = type;
    group.append(typeLabel);
    const eventLabel = createSvgElement("text", { class: "timeline-event__text", x, y: labelY + (type === "行业" ? 14 : 12), "text-anchor": "middle" });
    splitTimelineText(event).forEach((line, lineIndex) => {
      const tspan = createSvgElement("tspan", { x, dy: lineIndex === 0 ? "0" : "18" });
      tspan.textContent = line;
      eventLabel.append(tspan);
    });
    group.append(eventLabel);
    bindTooltip(group, figure, () => ({ title: `${time} · ${type}`, detail: event }));
    svg.append(group);
  });
  canvas.append(svg);
  observeChart(figure);
}

function initRiskCasesChart() {
  const figure = document.querySelector("[data-risk-chart]");
  const canvas = figure?.querySelector("[data-chart-canvas]");
  const detail = figure?.querySelector("[data-risk-detail]");
  if (!figure || !canvas || !detail) return;
  riskCases.forEach(([category, risk, description, amount], index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "risk-case";
    button.style.setProperty("--chart-delay", `${index * 55}ms`);
    button.innerHTML = `<span>${category}</span><strong>${risk}</strong>`;
    button.addEventListener("click", () => selectRiskCase(figure, button, detail, { category, risk, description, amount }));
    button.addEventListener("focus", () => selectRiskCase(figure, button, detail, { category, risk, description, amount }));
    canvas.append(button);
  });
  selectRiskCase(figure, canvas.firstElementChild, detail, {
    category: riskCases[0][0], risk: riskCases[0][1], description: riskCases[0][2], amount: riskCases[0][3],
  });
  observeChart(figure);
}

function selectRiskCase(figure, button, detail, item) {
  figure.querySelectorAll(".risk-case").forEach((candidate) => candidate.classList.toggle("is-active", candidate === button));
  detail.innerHTML = `<span>${item.category}</span><h4>${item.risk}</h4><p>${item.description}</p>${item.amount ? `<strong>${item.amount}</strong>` : ""}`;
}

function initPriceComparisonChart() {
  const figure = document.querySelector("[data-price-comparison-chart]");
  const canvas = figure?.querySelector("[data-chart-canvas]");
  if (!figure || !canvas) return;
  const width = 980;
  const height = 560;
  const margin = { top: 42, right: 56, bottom: 54, left: 240 };
  const plotWidth = width - margin.left - margin.right;
  const rowHeight = (height - margin.top - margin.bottom) / priceComparison.length;
  const scale = (value) => margin.left + (value / 500) * plotWidth;
  const svg = createSvgElement("svg", { viewBox: `0 0 ${width} ${height}`, role: "img", "aria-labelledby": "price-comparison-title" });
  [0, 100, 200, 300, 400, 500].forEach((tick) => {
    const x = scale(tick);
    svg.append(createSvgElement("line", { class: "price-compare__grid", x1: x, x2: x, y1: margin.top - 10, y2: height - margin.bottom }));
    const label = createSvgElement("text", { class: "chart-axis-label", x, y: height - 22, "text-anchor": "middle" });
    label.textContent = tick;
    svg.append(label);
  });
  priceComparison.forEach(([type, min, max, rawPrice, source], index) => {
    const y = margin.top + index * rowHeight + rowHeight / 2;
    const group = createSvgElement("g", { class: `price-compare-row${type.includes("政府") ? " price-compare-row--public" : ""}`, tabindex: "0", role: "button", "aria-label": `${type}，${rawPrice}，${source}` });
    group.style.setProperty("--chart-delay", `${index * 70}ms`);
    const label = createSvgElement("text", { class: "price-compare-row__label", x: margin.left - 18, y: y + 5, "text-anchor": "end" });
    label.textContent = type;
    group.append(label);
    group.append(createSvgElement("line", { class: "price-compare-row__range", x1: scale(min), x2: scale(max), y1: y, y2: y, pathLength: "1" }));
    group.append(createSvgElement("circle", { class: "price-compare-row__dot", cx: scale(min), cy: y, r: "7" }));
    if (max !== min) group.append(createSvgElement("circle", { class: "price-compare-row__dot", cx: scale(max), cy: y, r: "7" }));
    const value = createSvgElement("text", { class: "price-compare-row__value", x: Math.min(scale(max) + 14, width - margin.right - 80), y: y + 5 });
    value.textContent = rawPrice;
    group.append(value);
    bindTooltip(group, figure, () => ({ title: type, detail: `${rawPrice}；${source}` }));
    svg.append(group);
  });
  canvas.append(svg);
  observeChart(figure);
}

function appendGridTick(svg, margin, width, y, labelText) {
  svg.append(createSvgElement("line", { class: "chart-grid-line", x1: margin.left, x2: width - margin.right, y1: y, y2: y }));
  const label = createSvgElement("text", { class: "chart-axis-label", x: margin.left - 12, y: y + 5, "text-anchor": "end" });
  label.textContent = labelText;
  svg.append(label);
}

function appendRightAxis(svg, x, top, height, ticks, scale, suffix) {
  ticks.forEach((tick) => {
    const label = createSvgElement("text", { class: "chart-axis-label", x, y: scale(tick) + 5 });
    label.textContent = `${tick}${suffix}`;
    svg.append(label);
  });
}

function layoutBeeswarm(data, scale, centerY, step) {
  const placed = [];
  const levels = [0, -1, 1, -2, 2, -3, 3, -4, 4, -5, 5];
  data.forEach(([province, value, status]) => {
    const x = scale(value);
    const level = levels.find((candidate) => placed.every((node) => Math.hypot(node.x - x, node.y - (centerY + candidate * step)) >= 37)) ?? levels.at(-1);
    placed.push({ province, value, status, x, y: centerY + level * step });
  });
  return placed;
}

function splitTimelineText(text) {
  if (text.length <= 9) return [text];
  if (text.length <= 18) return [text.slice(0, 9), text.slice(9)];
  return [text.slice(0, 8), text.slice(8, 16), text.slice(16, 24)];
}

function linePath(points) {
  return points.map(([x, y], index) => `${index === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
}

function visitColor(value) {
  const ratio = Math.min(Math.max((value - 4.4) / (11.8 - 4.4), 0), 1);
  const start = [66, 104, 114];
  const end = [209, 151, 93];
  const color = start.map((channel, index) => Math.round(channel + (end[index] - channel) * ratio));
  return `rgb(${color.join(",")})`;
}
