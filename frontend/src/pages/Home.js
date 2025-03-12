import React from 'react';

const Home = () => (
    
    <section id="home" className="min-h-screen px-6 py-12 pt-32 flex items-center">
    <div className="w-1/2 pr-8">
        <h1 className="text-4xl font-bold">כרמי וזאנה פסיכותרפיה</h1>
        <p className="mt-4 text-lg">ברוכים הבאים לקליניקה של כרמי!</p>
        <p className="mt-4 text-lg">
            שמי כרמי וזאנה, מטפלת מוסמכת עם ניסיון רב שנים בטיפול פרטני, זוגי ומשפחתי.
            אני מאמינה בכוחה של שיחה פתוחה, הקשבה מעמיקה והכוונה מותאמת אישית לכל אחד ואחת.
            מטרתי היא לעזור לכם להתגבר על אתגרים, למצוא את החוזקות הפנימיות שלכם ולהוביל אתכם לשינוי אמיתי ומשמעותי בחיים.
        </p>
    </div>

    {/* תמונה */}
    <div className="w-full md:w-1/2 flex justify-center">
        <img 
            src="images/image9.webp" 
            alt="תמונה מתאימה לאתר" 
            className="rounded-lg shadow-md w-2/3 h-auto object-cover" 
        />
    </div>


</section>
);


export default Home;