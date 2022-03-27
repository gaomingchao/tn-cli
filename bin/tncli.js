#!/usr/bin/env node

// const path = require("path");
import path from "path"
// const program = require('commander');//cmd控制台交互
import { program } from 'commander'
// const ora = require('ora');//进度条
import ora from 'ora'
// const chalk = require('chalk');//给提示文案着色
import chalk from 'chalk'
// const download = require('download-git-repo');//拉取github项目
import download from 'download-git-repo'
// const fs = require('fs');
import fs from 'fs'
// const minimist = require('minimist')//轻量级命令行参数解析引擎
import minimist from 'minimist'
// const figlet = require("figlet");//酷炫的文字工具
import figlet from 'figlet'
// const printer = require("@darkobits/lolcatjs");//生成颜色
import printer from '@darkobits/lolcatjs'

program.version('1.0.0')
    .usage('<command> [项目名称]')
    .command('init', '创建新项目')
    .parse(process.argv)

