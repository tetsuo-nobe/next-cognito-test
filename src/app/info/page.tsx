// localStorage に保存したログインユーザー名を取り出す例
// （Amplify の <Authenticator>を使わないのでサインインなしでも表示できるようにしている）
'use client'

import {React, useState, useEffect} from 'react'
import { Amplify } from 'aws-amplify';
import Link from "next/link";

import styles from "./page.module.css";


export default function info() {
  const [username, setUsername] = useState("")

  // localStorage が is not defined になる場合は、useEffect()内でじっしする
  useEffect( () => {
    const checkUser = async() => {
      const username = localStorage.getItem("username")
      if (!username) {
         setUsername("no-username")
      }
      // useEffect()内から外側の変数に値を入れる場合は、useState()で定義した変数に入れる
      setUsername(username)
    } 
    checkUser()
  }, []
)


  return (
        <main>
          <h1>Info ページ</h1>
          <h2>Hello {username}</h2>
          <ul>
            <li>
              <Link href="/">トップに戻る</Link>
            </li>
          </ul>
        </main>
  );
}