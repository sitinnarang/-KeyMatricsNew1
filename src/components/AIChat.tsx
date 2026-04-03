"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Web Speech API type shims ──────────────────────── */
/* eslint-disable @typescript-eslint/no-explicit-any */
type SpeechRecognitionType = any;

/* ── Types ──────────────────────────────────────────── */
interface Message {
  id: number;
  role: "bot" | "user";
  text: string;
}

/* ── Keyword response map ───────────────────────────── */
const RESPONSES: Record<string, string> = {
  services:
    "Key Metrics Accounting offers a full suite of financial services including corporate & personal tax preparation, bookkeeping, payroll, business advisory, CRA audit defence, wealth management, estate planning, GST/HST filing, and cloud accounting solutions. How can we help you today?",
  pricing:
    "Our pricing is transparent and tailored to your needs. We offer fixed-fee monthly plans for bookkeeping and payroll, and competitive flat rates for tax preparation. Contact us for a free quote — no hidden fees, no surprises.",
  audit:
    "Dealing with a CRA audit? Do not worry — our experienced team provides full audit representation and defence. We handle all CRA correspondence, prepare documentation, and protect your interests throughout the entire process. Reach out today for a confidential consultation.",
  "getting started":
    "Getting started with Key Metrics is easy! Book a free consultation through our Contact page or call us at 1-800-555-9999. We will review your financial situation and recommend a customized plan to meet your goals.",
  hours:
    "Our office is open Monday through Friday, 8:00 AM to 7:00 PM MST. During tax season (February to April), we also offer Saturday appointments by request. You can reach us anytime via email at hello@keymetricsaccounting.ca.",
  location:
    "We are located at 4310 104 Ave NE, Calgary, AB T3J 1W5. We also serve clients remotely across Alberta and Canada through our cloud-based accounting platform.",
  bookkeeping:
    "Our bookkeeping services include daily transaction recording, bank reconciliation, accounts receivable/payable management, monthly financial statements, and GST/HST tracking — all powered by cloud technology for real-time access to your data.",
  payroll:
    "Key Metrics handles complete payroll processing including direct deposits, T4 preparation, CRA remittances, Records of Employment, and employee self-service portals. We ensure accuracy and compliance every pay period.",
  tax:
    "We provide comprehensive tax services for both individuals and businesses. This includes personal and corporate tax preparation, strategic tax planning, income splitting, capital gains optimization, and GST/HST filing. We maximize your deductions and minimize your tax burden.",
  advisory:
    "Our business advisory services include strategic planning, cash flow forecasting, fractional CFO services, business valuation, succession planning, and restructuring advice. We become your trusted financial partner for growth.",
  wealth:
    "Our wealth management services cover investment guidance, retirement planning, portfolio optimization, RRSP/TFSA/FHSA strategy, and long-term financial planning tailored to your goals and risk tolerance.",
  automation:
    "We help businesses automate their financial workflows using cloud-based accounting platforms, automated invoicing, receipt capture, bank feeds, and integrated reporting tools. Spend less time on paperwork and more time growing your business.",
  "small business":
    "Key Metrics specializes in small business accounting. We offer dedicated client teams, fixed-fee pricing, industry expertise in Calgary's key sectors, and a cloud-first approach that grows with your business.",
  blog:
    "Check out our blog at /blog for the latest insights on tax strategy, bookkeeping best practices, payroll management, and business growth tips from our team of Calgary CPAs.",
  about:
    "Key Metrics Accounting is Calgary's trusted accounting firm, helping businesses and individuals make smarter financial decisions since 2008. Our team of CPAs combines deep expertise with modern technology to deliver exceptional results.",
};

const QUICK_REPLIES = [
  { label: "Our Services", keyword: "services" },
  { label: "Pricing", keyword: "pricing" },
  { label: "CRA Audit Help", keyword: "audit" },
  { label: "Get Started", keyword: "getting started" },
];

const GREETING: Message = {
  id: 0,
  role: "bot",
  text: "Hi there! I am the KMA Assistant. I can help you learn about Key Metrics Accounting's services, pricing, and more. What can I help you with today?",
};

/* ── Helpers ─────────────────────────────────────────── */
function findResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const [keyword, response] of Object.entries(RESPONSES)) {
    if (lower.includes(keyword)) return response;
  }
  return "Thank you for your question! I am specifically designed to help with inquiries about Key Metrics Accounting's services, pricing, and operations. For other questions, please contact our team directly at hello@keymetricsaccounting.ca or call 1-800-555-9999.";
}

/* ── Animations ─────────────────────────────────────── */
const chatWindowVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" as const } },
  exit: { opacity: 0, scale: 0.85, y: 20, transition: { duration: 0.2 } },
};

const messageVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" as const } },
};

