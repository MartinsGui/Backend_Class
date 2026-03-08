#!/bin/bash

sudo apt update -y

curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs git

cd /home/ubuntu

git clone https://github.com/MartinsGui/Backend_Class.git

cd Backend_Class

npm install

npm run build

npm start