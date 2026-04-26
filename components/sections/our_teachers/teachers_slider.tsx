import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/ui/carousel";
import Image from "next/image";

const teachersData = [
  {
    id: 1,
    hidden: false,
    description: (
      <>
        מאחורי הקורס עומד מי שמביא איתו ניסיון אמיתי מהשטח — לא רק תיאוריה.
      </>
    ),
    fullDescription: (
      <>
        רו&quot;ח ניסים שושן, המנהל האקדמי של התוכנית, הוא רואה חשבון משנת
        1985, עם ניסיון של למעלה מ־35 שנה בעולם הפיננסי. במהלך השנים ניהל
        משרד רואי חשבון, ליווה חברות ועצמאים, ייצג מול רשויות המס והכשיר
        דורות של אנשי מקצוע בתחום הנהלת החשבונות והשכר.
        <br />
        <br />
        הקורס נבנה מתוך ניסיון מצטבר של שנים — כדי לתת לכם לא רק ידע, אלא
        הבנה עמוקה של עולם השכר כפי שהוא מתנהל בפועל.
      </>
    ),
    quote: null,
    image: "/images/our_teachers/teacher_1.png",
    sticker: {
      text: 'רו"ח ניסים שושן',
      description: "בכיר בתחום החשבונאות",
      icon: "/icons/our_teachers/avatar_teacher_1.svg",
    },
  },
  {
    id: 2,
    hidden: true,
    description: (
      <>
        בעלת תואר ראשון במנהל עסקים עם התמחות במימון ומערכות מידע, ורואת חשבון
        מוסמכת. מתמחה בתחום חשבות שכר, הנהלת חשבונות (סוג 1+2)
        <br />
        וחשבונאות ליועצי מס.
      </>
    ),
    fullDescription: (
      <>
        מרצה בכירה במכללת נקסט, מרכזת פדגוגית ומדריכה מקצועית בקורסים לחשבות שכר
        ולחשבונאות. בעלת ניסיון רב בהכנת תלמידים לבחינות הסמכה חיצוניות של משרד
        הכלכלה ולשכת רואי החשבון, עם אחוזי הצלחה גבוהים במיוחד בקרב תלמידיה.
        <br />
        <br />
        סיגלית ידועה בגישה מקצועית, ליווי אישי ויכולת להנגיש חומר מורכב בצורה
        ברורה, מה שמוביל להצלחת תלמידיה במבחנים ובהשתלבות מקצועית מהירה בשוק
        העבודה.
      </>
    ),
    quote: (
      <>
        המטרה שלי היא שכל תלמיד ירגיש מוכן – לא רק למבחן, אלא לקריירה אמיתית
        ומקצועית.
      </>
    ),
    image: "/images/our_teachers/teacher_2.webp",
    sticker: {
      text: "סיגלית קניאס",
      description: "חשבת שכר ורואת חשבון מוסמכת",
      icon: "/icons/our_teachers/avatar_teacher_2.svg",
    },
  },
];

const visibleTeachers = teachersData.filter((t) => !t.hidden);

export function TeachersSlider() {
  const showNav = visibleTeachers.length > 1;

  return (
    <div className="w-full max-w-8xl mx-auto px-4">
      <Carousel
        className="w-full"
        opts={{
          align: "start",
          loop: showNav,
        }}
      >
        <CarouselContent className="items-end">
          {visibleTeachers.map((teacher) => (
            <CarouselItem key={teacher.id}>
              <div className="flex flex-col-reverse  items-center lg:items-end lg:grid lg:grid-cols-2 gap-20 min-h-[600px] relative">
                {/* Изображение справа (в RTL первый элемент) */}
                <div className="flex justify-center lg:justify-end items-end">
                  <div className="relative">
                    <Image
                      src={teacher.image}
                      alt="teacher"
                      width={550}
                      height={650}
                      className="rounded-lg w-[400px] h-[500px] lg:w-[550px] lg:h-[650px] object-cover"
                    />

                    {/* Кнопки навигации поверх картинки */}
                    {showNav && (
                      <>
                        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 text-primary border-primary hover:bg-primary hover:text-white w-12 h-12 rounded-full">
                          <Image
                            src="/icons/our_teachers/arrow_left.svg"
                            alt="arrow-left"
                            width={50}
                            height={50}
                          />
                        </CarouselPrevious>
                        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 text-primary border-primary hover:bg-primary hover:text-white w-12 h-12 rounded-full">
                          <Image
                            src="/icons/our_teachers/arrow_right.svg"
                            alt="arrow-right"
                            width={50}
                            height={50}
                          />
                        </CarouselNext>
                      </>
                    )}

                    {/* Стикер поверх картинки */}
                    <div className="flex flex-row items-center justify-center gap-4 absolute bottom-4 right-4">
                      <div className="flex flex-col items-start justify-center">
                        <div className="flex flex-row items-center justify-center gap-4">
                          <p className="text-[16px] md:text-[18px] font-bold text-white leading-relaxed">
                            {teacher.sticker.text}
                          </p>
                          <Image
                            src="/icons/our_teachers/circle-check.svg"
                            alt="star"
                            width={20}
                            height={20}
                          />
                        </div>
                        <p className="text-[16px] md:text-[20px] lg:text-[18px] text-white leading-relaxed">
                          {teacher.sticker.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Текст слева (в RTL второй элемент) */}
                <div className="space-y-6 px-4 md:px-8 lg:px-0 text-center lg:text-right flex flex-col  justify-start w-full max-w-[full]  lg:max-w-[700px] lg:mb-10 lg:-translate-y-[20%]">
                  <div>
                    <h1 className="text-[32px] md:text-[48px] lg:text-[64px] font-bold text-primary mb-2">
                      אודות המרצה
                    </h1>
                  </div>

                  <div className="text-[16px] md:text-[20px] lg:text-[18px] line-clamp-[28px] text-white leading-relaxed">
                    {teacher.description}
                  </div>

                  <p className="text-[16px] md:text-[20px] lg:text-[18px] line-clamp-[28px] text-white leading-relaxed">
                    {teacher.fullDescription}
                  </p>

                  {teacher.quote && (
                    <div className="bg-accent text-black p-4 lg:p-8 max-w-[full]">
                      <p className="text-[18px] lg:text-[23px]  font-semibold text-right">
                        {teacher.quote}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