/* ── Component ──────────────────────────────────────── */
export default function AIChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [ttsEnabled, setTtsEnabled] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [msgIdCounter, setMsgIdCounter] = useState(1);

  const bodyRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<SpeechRecognitionType | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  /* Auto-scroll to bottom on new messages */
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages]);

  /* Text-to-speech */
  const speak = useCallback(
    (text: string) => {
      if (!ttsEnabled || typeof window === "undefined") return;
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1;
      utterance.pitch = 1;
      window.speechSynthesis.speak(utterance);
    },
    [ttsEnabled]
  );

  /* Send message */
  const sendMessage = useCallback(
    (text: string) => {
      if (!text.trim()) return;

      const userMsg: Message = { id: msgIdCounter, role: "user", text: text.trim() };
      const botResponse = findResponse(text);
      const botMsg: Message = { id: msgIdCounter + 1, role: "bot", text: botResponse };

      setMessages((prev) => [...prev, userMsg, botMsg]);
      setMsgIdCounter((prev) => prev + 2);
      setInput("");
      speak(botResponse);
    },
    [msgIdCounter, speak]
  );

  /* Speech-to-text */
  const toggleListening = useCallback(() => {
    if (typeof window === "undefined") return;

    const SpeechRecognitionAPI =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognitionAPI) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }

    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
      return;
    }

    const recognition = new SpeechRecognitionAPI();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = "en-CA";

    recognition.onresult = (event: any) => {
      let interim = "";
      let final = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          final += transcript;
        } else {
          interim += transcript;
        }
      }
      if (final) {
        setInput(final);
      } else {
        setInput(interim);
      }
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;
    recognition.start();
    setIsListening(true);
  }, [isListening]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* ── FAB ──────────────────────────────────── */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#2ed1cd] text-[#003c47] shadow-lg shadow-[#2ed1cd]/30 hover:bg-[#26b8b4] transition-colors flex items-center justify-center"
        aria-label="Toggle chat"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            {/* Notification badge */}
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
              1
            </span>
          </>
        )}
      </button>

      {/* ── Chat Window ──────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={chatWindowVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] rounded-2xl overflow-hidden shadow-2xl border border-surface-border bg-surface flex flex-col"
            style={{ height: "500px" }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#003c47] to-[#00505e] px-4 py-3 flex items-center gap-3 shrink-0">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#2ed1cd]/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#2ed1cd]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                {/* Green status dot */}
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#003c47] rounded-full" />
              </div>
              <div className="flex-1">
                <p className="text-white text-sm font-semibold">KMA Assistant</p>
                <p className="text-gray-400 text-xs">Online</p>
              </div>
              {/* Speaker toggle */}
              <button
                onClick={() => {
                  setTtsEnabled(!ttsEnabled);
                  if (ttsEnabled) window.speechSynthesis.cancel();
                }}
                className={`p-2 rounded-lg transition-colors ${
                  ttsEnabled ? "text-[#2ed1cd] bg-[#2ed1cd]/10" : "text-gray-400 hover:text-white"
                }`}
                aria-label="Toggle text-to-speech"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {ttsEnabled ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M11 5L6 9H2v6h4l5 4V5z"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Body */}
            <div ref={bodyRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  variants={messageVariants}
                  initial="hidden"
                  animate="visible"
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 text-sm leading-relaxed rounded-2xl ${
                      msg.role === "user"
                        ? "bg-[#2ed1cd] text-[#003c47] rounded-br-md"
                        : "bg-bg-alt text-fg border border-surface-border rounded-bl-md"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* Quick replies (shown only when there are few messages) */}
              {messages.length <= 2 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {QUICK_REPLIES.map((qr) => (
                    <button
                      key={qr.keyword}
                      onClick={() => sendMessage(qr.keyword)}
                      className="px-3 py-1.5 rounded-full text-xs font-semibold border border-[#2ed1cd]/30 text-[#2ed1cd] hover:bg-[#2ed1cd]/10 transition-colors"
                    >
                      {qr.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="shrink-0 border-t border-surface-border px-3 py-3 flex items-center gap-2">
              {/* Mic button */}
              <button
                type="button"
                onClick={toggleListening}
                className={`p-2 rounded-lg transition-colors shrink-0 ${
                  isListening
                    ? "text-red-500 bg-red-500/10 animate-pulse"
                    : "text-fg-muted hover:text-[#2ed1cd] hover:bg-[#2ed1cd]/10"
                }`}
                aria-label={isListening ? "Stop listening" : "Start voice input"}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11a7 7 0 01-14 0m7 7v4m-4 0h8M12 1a3 3 0 00-3 3v7a3 3 0 006 0V4a3 3 0 00-3-3z"
                  />
                </svg>
              </button>

              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={isListening ? "Listening..." : "Type your message..."}
                className="flex-1 bg-bg-alt border border-surface-border rounded-xl px-4 py-2.5 text-sm text-fg placeholder-fg-muted focus:outline-none focus:border-[#2ed1cd] transition-colors"
              />

              {/* Send button */}
              <button
                type="submit"
                disabled={!input.trim()}
                className="p-2 rounded-lg bg-[#2ed1cd] text-[#003c47] hover:bg-[#26b8b4] transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
                aria-label="Send message"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
