
const image = 'https://s3-alpha-sig.figma.com/img/53ad/bd73/8c418eaf1d94da299e01b7720b70e9d6?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y52CPr37xg8PBlC9gHFKg0cy0YxIoTE88aXL9Uz-93lxSNojAa7dYxdnkVY~y2UW7bWB8dzpP~En~dyIxFSJ3svVJY~EndisLDLQklwLjxXTZkkRmS2~iIxATXhHIuftsdxtffqt389L-G53fAWM0cRdzK6CYPm1xtcOe9~tbXrI2OKXbE8GF4pyAH8mumswHXPtypMb7ljhaOseNvKDkF-jcCzexZ9Ij0VixoO7cXwjZ9RCki5QdAzsPLPA691Yd0vema0YFBg19plr7GiSh791U83brbKZD0JNXxsyVfkshDSm1V0tO6GFGVyZPuN4vXjyMey3zH5wv4qzfc0EzQ__'

export const subject = [
    {
        id: 1,
        label: 'Mathematics',
        description: 'Mathematics is the study of numbers, quantity, space, structure, and change. Mathematics is used throughout the world as an essential tool in many fields, including natural science, engineering, medicine, and the social sciences.',
        image: image,
        route: '/subject/mathematics',
    },
    {
        id: 2,
        label: 'science',
        description: 'Mathematics is the study of numbers, quantity, space, structure, and change. Mathematics is used throughout the world as an essential tool in many fields, including natural science, engineering, medicine, and the social sciences.',
        image: image,
        route: '/subject/Science',
    },
    {
        id: 3,
        label: 'Chemistry',
        description: 'Mathematics is the study of numbers, quantity, space, structure, and change. Mathematics is used throughout the world as an essential tool in many fields, including natural science, engineering, medicine, and the social sciences.',
        image: image,
        route: '/subject/chemistry',
    },
    {
        id: 4,
        label: 'Geography',
        description: 'Mathematics is the study of numbers, quantity, space, structure, and change. Mathematics is used throughout the world as an essential tool in many fields, including natural science, engineering, medicine, and the social sciences.',
        image: image,
        route: '/subject/geography',
    },
]

const mcqData = [
    {
        id: 1,
        question: 'What is the chemical symbol for water?',
        options: ['H2O', 'O2', 'CO2', 'NaCl'],
        answer: 'H2O'
    },
    {
        id: 2,
        question: 'Which planet is known as the Red Planet?',
        options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
        answer: 'Mars'
    },
    {
        id: 3,
        question: 'What is the capital of France?',
        options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
        answer: 'Paris'
    },
    {
        id: 4,
        question: 'Who wrote "To Kill a Mockingbird"?',
        options: ['Harper Lee', 'Mark Twain', 'Ernest Hemingway', 'F. Scott Fitzgerald'],
        answer: 'Harper Lee'
    },
    {
        id: 5,
        question: 'What is the largest ocean on Earth?',
        options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
        answer: 'Pacific Ocean'
    }
];

export default mcqData;