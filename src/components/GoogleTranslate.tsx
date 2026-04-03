"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            includedLanguages: string;
            layout: number;
            autoDisplay: boolean;
          },
          elementId: string
        ) => void;
      };
    };
    googleTranslateElementInit: () => void;
  }
}

export function triggerTranslate(lang: string) {
  // Function to actually trigger the translation
  const doTranslate = () => {
    const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
    if (combo) {
      combo.value = lang;
      combo.dispatchEvent(new Event("change"));
      return true;
    }
    return false;
  };

  // Try immediately
  if (doTranslate()) return;

  // If combo not ready, try a few times with delay
  let attempts = 0;
  const maxAttempts = 10;
  const interval = setInterval(() => {
    attempts++;
    if (doTranslate() || attempts >= maxAttempts) {
      clearInterval(interval);
      // If still not working after retries, use cookie method
      if (attempts >= maxAttempts) {
        const domain = window.location.hostname;
        document.cookie = `googtrans=/en/${lang};path=/;domain=${domain}`;
        document.cookie = `googtrans=/en/${lang};path=/`;
        window.location.reload();
      }
    }
  }, 200);
}

export default function GoogleTranslate() {
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,fr,es,hi,pa,zh-CN,ar,tl,ur,de,pt,ko,ja",
            layout: 0, // SIMPLE layout
            autoDisplay: false,
          },
          "google_translate_element"
        );
      }
    };
  }, []);

  return (
    <>
      {/* Google Translate element - visually hidden but accessible */}
      <div id="google_translate_element" style={{ position: 'absolute', top: '-9999px', left: '-9999px' }} />
      
      {/* Google Translate Script */}
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />

      {/* Hide Google Translate banner and widget visually but keep accessible */}
      <style jsx global>{`
        .goog-te-banner-frame,
        #goog-gt-tt,
        .goog-te-balloon-frame {
          display: none !important;
        }
        .skiptranslate {
          position: absolute !important;
          top: -9999px !important;
          left: -9999px !important;
          visibility: hidden !important;
        }
        .skiptranslate .goog-te-combo {
          visibility: visible !important;
        }
        body {
          top: 0 !important;
        }
        .goog-text-highlight {
          background: none !important;
          box-shadow: none !important;
        }
      `}</style>
    </>
  );
}
