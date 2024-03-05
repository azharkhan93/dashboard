import { ReactNode } from 'react';
import { Button, ButtonProps } from '../styled/Buttons.styled';

interface CommonButtonProps extends ButtonProps {
    children: ReactNode;
    background?: string;
}



export const CommonButton: React.FC<CommonButtonProps> = ({ children, background }) => {
    return (

        <Button

            fontSize="16px"
            color="white"
            width="10vw"
            background={background || "#484848"}
            // background="#484848"
            borderRadius="10px"
            padding="8px 40px"

        >
            {children}
        </Button>
    )

}




// import { ReactNode } from 'react';
// import { Button, ButtonProps } from '../styled/Buttons.styled';

// interface CommonButtonProps extends ButtonProps {
//   children: ReactNode;
//   background?: string;
//   variant?: 'primary' | 'secondary';
// }

// export const CommonButton: React.FC<CommonButtonProps> = ({ children, background, variant }) => {

//   const getButtonStyles = (): ButtonProps => {
//     switch (variant) {
//       case 'primary':
//         return {
//           background: background || "#484848",
//           color: 'white',
//         };
//       case 'secondary':
//         return {
//           background: background || 'yellow',
//           color: 'black',
//         };
//       default:
//         return {
//           background: background || "#484848",
//           color: 'white',
//         };
//     }
//   };

//   const buttonStyles = getButtonStyles();

//   return (
//     <Button
//       fontSize="16px"
//       width="10vw"
//       borderRadius="10px"
//       padding="8px 40px"
//     >
//       {children}
//     </Button>
//   );
// };