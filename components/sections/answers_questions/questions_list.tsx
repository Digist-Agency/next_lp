import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/ui/accordion";
import Image from "next/image";

const questionsData = [
  {
    id: "1",
    question: "כמה זמן נמשך הקורס ובאיזה פורמט לומדים?",
    answer:
      "הקורס דיגיטלי, באורך 3 חודשים – לומדים בזמן ובקצב האישי שלך, מכל מקום. אין צורך להתאים את עצמך לכיתה – ההחלטה מתי ואיך להתקדם שלך בלבד (מערכת הלמידה פתוחה לכם ל-3 שנים).",
  },
  {
    id: "2",
    question: 'זה מתאים גם למי שאין לו רקע בהנה"ח או שכר?',
    answer:
      "לגמרי. הקורס בנוי מהיסוד, כולל הסברים פשוטים, תרגולים מעשיים וליווי אישי שזמין לכל שאלה. לא צריך רקע קודם – רק רצון ללמוד ולהתקדם.",
  },
  {
    id: "3",
    question: "אפשר לשלב את הקורס עם עבודה במשרה מלאה?",
    answer:
      "בהחלט. כל התכנים זמינים עבורך 24/7, הלמידה מתבצעת בקצב אישי – גם אם זה רק בשעות הערב או בסופי שבוע. התמיכה זמינה לאורך כל הדרך.",
  },
  {
    id: "4",
    question: "מה כולל הליווי האישי?",
    answer:
      "במהלך הקורס הפנייה למרצה וליועץ הלמידה האישי שלך – לקבל משוב על תרגילים, הכוונה מקצועית, וסיוע בשאלות – ללא הגבלה!",
  },
  {
    id: "5",
    question: "האם עוזרים לי להשתלב בעבודה?",
    answer: "רוצה תשובה תכלס? כן, עוזרים לך להשתלב בשוק העבודה – זו כל המטרה",
  },
];

export function QuestionsList() {
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      {questionsData.map((item) => (
        <AccordionItem
          key={item.id}
          value={item.id}
          className="bg-gray-100 border-0 overflow-hidden"
        >
          <AccordionTrigger className="px-4 lg:px-6 py-4 lg:py-8 text-right hover:no-underline hover:bg-gray-100 transition-colors [&[data-state=open]]:bg-gray-100 group [&>svg]:hidden">
            <div className="flex items-center justify-between w-full">
              <Image
                src="/icons/answers_qeustions/question-mark.svg"
                alt="question mark"
                width={24}
                height={24}
                className="w-auto h-auto"
                style={{ width: "24px", maxWidth: "32px" }}
              />
              <h2 className="text-[18px] font-heebo  lg:text-[24px] font-semibold text-black text-right flex-1 mx-4">
                {item.question}
              </h2>
              <div className="flex items-center gap-3">
                <Image
                  src="/icons/answers_qeustions/arrow_down.svg"
                  alt="arrow"
                  width={17}
                  height={17}
                  className="group-data-[state=open]:hidden transition-all w-auto h-auto"
                  style={{ width: "12px", maxWidth: "17px" }}
                />
                <Image
                  src="/icons/answers_qeustions/arrow_up.svg"
                  alt="arrow"
                  width={17}
                  height={17}
                  className="hidden group-data-[state=open]:block transition-all w-auto h-auto"
                  style={{ width: "12px", maxWidth: "17px" }}
                />
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 lg:px-6 pb-4 bg-gray-100">
            <p className="text-[16px] lg:text-[20px] text-black text-right leading-relaxed pr-10">
              {item.answer}
            </p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
