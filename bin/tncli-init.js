#!/usr/bin/env node
import { program } from 'commander'
import path from 'path'
import fs from 'fs'
import glob from 'glob'
import download from '../lib/download.js'

let rootName = path.basename(process.cwd())
program.usage('<project-name>').parse(process.argv)
// 根据输入，获取项目名称
let projectName = program.args[0]

function init() {

    console.log('projectName', projectName)

    if (!projectName) {  // project-name 必填
        // 相当于执行命令的--help选项，显示help信息，这是commander内置的一个命令选项
        program.help()
        return
    }

    const list = glob.sync('*')

    if (list.length) {  // 如果当前目录不为空
        if (list.filter(name => {
            const fileName = path.resolve(process.cwd(), path.join('.', name))
            const isDir = fs.statSync(fileName).isDirectory()
            return name.indexOf(projectName) !== -1 && isDir
        }).length !== 0) {
            console.log(`项目${projectName}已经存在`)
            return
        }
        rootName = projectName
    } else if (rootName === projectName) {
        rootName = '.'
    } else {
        rootName = projectName
    }

    go()

}

init()

function go() {
    // 预留，处理子命令  
    download(rootName).then(res => {
        console.log('安装成功')
    }).catch(e => {
        console.log('安装失败')
        console.log(e)
    })
}