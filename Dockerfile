# ベースイメージとしてNode.jsを使用
FROM node:22-slim

# 作業ディレクトリを設定
WORKDIR /app

# 入力待ちをオフ
ENV DEBIAN_FRONTEND=noninteractive

# 必要最小限のパッケージをインストール
RUN apt update -y && \
    apt upgrade -y && \
    apt install -y --no-install-recommends \
    git \
    curl \
    zip \
    unzip \
    wget \
    ca-certificates

# gitを使えるようにするためにルート証明書を追加
RUN mkdir /usr/local/share/ca-certificates/cacert.org
RUN wget -P /usr/local/share/ca-certificates/cacert.org http://www.cacert.org/certs/root.crt http://www.cacert.org/certs/class3.crt
RUN update-ca-certificates
RUN git config --global http.sslCAinfo /etc/ssl/certs/ca-certificates.crt

# パッケージファイルをコピーし、依存関係をインストール
COPY package.json package-lock.json ./
RUN npm install

# 開発用サーバの起動
CMD ["npm", "run", "dev"]