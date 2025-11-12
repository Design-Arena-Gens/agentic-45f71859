"use client";

import { useEffect, useRef, useState } from "react";

const VOICEOVER_SCRIPT = `Discover smarter ways to grow your wealth beyond traditional investments. Alternative Investment Funds, or AIFs, are privately pooled investment vehicles that unlock exclusive, high-growth opportunities across global markets. At Accred Alts, they connect visionary investors with curated strategies that move beyond the ordinary. Category one covers venture capital, SME growth, and social impact funds designed to nurture innovation and inclusive progress. Category two brings together private equity and private debt funds that scale established businesses with flexible capital. Category three introduces hedge funds and advanced strategies engineered for agile performance in any market climate. Through diversification, expert management, and intelligent wealth creation, Accred Alts empowers you to participate in the future of alternative investments with confidence.`;

export default function Page() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sessionKey, setSessionKey] = useState(0);
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined") {
        window.speechSynthesis?.cancel();
      }
    };
  }, []);

  useEffect(() => {
    if (!isPlaying || typeof window === "undefined") {
      return;
    }

    window.speechSynthesis?.cancel();

    const utterance = new SpeechSynthesisUtterance(VOICEOVER_SCRIPT);
    utterance.lang = "en-US";
    utterance.rate = 1.03;
    utterance.pitch = 1;
    utterance.volume = 1;
    speechRef.current = utterance;
    window.speechSynthesis?.speak(utterance);

    return () => {
      window.speechSynthesis?.cancel();
    };
  }, [isPlaying, sessionKey]);

  const handlePlay = () => {
    setSessionKey((value) => value + 1);
    setIsPlaying(true);
  };

  const handleReplay = () => {
    window.speechSynthesis?.cancel();
    setSessionKey((value) => value + 1);
    setIsPlaying(false);
    requestAnimationFrame(() => {
      setIsPlaying(true);
    });
  };

  return (
    <main className="page">
      <div className="hero">
        <div className="frame-wrapper">
          <div
            key={sessionKey}
            className={`video-stage ${isPlaying ? "playing" : ""}`}
          >
            <div className="ambient-layer" />
            <div className="glow-orb orb-left" />
            <div className="glow-orb orb-right" />

            <section className="scene opening">
              <div className="graph-cluster">
                <div className="graph-bar bar-1" />
                <div className="graph-bar bar-2" />
                <div className="graph-bar bar-3" />
                <div className="graph-line" />
              </div>
              <div className="coin-stack">
                <span className="coin coin-1" />
                <span className="coin coin-2" />
                <span className="coin coin-3" />
              </div>
              <div className="network-web">
                <span className="node node-a" />
                <span className="node node-b" />
                <span className="node node-c" />
                <span className="node node-d" />
              </div>
              <h1>Discover smarter ways to grow your wealth.</h1>
              <h2>Beyond traditional investments with Accred Alts.</h2>
            </section>

            <section className="scene definition">
              <p className="tag">Alternative Investment Funds</p>
              <h3>Privately pooled. Globally connected.</h3>
              <p className="body">
                AIFs unlock curated, high-growth opportunities and exclusive deal
                flow across global markets, engineered for forward-looking
                investors ready for more.
              </p>
            </section>

            <section className="scene categories">
              <h3>Three dynamic categories</h3>
              <ul>
                <li>
                  <strong>Category I</strong>
                  <span>Venture Capital · SME Growth · Social Impact</span>
                </li>
                <li>
                  <strong>Category II</strong>
                  <span>Private Equity · Private Debt · Scaling Capital</span>
                </li>
                <li>
                  <strong>Category III</strong>
                  <span>Hedge Funds · Advanced, Agile Strategies</span>
                </li>
              </ul>
            </section>

            <section className="scene advantages">
              <h3>Why investors choose AIFs with Accred Alts</h3>
              <div className="advantage-grid">
                <article>
                  <h4>Diversification</h4>
                  <p>
                    Blend uncorrelated assets to stabilize portfolios and unlock
                    asymmetric upside.
                  </p>
                </article>
                <article>
                  <h4>Expert Management</h4>
                  <p>
                    Partner with specialist fund managers who drive disciplined
                    execution.
                  </p>
                </article>
                <article>
                  <h4>Intelligent Growth</h4>
                  <p>
                    Target innovative sectors, tailored to your risk appetite
                    and ambitions.
                  </p>
                </article>
              </div>
            </section>

            <section className="scene closing">
              <p className="cta-tag">Accred Alts</p>
              <h3>Shape the future of alternative investments.</h3>
              <p className="body">
                Harness curated access, actionable intelligence, and a partner
                built for next-generation wealth creation.
              </p>
            </section>
          </div>
        </div>

        <aside className="controls">
          <h2>Animated AIF explainer</h2>
          <p>
            Tap play to trigger cinematic motion graphics and an immersive
            voiceover synchronised for a 9:16 experience tailored to modern
            investors.
          </p>
          {!isPlaying ? (
            <button type="button" onClick={handlePlay}>
              Play experience
            </button>
          ) : (
            <button type="button" onClick={handleReplay}>
              Replay
            </button>
          )}
          <small>
            Voiceover uses on-device speech synthesis. For best results, enable
            sound and allow speech playback.
          </small>
        </aside>
      </div>
    </main>
  );
}
