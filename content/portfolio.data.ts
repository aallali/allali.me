export const infos = {
    firstName: '',
    lastName: '',
    fullName: '',
    email: 'job@allali.me',
    welcomeHeadline: 'Hi 👋, I\'m Abdellah',
    briefBio: 'A <b class="text-blue-600">software engineer</b> and open-source enthusiast, I enjoy keeping this blog regularly updated with insights gained along my life journey and topics that pique my interest.',
    longBio:
        `Hello, I'm Abdellah, a dedicated <b>software engineer</b> deeply passionate about the intricacies of <b>computer science</b>. My expertise spans modern <b>web technologies</b>, applied <b>machine learning</b>, and contributions to <b>open-source software</b>. Currently pursuing a <b>Master of Science in Computer Science</b>, primary focused around <b>database architecture</b> and <b>data</b>.
<br>
<br> 
Throughout my journey, I've independently acquired proficiency in a diverse range of technologies. I document my learning experiences on this blog, covering everything from tech-savvy insights into specific tools to invaluable development patterns. Committed to staying abreast of the latest industry trends, I regularly update the blog with articles that delve into my interests and the insights gained from my day-to-day experiences. Furthermore, you can explore some of my noteworthy <b>side projects</b> on my public GitHub repository.`,
    portfolio: {
        subtitle: '',
        projects: [
            {
                title: 'Gomoku engine',
                image: 'https://www.ebuyer.com/blog/wp-content/uploads/2017/10/game-of-go-with-robot-hand.jpg',
                link: {
                    demo: 'https://gomoku.allali.me/',
                    github: 'https://github.com/aallali/gomoku',
                },
                description: 'An engine designed play Gomoku and win everytime',
                isCoverImg: true
            },
            {
                title: 'Total Perspective Vortex',
                image: '/images/eeg.jpg',
                link: {
                    github: 'https://github.com/aallali/Total-perspective-Vortex',
                },
                description: 'create a brain computer interface based on electroencephalographic data (EEG data) with the help of machine learning algorithms. Using a subject’s EEG reading, we infer what he or she is thinking about or doing - (motion) A or B in a t0 to tn timeframe.',
                isCoverImg: true
            },
            {
                title: 'Leaffliction (Leaf-Diseases-Classification)',
                image: '/images/leaffliction-2.gif',
                link: {
                    github: 'https://github.com/aallali/Leaf-Diseases-Classification',
                },
                description: 'Here, I perform the analysis, augmentation and transformation of a leaf dataset. After image classification using a Convolutional Neural Network.',
                isCoverImg: true
            },
            {
                title: 'Linear Regression',
                image: 'https://raw.githubusercontent.com/aallali/ft-linear-regression/main/pic/LR-Live.gif',
                link: {
                    github: 'https://github.com/aallali/ft-linear-regression',
                },
                description: 'The aim of this project is to introduce you to the basic concept behind machine learning. For this project, you will have to create a program that predicts the price of a car by using a linear function train with a gradient descent algorithm.',

            },
            {
                title: '3D-Protein',
                image: '/images/protein.gif',
                link: {
                    github: 'https://github.com/aallali/3D-Protein',
                },
                description: 'in 3D Render the protein structure based on its PDB file - Mobile App (react natve)',
                isCoverImg: true
            },
            {
                title: 'Multilayer Perceptron',
                image: '/images/mlp.gif',
                link: {
                    github: 'https://github.com/aallali/multilayer-perceptron',
                },
                description: 'implementation of a multilayer perceptron from scratch.',
                isCoverImg: true
            },
            {
                title: 'DSLR',
                image: '/images/hogwarts.gif',
                link: {
                    github: 'https://github.com/aallali/DSLR--Data-Science-X-Logistic-Regression-',
                },
                description: 'Data Science x Logistic Regression, is a project that aims to analyze a data set and predict Hogwarts House.',
                isCoverImg: true
            },
            {
                title: 'N-Puzzle',
                image: '/images/n-puzzle.png',
                link: {
                    demo: 'https://n-puzzle-js.vercel.app/',
                    github: 'https://github.com/aallali/N-Puzzle-Js',
                },
                description: 'Engine written in JS, designed to solve a slide puzzle of size N quicker, using various search algorithms'
            },
            {
                title: 'DeepEye',
                image: 'https://raw.githubusercontent.com/aallali/DeepEye/main/Ressources/DeepEye-logo.png',
                link: {
                    github: 'https://github.com/aallali/deepeye',
                },
                description: 'a CLI that simply help you make search queries through files quickly using plain text or regex expressions, while having detailed output about it. The project meant to be simple and HELPFUL'
            },
            {
                title: 'Inception of Things',
                image: 'https://cloudvests.com/wp-content/uploads/2020/08/How-To-Create-a-Kubernetes-Cluster-Using-Kubeadm-on-Ubuntu-18.jpg',
                link: {
                    github: 'https://github.com/aallali/Inception-of-Things/tree/v2/1337',
                },
                description: 'This project aims to introduce you to kubernetes from a developer perspective. You will have to set up small clusters and discover the mechanics of continuous integration. At the end of this project you will be able to have a working cluster in docker and have a usable continuous integration for your applications Resources',
                isCoverImg: true
            },
            {
                title: 'Red-Tetris',
                image: '/images/tetris.gif',
                link: {
                    github: 'https://github.com/aallali/red-tetris',
                },
                description: 'The objective of this project is to develop a networked multiplayer tetris game from a stack of software exclusively Full Stack Javascript',
                isCoverImg: true

            }
        ]
    }

}

// oldTetris:https://img.joomcdn.net/42c6474dc9f0b60fb19e24871535d6bb96641832_original.jpeg
export const projects = infos.portfolio.projects
// image="https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41598-022-21498-5/MediaObjects/41598_2022_21498_Fig1_HTML.png?as=webp