import { useEffect, useState } from "react";
import './LoadingScreen.css'

function AvatarSVG() {
  return (
    <svg
      className="avatar-svg"
      viewBox="0 0 240 260"
      width="240"
      height="260"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shadow */}
      <ellipse cx="120" cy="252" rx="70" ry="8" fill="#000" opacity="0.2" />

      {/* Body */}
      <ellipse cx="120" cy="238" rx="75" ry="42" fill="#1a1a2e" />
      <path d="M90 210 Q120 228 150 210 L146 196 Q120 216 94 196Z" fill="#16213e" />
      <rect x="115" y="204" width="10" height="32" rx="2" fill="#f5c842" opacity="0.55" />

      {/* Neck */}
      <rect x="107" y="178" width="26" height="34" rx="5" fill="#d4a76a" />

      {/* Head */}
      <ellipse cx="120" cy="112" rx="72" ry="82" fill="#d4a76a" />

      {/* Hair */}
      <path d="M50 108 Q52 42 120 28 Q188 42 190 108 Q178 60 120 52 Q62 60 50 108Z" fill="#1a1a1a" />
      <path d="M50 108 Q43 128 47 150 Q53 118 57 100Z" fill="#1a1a1a" />
      <path d="M190 108 Q197 128 193 150 Q187 118 183 100Z" fill="#1a1a1a" />

      {/* Ears */}
      <ellipse cx="49" cy="118" rx="10" ry="14" fill="#c99a5e" />
      <ellipse cx="191" cy="118" rx="10" ry="14" fill="#c99a5e" />
      <ellipse cx="49" cy="118" rx="6" ry="9" fill="#bf8e50" />
      <ellipse cx="191" cy="118" rx="6" ry="9" fill="#bf8e50" />

      {/* Eyebrows */}
      <path d="M84 76 Q97 69 109 73" fill="none" stroke="#1a1a1a" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M131 73 Q143 69 156 76" fill="none" stroke="#1a1a1a" strokeWidth="3.5" strokeLinecap="round" />

      {/* Eyes */}
      <ellipse cx="97" cy="94" rx="14" ry="12" fill="white" />
      <ellipse cx="143" cy="94" rx="14" ry="12" fill="white" />
      <ellipse cx="99" cy="96" rx="9" ry="9" fill="#2c3e50" />
      <ellipse cx="145" cy="96" rx="9" ry="9" fill="#2c3e50" />
      <ellipse cx="100" cy="97" rx="5.5" ry="5.5" fill="#111" />
      <ellipse cx="146" cy="97" rx="5.5" ry="5.5" fill="#111" />
      <circle cx="103" cy="93" r="2" fill="white" />
      <circle cx="149" cy="93" r="2" fill="white" />

      {/* Nose */}
      <path d="M115 122 Q113 136 109 142 Q120 146 131 142 Q127 136 125 122" fill="none" stroke="#b8895a" strokeWidth="1.8" strokeLinecap="round" />

      {/* Smile */}
      <path d="M99 162 Q120 178 141 162" fill="none" stroke="#8b5e3c" strokeWidth="2.5" strokeLinecap="round" />

      {/* Stubble shadow */}
      <ellipse cx="120" cy="170" rx="44" ry="18" fill="#b8895a" opacity="0.22" />

      {/* Glasses */}
      <rect x="78" y="85" width="44" height="24" rx="9" fill="none" stroke="#f5c842" strokeWidth="2.2" opacity="0.9" />
      <rect x="128" y="85" width="44" height="24" rx="9" fill="none" stroke="#f5c842" strokeWidth="2.2" opacity="0.9" />
      <line x1="122" y1="96" x2="128" y2="96" stroke="#f5c842" strokeWidth="2" opacity="0.9" />
      <line x1="48" y1="96" x2="78" y2="96" stroke="#f5c842" strokeWidth="2" opacity="0.9" />
      <line x1="172" y1="96" x2="192" y2="96" stroke="#f5c842" strokeWidth="2" opacity="0.9" />
    </svg>
  );
}

const STATUS_MESSAGES = [
  "initializing modules_",
  "loading components_",
  "compiling assets_",
  "almost ready_",
];

export default function LoadingScreen() {
  const [statusIdx, setStatusIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setStatusIdx((i) => (i + 1) % STATUS_MESSAGES.length);
    }, 700);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="loader-root">

        {/* Orbit rings */}
        <div style={{ position: "absolute", top: "38%", left: "50%", transform: "translate(-50%,-50%)", width: 0, height: 0 }}>
          <div className="ring-outer">
            <div className="orbit-dot" style={{ width: 10, height: 10, background: "#f5c842", top: -5, left: "50%", marginLeft: -5 }} />
            <div className="orbit-dot" style={{ width: 7, height: 7, background: "#4a90e2", bottom: "15%", right: "8%", marginRight: -3.5 }} />
          </div>
          <div className="ring-inner">
            <div className="orbit-dot" style={{ width: 6, height: 6, background: "#e05c5c", top: "8%", left: "10%" }} />
          </div>
        </div>

        {/* Floating tech badges */}
        <div className="badge badge-js">JS</div>
        <div className="badge badge-re">Re</div>
        <div className="badge badge-ts">TS</div>
        <div className="badge badge-git">Git</div>

        {/* Avatar */}
        <div className="avatar-float">
          <div className="avatar-wrap">
            <AvatarSVG />
          </div>
        </div>

        {/* Name */}
        <div className="name-block">
          <div className="dev-title">Full Stack Developer</div>
          <div className="dev-sub">building ideas into reality</div>
        </div>

        {/* Progress bar */}
        <div className="progress-wrap">
          <div className="progress-track">
            <div className="progress-fill" />
          </div>
          <div className="loading-dots">
            <span /><span /><span />
          </div>
        </div>

        {/* Status text */}
        <div className="status-text">
          {STATUS_MESSAGES[statusIdx]}<span className="cursor">|</span>
        </div>

    </div>
  );
}
