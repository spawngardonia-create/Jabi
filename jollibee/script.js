const modal = document.getElementById('authModal');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const closeModal = document.getElementById('closeModal');
const tabs = document.querySelectorAll('.tab');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

function openModal(tab) {
  modal.classList.add('active');
  switchTab(tab);
}

function closeModalFn() {
  modal.classList.remove('active');
}

function switchTab(tabName) {
  tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === tabName));
  loginForm.classList.toggle('active', tabName === 'login');
  signupForm.classList.toggle('active', tabName === 'signup');
}

loginBtn.addEventListener('click', () => openModal('login'));
signupBtn.addEventListener('click', () => openModal('signup'));
document.getElementById('joinRewardsBtn').addEventListener('click', () => openModal('signup'));
closeModal.addEventListener('click', closeModalFn);
modal.addEventListener('click', (e) => { if (e.target === modal) closeModalFn(); });

tabs.forEach(t => t.addEventListener('click', () => switchTab(t.dataset.tab)));

document.getElementById('switchToSignup').addEventListener('click', (e) => { e.preventDefault(); switchTab('signup'); });
document.getElementById('switchToLogin').addEventListener('click', (e) => { e.preventDefault(); switchTab('login'); });

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Welcome back! You are now logged in.');
  closeModalFn();
});

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const pw = signupForm.querySelectorAll('input[type="password"]');
  if (pw[0].value !== pw[1].value) {
    alert('Passwords do not match.');
    return;
  }
  alert('Account created successfully! Welcome to Jollibee.');
  closeModalFn();
});
