(function () {
  'use strict';

  var T = {
    en: {
      skip: 'Skip to the form', title: 'Fresh Start Resume', privH: 'Your privacy',
      privP: "Your information never leaves this device. We don't track you, store anything, or use cookies. When you close this page, everything you typed is gone, so print or save your resume as a PDF before you leave.",
      previewH: 'Your resume', tplLabel: 'Style', rlangLabel: 'Resume language', simple: 'Simple', modern: 'Modern',
      print: 'Print / Save as PDF', printHint: 'In the print window, choose "Save as PDF" as the printer to keep a copy.',
      foot: 'This site has no analytics and saves nothing. The website host may keep standard server logs of visits that we cannot see or control.',
      stepOf: 'Step {n} of {t}', back: 'Back', next: 'Next', skipStep: 'Skip this step', done: 'Done',
      steps: ['Contact', 'Summary', 'Work history', 'Skills', 'Education and training', 'References', 'Finish'],
      tips: [
        'A phone number or an email is enough. You do not need a street address. A city is optional.',
        'This is optional. One or two sentences about who you are as a worker. Tap an example to add it, then change it to sound like you.',
        'Any work counts: day labor, gig work, odd jobs, volunteering, caregiving, helping family. If you have gaps, that is okay. Dates are optional and "about 2021" is fine. Focus on what you did.',
        'Tap the skills you have. Everyone has skills, including ones you learned on the street, at home, or on the job. Add your own below.',
        'Optional. GED, certificates, classes, programs, and training all count, even if you did not finish.',
        'Optional. Ask people who know your work before you list them. Or just say they are available on request.',
        'Looks good? Pick a style, then print or save as PDF. You can go back and change anything. Remember: nothing is saved when you close this page.'
      ],
      name: 'Full name', phone: 'Phone', email: 'Email (optional)', city: 'City (optional)',
      summaryL: 'Short summary (optional)', examples: 'Tap to add an example:',
      ex: [
        'Hard-working and dependable person ready to learn quickly and show up on time.',
        'Friendly, patient worker with experience helping customers and working on a team.',
        'Reliable worker with hands-on experience and a strong willingness to learn new skills.'
      ],
      jobTitle: 'Job or role (for example: Day laborer, Caregiver)', employer: 'Where (company, person, or place) (optional)',
      dates: 'When (optional, for example: about 2021 to 2023)', details: 'What you did (one thing per line)',
      job: 'Job', addJob: 'Add another job', remove: 'Remove',
      skillsChips: 'Tap to add or remove:', skillFree: 'Add your own skill', addSkill: 'Add',
      skills: ['Customer service', 'Forklift', 'Cooking', 'Cleaning', 'Warehouse', 'Construction', 'Driving', 'Bilingual', 'Teamwork', 'Cash handling', 'Lifting', 'Computer basics'],
      eduName: 'Degree, certificate, or program', eduPlace: 'School or place (optional)', eduYear: 'Year (optional)',
      edu: 'Education', addEdu: 'Add another',
      refsOnReq: 'References available on request', refsText: 'Reference names and phone numbers (optional)',
      labels: { summary: 'Summary', work: 'Work experience', skills: 'Skills', edu: 'Education and training', refs: 'References', refsReq: 'References available on request' },
      empty: 'Start typing and your resume appears here.'
    },
    es: {
      skip: 'Ir al formulario', title: 'Fresh Start Resume', privH: 'Tu privacidad',
      privP: 'Tu información nunca sale de este dispositivo. No te rastreamos, no guardamos nada y no usamos cookies. Cuando cierres esta página, todo lo que escribiste desaparece, así que imprime tu currículum o guárdalo como PDF antes de irte.',
      previewH: 'Tu currículum', tplLabel: 'Estilo', rlangLabel: 'Idioma del currículum', simple: 'Simple', modern: 'Moderno',
      print: 'Imprimir / Guardar como PDF', printHint: 'En la ventana de impresión, elige "Guardar como PDF" como impresora para conservar una copia.',
      foot: 'Este sitio no tiene analíticas y no guarda nada. El servidor que aloja la página puede guardar registros estándar de las visitas, que nosotros no podemos ver ni controlar.',
      stepOf: 'Paso {n} de {t}', back: 'Atrás', next: 'Siguiente', skipStep: 'Saltar este paso', done: 'Listo',
      steps: ['Contacto', 'Resumen', 'Historial de trabajo', 'Habilidades', 'Estudios y capacitación', 'Referencias', 'Terminar'],
      tips: [
        'Con un teléfono o un correo es suficiente. No necesitas dirección. La ciudad es opcional.',
        'Es opcional. Una o dos frases sobre cómo eres como trabajador. Toca un ejemplo para agregarlo y cámbialo para que suene como tú.',
        'Todo trabajo cuenta: jornal, trabajos por app, trabajos ocasionales, voluntariado, cuidar a alguien, ayudar a la familia. Si hay espacios sin trabajo, no pasa nada. Las fechas son opcionales y "más o menos 2021" está bien. Enfócate en lo que hiciste.',
        'Toca las habilidades que tienes. Todos tenemos habilidades, también las que aprendiste en la calle, en casa o en el trabajo. Agrega las tuyas abajo.',
        'Opcional. El GED, certificados, clases, programas y capacitaciones cuentan, aunque no los hayas terminado.',
        'Opcional. Pide permiso a las personas que conocen tu trabajo antes de ponerlas. O solo escribe que hay referencias disponibles si las piden.',
        '¿Se ve bien? Elige un estilo, luego imprime o guarda como PDF. Puedes regresar y cambiar lo que quieras. Recuerda: no se guarda nada cuando cierras esta página.'
      ],
      name: 'Nombre completo', phone: 'Teléfono', email: 'Correo electrónico (opcional)', city: 'Ciudad (opcional)',
      summaryL: 'Resumen corto (opcional)', examples: 'Toca para agregar un ejemplo:',
      ex: [
        'Persona trabajadora y responsable, lista para aprender rápido y llegar a tiempo.',
        'Trabajador amable y paciente, con experiencia atendiendo clientes y trabajando en equipo.',
        'Trabajador confiable con experiencia práctica y muchas ganas de aprender cosas nuevas.'
      ],
      jobTitle: 'Trabajo o puesto (por ejemplo: Jornalero, Cuidador)', employer: 'Dónde (empresa, persona o lugar) (opcional)',
      dates: 'Cuándo (opcional, por ejemplo: más o menos 2021 a 2023)', details: 'Qué hacías (una cosa por línea)',
      job: 'Trabajo', addJob: 'Agregar otro trabajo', remove: 'Quitar',
      skillsChips: 'Toca para agregar o quitar:', skillFree: 'Agrega otra habilidad', addSkill: 'Agregar',
      skills: ['Atención al cliente', 'Montacargas', 'Cocinar', 'Limpieza', 'Almacén', 'Construcción', 'Manejar', 'Bilingüe', 'Trabajo en equipo', 'Manejo de efectivo', 'Cargar peso', 'Computadora básica'],
      eduName: 'Título, certificado o programa', eduPlace: 'Escuela o lugar (opcional)', eduYear: 'Año (opcional)',
      edu: 'Estudios', addEdu: 'Agregar otro',
      refsOnReq: 'Referencias disponibles si las piden', refsText: 'Nombres y teléfonos de referencias (opcional)',
      labels: { summary: 'Resumen', work: 'Experiencia de trabajo', skills: 'Habilidades', edu: 'Estudios y capacitación', refs: 'Referencias', refsReq: 'Referencias disponibles si las piden' },
      empty: 'Empieza a escribir y tu currículum aparecerá aquí.'
    }
  };

  // All data lives only in this object, in memory.
  var S = {
    ui: 'en', rlang: 'en', rlangTouched: false, tpl: 'simple', step: 0,
    name: '', phone: '', email: '', city: '', summary: '',
    jobs: [{ title: '', employer: '', dates: '', details: '' }],
    skills: [], edus: [{ name: '', place: '', year: '' }],
    refsOnReq: false, refs: ''
  };
  var STEPS = 7;

  function $(id) { return document.getElementById(id); }
  function t() { return T[S.ui]; }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  function field(id, label, val, opts) {
    opts = opts || {};
    var h = '<label for="' + id + '">' + esc(label) + '</label>';
    if (opts.area) return h + '<textarea id="' + id + '" rows="' + (opts.rows || 3) + '">' + esc(val) + '</textarea>';
    return h + '<input id="' + id + '" type="' + (opts.type || 'text') + '"' + (opts.ac ? ' autocomplete="' + opts.ac + '"' : '') + ' value="' + esc(val) + '">';
  }

  function bind(id, fn) { var e = $(id); if (e) e.addEventListener('input', function () { fn(e.value); update(); }); }

  function renderStep() {
    var L = t(), n = S.step, b = $('step-body'), h = '';
    $('progress-text').textContent = L.stepOf.replace('{n}', n + 1).replace('{t}', STEPS);
    $('bar-fill').style.width = ((n + 1) / STEPS * 100) + '%';
    $('step-h').textContent = L.steps[n];
    $('tip').textContent = L.tips[n];
    $('btn-back').textContent = L.back;
    $('btn-back').style.visibility = n === 0 ? 'hidden' : 'visible';
    $('btn-next').textContent = n === STEPS - 1 ? L.done : L.next;

    if (n === 0) {
      h = field('f-name', L.name, S.name, { ac: 'name' }) + field('f-phone', L.phone, S.phone, { type: 'tel', ac: 'tel' }) +
        field('f-email', L.email, S.email, { type: 'email', ac: 'email' }) + field('f-city', L.city, S.city, { ac: 'address-level2' });
    } else if (n === 1) {
      h = field('f-sum', L.summaryL, S.summary, { area: 1, rows: 4 }) + '<p class="hint">' + esc(L.examples) + '</p><div class="chips">';
      L.ex.forEach(function (x, i) { h += '<button type="button" class="chip" data-ex="' + i + '">' + esc(x) + '</button>'; });
      h += '</div>';
    } else if (n === 2) {
      S.jobs.forEach(function (j, i) {
        h += '<div class="entry"><strong>' + esc(L.job) + ' ' + (i + 1) + '</strong>' +
          field('j-t' + i, L.jobTitle, j.title) + field('j-e' + i, L.employer, j.employer) +
          field('j-d' + i, L.dates, j.dates) + field('j-x' + i, L.details, j.details, { area: 1, rows: 3 }) +
          (S.jobs.length > 1 ? '<p><button type="button" class="btn secondary small" data-rmjob="' + i + '">' + esc(L.remove) + '</button></p>' : '') + '</div>';
      });
      h += '<button type="button" class="btn secondary" id="add-job">' + esc(L.addJob) + '</button>';
    } else if (n === 3) {
      h = '<p class="hint">' + esc(L.skillsChips) + '</p><div class="chips">';
      L.skills.forEach(function (s, i) { h += '<button type="button" class="chip" data-sk="' + i + '" aria-pressed="' + (S.skills.indexOf(s) > -1) + '">' + esc(s) + '</button>'; });
      h += '</div>' + field('f-skill', L.skillFree, '') + '<p><button type="button" class="btn secondary small" id="add-skill">' + esc(L.addSkill) + '</button></p><div class="chips" id="my-skills"></div>';
    } else if (n === 4) {
      S.edus.forEach(function (e, i) {
        h += '<div class="entry"><strong>' + esc(L.edu) + ' ' + (i + 1) + '</strong>' +
          field('e-n' + i, L.eduName, e.name) + field('e-p' + i, L.eduPlace, e.place) + field('e-y' + i, L.eduYear, e.year) +
          (S.edus.length > 1 ? '<p><button type="button" class="btn secondary small" data-rmedu="' + i + '">' + esc(L.remove) + '</button></p>' : '') + '</div>';
      });
      h += '<button type="button" class="btn secondary" id="add-edu">' + esc(L.addEdu) + '</button>';
    } else if (n === 5) {
      h = '<label class="check"><input type="checkbox" id="f-onreq"' + (S.refsOnReq ? ' checked' : '') + '> ' + esc(L.refsOnReq) + '</label>' +
        field('f-refs', L.refsText, S.refs, { area: 1, rows: 4 });
    } else {
      h = '<p>' + esc(L.tips[6]) + '</p><button type="button" class="btn primary big" id="fin-print">' + esc(L.print) + '</button>';
    }
    b.innerHTML = h;
    wire();
    if (n === 3) renderMySkills();
  }

  function renderMySkills() {
    var box = $('my-skills'); if (!box) return;
    var h = '';
    S.skills.forEach(function (s, i) {
      if (t().skills.indexOf(s) === -1 && T.en.skills.indexOf(s) === -1 && T.es.skills.indexOf(s) === -1)
        h += '<button type="button" class="chip" aria-pressed="true" data-rmsk="' + i + '">' + esc(s) + ' ✕</button>';
    });
    box.innerHTML = h;
    Array.prototype.forEach.call(box.querySelectorAll('[data-rmsk]'), function (el) {
      el.addEventListener('click', function () { S.skills.splice(+el.getAttribute('data-rmsk'), 1); renderMySkills(); update(); });
    });
  }

  function wire() {
    var n = S.step;
    if (n === 0) { bind('f-name', function (v) { S.name = v; }); bind('f-phone', function (v) { S.phone = v; }); bind('f-email', function (v) { S.email = v; }); bind('f-city', function (v) { S.city = v; }); }
    if (n === 1) {
      bind('f-sum', function (v) { S.summary = v; });
      Array.prototype.forEach.call(document.querySelectorAll('[data-ex]'), function (el) {
        el.addEventListener('click', function () {
          var x = t().ex[+el.getAttribute('data-ex')];
          S.summary = S.summary ? S.summary.replace(/\s+$/, '') + ' ' + x : x;
          $('f-sum').value = S.summary; update();
        });
      });
    }
    if (n === 2) {
      S.jobs.forEach(function (j, i) {
        bind('j-t' + i, function (v) { j.title = v; }); bind('j-e' + i, function (v) { j.employer = v; });
        bind('j-d' + i, function (v) { j.dates = v; }); bind('j-x' + i, function (v) { j.details = v; });
      });
      $('add-job').addEventListener('click', function () { S.jobs.push({ title: '', employer: '', dates: '', details: '' }); renderStep(); $('j-t' + (S.jobs.length - 1)).focus(); });
      Array.prototype.forEach.call(document.querySelectorAll('[data-rmjob]'), function (el) {
        el.addEventListener('click', function () { S.jobs.splice(+el.getAttribute('data-rmjob'), 1); renderStep(); update(); });
      });
    }
    if (n === 3) {
      Array.prototype.forEach.call(document.querySelectorAll('[data-sk]'), function (el) {
        el.addEventListener('click', function () {
          var s = t().skills[+el.getAttribute('data-sk')], i = S.skills.indexOf(s);
          if (i > -1) S.skills.splice(i, 1); else S.skills.push(s);
          el.setAttribute('aria-pressed', i === -1); update();
        });
      });
      var add = function () {
        var v = $('f-skill').value.replace(/^\s+|\s+$/g, '');
        if (v && S.skills.indexOf(v) === -1) { S.skills.push(v); renderMySkills(); update(); }
        $('f-skill').value = ''; $('f-skill').focus();
      };
      $('add-skill').addEventListener('click', add);
      $('f-skill').addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); add(); } });
    }
    if (n === 4) {
      S.edus.forEach(function (e, i) { bind('e-n' + i, function (v) { e.name = v; }); bind('e-p' + i, function (v) { e.place = v; }); bind('e-y' + i, function (v) { e.year = v; }); });
      $('add-edu').addEventListener('click', function () { S.edus.push({ name: '', place: '', year: '' }); renderStep(); $('e-n' + (S.edus.length - 1)).focus(); });
      Array.prototype.forEach.call(document.querySelectorAll('[data-rmedu]'), function (el) {
        el.addEventListener('click', function () { S.edus.splice(+el.getAttribute('data-rmedu'), 1); renderStep(); update(); });
      });
    }
    if (n === 5) {
      bind('f-refs', function (v) { S.refs = v; });
      $('f-onreq').addEventListener('change', function (e) { S.refsOnReq = e.target.checked; update(); });
    }
    if (n === 6) $('fin-print').addEventListener('click', function () { window.print(); });
  }

  function update() {
    var R = T[S.rlang], L = R.labels, h = '', any = false;
    var contact = [S.phone, S.email, S.city].filter(function (x) { return x; }).map(esc).join(' &middot; ');
    if (S.name) { h += '<h1>' + esc(S.name) + '</h1>'; any = true; }
    if (contact) { h += '<p class="contact">' + contact + '</p>'; any = true; }
    if (S.summary.replace(/\s/g, '')) { h += '<h2>' + L.summary + '</h2><p>' + esc(S.summary).replace(/\n/g, '<br>') + '</p>'; any = true; }
    var jobs = S.jobs.filter(function (j) { return j.title || j.employer || j.dates || j.details; });
    if (jobs.length) {
      any = true; h += '<h2>' + L.work + '</h2>';
      jobs.forEach(function (j) {
        h += '<div class="job"><div class="jobhead"><span>' + esc(j.title) + '</span><span>' + esc(j.dates) + '</span></div>';
        if (j.employer) h += '<div class="sub">' + esc(j.employer) + '</div>';
        var lines = j.details.split('\n').map(function (x) { return x.replace(/^\s*[-*•]\s*/, '').replace(/\s+$/, ''); }).filter(function (x) { return x; });
        if (lines.length) h += '<ul>' + lines.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>';
        h += '</div>';
      });
    }
    if (S.skills.length) { any = true; h += '<h2>' + L.skills + '</h2><p>' + S.skills.map(esc).join(', ') + '</p>'; }
    var eds = S.edus.filter(function (e) { return e.name || e.place || e.year; });
    if (eds.length) {
      any = true; h += '<h2>' + L.edu + '</h2>';
      eds.forEach(function (e) {
        h += '<div class="job"><div class="jobhead"><span>' + esc(e.name) + '</span><span>' + esc(e.year) + '</span></div>' + (e.place ? '<div class="sub">' + esc(e.place) + '</div>' : '') + '</div>';
      });
    }
    if (S.refsOnReq || S.refs.replace(/\s/g, '')) {
      any = true; h += '<h2>' + L.refs + '</h2>';
      if (S.refs.replace(/\s/g, '')) h += '<p>' + esc(S.refs).replace(/\n/g, '<br>') + '</p>';
      else h += '<p>' + L.refsReq + '</p>';
    }
    if (!any) h = '<p class="empty">' + esc(t().empty) + '</p>';
    var r = $('resume');
    r.innerHTML = h; r.lang = S.rlang; r.className = 'resume ' + S.tpl;
  }

  function applyUI() {
    var L = t();
    document.documentElement.lang = S.ui;
    document.title = L.title;
    Array.prototype.forEach.call(document.querySelectorAll('[data-i18n]'), function (el) { if (L[el.getAttribute('data-i18n')] != null) el.textContent = L[el.getAttribute('data-i18n')]; });
    var o = $('tpl').options; o[0].textContent = L.simple; o[1].textContent = L.modern;
    $('lang-en').setAttribute('aria-pressed', S.ui === 'en'); $('lang-es').setAttribute('aria-pressed', S.ui === 'es');
    if (!S.rlangTouched) S.rlang = S.ui;
    $('rlang').value = S.rlang;
    renderStep(); update();
  }

  function go(d) { S.step = Math.max(0, Math.min(STEPS - 1, S.step + d)); renderStep(); $('form-area').focus(); window.scrollTo(0, 0); }

  $('btn-next').addEventListener('click', function () { if (S.step < STEPS - 1) go(1); else $('btn-print').focus(); });
  $('btn-back').addEventListener('click', function () { go(-1); });
  $('btn-print').addEventListener('click', function () { window.print(); });
  $('tpl').addEventListener('change', function (e) { S.tpl = e.target.value; update(); });
  $('rlang').addEventListener('change', function (e) { S.rlang = e.target.value; S.rlangTouched = true; update(); });
  ['en', 'es'].forEach(function (l) { $('lang-' + l).addEventListener('click', function () { S.ui = l; applyUI(); }); });

  applyUI();
})();
