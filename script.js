/* script.js - ملف برمجة الحساسية والتنقل */
function switchPage(pageId, btnElement) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    document.getElementById(pageId).classList.add('active');

    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));

    btnElement.classList.add('active');
    window.scrollTo(0, 0);
}

let quizAnswers = { device: '', fingers: '', gyro: '' };

function startQuiz() {
    document.getElementById('step-intro').classList.remove('active');
    document.getElementById('step-device').classList.add('active');
}

function nextStep(stepName, answerValue) {
    quizAnswers[stepName] = answerValue;

    if (stepName === 'device') {
        document.getElementById('step-device').classList.remove('active');
        document.getElementById('step-fingers').classList.add('active');
    } else if (stepName === 'fingers') {
        document.getElementById('step-fingers').classList.remove('active');
        document.getElementById('step-gyro').classList.add('active');
    } else if (stepName === 'gyro') {
        document.getElementById('step-gyro').classList.remove('active');
        showQuizResult();
    }
}

function showQuizResult() {
    document.getElementById('step-result').classList.add('active');
    let tableHTML = "";

    if (quizAnswers.device === 'iphone') {
        tableHTML = `
            <tr><td>حساسية الكاميرا (بدون منظار)</td><td><span class="val-badge">125%</span></td></tr>
            <tr><td>حساسية الـ ADS (سكوب 3x)</td><td><span class="val-badge">26%</span></td></tr>
            <tr><td>حساسية الـ ADS (سكوب 4x)</td><td><span class="val-badge">18%</span></td></tr>
            <tr><td>حساسية الـ ADS (سكوب 6x)</td><td><span class="val-badge">12%</span></td></tr>
        `;
        if (quizAnswers.gyro === 'yes') {
            tableHTML += `
                <tr><td>الجيروسكوب (بدون منظار)</td><td><span class="val-badge">320%</span></td></tr>
                <tr><td>الجيروسكوب (سكوب 3x)</td><td><span class="val-badge">220%</span></td></tr>
            `;
        }
    } else if (quizAnswers.device === 'android-high') {
        tableHTML = `
            <tr><td>حساسية الكاميرا (بدون منظار)</td><td><span class="val-badge">115%</span></td></tr>
            <tr><td>حساسية الـ ADS (سكوب 3x)</td><td><span class="val-badge">24%</span></td></tr>
            <tr><td>حساسية الـ ADS (سكوب 4x)</td><td><span class="val-badge">16%</span></td></tr>
            <tr><td>حساسية الـ ADS (سكوب 6x)</td><td><span class="val-badge">10%</span></td></tr>
        `;
        if (quizAnswers.gyro === 'yes') {
            tableHTML += `
                <tr><td>الجيروسكوب (بدون منظار)</td><td><span class="val-badge">300%</span></td></tr>
                <tr><td>الجيروسكوب (سكوب 3x)</td><td><span class="val-badge">180%</span></td></tr>
            `;
        }
    } else {
        tableHTML = `
            <tr><td>حساسية الكاميرا (بدون منظار)</td><td><span class="val-badge">95%</span></td></tr>
            <tr><td>حساسية الـ ADS (سكوب 3x)</td><td><span class="val-badge">20%</span></td></tr>
            <tr><td>حساسية الـ ADS (سكوب 4x)</td><td><span class="val-badge">14%</span></td></tr>
            <tr><td>حساسية الـ ADS (سكوب 6x)</td><td><span class="val-badge">8%</span></td></tr>
        `;
        if (quizAnswers.gyro === 'yes') {
            tableHTML += `
                <tr><td>الجيروسكوب (بدون منظار)</td><td><span class="val-badge">280%</span></td></tr>
                <tr><td>الجيروسكوب (سكوب 3x)</td><td><span class="val-badge">150%</span></td></tr>
            `;
        }
    }

    document.getElementById('settings-values-body').innerHTML = tableHTML;
}

function resetQuiz() {
    quizAnswers = { device: '', fingers: '', gyro: '' };
    document.getElementById('step-result').classList.remove('active');
    document.getElementById('step-intro').classList.add('active');
}

