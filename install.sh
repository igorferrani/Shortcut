#!/bin/bash

FILENAME="~/.bashrc"

# Checa se já existe o alias no arquivo bashrc
if grep -c "### ---------- ###" ~/.bashrc
then
    echo "Instalação já existente !"
else
    echo "### ---------- ###" >> ~/.bashrc
    echo "# Alias para o projeto Shortcut.js" >> ~/.bashrc
    echo "alias short='~/Shortcut/index.js'" >> ~/.bashrc
    echo "### ---------- ###" >> ~/.bashrc
fi