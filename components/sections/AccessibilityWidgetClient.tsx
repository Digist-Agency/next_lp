"use client";

import { useEffect, useState } from "react";
import { Accessibility } from "accessibility";

export default function AccessibilityWidgetClient() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Дожидаемся конца гидратации
    requestAnimationFrame(() => {
      setTimeout(() => {
        setReady(true);
      }, 300); // можно увеличить до 500мс
    });
  }, []);

  useEffect(() => {
    if (!ready) return;

    // Проверяем поддержку Web Speech API и HTTPS протокол
    const isSpeechSupported =
      "webkitSpeechRecognition" in window || "SpeechRecognition" in window;
    const isHttps = window.location.protocol === "https:";
    const isLocalhost =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1";

    // Проверяем, поддерживается ли speechToText
    const canUseSpeechToText = isSpeechSupported && (isHttps || isLocalhost);

    // Определяем доступные модули
    const availableModules = [
      "increaseText",
      "decreaseText",
      "increaseTextSpacing",
      "decreaseTextSpacing",
      "invertColors",
      "underlineLinks",
      "bigCursor",
      "readingGuide",
      "textToSpeech",
      "disableAnimations",
    ];

    // Добавляем speechToText только если поддерживается
    if (canUseSpeechToText) {
      availableModules.push("speechToText");
    }

    const options = {
      labels: {
        menuTitle: "תפריט נגישות",
        resetTitle: "איפוס הגדרות",
        closeTitle: "סגור תפריט",
        increaseText: "הגדל טקסט",
        decreaseText: "הקטן טקסט",
        increaseTextSpacing: "הגדל ריווח בין תווים",
        decreaseTextSpacing: "הקטן ריווח בין תווים",
        invertColors: "הפוך צבעים",
        underlineLinks: "קו תחתון לקישורים",
        bigCursor: "סמן עכבר גדול",
        readingGuide: "קו מנחה לקריאה",
        textToSpeech: "הקראת טקסט",
        disableAnimations: "השבת אנימציות",
      },
      modulesOrder: availableModules,
      // Отключаем предупреждения о неподдерживаемых функциях
      suppressWarnings: true,
    };

    // Инициализируем библиотеку только если все необходимые функции поддерживаются
    try {
      // @ts-expect-error - Accessibility is not typed
      new Accessibility(options);
    } catch (error) {
      console.warn("Accessibility widget initialization failed:", error);
    }
  }, [ready]);

  return null;
}
