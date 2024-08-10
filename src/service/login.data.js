export const loginData = {
    logo: 'assets/logo.png',
    header: 'WELCOME BACK',
    description: 'Log into your account',
    inputFields: [
        {
            label: 'Email or Username',
            type: 'text',
            placeholder: 'Enter your email or username',
            helperText: '',
        },
        {
            label: 'Password',
            type: 'password',
            placeholder: 'Enter your password',
            helperText: 'Forgot password?',
        }
    ],
    loginButton: {
        ctaText: 'Login now',
        href: '/home',
        nodeName: 'a'
    },
    registerText: 'Register →',
    registerTextPrefix: 'Not registered yet?'
}