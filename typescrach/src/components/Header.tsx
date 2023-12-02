import * as React from 'react';
import './Header.css';

type Props = {
  children: React.ReactElement
} 

// childrenにはform（Reactのコンポーネント）が渡される
// FCはFunctional Component（関数コンポーネント）の略
const Header: React.FC<Props> = ({ children }) => {
  return (
    <div className='Header'>
      <span className='Header__Logo'>
        TypeScrach
      </span>
      {children}
    </div>
  )
};

export default Header;
