export const signUpData = {
    alwaysShow: false,
    header: 'SIGN UP',
    description: 'Create an account to continue',
    inputFields: [
        {
            label: 'Email',
            type: 'email',
            placeholder: 'Enter your email',
            helperText: '',
        },
        {
            label: 'Username',
            type: 'text',
            placeholder: 'Choose a preferred username',
            helperText: '',
        },
        {
            label: 'Password',
            type: 'password',
            placeholder: 'Enter your password',
            helperText: 'Forgot password?',
        }
    ],
    confirmCTA: {
        ctaText: 'Continue',
        href: '/home',
        nodeName: 'a'
    },
    footerText: ' Login →',
    footerTextPrefix: 'Already have an account?'
}