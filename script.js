document.addEventListener('DOMContentLoaded', function () 

    // --- Bubbles Effect ---
    const bubbleContainer = document.createElement('div');
    bubbleContainer.classList.add('bubbles');
    document.body.appendChild(bubbleContainer);

    // Create bubbles at intervals
    const createBubble = () => {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.style.position = 'absolute';
        bubble.style.width = `${Math.random() * 30 + 20}px`; // Random size between 20px and 50px
        bubble.style.height = bubble.style.width;
        bubble.style.backgroundColor = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.3})`; // Semi-transparent white
        bubble.style.borderRadius = '50%';
        bubble.style.bottom = `-50px`;
        bubble.style.left = `${Math.random() * window.innerWidth}px`;
        bubble.style.animation = `bubbleAnim ${Math.random() * 6 + 4}s ease-in-out infinite`;
        bubbleContainer.appendChild(bubble);
    };

    // Create multiple bubbles every 2 seconds
    setInterval(createBubble, 2000);

    // --- CSS Styles injected dynamically ---
    const style = document.createElement('style');
    style.innerHTML = `
        .stars {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
        }
        
        .star {
            position: absolute;
            background-color: white;
            border-radius: 50%;
            animation: starAnimation 50s linear infinite;
        }
        
        @keyframes starAnimation {
            0% {
                transform: translate(0, 0);
                opacity: 1;
            }
            100% {
                transform: translate(1000px, 1000px);
                opacity: 0;
            }
        }
        
        .bubbles {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 9999;
        }
        
        .bubble {
            position: absolute;
            bottom: -50px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.7);
            opacity: 0;
            animation: bubbleAnim 2s ease-in-out infinite;
        }
        
        @keyframes bubbleAnim {
            0% {
                transform: translateY(0);
                opacity: 1;
            }
            100% {
                transform: translateY(-600px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});

