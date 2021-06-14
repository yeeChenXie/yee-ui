import YButton from './button'
 
const components = [
    YButton
]
const install = function (app) {
    if (install.installed) return
    components.map(component => app.component(component.name, component))
}
 
export default {
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    install,
    YButton
}

