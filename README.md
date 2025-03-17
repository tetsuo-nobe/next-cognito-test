# Next.js + AWS Amplify UI を使用した Amazon Cognito の認証

- 参考ドキュメント
  - https://ui.docs.amplify.aws/react/connected-components/authenticator#setup-with-amplify-gen-1-backend
  - ただし、このドキュメントに記載されている **withAuthenticator** の例は、getStaticProps() を使う前提になっている。Next.js 13 から getStaticProps() は使用できなくなったのでサンプルとしては動作しない。
  - よって、**withAuthenticator** ではなく、**Authenticator** の例を参考にする。


- 参考ブログ
    - https://qiita.com/musutafakemaru/items/a00f4fe5448aa1969210


```
npm install @aws-amplify/ui-react aws-amplify
```

---
# next-cognito-test
