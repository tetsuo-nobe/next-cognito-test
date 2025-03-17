// Amplify Cognito UI 使う際は use client が必要
'use client'

import React from 'react';
import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';

// 下記は layout.tsx に含めている
//import '@aws-amplify/ui-react/styles.css';

import styles from "./page.module.css";


// Amplify Cognito のプール ID やクライアント ID を設定
Amplify.configure({
   Auth: {
     Cognito: {
       userPoolClientId: '7fuir9ha192fghv1nucqspurs9',
       userPoolId: 'ap-northeast-1_f5vZ9oTLK',
  }
  }
})


export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}