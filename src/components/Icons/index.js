export const NotificationBoxIcon = ({ width = '3.2rem', height = '3.2rem', className }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 32 32"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.0362 21.3333H18.5243L15.9983 24.4208L13.4721 21.3333H7.96047L7.99557 8H24.0009L24.0362 21.3333ZM24.3705 23.3333H19.4721L17.2883 26.0026C16.6215 26.8176 15.3753 26.8176 14.7084 26.0026L12.5243 23.3333H7.62626C6.70407 23.3333 5.95717 22.5845 5.9596 21.6623L5.99646 7.66228C5.99887 6.74352 6.74435 6 7.66312 6H24.3333C25.2521 6 25.9975 6.7435 26 7.66224L26.0371 21.6622C26.0396 22.5844 25.2927 23.3333 24.3705 23.3333ZM12.6647 14C12.2965 14 11.998 14.2985 11.998 14.6667V15.3333C11.998 15.7015 12.2965 16 12.6647 16H19.3313C19.6995 16 19.998 15.7015 19.998 15.3333V14.6667C19.998 14.2985 19.6995 14 19.3313 14H12.6647Z"
            ></path>
        </svg>
    );
};

export const ChatIcon = ({ width = '2.6rem', height = '2.6rem', className }) => {
    return (
        <svg
            fill="currentColor"
            className={className}
            width={width}
            height={height}
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#Icon-Paperplane_svg__a)">
                <path d="M2.18 9.67A2 2 0 0 1 4 8.5h40a2 2 0 0 1 1.74 3l-20 35a2 2 0 0 1-3.65-.4l-5.87-18.6L2.49 11.82a2 2 0 0 1-.31-2.15Zm18.2 17.72 4.15 13.15L40.55 12.5H8.41l9.98 11.41 11.71-7.2a1 1 0 0 1 1.38.32l1.04 1.7a1 1 0 0 1-.32 1.38L20.38 27.4Z"></path>
            </g>
            <defs>
                <clipPath id="Icon-Paperplane_svg__a">
                    <path d="M0 0h48v48H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
};
