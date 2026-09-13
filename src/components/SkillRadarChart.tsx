import { useId } from "react";
import type { SkillScore } from "../lib/skills";

interface SkillRadarChartProps {
  skills: SkillScore[];
  className?: string;
}

interface Point {
  x: number;
  y: number;
}

const CENTER_X = 180;
const CENTER_Y = 165;
const RADIUS = 100;

function pointAt(index: number, radius: number): Point {
  const angle = ((-90 + index * 90) * Math.PI) / 180;
  return {
    x: CENTER_X + Math.cos(angle) * radius,
    y: CENTER_Y + Math.sin(angle) * radius,
  };
}

function polygonPoints(points: Point[]): string {
  return points.map((point) => `${point.x},${point.y}`).join(" ");
}

const SHORT_LABELS: Record<SkillScore["key"], string> = {
  hanzi: "Nhận diện chữ",
  vocab: "Vốn từ vựng",
  grammar: "Ngữ pháp",
  listening: "Nghe hiểu",
};

const LABEL_POSITIONS = [
  { x: CENTER_X, y: 24 },
  { x: 306, y: CENTER_Y - 5 },
  { x: CENTER_X, y: 310 },
  { x: 54, y: CENTER_Y - 5 },
];

export function SkillRadarChart({ skills, className = "" }: SkillRadarChartProps) {
  const gradientId = `skill-radar-${useId().replace(/:/g, "")}`;
  const normalizedSkills = skills.slice(0, 4);
  const dataPoints = normalizedSkills.map((skill, index) =>
    pointAt(index, (Math.max(0, Math.min(100, skill.score)) / 100) * RADIUS),
  );

  return (
    <svg
      viewBox="0 0 360 330"
      role="img"
      aria-label={`Biểu đồ năng lực: ${normalizedSkills.map((skill) => `${skill.label} ${skill.score}%`).join(", ")}`}
      className={`h-auto w-full max-w-[390px] overflow-visible ${className}`}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#F472B6" />
        </linearGradient>
      </defs>

      {[0.25, 0.5, 0.75, 1].map((level) => (
        <polygon
          key={level}
          points={polygonPoints([0, 1, 2, 3].map((index) => pointAt(index, RADIUS * level)))}
          fill={level === 1 ? "#F8FAFC" : "none"}
          fillOpacity="0.55"
          stroke="#CBD5E1"
          strokeWidth="1"
          strokeDasharray="4 5"
          vectorEffect="non-scaling-stroke"
        />
      ))}

      {[0, 1, 2, 3].map((index) => {
        const point = pointAt(index, RADIUS);
        return (
          <line
            key={index}
            x1={CENTER_X}
            y1={CENTER_Y}
            x2={point.x}
            y2={point.y}
            stroke="#E2E8F0"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        );
      })}

      {dataPoints.length === 4 && (
        <polygon
          points={polygonPoints(dataPoints)}
          fill={`url(#${gradientId})`}
          fillOpacity="0.3"
          stroke="#0284C7"
          strokeWidth="2.5"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      )}

      {dataPoints.map((point, index) => {
        const skill = normalizedSkills[index];
        return (
          <circle
            key={skill.key}
            cx={point.x}
            cy={point.y}
            r="5"
            fill={skill.color}
            stroke="white"
            strokeWidth="2.5"
            className="cursor-help transition-transform duration-200 hover:scale-125"
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          >
            <title>{`${skill.label}: ${skill.score}% · ${skill.levelLabel}`}</title>
          </circle>
        );
      })}

      {normalizedSkills.map((skill, index) => {
        const position = LABEL_POSITIONS[index];
        return (
          <text
            key={skill.key}
            x={position.x}
            y={position.y}
            textAnchor="middle"
            fill="#17303F"
            className="select-none text-[11px] font-bold"
          >
            <tspan x={position.x}>{skill.icon} {SHORT_LABELS[skill.key]}</tspan>
            <tspan x={position.x} dy="15" fill={skill.color} className="font-mono text-[12px] font-black">
              {skill.score}%
            </tspan>
          </text>
        );
      })}

      <circle cx={CENTER_X} cy={CENTER_Y} r="3" fill="#17303F" opacity="0.5" />
    </svg>
  );
}
