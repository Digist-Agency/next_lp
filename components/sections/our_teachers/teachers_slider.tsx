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
    description: (
      <>
        בעל תואר ראשון (BA) בחשבונאות עם חטיבה בכלכלה מהאוניברסיטה הפתוחה
        ואוניברסיטת בן-גוריון. מרצה בכיר עם ניסיון של מעל 15 שנים בהוראה והכשרת
        מאות תלמידים בתחום החשבונאות, הנהלת חשבונות וייעוץ מס.
      </>
    ),
    fullDescription: (
      <>
        לאורך הקריירה שימש כרואה חשבון מבקר במשרדי רואי חשבון מובילים, והעביר
        שיעורים פרונטליים והכשרות מקצועיות במסגרות שונות, ביניהן מכללת סאפיר,
        קול המס, IPC והמכללה למנהל.
        <br />
        <br />
        אבי מתמחה בהוראת הנהלת חשבונות סוגים 1, 2, 3, חשבות שכר וחשבונאות ליועצי
        מס, ובעל ניסיון רב בליווי תלמידים להצלחה בבחינות ההסמכה הממלכתיות.
        <br />
        <br />
        אבי נחשב לאחד המרצים המובילים והאהובים בארץ, בזכות שילוב של מקצועיות
        גבוהה, ידע עדכני והבנה עמוקה של עולם החשבונאות בישראל.
      </>
    ),
    quote: (
      <>
        השליחות שלי היא לא רק ללמד – אלא להעניק לכם כלים אמיתיים וביטחון להצליח
        בעולם האמיתי
      </>
    ),
    image: "/images/our_teachers/teacher_1.webp",
    sticker: {
      text: "אבי טוהר",
      description: "בכיר בתחום החשבונאות",
      icon: "/icons/our_teachers/avatar_teacher_1.svg",
    },
  },
  {
    id: 2,
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

export function TeachersSlider() {
  return (
    <div className="w-full max-w-8xl mx-auto px-4">
      <Carousel
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="items-end">
          {teachersData.map((teacher) => (
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

                    {/* Стикер поверх картинки */}
                    <div className="flex flex-row items-center justify-center gap-4 absolute bottom-4 right-4">
                      <Image
                        src={teacher.sticker.icon}
                        alt="sticker"
                        width={48}
                        height={48}
                        className="w-[42px] h-[42px] lg:w-[48px] lg:h-[48px]"
                      />
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
                        <p className="text-[16px] md:text-[20px] lg:text-[20px] text-white leading-relaxed">
                          {teacher.sticker.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Текст слева (в RTL второй элемент) */}
                <div className="space-y-6 px-4 md:px-8 lg:px-0 text-center lg:text-right flex flex-col  justify-start w-full max-w-[full]  lg:max-w-[700px] lg:mb-10">
                  <div>
                    <h1 className="text-[32px] md:text-[48px] lg:text-[64px] font-bold text-primary mb-2">
                      המרצים שלנו
                    </h1>
                  </div>

                  <div className="text-[16px] md:text-[20px] lg:text-[20px] line-clamp-[28px] text-white leading-relaxed">
                    {teacher.description}
                  </div>

                  <p className="text-[16px] md:text-[20px] lg:text-[20px] line-clamp-[28px] text-white leading-relaxed">
                    {teacher.fullDescription}
                  </p>

                  <div className="bg-accent text-black p-4 lg:p-8 max-w-[full]">
                    <p className="text-[18px] lg:text-[23px]  font-semibold text-right">
                      {teacher.quote}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
