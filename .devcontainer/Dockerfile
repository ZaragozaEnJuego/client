FROM ubuntu:latest
ARG HOME_DIR

RUN apt update -y
RUN apt upgrade -y
#RUN unminimize -y

RUN apt install zsh  git sudo man    -y

RUN apt install curl -y
RUN curl -fsSL https://deb.nodesource.com/setup_19.x | sudo -E bash - && sudo apt-get install -y nodejs 
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
RUN  apt update && apt install yarn -y


RUN useradd --create-home --shell /bin/zsh vscode
RUN adduser vscode sudo 

RUN echo '%sudo ALL=(ALL) NOPASSWD:ALL' >>/etc/sudoers
RUN echo "vscode:vscode" | chpasswd


COPY ./.zshrc /home/vscode
