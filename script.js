// event-listener for login
document.querySelector('.login').addEventListener('Sign In', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        });
        
        if (response.ok) {
            // Handle successful login
            console.log('Login successful');
        } else {
            // Handle login error
            console.error('Login failed');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});