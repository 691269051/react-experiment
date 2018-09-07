#!/bin/bash

#删除所有依赖
rm -rf ./node_modules

#更新所有依赖
yarn upgrade-interactive --latest