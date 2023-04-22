#!/bin/bash

# List of current vertsion can be found in https://github.com/microsoft/vcpkg/releases  ---
# UPDATE README.md
VERSION=2023.04.15

if [ ! -d "./vcpkg" ] 
then
    git clone https://github.com/microsoft/vcpkg.git
    cd ./vcpkg
    git checkout $VERSION
    ./bootstrap-vcpkg.sh
    cd ..
fi
