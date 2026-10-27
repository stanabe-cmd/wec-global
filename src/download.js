import './style.css';

// Simple scroll logic for header
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        // header.classList.remove('scrolled'); // Keep it solid on download page
    }
});

// Privacy Policy Modal Logic
const privacyLinks = document.querySelectorAll('a[href="#"], .policy-link'); // Select relevant links
const privacyModal = document.getElementById('privacy-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');

if (privacyModal && modalCloseBtn) {
    // Open modal
    privacyLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.textContent.includes('プライバシー') || link.textContent.includes('個人情報') || link.classList.contains('policy-link')) {
                e.preventDefault();
                privacyModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal
    modalCloseBtn.addEventListener('click', () => {
        privacyModal.classList.remove('active');
        document.body.style.overflow = '';
    });

    privacyModal.addEventListener('click', (e) => {
        if (e.target === privacyModal) {
            privacyModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && privacyModal.classList.contains('active')) {
            privacyModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// AJAX Form Submission
const downloadForm = document.querySelector('.download-form');
if (downloadForm) {
    downloadForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = downloadForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;

        // Loading state
        submitBtn.disabled = true;
        submitBtn.textContent = '送信中...';

        const formData = new FormData(downloadForm);

        try {
            const response = await fetch(downloadForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Redirect to thanks page
                window.location.href = '/thanks.html';
            } else {
                const data = await response.json();
                if (data.errors) {
                    alert('エラーが発生しました: ' + data.errors.map(error => error.message).join(', '));
                } else {
                    alert('送信に失敗しました。時間をおいて再度お試しください。');
                }
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
            }
        } catch (error) {
            alert('ネットワークエラーが発生しました。インターネット接続を確認してください。');
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
        }
    });
}
