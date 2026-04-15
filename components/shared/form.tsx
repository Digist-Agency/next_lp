"use client";

import { useEffect, useState } from "react";
import { GoldButton } from "./gold_button";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

type UTMParams = Record<string, string>;

export function Form() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    agreedToTerms: false,
    honeypot: "", // антиспам поле
  });
  const [utmParams, setUtmParams] = useState<UTMParams>({});

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const collected: UTMParams = {};

    params.forEach((value, key) => {
      if (key.toLowerCase().startsWith("utm")) {
        collected[key] = value;
      }
    });

    setUtmParams(collected);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot проверка - если поле заполнено, это спам
    if (formData.honeypot !== "") {
      console.log("Спам обнаружен, форма не отправлена");
      return;
    }

    try {
      const response = await fetch(
        "https://hook.eu1.make.com/5tw94wecxv3fs7qsz4o7afj4b1oy04bj",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            agreedToTerms: formData.agreedToTerms,
            timestamp: new Date().toISOString(),
            utm: utmParams,
          }),
        }
      );

      if (response.ok) {
        console.log("Форма успешно отправлена на вебхук");
        if (typeof window !== "undefined") {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "lead_success",
            formName: "contact_form",
            utm: utmParams,
          });
          window.location.href = "https://lp.nextcollege.co.il/thank-you/";
        }
        // Очищаем форму после успешной отправки
        setFormData({
          name: "",
          phone: "",
          agreedToTerms: false,
          honeypot: "",
        });
      } else {
        console.error("Ошибка при отправке формы:", response.status);
      }
    } catch (error) {
      console.error("Ошибка при отправке формы:", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const isFormValid =
    formData.name.trim() !== "" &&
    formData.phone.trim() !== "" &&
    formData.agreedToTerms;

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 text-right w-full max-w-[1000px] mx-auto"
    >
      {/* Honeypot поле - скрытое от пользователей */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleInputChange}
        tabIndex={-1}
        autoComplete="off"
        className="absolute top-0 left-0 w-0 h-0 opacity-0 overflow-hidden border-0 p-0 m-0"
        aria-hidden="true"
      />

      {/* DESKTOP: horizontal layout */}
      <div className="hidden lg:flex lg:flex-row-reverse gap-4 mb-4">
        <GoldButton
          type="submit"
          disabled={!isFormValid}
          className="h-[60px] text-[20px] flex-1"
        >
          לשיחת ייעוץ ללא התחייבות
        </GoldButton>

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="טלפון"
          className="flex-1 h-[60px] px-4 border outline-none bg-white text-right"
          required
        />

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="שם מלא"
          className="flex-1 h-[60px] px-4 border outline-none bg-white text-right"
          required
        />
      </div>

      {/* MOBILE/TABLET: vertical layout */}
      <div className="flex flex-col gap-4 lg:hidden">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="שם מלא"
          className="w-full h-[40px] px-4 border outline-none bg-white text-right"
          required
        />

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="טלפון"
          className="w-full h-[40px] px-4 border outline-none bg-white text-right"
          required
        />

        <label className="flex flex-row items-start gap-2 text-[14px] font-[400] text-black cursor-pointer" dir="rtl">
          <input
            type="checkbox"
            name="agreedToTerms"
            checked={formData.agreedToTerms}
            onChange={handleInputChange}
            required
            className="mt-1 w-4 h-4 shrink-0 appearance-none border-2 border-black bg-white
  checked:bg-yellow-400 checked:border-black focus:outline-none
  checked:before:content-['✓'] checked:before:block checked:before:text-black
  checked:before:text-[14px] checked:before:leading-4 checked:before:text-center"
          />
          <span>
            בהרשמתך הינך מסכימ/ה עם{" "}
            <a href="https://nextcollege.co.il/privacy-policy/" target="_blank" rel="noopener noreferrer" className="underline font-bold">
              מדיניות הפרטיות של האתר
            </a>
            . אני מאשר/ת קבלת מידע שיווקי באמצעות דיוור במייל, בטלפון ו/או SMS /WHATSAPP וניתן להסיר את הסכמתי בכל עת.
          </span>
        </label>

        <GoldButton
          type="submit"
          disabled={!isFormValid}
          className="w-full h-[40px] text-[20px]"
        >
          לשיחת ייעוץ ללא התחייבות
        </GoldButton>

      </div>

      {/* DESKTOP: bottom text and checkbox */}
      <div className="hidden lg:flex flex-row-reverse justify-end items-center text-[16px] font-[600] text-black">
        <label className="flex flex-row items-start gap-2 cursor-pointer text-[14px] font-[400]" dir="rtl">
          <input
            type="checkbox"
            name="agreedToTerms"
            checked={formData.agreedToTerms}
            onChange={handleInputChange}
            required
            className="mt-1 w-4 h-4 shrink-0 appearance-none border-2 border-black bg-white
  checked:bg-yellow-400 checked:border-black focus:outline-none
  checked:before:content-['✓'] checked:before:block checked:before:text-black
  checked:before:text-[14px] checked:before:leading-4 checked:before:text-center"
          />
          <span>
            בהרשמתך הינך מסכימ/ה עם{" "}
            <a href="https://nextcollege.co.il/privacy-policy/" target="_blank" rel="noopener noreferrer" className="underline font-bold">
              מדיניות הפרטיות של האתר
            </a>
            . אני מאשר/ת קבלת מידע שיווקי באמצעות דיוור במייל, בטלפון ו/או SMS /WHATSAPP וניתן להסיר את הסכמתי בכל עת.
          </span>
        </label>
      </div>
    </form>
  );
}
