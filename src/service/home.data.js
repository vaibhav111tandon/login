export const homeData = {
    salutation: {
        salutation: 'Hello',
        userName: 'Jane',
        description: 'How are you doing today? Would you like to share something with the community 🤗',    
    },
    createPostCard: {
        heading: 'Create Post',
        textboxPlaceholder: 'How are you feeling today?',
        emoji: '💬',
        createPostButtonText: {
            ctaText: 'Post',
            nodeName: 'button',
            href: 'signUpData',
            type: 'popup'
        }
    },
    cardsList: [
        {
            thumbImage: 'assets/user1.png',
            altText: '',
            name: 'Theresa Webb',
            lastLogin: '5mins ago',
            post: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            emoji: '👋',
            commentsCount: '24',
            commentsSuffixText: 'comments',
            isEdited: false
        },
        {
            thumbImage: 'assets/user2.png',
            altText: '',
            name: 'Marvin McKinney',
            lastLogin: '8mins ago',
            post: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            emoji: '😞',
            commentsCount: '16',
            commentsSuffixText: 'comments',
            isEdited: true
        }
    ]
}