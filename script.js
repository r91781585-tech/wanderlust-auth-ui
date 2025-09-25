// Form switching functionality
function showSignup() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const welcomeHeader = document.querySelector('.welcome-header');
    
    loginForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
    
    welcomeHeader.innerHTML = `
        <h2>Join Us</h2>
        <p>Create your account</p>
    `;
}

function showLogin() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const welcomeHeader = document.querySelector('.welcome-header');
    
    signupForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
    
    welcomeHeader.innerHTML = `
        <h2>Welcome</h2>
        <p>Login with Email</p>
    `;
}

function showForgotPassword() {
    const welcomeHeader = document.querySelector('.welcome-header');
    const authForms = document.querySelectorAll('.auth-form');
    
    // Hide all forms
    authForms.forEach(form => form.classList.add('hidden'));
    
    // Create forgot password form
    const forgotPasswordHTML = `
        <div class="input-group">
            <div class="input-wrapper">
                <i class="fas fa-envelope input-icon"></i>
                <input type="email" placeholder="Enter your email address" required>
            </div>
        </div>
        <button type="submit" class="login-btn">SEND RESET LINK</button>
        <div class="signup-link">
            <span>Remember your password? </span>
            <a href="#" onclick="showLogin()">Back to Login</a>
        </div>
    `;
    
    welcomeHeader.innerHTML = `
        <h2>Reset Password</h2>
        <p>Enter your email to reset password</p>
    `;
    
    // Create temporary forgot password form
    const tempForm = document.createElement('form');
    tempForm.className = 'auth-form';
    tempForm.innerHTML = forgotPasswordHTML;
    tempForm.addEventListener('submit', handleForgotPassword);
    
    // Insert after welcome header
    welcomeHeader.parentNode.insertBefore(tempForm, welcomeHeader.nextSibling);
}

// Form submission handlers
function handleLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email') || e.target.querySelector('input[type="email"]').value;
    const password = formData.get('password') || e.target.querySelector('input[type="password"]').value;
    
    // Simulate login process
    showNotification('Login successful! Redirecting...', 'success');
    
    // Here you would typically send data to your backend
    console.log('Login attempt:', { email, password });
}

function handleSignup(e) {
    e.preventDefault();
    const inputs = e.target.querySelectorAll('input');
    const fullName = inputs[0].value;
    const email = inputs[1].value;
    const password = inputs[2].value;
    const confirmPassword = inputs[3].value;
    
    // Basic validation
    if (password !== confirmPassword) {
        showNotification('Passwords do not match!', 'error');
        return;
    }
    
    if (password.length < 6) {
        showNotification('Password must be at least 6 characters long!', 'error');
        return;
    }
    
    // Simulate signup process
    showNotification('Account created successfully! Please login.', 'success');
    setTimeout(() => showLogin(), 2000);
    
    // Here you would typically send data to your backend
    console.log('Signup attempt:', { fullName, email, password });
}

function handleForgotPassword(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    // Simulate forgot password process
    showNotification('Password reset link sent to your email!', 'success');
    setTimeout(() => showLogin(), 2000);
    
    // Here you would typically send data to your backend
    console.log('Forgot password for:', email);
}

// Social login handlers
function handleSocialLogin(provider) {
    showNotification(`Redirecting to ${provider} login...`, 'info');
    
    // Here you would typically redirect to OAuth provider
    console.log(`${provider} login initiated`);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
        <button onclick="this.parentElement.remove()" class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4caf50' : type === 'error' ? '#f44336' : '#2196f3'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
        max-width: 300px;
        font-size: 0.9rem;
    `;
    
    const closeButton = notification.querySelector('.notification-close');
    closeButton.style.cssText = `
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 0;
        margin-left: auto;
        opacity: 0.8;
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Add slide-in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Login form
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', handleLogin);
    
    // Signup form
    const signupForm = document.getElementById('signupForm');
    signupForm.addEventListener('submit', handleSignup);
    
    // Social login buttons
    document.querySelectorAll('.social-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const provider = this.classList.contains('google-btn') ? 'Google' :
                           this.classList.contains('facebook-btn') ? 'Facebook' : 'Apple';
            handleSocialLogin(provider);
        });
    });
    
    // Input focus effects
    document.querySelectorAll('.input-wrapper input').forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });
    
    // Add floating animation to airplane
    const airplane = document.querySelector('.airplane-icon');
    if (airplane) {
        setInterval(() => {
            airplane.style.transform = `translateY(${Math.sin(Date.now() / 1000) * 3}px)`;
        }, 50);
    }
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const activeElement = document.activeElement;
        if (activeElement.tagName === 'INPUT') {
            const form = activeElement.closest('form');
            if (form && !form.classList.contains('hidden')) {
                const submitBtn = form.querySelector('.login-btn');
                if (submitBtn) {
                    submitBtn.click();
                }
            }
        }
    }
});

// Smooth scrolling for mobile
if (window.innerWidth <= 768) {
    document.addEventListener('focusin', function(e) {
        if (e.target.tagName === 'INPUT') {
            setTimeout(() => {
                e.target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 300);
        }
    });
}