"use client";

import { AnimatedButton } from "@/ui/animated-button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/ui/carousel";
import { FormContainer } from "@/components/shared/form_container";
import Image from "next/image";
import { GoldButton } from "@/components/shared/gold_button";

const successStoriesData = [
  {
    id: 1,
    image: "/images/success_story/tel.webp",
    owner: {
      icon: "/icons/success_story/avatar.svg",
      title: "דנה לוי",
      description: "רואה חשבון ראשי של חברת ורשינה",
    },
    sections: [
      {
        id: 1,
        icon: "/icons/success_story/target.svg",
        title: "מטרה בלימודים",
        description:
          "לאחר שנים בעבודה זמנית, רציתי להשתלב בתחום עם אופק תעסוקתי ברור ולספק ביטחון כלכלי למשפחה שלי. בחרתי בקורס ניהול חשבונות כדי לפתוח לעצמי דלתות חדשות.",
      },
      {
        id: 2,
        icon: "/icons/success_story/question-mark.svg",
        title: "איך בניתי רצתי ללמוד",
        description:
          "לא היה לי ידע מוקדם והיה לי חשש מהמקצוע, אבל המדריכים הסבירו בסבלנות והיו זמינים לשאלות. התמדתי בתרגולים, התייעצתי עם חברי הקבוצה והרגשתי שיפור מיום ליום. התחלתי להאמין בעצמי שהתחום הזה מתאים לי.",
      },
      {
        id: 3,
        icon: "/icons/success_story/circle-check.svg",
        title: "תוצאות הלימודים",
        description:
          "הקורס נתן לי כלים מעשיים, ולאחר סיום הלימודים מצאתי עבודה במשרד רואי חשבון קטן. היום אני קם כל בוקר עם תחושת סיפוק וביטחון לעתיד.",
      },
    ],
  },
  {
    id: 2,
    image: "/images/success_story/tel.webp",
    owner: {
      icon: "/icons/success_story/avatar.svg",
      title: "אלכס גורביץ'",
      description: "רואה חשבון ראשי של חברת ורשינה",
    },
    sections: [
      {
        id: 1,
        icon: "/icons/success_story/circle-check.svg",
        title: "מטרה בלימודים",
        description:
          "חיפשתי שינוי מקצועי כי הרגשתי שאין לי אפשרות להתקדם במקום העבודה הקודם שלי. רציתי לרכוש מקצוע שמבוקש בשוק ומאפשר גמישות.",
      },
      {
        id: 2,
        icon: "/icons/success_story/circle-check.svg",
        title: "איך בניתי רצתי ללמוד",
        description:
          "בהתחלה היה לי קשה עם החומר, אבל עם הזמן והסיוע של צוות ההוראה והמפגשים בזום, הצלחתי להבין נושאים מסובכים. לא ויתרתי והקדשתי זמן לתרגול בבית.",
      },
      {
        id: 3,
        icon: "/icons/success_story/circle-check.svg",
        title: "תוצאות הלימודים",
        description:
          "עוד לפני סיום הקורס, קיבלתי הצעה לעבודה כעוזר/ת הנהלת חשבונות בעסק משפחתי. אני מרוצה מהדרך שעשיתי וממליץ/ה לכל מי שמתלבט להתחיל.",
      },
    ],
  },
];

export function SuccessStorySlider() {
  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form");
    if (formElement) {
      formElement.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  };

  return (
    <div className="w-full max-w-8xl mx-auto px-4">
      <Carousel
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {successStoriesData.map((story) => (
            <CarouselItem key={story.id}>
              <div className="flex flex-col max-w-[1200px] mx-auto relative my-4 lg:my-5 bg-gray-100">
                <div className="lg:grid lg:grid-cols-2 gap-10 lg:gap-20 min-h-[55vh] lg:min-h-[600px] py-10 lg:py-0 pr-2 lg:pr-10">
                  {/* Текст */}
                  <div className="space-y-6 px-4 md:px-8 lg:px-0 text-center lg:text-right flex flex-col justify-center w-full max-w-full lg:max-w-[700px]">
                    {/* Секции с иконками */}
                    <div className="space-y-4">
                      <>
                        <div className="flex items-start gap-4 text-right pr-2">
                          <Image
                            src={story.owner.icon}
                            alt={story.owner.title}
                            width={32}
                            height={32}
                          />

                          <div className="flex-1">
                            <h4 className="text-[16px] lg:text-[18px] font-bold text-black mb-2">
                              {story.owner.title}
                            </h4>
                            <p className="text-[14px] lg:text-[16px] text-black leading-relaxed">
                              {story.owner.description}
                            </p>
                          </div>
                        </div>
                        {story.sections.map((section) => (
                          <div
                            key={section.id}
                            className="flex items-start gap-4 text-right"
                          >
                            <Image
                              src={section.icon}
                              alt={section.title}
                              width={40}
                              height={40}
                            />

                            <div className="flex-1">
                              <h4 className="text-[18px] lg:text-[24px] font-semibold text-black mb-2">
                                {section.title}
                              </h4>
                              <p className="text-[14px] lg:text-[20px] text-black leading-relaxed">
                                {section.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </>
                    </div>
                  </div>

                  {/* Кнопка предыдущий слева */}
                  <CarouselPrevious className="flex absolute left-[5px] lg:left-[-80px] top-[65%] lg:top-1/2 -translate-y-1/2 z-10 text-primary border-primary hover:bg-primary hover:text-white w-10 h-10 lg:w-12 lg:h-12 rounded-full">
                    <Image
                      src="/icons/our_teachers/arrow_left.svg"
                      alt="arrow-left"
                      width={40}
                      height={40}
                      className="lg:w-[50px] lg:h-[50px]"
                    />
                  </CarouselPrevious>

                  {/* Кнопка следующий справа */}
                  <CarouselNext className="flex absolute right-[5px] lg:right-[-80px] top-[65%] lg:top-1/2 -translate-y-1/2 z-10 text-primary border-primary hover:bg-primary hover:text-white w-10 h-10 lg:w-12 lg:h-12 rounded-full">
                    <Image
                      src="/icons/our_teachers/arrow_right.svg"
                      alt="arrow-right"
                      width={40}
                      height={40}
                      className="lg:w-[50px] lg:h-[50px]"
                    />
                  </CarouselNext>

                  {/* Изображение */}
                  <div className="hidden lg:flex justify-center lg:justify-start items-center absolute top-10 left-10">
                    <Image
                      src={story.image}
                      alt="icon"
                      width={200}
                      height={700}
                      className="lg:w-[auto] lg:h-[700px] object-cover"
                    />
                  </div>
                </div>
                {/* Зеленая секция внизу */}
                <FormContainer>
                  <div className="w-full flex flex-col lg:flex-row items-center justify-start py-8 px-10  gap-4 lg:gap-16">
                    <div className="flex flex-row items-center gap-8">
                      <Image
                        src="/images/success_story/diploma.png"
                        alt="diploma"
                        width={120}
                        height={140}
                      />
                      <p className="text-black text-[16px] lg:text-[20px] font-semibold">
                        תעודה עם סיום
                        <br /> ההכשרה
                      </p>
                    </div>

                    <GoldButton
                      onClick={scrollToForm}
                      className="w-[300px] py-4 px-10"
                    >
                      אני רוצה להתחיל
                    </GoldButton>
                  </div>
                </FormContainer>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
