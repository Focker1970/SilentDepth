# SilentDepth Local Server

`file://` で開くと、一部の音声アセットはブラウザ制限で読めません。  
録音サンプルを使う場合はローカルサーバー経由で開きます。

## 起動方法

### Finder から

`serve_local.command` を開く。

### ターミナルから

```sh
cd /Users/masatoueda/Documents/なんでも/SilentDepth
./serve_local.sh
```

ポートを変える場合:

```sh
./serve_local.sh 4174
```

## 開く URL

`http://127.0.0.1:4173/index.html`

## 停止方法

サーバーを開いたターミナルで `Ctrl+C`
