// Amplify Cognito UI 使う際は use client が必要
'use client'

import React from 'react';
import { Amplify } from 'aws-amplify';
import Link from "next/link";

import { Authenticator } from '@aws-amplify/ui-react';

// 下記は layout.tsx に含めている
//import '@aws-amplify/ui-react/styles.css';

import styles from "./page.module.css";


// Amplify Cognito のプール ID やクライアント ID を設定
// Amplify.configure({
//    Auth: {
//      Cognito: {
//        userPoolClientId: '7fuir9ha192fghv1nucqspurs9',
//        userPoolId: 'ap-northeast-1_f5vZ9oTLK',
//   }
//   }
// })


export default function Menu() {

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Menu ページ</h1>
          <h2>Login user is {user.username}</h2>
          <button onClick={signOut}>Sign out</button>
          <ul>
            <li>
              <Link href="/">Top ページ</Link>
            </li>
            <li>
              <Link href="/info">info ページ</Link>
            </li>
          </ul>
        </main>
      )}
    </Authenticator>
  );
}