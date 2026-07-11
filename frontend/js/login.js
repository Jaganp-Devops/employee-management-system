document.addEventListener('DOMContentLoaded', () => {
  // If already logged in, go straight to dashboard
  if (getToken()) {
    window.location.href = 'dashboard.html';
    return;
  }

  const form = document.getElementById('login-form');
  const errorBox = document.getElementById('login-error');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    errorBox.textContent = '';

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Signing in...';

    try {
      const data = await API.login(username, password);
      setToken(data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      window.location.href = 'dashboard.html';
    } catch (err) {
      errorBox.textContent = err.message || 'Login failed. Please try again.';
    } finally {
      btn.disabled = false;
      btn.textContent = 'Sign In';
    }
  });
});
