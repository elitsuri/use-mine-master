import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import M from "materialize-css";

const Terms = () => {
  return (
    <div>
      <h5 class="center-align">תקנון האתר</h5>
      <div class="center-align" style={{paddingLeft:"20%", paddingRight:"20%"}}>
        <p class="center-align">
          <p>
            אתר השכרה חברתית (“האתר”) המשמש להשכרת ציוד האמור בתקנון זה בלשון
            זכר הוא לשם הנוחות בלבד והתקנון מתייחס לבני שני המינים באופן שווה.
            ההשכרה באמצעות האתר כפופה לתנאים המפורטים בתקנון זה. עצם השכרת המוצר
            באתר תהווה הצהרה מצד הלקוח כי קרא את הוראות תקנון זה, הבין אותן
            והסכים להן. התקנון מהווה חוזה מחייב בינך לבין החברה.
          </p>
          <p>
            ההשכרה האתר מאפשר ללקוחות השכרה נוחה, קלה ובטוחה של המוצר באמצעות
            האינטרנט. ניתן לשכור את המוצר באתר בכל עת עד לגמר המלאי. ההשכרה באתר
            הינה באמצעות כרטיס אשראי בלבד והעסקה תתבצע לאחר אישורה ע”י חברת
            האשראי ופייפל. מחיר המוצר באתר כולל את המע”מ. החברה שומרת לעצמה את
            הזכות להפסיק את שיווק ומכירת המוצר בכל עת וכן לשלול זכות השכרה באתר
            מכירות על פי שיקול דעתה.
          </p>
          <p>
            החזרות וביטולים ניתן לבטל את העסקה באמצעות פניה טלפונית או בדואר
            אלקטרוני לשירות הלקוחות של החברה. ביטול העסקה יהיה בתוקף אך ורק לאחר
            קבלת פקס או דואר אלקטרוני מהחברה המאשר את הבקשה לביטול העסקה. במקרה
            שהביטול אושר יש להשיב את המוצר לחברה כאשר כל העלויות הכרוכות בהחזרת
            המוצר תחולנה על הלקוח. החזרת המוצר תיעשה כשהוא באריזתו המקורית
            בצירוף החשבונית המקורית ושעדיין לא חלפו 30 יום מתאריך רכישת המוצר.
          </p>
          <p>
            אספקה והובלת המוצר החברה לא תהא אחראית לכל איחור ו/או עיכוב באספקה
            ו/או אי-אספקה, שנגרמה כתוצאה מכוח עליון ו/או מאירועים שאינם בשליטתה.
            מחיר המוצר כולל את עלות המשלוח / אינו כולל את עלות המשלוח ועל השוכר
            והמשכיר לתאם על השכרת המוצר. אחריות ושירות החברה לא תהא אחראית לכל
            נזק ישיר או עקיף הנובע מהשימוש או השימוש השגוי במוצר לרבות כל נזק
            מקרי, מיוחד, עקיף או תוצאתי – ככל שהחוק מתיר זאת. על הלקוח חלה
            האחריות וכל סיכון וחובות עבור אובדן, נזק וחבלה לגופו ו/או לרכושו
            ו/או לרכושם ו/או לגופם של צדדים שלישיים, הנובעים מהשימוש ו/או אי
            השימוש במוצר, למעט במקרים בהם נקבע כי הנזק האמור נגרם עקב רשלנותה
            הבלעדית של החברה.
          </p>
          <p>
            אבטחת מידע ופרטיות חברת זו - השכרה חברתית, כמו גם חברות אחיות
            וגורמי משנה נוספים רשאית להשתמש במידע המופיע בטופס על מנת להביא לך
            את המידע והשירותים המבוקשים. מידע אישי זה לא ייחשף ולא ייעשה בו
            שימוש נוסף למטרות שיווקיות ללא רשות. החברה נוקטת באמצעי זהירות
            מקובלים על מנת לשמור, ככל האפשר, על סודיות המידע. במקרים שאינם
            בשליטת החברה ו/או הנובעים מכוח עליון, לא תהא החברה אחראית לכל נזק
            מכל סוג שהוא, ישר או עקיף, שייגרם ללקוח, אם מידע זה יאבד ו/או יעשה
            בו שימוש לא מורשה. החברה מתחייבת שלא לעשות שימוש במידע המסופק לה ע”י
            הקונים אלא על מנת לאפשר את ההשכרה באתר השכרה חברתית ובהתאם לכל דין.
            כפתור “שלח” יש משום הסכמה לחברת השכרה חברתית או למי מטעמה לעשות
            שימוש במידע אישי זה על מנת לספק לך מידע על המוצרים ומידע נוסף
            באמצעות אימייל או אחר, על שירותים ומשאבים הקשורים למוצרים של החברה.
            בנוסף, ניתן יהיה להשתמש במידע אישי זה למטרות סקר שוק. באם תחפצן
            להסיר בכל עת את פרטייך האישיים מרשימת התפוצה של החברה התקשרו לטלפון:
            באמצעות לחיצה על כפתור “שלח” אני מאשר בחתימתי את הטופס ואת תנאיו.
          </p>
        </p>
      </div>
    </div>
  );
};

export default Terms;