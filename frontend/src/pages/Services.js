import React from 'react';

const Services = () => (
     <section 
     id="services" 
     className="min-h-screen px-6 py-12 pt-32"
     style={{ backgroundColor: "#FFECB3" }}
 >
     <h1 className="text-4xl font-bold">סוגי טיפול</h1>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
             <h3 className="text-xl font-semibold text-gray-800 mb-2">טיפול פרטני</h3>
             <p className="text-gray-600">טיפול פרטני בהנחיית כרמי וזאנה, מטפלת מוסמכת עם ניסיון של למעלה מ-30 שנה, מתמקד בהעצמה אישית, התמודדות עם אתגרים רגשיים, ובניית כלים לחיים מלאי משמעות וביטחון עצמי.</p>
         </div>
         <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
             <h3 className="text-xl font-semibold text-gray-800 mb-2">טיפול זוגי</h3>
             <p className="text-gray-600">טיפול זוגי בהנחיית כרמי וזאנה, מטפלת מוסמכת עם ניסיון של למעלה מ-30 שנה, מתמקד בחיזוק התקשורת, פתרון קונפליקטים, והחזרת ההרמוניה לזוגיות שלכם.</p>
         </div>
         <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
             <h3 className="text-xl font-semibold text-gray-800 mb-2">ייעוץ משפחתי</h3>
             <p className="text-gray-600">ייעוץ משפחתי בהנחיית כרמי וזאנה, מטפלת מוסמכת עם ניסיון של למעלה מ-30 שנה, מתמקד בגיבוש המשפחה, שיפור התקשורת בין בני הבית, והתמודדות עם אתגרים משפחתיים בצורה מאוזנת ותומכת.</p>
         </div>
     </div>
 </section>

);

export default Services;