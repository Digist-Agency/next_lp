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
        speechToText: "המרת דיבור לטקסט",
        disableAnimations: "השבת אנימציות",
      },
      modulesOrder: [
        "increaseText",
        "decreaseText",
        "increaseTextSpacing",
        "decreaseTextSpacing",
        "invertColors",
        "underlineLinks",
        "bigCursor",
        "readingGuide",
        "textToSpeech",
        "speechToText",
        "disableAnimations",
      ],
    };
    // @ts-expect-error - Accessibility is not typed
    new Accessibility(options);
  }, [ready]);

  return null;
}
