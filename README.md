# Abdulaziz Thabet — Portfolio (Static Website)

## 🗂 هيكل الملفات
```
portfolio-static/
├── index.html          ← الصفحة الرئيسية
├── css/
│   └── style.css
├── js/
│   └── main.js
└── images/
    └── profile.png
```

---

## 📬 تفعيل فورم التواصل (مطلوب — خطوة واحدة بس)

الفورم بيشتغل عن طريق **Web3Forms** — مجاني ومحتاج access key بس.

### الخطوات:
1. افتح **https://web3forms.com**
2. اكتب إيميلك (`abdulazizthabet0@gmail.com`) واضغط **"Create Access Key"**
3. هيجيلك إيميل فيه الـ access key، افتحه وكوبي الـ key
4. افتح ملف `index.html`
5. دور على السطر ده:
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
   ```
6. استبدل `YOUR_ACCESS_KEY_HERE` بالـ key اللي جالك

**خلاص!** — كل رسالة من الفورم هتوصلك على إيميلك مباشرة.

---

## 🚀 رفع الموقع (Hosting)

### مجاني 100%:
- **Netlify** — اسحب مجلد `portfolio-static` على https://netlify.com (drag & drop)
- **GitHub Pages** — ارفع الملفات على GitHub repo وفعّل Pages
- **Vercel** — https://vercel.com (import من GitHub)

### تلاحظ:
- الموقع static بالكامل، مش محتاج سيرفر ولا ASP.NET
- الصورة والـ CSS والـ JS كلها محلية داخل المجلد
