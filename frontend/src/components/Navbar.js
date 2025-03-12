import React from 'react';
import styles from '../styles/Navbar.module.css'; // ייבוא קובץ ה-CSS המודולרי

const Navbar = ({ transparent }) => {
    const whatsappNumber = "972542223318"; // מספר הטלפון של אמא שלך (בפורמט בינלאומי, ללא 0 בהתחלה)
    const whatsappMessage = "שלום, אני מעוניין לקבוע פגישה."; // הודעה שתופיע אוטומטית

    return (
        <nav
            className={`${styles.navbar} ${
                transparent ? styles.transparent : styles.solid
            }`}
        >
            <div className={`${styles.container} flex items-center justify-between px-6 py-4`}>
                {/* כותרת בצד ימין */}
                <div className="text-xl font-bold">
                    כאן בשבילך.
                </div>

                {/* תפריט ממורכז */}
                <ul className={`${styles.menu} flex space-x-14 space-x-reverse`}>
                    <li>
                        <a
                            href="#home"
                            onClick={(e) => {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className={`${styles.link} hover:text-yellow-500`}
                        >
                            בית
                        </a>
                    </li>
                    <li>
                        <a href="#about" className={`${styles.link} hover:text-yellow-500`}>
                            אודות
                        </a>
                    </li>
                    <li>
                        <a href="#services" className={`${styles.link} hover:text-yellow-500`}>
                            סוגי טיפול
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className={`${styles.link} hover:text-yellow-500`}>
                            צור קשר
                        </a>
                    </li>
                </ul>

                {/* כפתור לשליחת הודעת WhatsApp */}
                <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.button} ${
                        transparent
                            ? styles.buttonTransparent
                            : styles.buttonSolid
                    }`}
                >
                    קבע פגישה
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
