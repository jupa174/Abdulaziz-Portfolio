/* ── Navbar scroll effect ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

/* ── Mobile nav toggle ── */
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
navToggle?.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks?.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

/* ── Intersection Observer → fade-up cards ── */
const observer = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.12 }
);
document.querySelectorAll('.animate-card').forEach((el, i) => {
  el.style.transitionDelay = `${i * 80}ms`;
  observer.observe(el);
});

/* ── Skill bars ── */
const skillObserver = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting)
      e.target.querySelectorAll('.skill-fill').forEach(b => b.style.width = b.dataset.width + '%');
  }),
  { threshold: 0.3 }
);
document.querySelectorAll('.skill-bars').forEach(el => skillObserver.observe(el));

/* ── Counter animation ── */
function animateCounter(el, target, duration = 1500) {
  let start = 0;
  const step = ts => {
    if (!start) start = ts;
    const p = Math.min((ts - start) / duration, 1);
    el.textContent = Math.floor(p * target);
    if (p < 1) requestAnimationFrame(step); else el.textContent = target;
  };
  requestAnimationFrame(step);
}
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCounter(e.target, parseInt(e.target.dataset.count));
      counterObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

/* ── Contact form — Web3Forms ── */
const form       = document.getElementById('contactForm');
const submitBtn  = document.getElementById('submitBtn');
const btnText    = document.getElementById('btnText');
const btnLoader  = document.getElementById('btnLoader');
const formResult = document.getElementById('formResult');

function showError(id, msg) {
  const el = document.getElementById(id);
  if (el) el.textContent = msg;
}
function clearErrors() {
  ['nameError','emailError','messageError'].forEach(id => showError(id, ''));
}
function validate(data) {
  let ok = true;
  clearErrors();
  if (!data.get('name')?.trim())    { showError('nameError',    'الاسم مطلوب');     ok = false; }
  const em = data.get('email')?.trim();
  if (!em)                           { showError('emailError',   'الإيميل مطلوب');   ok = false; }
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) { showError('emailError', 'إيميل غير صحيح'); ok = false; }
  if (!data.get('message')?.trim()) { showError('messageError', 'الرسالة مطلوبة'); ok = false; }
  return ok;
}

form?.addEventListener('submit', async e => {
  e.preventDefault();
  const data = new FormData(form);
  if (!validate(data)) return;

  submitBtn.disabled = true;
  btnText.style.display   = 'none';
  btnLoader.style.display = 'inline';
  formResult.style.display = 'none';

  try {
    const res  = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
    const json = await res.json();
    if (json.success) {
      formResult.textContent = 'تم إرسال رسالتك بنجاح! هرد عليك قريباً 🎉';
      formResult.className   = 'form-result success';
      form.reset();
    } else {
      formResult.textContent = json.message || 'حصل خطأ، حاول تاني.';
      formResult.className   = 'form-result error';
    }
  } catch {
    formResult.textContent = 'حصل خطأ في الاتصال، تواصل معي على الواتساب 👇';
    formResult.className   = 'form-result error';
  } finally {
    formResult.style.display = 'block';
    submitBtn.disabled = false;
    btnText.style.display   = 'inline';
    btnLoader.style.display = 'none';
  }
});
